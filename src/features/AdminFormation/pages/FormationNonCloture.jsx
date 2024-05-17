import Footer from "../components/Footer";
import Header from "../components/Header";
import QuestDetails from "../components/QuestDetails";
import Titre from "../components/Titre";
import Sidebar from "../components/Sidebar";
import style from "./FormationNonCloture.module.css";
import AddButton from "../components/AddButton";

import { useEffect, useState } from "react";
import axios from "axios";

export default function FormationNonCloture() {
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    const fetchFormations = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/AdminFormation/formations_non_cloture"
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
          date_fin_questionnaire: calculateTimeRemaining(
            formation.date_fin_questionnaire
          ),
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

  const calculateTimeRemaining = (endDate) => {
    const end = new Date(endDate);
    const now = new Date();
    const difference = end - now;

    const minutes = Math.floor(difference / (1000 * 60));
    const hours = Math.floor(difference / (1000 * 60 * 60));
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));

    if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? "s" : ""}`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""}`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""}`;
    } else {
      return `${minutes} minute${minutes > 1 ? "s" : ""}`;
    }
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
        <Titre />
        <QuestDetails propData={formations} dataType="formation" />
        <AddButton />
        <Footer />
      </div>
    </div>
  );
}
