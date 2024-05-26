import React from "react";
import style from "./AddFormationForm.module.css";
import TextInput from "../components/TextInput.jsx";

import axios from "axios";

function AddFormationForm({ formation, setFormation }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormation((prevFormation) => ({
      ...prevFormation,
      [name]: value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post("http://localhost:8000/api/formation", formation);
  //     alert("Formation ajoutée avec succès");
  //   } catch (error) {
  //     console.error("Erreur lors de l'ajout de la formation:", error);
  //     alert("Erreur lors de l'ajout de la formation");
  //   }
  // };

  return (
    <div className={style.container}>
      <div>
        <TextInput
          label="Intitulé de la formation :"
          name="intitule"
          value={formation.intitule}
          onChange={handleChange}
        />
        <TextInput
          label="Organisme Formateur :"
          name="org_formateur"
          value={formation.org_formateur}
          onChange={handleChange}
        />
        <TextInput
          label="Période de formation : "
          isPeriode={true}
          isPrdLabel="Du :"
          name="date_debut"
          value={formation.date_debut}
          onChange={handleChange}
        />
        <TextInput
          label="Période du questionnaire :"
          isPeriode={true}
          isPrdLabel="Du :"
          name="date_debut_questionnaire"
          value={formation.date_debut_questionnaire}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextInput
          label="Nom du formateur :"
          name="nom_formateur"
          value={formation.nom_formateur}
          onChange={handleChange}
        />
        <TextInput
          label="Lieu :"
          name="lieu"
          value={formation.lieu}
          onChange={handleChange}
        />
        <TextInput
          label="&#8203;"
          isPeriode={true}
          isPrdLabel="au :"
          name="date_fin"
          value={formation.date_fin}
          onChange={handleChange}
        />
        <TextInput
          label="&#8203;"
          isPeriode={true}
          isPrdLabel="au :"
          name="date_fin_questionnaire"
          value={formation.date_fin_questionnaire}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default AddFormationForm;
