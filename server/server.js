const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "form-eval",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

app.post("/", (req, res) => {
  const { username, password } = req.body;

  db.query(
    "SELECT * FROM utilisateur WHERE username = ? AND password = ?",
    [username, password],
    (error, results) => {
      if (error) {
        console.error("Database query error:", error);
        return res.status(500).json({ error: "Internal server error" });
      }

      if (results.length === 0) {
        return res.status(401).json({ error: "Invalid username or password" });
      }
      const user = results[0];
      return res.status(200).json({ message: "Login successful", user: user });
    }
  );
});

app.get("/AdminFormation/formations_non_cloture", (req, res) => {
  // Requête SQL pour sélectionner les formations qui ne sont pas encore terminées
  const query = "SELECT * FROM formation WHERE date_fin_questionnaire > NOW()";

  // Exécuter la requête SQL
  db.query(query, (error, results) => {
    if (error) {
      console.error("Database query error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }

    // Retourner les formations récupérées depuis la base de données
    res.status(200).json(results);
  });
});

app.get("/AdminFormation/formations_cloture", (req, res) => {
  // Requête SQL pour sélectionner les formations qui ne sont pas encore terminées
  const query = "SELECT * FROM formation WHERE date_fin_questionnaire < NOW()";

  // Exécuter la requête SQL
  db.query(query, (error, results) => {
    if (error) {
      console.error("Database query error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }

    // Retourner les formations récupérées depuis la base de données
    res.status(200).json(results);
  });
});

app.put("/api/user", (req, res) => {
  const { username, fieldsToUpdate } = req.body;

  // Extract fields and values to update from the request body
  const updateFields = Object.keys(fieldsToUpdate);
  const updateValues = Object.values(fieldsToUpdate);

  // Construct the SET clause for the SQL query dynamically
  const setClause = updateFields.map((field) => `${field} = ?`).join(", ");

  const query = `UPDATE utilisateur SET ${setClause} WHERE username = ?`;

  updateFields.push("username");
  updateValues.push(username);

  // Execute the SQL query with the dynamically constructed SET clause and values
  db.query(query, updateValues, (error, results) => {
    if (error) {
      console.error("Database query error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.status(200).json({ message: "User information updated successfully" });
  });
});

app.get("/api/structure/:id?", (req, res) => {
  const structureID = req.params.id;

  if (structureID) {
    // If ID is defined, perform its usual work
    db.query(
      "SELECT * FROM structure WHERE structureID = ?",
      [structureID],
      (error, results) => {
        if (error) {
          console.error("Database query error:", error);
          return res.status(500).json({ error: "Internal server error" });
        }
        if (results.length === 0) {
          return res.status(404).json({ error: "Structure not found" });
        }

        res.status(200).json(results[0]);
      }
    );
  } else {
    // If ID is undefined, fetch all structures
    db.query("SELECT * FROM structure", (error, results) => {
      if (error) {
        console.error("Database query error:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.status(200).json(results);
    });
  }
});

app.get("/allUsers", (req, res) => {
  db.query("SELECT * FROM utilisateur", (error, results) => {
    if (error) {
      console.error("Database query error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.status(200).json(results);
  });
});

// Create a new formation
app.post("/api/formation", (req, res) => {
  const {
    intitule,
    org_formateur,
    nom_formateur,
    lieu,
    date_debut,
    date_fin,
    date_debut_questionnaire,
    date_fin_questionnaire,
  } = req.body;

  const query = `
  INSERT INTO formation (intitule, org_formateur, nom_formateur, lieu, date_debut, date_fin, date_debut_questionnaire, date_fin_questionnaire)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      intitule,
      org_formateur,
      nom_formateur,
      lieu,
      date_debut,
      date_fin,
      date_debut_questionnaire,
      date_fin_questionnaire,
    ],
    (error, results) => {
      if (error) {
        console.error("Database query error:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
      const formationID = results.insertId;
      res.status(201).json({ formationID });
    }
  );
});

app.post("/api/participation", (req, res) => {
  const { formationID, utilisateurID } = req.body;

  const query = `
  INSERT INTO participation (formationID, utilisateurID)
  VALUES (?, ?)`;

  const values = [formationID, utilisateurID];

  db.query(query, values, (error, results) => {
    if (error) {
      console.error("Erreur lors de l'ajout du participant:", error);
      return res.status(500).json({ error: "Erreur serveur interne" });
    }
    res.status(201).json({ message: "Participant ajouté avec succès" });
  });
});

app.post("/api/newUser", (req, res) => {
  const { formData, usersRoles } = req.body;
  const { password, nom, prenom, fonction, structureID, email, role_default } =
    formData;

  // Step 1: Convert role names to role IDs
  const roleNamesQuery =
    "SELECT roleID, nom_role FROM role WHERE nom_role IN (?)";
  db.query(roleNamesQuery, [usersRoles], (roleNamesErr, roleNamesResults) => {
    if (roleNamesErr) {
      console.error("Database query error:", roleNamesErr);
      return res.status(500).json({ error: "Internal server error" });
    }

    // Create a mapping of role names to role IDs
    const roleNameToIdMap = {};
    roleNamesResults.forEach((row) => {
      roleNameToIdMap[row.nom_role] = row.roleID;
    });

    // Convert role names to role IDs
    const roleIds = usersRoles.map((roleName) => roleNameToIdMap[roleName]);

    // Get the last used username for custom generation
    const query =
      "SELECT MAX(username) AS last_username FROM utilisateur WHERE username LIKE 'local%'";
    db.query(query, (err, result) => {
      if (err) {
        console.error("Database query error:", err);
        return res.status(500).json({ error: "Internal server error" });
      }

      const lastUsername = result[0]?.last_username || "local00000";
      const lastNumber = parseInt(lastUsername.slice(5));
      const newNumber = lastNumber + 1;
      const newUsername = `local` + String(newNumber).padStart(5, "0");

      const insertQuery =
        "INSERT INTO utilisateur (username, password, nom, prenom, fonction, structureID, email, role_default) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
      db.query(
        insertQuery,
        [
          newUsername,
          password,
          nom,
          prenom,
          fonction,
          structureID,
          email,
          role_default,
        ],
        (insertErr, insertResult) => {
          if (insertErr) {
            console.error("Database insert error:", insertErr);
            return res.status(500).json({ error: "Internal server error" });
          }

          const userID = insertResult.insertId;

          // Insert user roles into userrole table
          const userRolesQuery =
            "INSERT INTO userrole (utilisateurID, roleID) VALUES ?";
          const userRolesValues = roleIds.map((roleID) => [userID, roleID]);

          db.query(userRolesQuery, [userRolesValues], (rolesErr) => {
            if (rolesErr) {
              console.error("Database insert error:", rolesErr);
              return res.status(500).json({ error: "Internal server error" });
            }

            res.status(201).json({
              message: "User created successfully",
              userID: userID,
              username: newUsername,
            });
          });
        }
      );
    });
  });
});

app.get("/allUsers-structure", (req, res) => {
  const query = `
    SELECT utilisateur.*, structure.nom_structure
    FROM utilisateur
    LEFT JOIN structure ON utilisateur.structureID = structure.structureID
  `;

  db.query(query, (error, results) => {
    if (error) {
      console.error("Database query error:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.status(200).json(results);
  });
});

app.listen(8000, () => {
  console.log("listening");
});
