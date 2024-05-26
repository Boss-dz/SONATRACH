import style from "./FormationCloture.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Titre from "../components/Titre";
import QuestDetails from "../components/QuestDetails";

import { useEffect, useState } from "react";
import axios from "axios";

export default function FormationCloture() {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/AdminFormation/formations_cloture"
        );
        // Format dates before setting the state
        const formattedFormations = response.data.map((formation) => ({
          ...formation,
          // Format dates to yyyy-mm-dd
          date_debut: formatDate(formation.date_debut),
          date_fin: formatDate(formation.date_fin),
          date_debut_questionnaire: formatDate(
            formation.date_debut_questionnaire
          ),
          date_fin_questionnaire: formatDate(formation.date_fin_questionnaire),
        }));
        setFormations(formattedFormations);
      } catch (error) {
        console.error("Error fetching formations:", error);
      }
    };

    fetchFormations();
  }, []);
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

  return (
    <div className={style.container}>
      <Sidebar />
      <div
        style={{
          maxHeight: "100vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Titre />
        <QuestDetails
          color="#68676E80"
          propData={formations}
          dataType="formation"
        />
        <Footer />
      </div>
    </div>
  );
}
