import style from "./AjouterFormation.module.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Titre from "../components/Titre";
import Footer from "../components/Footer";
import Table from "../components/EnhancedTableHead";
import AddFormationForm from "../components/AddFormationForm";
import Button from "../components/Button";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";

function ReponsesFormation() {
  const { formationID } = useParams();
  const [formation, setFormation] = useState({
    intitule: "",
    org_formateur: "",
    nom_formateur: "",
    lieu: "",
    date_debut: "",
    date_fin: "",
    date_debut_questionnaire: "",
    date_fin_questionnaire: "",
  });

  useEffect(() => {
    const fetchFormationInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/formations/:${formationID}`
        );
        console.log(response.data);
        setFormation(response.data);
      } catch (error) {
        console.error("Error fetching formation:", error);
      }
    };

    fetchFormationInfo();
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
        <Titre titre="Reponses de la Formation" searchbar={false} />
        <AddFormationForm
          formation={formation}
          setFormation={setFormation}
          isDisabled={true}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "20px 40px",
          }}
        >
          <Table />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default ReponsesFormation;
