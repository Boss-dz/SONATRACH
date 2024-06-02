import style from "./AjouterFormation.module.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Titre from "../components/Titre";
import Footer from "../components/Footer";
import Table from "../components/EnhancedTableHead";
import AddFormationForm from "../components/AddFormationForm";
import Button from "../components/Button";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React from "react";

function ReponsesFormation() {
  let navigate = useNavigate();
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

  // Function to format date to yyyy-mm-dd
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    // Adjust date by adding one day
    date.setDate(date.getDate());
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const fetchFormationInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/formations/${formationID}`
        );
        const formatedData = response.data[0];
        setFormation((prev) => {
          return {
            ...prev,
            intitule: formatedData.intitule,
            org_formateur: formatedData.org_formateur,
            nom_formateur: formatedData.nom_formateur,
            lieu: formatedData.lieu,
            date_debut: formatDate(formatedData.date_debut),
            date_fin: formatDate(formatedData.date_fin),
            date_debut_questionnaire: formatDate(
              formatedData.date_debut_questionnaire
            ),
            date_fin_questionnaire: formatDate(
              formatedData.date_fin_questionnaire
            ),
          };
        });
      } catch (error) {
        console.error("Error fetching formation:", error);
      }
    };

    fetchFormationInfo();
  }, [formationID]);

  useEffect(() => {
    console.log(formation);
  }, [formation]);

  const handleClick = () => {
    navigate(
      `/AdminFormation/formations_non_cloture/reponses_formation/modifier_formation/${formationID}`
    );
  };

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
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "0px 80px",
            marginBottom: "-50px",
            position: "relative",
            top: "15px",
          }}
        >
          <Button content="Modifier" btnStyle="white" onClick={handleClick} />
        </div>
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