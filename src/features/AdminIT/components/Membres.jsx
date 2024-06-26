import React from "react";
import style from "./Membres.module.css";
import Titre from "./Titre";
import RolesMembresList from "./RolesMembresList";

import axios from "axios";
import { useEffect, useState } from "react";

const roles = ["Participant", "Admin Formation", "Admin IT", "Admin Visiteur"];

function VerticalDotsIcon({ userID, userRoles, fetchUsers, user }) {
  const [isDroped, setIsDroped] = useState(false);
  const [userRolesState, setUserRolesState] = useState(userRoles);
  // let fullUsersData = JSON.parse(localStorage.getItem("fullUsersData"));

  useEffect(() => {
    setUserRolesState(userRoles);
  }, [userRoles]);

  // useEffect(() => {
  //   console.log(userRolesState, userID);
  // }, [userRoles, userID]);

  useEffect(() => {
    const fullUsersData = JSON.parse(localStorage.getItem("fullUsersData"));
    if (fullUsersData.utilisateurID === userID) {
      fullUsersData.roles = userRolesState;
      localStorage.setItem("fullUsersData", JSON.stringify(fullUsersData));

      // if (!fullUsersData.roles.includes(fullUsersData.role_default)) {
      //   fullUsersData.role_default = fullUsersData.roles[0];
      //   localStorage.setItem("fullUsersData", JSON.stringify(fullUsersData));
      // }
    }
  }, [userRolesState, userID]);

  useEffect(() => {
    // console.log(userRolesState[0], user, user.role_default);
    if (!userRolesState.includes(user.role_default)) {
      //save userRolesState[0] as role_default in the dataBase
      const updateRoleDefault = async (userID, role_default) => {
        try {
          await axios.put(
            `http://localhost:8000/api/utilisateur/${userID}/role_default`,
            { role_default },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          // alert("Role default updated successfully!");
        } catch (error) {
          console.error("Error updating role default", error);
          alert("Failed to update role default.");
        }
      };
      updateRoleDefault(userID, userRolesState[0]);
    }
  }, [userRolesState]);

  const handleRoleChange = async (role) => {
    const hasRole = userRolesState.includes(role);

    try {
      if (hasRole) {
        await axios.delete("http://localhost:8000/api/user/removeRole", {
          data: { userID, role },
        });
        setUserRolesState((prevRoles) => prevRoles.filter((r) => r !== role));
      } else {
        await axios.post("http://localhost:8000/api/user/addRole", {
          userID,
          role,
        });
        setUserRolesState((prevRoles) => [...prevRoles, role]);
      }
      fetchUsers(); // Fetch users to refresh the data
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        onClick={() => setIsDroped((d) => !d)}
        style={{ fontSize: "20px", fontWeight: "900", cursor: "pointer" }}
      >
        &#8942;
      </div>

      <form
        className={style.form}
        style={isDroped ? { display: "flex" } : { display: "none" }}
        onMouseLeave={() => setIsDroped(false)}
      >
        {roles.map((role) => (
          <React.Fragment key={role}>
            <input
              className={style.input}
              type="checkbox"
              id={`${role.replace(/\s/g, "")}-${userID}`}
              name="roles"
              value={role}
              checked={userRolesState.includes(role)}
              onChange={() => handleRoleChange(role)}
            />
            <label
              className={style.label}
              htmlFor={`${role.replace(/\s/g, "")}-${userID}`}
            >
              {role.replace(/ /g, "\u00A0")}
            </label>
          </React.Fragment>
        ))}
      </form>
    </div>
  );
}

function Membres({ roleFilter, setRoleFilter }) {
  const [allUsers, setAllUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/users/details"
      );
      const formatedAllUsers = response.data.map((user) => ({
        nom: user.nom,
        prenom: user.prenom,
        action: (
          <VerticalDotsIcon
            userID={user.utilisateurID}
            userRoles={user.roles}
            fetchUsers={fetchUsers}
            user={user}
          />
        ),
        roles: user.roles,
      }));
      setAllUsers(formatedAllUsers);
    } catch (error) {
      console.error("Error fetching Users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Titre
        titre="Membres"
        padding={{ paddingLeft: "0", paddingRight: "0", paddingTop: "0" }}
        size="small"
      />
      <div className={style.container}>
        <RolesMembresList
          columns={["Nom", "Prénom", "Roles"]}
          propData={allUsers.filter((membre) => {
            return membre.roles.includes(roleFilter) || roleFilter === "tous";
          })}
          lineHeight="small"
          border={true}
        />
      </div>
    </div>
  );
}

export default Membres;
