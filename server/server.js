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
  database: "for-eval",
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
  const query = "SELECT * FROM formations WHERE date_fin_questionnaire > NOW()";

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
  const query = "SELECT * FROM formations WHERE date_fin_questionnaire < NOW()";

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

app.listen(8000, () => {
  console.log("listening");
});
