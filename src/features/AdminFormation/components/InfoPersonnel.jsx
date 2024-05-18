import React, { useState } from "react";
import style from "./InfoPersonnel.module.css";
import Button from "./Button";
import axios from "axios";

export default function InfoPersonnel({ username }) {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [formData, setFormData] = useState({
    nom: userData.nom || "",
    prenom: userData.prenom || "",
    fonction: userData.fonction || "",
    structureID: userData.structureID || "",
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
    <div className={style.container}>
      <h2 className={style.title}>Informations personnelles</h2>
      <form
        className={style.card}
        id="informations_personnel"
        onSubmit={handleSubmit}
      >
        <div className={style.row}>
          <div className={style.col}>
            <label htmlFor="nom">Nom</label>
            <input
              type="text"
              id="nom"
              className={style.input}
              value={formData.nom}
              onChange={handleChange}
            />
          </div>
          <div className={style.col}>
            <label htmlFor="prenom">Prénom</label>
            <input
              type="text"
              id="prenom"
              value={formData.prenom}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={style.row}>
          <div className={style.col}>
            <label htmlFor="fonction">Fonction</label>
            <input
              type="text"
              id="fonction"
              value={formData.fonction}
              onChange={handleChange}
            />
          </div>
          <div className={style.col}>
            <label htmlFor="structure">Structure</label>
            <input
              type="text"
              id="structureID"
              value={formData.structureID}
              onChange={handleChange}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button content="Enregistrer" type="submit" />
        </div>
      </form>
    </div>
  );
}
