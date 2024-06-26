import style from "./ReponsesFormationAV.module.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Titre from "../components/Titre";
import Footer from "../components/Footer";
import Table from "../components/EnhancedTableHead";
import AddFormationForm from "../components/AddFormationForm";
import Button from "../components/Button";

import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";

import { useState, useEffect } from "react";
import { useNavigate, useParams, NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import React from "react";

function DI({ reponseID }) {
  const { formationID } = useParams();
  const location = useLocation();

  let clotureOuPas;
  if (location.pathname.includes("formations_cloture")) {
    clotureOuPas = "formations_cloture";
  } else {
    clotureOuPas = "formations_non_cloture";
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <NavLink
        to={`/AdminVisiteur/${clotureOuPas}/reponses_formation/${formationID}/details_reponse/${reponseID}`}
        style={{ color: "#007FFF", opacity: "70%" }}
      >
        <AddBoxRoundedIcon />
      </NavLink>
      <LocalPrintshopIcon color="action" />
    </div>
  );
}

function ReponsesFormationAV() {
  const location = useLocation();
  let navigate = useNavigate();
  const { formationID } = useParams();
  const [reponses, setReponses] = useState([]);
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

  // useEffect(() => {
  //   console.log(formation);
  // }, [formation]);

  // const handleClick = () => {
  //   if (location.pathname.includes("formations_non_cloture")) {
  //     navigate(
  //       `/AdminVisiteur/formations_non_cloture/reponses_formation/modifier_formation/${formationID}`
  //     );
  //   }
  //   if (location.pathname.includes("formations_cloture")) {
  //     navigate(
  //       `/AdminVisiteur/formations_cloture/reponses_formation/modifier_formation/${formationID}`
  //     );
  //   }
  // };

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/reponses/${formationID}`
        );
        const formatedData = response.data.map((rep) => {
          return {
            // id: 1,
            id: rep.reponseID,
            // date: "Rayan",
            date: formatDate(rep.date_reponse),
            // nom: "MELZI",
            nom: rep.nom,
            // prenom: "Rayan",
            prenom: rep.prenom,
            // fonction: "Dev",
            fonction: rep.fonction,
            // structure: "IT",
            structure: rep.nom_structure,
            // TdS: "90%",
            TdS: `${rep.taux_satisfaction}%`,
            // DI: "Rayan",
            DI: <DI reponseID={rep.reponseID} />,
          };
        });
        setReponses(formatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchResponses();
  }, [formationID]);

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
        {/* <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "0px 80px",
            marginBottom: "-50px",
            position: "relative",
            top: "15px",
          }}
        >
           {!location.pathname.includes("formations_cloture") && (
            <Button content="Modifier" btnStyle="white" onClick={handleClick} />
          )} 
        </div> */}
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
          <Table rows={reponses} />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default ReponsesFormationAV;
