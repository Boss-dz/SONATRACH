import style from "./AjouterFormation.module.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Titre from "../components/Titre";
import QuestDetails from "../components/QuestDetails";
import Footer from "../components/Footer";
import AddFormationForm from "../components/AddFormationForm";
import CloseBtn from "../components/CloseBtn";
import Button from "../components/Button";
import AddParticipant from "../components/AddParticipant";

import { useState, useCallback } from "react";
import React from "react";

export default function QuestNonClot() {
  const [active, setActive] = useState(false);
  const handleClick = useCallback(() => {
    setActive(true);
  }, []);
  return (
    <div className={style.container}>
      <Sidebar />
      <div
        style={{
          maxHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Titre searchbar={false} />
        <AddFormationForm />
        <Titre
          titre="Membre concené"
          component={
            <Button content="Ajouter un Participant" onClick={handleClick} />
          }
        />
        <QuestDetails
          columns={["Nom", "Prénom", "Fonction", "Structure", "Action"]}
          propData={[
            {
              nom: "MELZI",
              prenom: "Rayane",
              fonction: "Ingénieur Etudes et Développement Informatique",
              structure: "IT",
              action: <CloseBtn />,
            },
            {
              nom: "HAOUA",
              prenom: "Mohammed Nouredine",
              fonction: "Ingénieur Etudes et Développement Informatique",
              structure: "IT",
              action: <CloseBtn />,
            },
            {
              nom: "MELZI",
              prenom: "Rayane",
              fonction: "Ingénieur Etudes et Développement Informatique",
              structure: "IT",
              action: <CloseBtn />,
            },
            {
              nom: "HAOUA",
              prenom: "Mohammed Nouredine",
              fonction: "Ingénieur Etudes et Développement Informatique",
              structure: "IT",
              action: <CloseBtn />,
            },
            {
              nom: "nom",
              prenom: "prenom",
              fonction: "fonction",
              structure: "structure",
              action: <CloseBtn />,
            },
          ]}
        />

        <AddParticipant active={active} setActive={setActive} />

        <Footer />
      </div>
    </div>
  );
}
