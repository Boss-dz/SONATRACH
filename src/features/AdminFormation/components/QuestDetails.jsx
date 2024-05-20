import style from "./QuestDetails.module.css";
import { useLocation } from "react-router-dom";
import TableRow from "./TableRow";
const data = [
  {
    title: "Administration Microsoft Exchange Server 2016/2019",
    company: "Administration Microsoft  Exchange Server 2016/2019",
    debutFormation: "2021-06-27",
    finFormation: "2021-06-27",
    debutQestionnaire: "2021-07-13",
    tempRestant: "2021-07-13",
  },
  {
    title: "Administration Microsoft Exchange Server 2016/2019",
    company: "Administration Microsoft  Exchange Server 2016/2019",
    debutFormation: "2021-06-27",
    finFormation: "2021-06-27",
    debutQestionnaire: "2021-07-13",
    tempRestant: "2021-07-13",
  },
  {
    title: "Administration Microsoft Exchange Server 2016/2019",
    company: "Administration Microsoft  Exchange Server 2016/2019",
    debutFormation: "2021-06-27",
    finFormation: "2021-06-27",
    debutQestionnaire: "2021-07-13",
    tempRestant: "2021-07-13",
  },
  {
    title: "Administration Microsoft Exchange Server 2016/2019",
    company: "Administration Microsoft  Exchange Server 2016/2019",
    debutFormation: "2021-06-27",
    finFormation: "2021-06-27",
    debutQestionnaire: "2021-07-13",
    tempRestant: "2021-07-13",
  },
  {
    title: "Administration Microsoft Exchange Server 2016/2019",
    company: "Administration Microsoft  Exchange Server 2016/2019",
    debutFormation: "2021-06-27",
    finFormation: "2021-06-27",
    debutQestionnaire: "2021-07-13",
    tempRestant: "2021-07-13",
  },
  {
    title: "Administration Microsoft Exchange Server 2016/2019",
    company: "Administration Microsoft  Exchange Server 2016/2019",
    debutFormation: "2021-06-27",
    finFormation: "2021-06-27",
    debutQestionnaire: "2021-07-13",
    tempRestant: "2021-07-13",
  },
  {
    title: "Administration Microsoft Exchange Server 2016/2019",
    company: "Administration Microsoft  Exchange Server 2016/2019",
    debutFormation: "2021-06-27",
    finFormation: "2021-06-27",
    debutQestionnaire: "2021-07-13",
    tempRestant: "2021-07-13",
  },
  {
    title: "Administration Microsoft Exchange Server 2016/2019",
    company: "Administration Microsoft  Exchange Server 2016/2019",
    debutFormation: "2021-06-27",
    finFormation: "2021-06-27",
    debutQestionnaire: "2021-07-13",
    tempRestant: "2021-07-13",
  },
];
export default function QuestDetails({
  color,
  columns,
  propData,
  dataType,
  border,
  lineHeight,
}) {
  const location = useLocation();

  return (
    <div
      className={style.container}
      style={{
        height:
          border !== undefined
            ? "calc(90vh - (43.33px + 90.67px + 78px + 24px))"
            : null,
        maxHeight:
          border !== undefined
            ? "calc(90vh - (43.33px + 90.67px + 78px + 24px))"
            : null,
      }}
    >
      <ul className={style.info}>
        {columns === undefined ? (
          <>
            <li>Intitulé de la formation</li>
            <li>Organisme Formateur</li>
            <li>Duré du formation</li>
            <li>Début de questionnaire</li>
            <li>
              {location.pathname === "/AdminFormation/formations_cloture"
                ? "Fin du questionnaire"
                : "Temps restant"}
            </li>
          </>
        ) : (
          <>
            <li>{columns[0]}</li>
            <li>{columns[1]}</li>
            <li>{columns[2]}</li>
            <li>{columns[3]}</li>
            <li>{columns[4]}</li>
          </>
        )}
      </ul>
      <div
        className={style.detailsContainer}
        style={{
          height: border !== undefined ? "calc(100% - 60px)" : null,
          maxHeight: border !== undefined ? "calc(100% - 60px)" : null,
        }}
      >
        {propData === undefined
          ? data.map((e, i) => (
              <div
                className={style.details}
                style={{
                  "--color": color,
                  border:
                    border !== undefined && border === true
                      ? `solid ${color} 1px`
                      : null,
                  padding:
                    lineHeight !== undefined && lineHeight === "small"
                      ? "5px 10px"
                      : "20px 10px",
                }}
                key={i}
              >
                <div className={style.item}>
                  <h3>{e.title}</h3>
                </div>
                <div className={style.item}>
                  <h5>{e.company}</h5>
                </div>
                <div className={`${style.item} ${style.span}`}>
                  <span>du {e.debutFormation}</span>
                  <span>au {e.finFormation}</span>
                </div>
                <div className={style.item}>{e.debutQestionnaire}</div>
                <div className={style.item}>{e.tempRestant}</div>
              </div>
            ))
          : dataType !== undefined && dataType === "formation"
          ? propData.map((formation, index) => (
              <div
                className={style.details}
                style={{
                  "--color": color,
                  border:
                    border !== undefined && border === true
                      ? `solid ${color} 1px`
                      : null,
                  padding:
                    lineHeight !== undefined && lineHeight === "small"
                      ? "5px 10px"
                      : "20px 10px",
                }}
                key={index}
              >
                <div className={style.item}>
                  <h3>{formation.intitule}</h3>
                </div>
                <div className={style.item}>
                  <h5>{formation.org_formateur}</h5>
                </div>
                <div className={`${style.item} ${style.span}`}>
                  <span>du {formation.date_debut}</span>
                  <span>au {formation.date_fin}</span>
                </div>
                <div className={style.item}>
                  {formation.date_debut_questionnaire}
                </div>
                <div className={style.item}>
                  {formation.date_fin_questionnaire}
                </div>
              </div>
            ))
          : dataType === "utilisateur"
          ? propData.map((user, i) => (
              <TableRow
                nom={user.nom}
                prenom={user.prenom}
                fonction={user.fonction}
                structure={user.structureID}
                // action={user.nom}
                border={border}
                lineHeight={lineHeight}
                key={i}
              />
            ))
          : propData.map((e, i) => (
              <TableRow
                nom={Object.values(e)[0]}
                prenom={Object.values(e)[1]}
                fonction={Object.values(e)[2]}
                structure={Object.values(e)[3]}
                action={Object.values(e)[4]}
                border={border}
                lineHeight={lineHeight}
                key={i}
              />
            ))}
      </div>
    </div>
  );
}

