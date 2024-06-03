import React, { useState } from "react";
import style from "./AppSettings.module.css";
import Button from "./Button";

import axios from "axios";

const roles = ["Participant", "Admin Formation", "Admin IT", "Admin Visiteur"];

function AppSettings({ username }) {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [formData, setFormData] = useState({
    role_default: userData.role_default || "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:8000/api/user", {
        username: username,
        fieldsToUpdate: formData,
      });
      localStorage.setItem("userData", JSON.stringify(formData));
      alert("Information updated successfully");
    } catch (error) {
      console.error("Error updating user information:", error);
      alert("Failed to update information");
    }
  };

  return (
    <div className={style.container} id="application">
      <h2 className={style.title}>Application</h2>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="email">Role par défaut</label>
        <select
          name="role_default"
          id="role_default"
          value={formData.role_default}
          onChange={handleChange}
          className={style.input}
        >
          {roles.map((role, index) => (
            <option value={role} key={index}>
              {role}
            </option>
          ))}
        </select>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button content="Enregistrer" />
        </div>
      </form>
    </div>
  );
}

export default AppSettings;
