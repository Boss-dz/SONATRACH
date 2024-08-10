import style from "./Notification.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

// let data = [
//   {
//     title: "Administration Microsoft Exchange Server 2016/2019",
//     company: "Microsoft",
//     participants: 20,
//     reponses: 16,
//     tauxSatis: 94,
//   },
//   {
//     title: "Adm Microsoft",
//     company: "Microsoft",
//     participants: 20,
//     reponses: 16,
//     tauxSatis: 94,
//   },
//   {
//     title: "Admrezrezrezrzrzrrezrze Microsoft",
//     company: "Microsoft",
//     participants: 20,
//     reponses: 16,
//     tauxSatis: 94,
//   },
//   {
//     title: "Adm Microsoft",
//     company: "Microsoft",
//     participants: 20,
//     reponses: 16,
//     tauxSatis: 94,
//   },
// ];

export default function Notification({ addStyle, btnColor, statistics }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(statistics);
    setData(statistics.slice(0, 3));
  }, [statistics]);

  return (
    <div className={`${style.container} ${addStyle ? addStyle : ""}`}>
      <p className={style.text}>Questionnaires Actifs</p>
      <div className={style.card}>
        {data.map((e, i) => (
          <div
            key={i}
            className={i == 2 ? style.details : style.notLastDetails}
          >
            <div className={style.title}>
              <h2>{e.title}</h2>
            </div>
            <div>
              <p className={style.date}>
                Reponses:{" "}
                <b>
                  {e.reponses}/{e.participants}
                </b>
              </p>
              <p className={style.date}>
                Moyenne de satisfaction :{" "}
                <b>{e.tauxSatis ? e.tauxSatis : 0}%</b>
              </p>
            </div>
          </div>
        ))}
        <NavLink
          to="/AdminFormation/formations_non_cloture"
          className={style.btnFather}
        >
          <button className={`${style.btn} ${btnColor ? btnColor : ""}`}>
            Voir plus
          </button>
        </NavLink>
      </div>
    </div>
  );
}