{
  /*
import style from "./QuestDetails.module.css";
import { useLocation } from "react-router-dom";
import TableRow from "./TableRow";

import { useEffect, useState } from "react";
import axios from "axios";

export default function QuestDetails({
  color,
  columns,
  propData,
  border,
  lineHeight,
}) {
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
          // Assuming date_debut, date_fin, date_debut_questionnaire, and date_fin_questionnaire are date strings in the format "YYYY-MM-DD"
          date_debut: new Date(formation.date_debut).toLocaleDateString(),
          date_fin: new Date(formation.date_fin).toLocaleDateString(),
          date_debut_questionnaire: new Date(
            formation.date_debut_questionnaire
          ).toLocaleDateString(),
          date_fin_questionnaire: new Date(
            formation.date_fin_questionnaire
          ).toLocaleDateString(),
        }));
        setFormations(formattedFormations);
      } catch (error) {
        console.error("Error fetching formations:", error);
      }
    };

    fetchFormations();
  }, []);

  return (
    <div
      className={style.container}
      style={{
        height:
          border !== undefined
            ? "calc(90vh - (43.33px + 90.67px + 78px + 24px))"
            : null,
        maxHeight:
          border !== undefined
            ? "calc(90vh - (43.33px + 90.67px + 78px + 24px))"
            : null,
      }}
    >
      <ul className={style.info}>
        {columns === undefined ? (
          <>
            <li>Intitulé de la formation</li>
            <li>Organisme Formateur</li>
            <li>Durée du formation</li>
            <li>Début de questionnaire</li>
            <li>Temps restant</li>
          </>
        ) : (
          <>
            {columns.map((column, index) => (
              <li key={index}>{column}</li>
            ))}
          </>
        )}
      </ul>
      <div
        className={style.detailsContainer}
        style={{
          height: border !== undefined ? "calc(100% - 60px)" : null,
          maxHeight: border !== undefined ? "calc(100% - 60px)" : null,
        }}
      >
        {formations.map((formation, index) => (
          <div
            className={style.details}
            style={{
              "--color": color,
              border:
                border !== undefined && border === true
                  ? `solid ${color} 1px`
                  : null,
              padding:
                lineHeight !== undefined && lineHeight === "small"
                  ? "5px 10px"
                  : "20px 10px",
            }}
            key={index}
          >
            <div className={style.item}>
              <h3>{formation.intitule}</h3>
            </div>
            <div className={style.item}>
              <h5>{formation.org_formateur}</h5>
            </div>
            <div className={`${style.item} ${style.span}`}>
              <span>du {formation.date_debut}</span>
              <span>au {formation.date_fin}</span>
            </div>
            <div className={style.item}>
              {formation.date_debut_questionnaire}
            </div>
            <div className={style.item}>{formation.date_fin_questionnaire}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

*/
}
