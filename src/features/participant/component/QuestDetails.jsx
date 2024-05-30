import { useState,useEffect } from "react";
import style from "./QuestDetails.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


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


// export default function QuestDetails({ color }) {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [formations, setFormations] = useState([]);
//     useEffect(() => {
//       axios
//         .get("http://localhost:8000/AdminFormation/formations_non_cloture")
//         .then((response) => {
//           setFormations(response.data);
//         })
//         .catch((error) => {
//           console.error("Error fetching formation data:", error);
//         });
//     }, []);
//     console.log(formations)
//   return (
//     <div className={style.container}>
//       <ul className={style.info}>
//         <li>Intitulé de la formation</li>
//         <li>Organisme Formateur</li>
//         <li>Duré du formation</li>
//         <li>Début de questionnaire</li>
//         <li>
//           {location.pathname === "/Participant/questionnaire_cloture"
//             ? "Fin du questionnaire"
//             : "Temps restant"}
//         </li>
//       </ul>
//       {formations.map((e, i) => (
//         <div
//           className={style.details}
//           style={{ "--color": color }}
//           key={i}
//           onClick={() => navigate("/Participant/questionnaire")}
//         >
//           <div className={style.item}>
//             <h3>{e.intitule}</h3>
//           </div>
//           <div className={style.item}>
//             <h5>{e.org_formateur}</h5>
//           </div>
//           <div className={`${style.item} ${style.span}`}>
//             <span>du {formatDate(e.date_debut)}</span>
//             <span>au {formatDate(e.date_fin)}</span>
//           </div>
//           <div className={style.item}>{formatDate(e.date_debut_questionnaire)}</div>
//           <div className={style.item}>{calculateTimeRemaining(e.date_fin_questionnaire)}</div>
//         </div>
//       ))}
//     </div>
//   );
// }



export default function QuestDetails({ color, isCloture }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [formations, setFormations] = useState([]);

  useEffect(() => {
    const endpoint = isCloture
      ? "http://localhost:8000/AdminFormation/formations_cloture"
      : "http://localhost:8000/AdminFormation/formations_non_cloture";
    axios
      .get(endpoint)
      .then((response) => {
        setFormations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching formation data:", error);
      });
  }, [isCloture]);

  return (
    <div className={style.container}>
      <ul className={style.info}>
        <li>Intitulé de la formation</li>
        <li>Organisme Formateur</li>
        <li>Durée de la formation</li>
        <li>Début du questionnaire</li>
        <li>
          {location.pathname === "/Participant/questionnaire_cloture"
            ? "Fin du questionnaire"
            : "Temps restant"}
        </li>
      </ul>
      {formations.map((formation, i) => (
        <div
          className={style.details}
          style={{ "--color": color }}
          key={i}
          onClick={() => navigate(`/Participant/questionnaire/${formation.formationID}`)}
        >
          <div className={style.item}>
            <h3>{formation.intitule}</h3>
          </div>
          <div className={style.item}>
            <h5>{formation.org_formateur}</h5>
          </div>
          <div className={`${style.item} ${style.span}`}>
            <span>du {formatDate(formation.date_debut)}</span>
            <span>au {formatDate(formation.date_fin)}</span>
          </div>
          <div className={style.item}>
            {formatDate(formation.date_debut_questionnaire)}
          </div>
          <div className={style.item}>
            {isCloture
              ? formatDate(formation.date_fin_questionnaire)
              : calculateTimeRemaining(formation.date_fin_questionnaire)}
          </div>
        </div>
      ))}
    </div>
  );
}
