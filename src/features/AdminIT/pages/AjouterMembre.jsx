import style from "./AjouterMembre.module.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Titre from "../components/Titre";
import Footer from "../components/Footer";
import FormModule from "../components/FormModule";
import RolesChoice from "../components/RolesChoice";
import { useNavigate } from "react-router-dom";

import React from "react";

export default function AjouterMembre() {
  const navigate = useNavigate();
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
        <FormModule
          inputs={[
            [
              { label: "Nom :", type: "text" },
              { label: "Prénom :", type: "text" },
            ],
            [
              { label: "Fonction :", type: "select", options: ["A", "A", "A"] },
              {
                label: "Structure :",
                type: "select",
                options: ["A", "A", "A"],
              },
            ],
            [{ label: "Roles :", type: "custom", component: <RolesChoice /> }],
            [{ label: "Email :", type: "email" }],
            [{ label: "Mot de passe :", type: "text" }],
          ]}
          secondBtn="Annuler"
          secondBtnStyle="minimal"
          secondBtnOnClick={() => navigate("/AdminIT/gerer_les_membres")}
        />

        <Footer />
      </div>
    </div>
  );
}
