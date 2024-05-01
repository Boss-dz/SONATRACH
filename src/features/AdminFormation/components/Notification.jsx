import style from "./Notification.module.css";

const data = [
  {
    title: "Administration Microsoft Exchange Server 2016/2019",
    company: "Microsoft",
    participants: 20,
    reponses: 16,
    tauxSatis: 94,
  },
  {
    title: "Adm Microsoft",
    company: "Microsoft",
    participants: 20,
    reponses: 16,
    tauxSatis: 94,
  },
  {
    title: "Admrezrezrezrzrzrrezrze Microsoft",
    company: "Microsoft",
    participants: 20,
    reponses: 16,
    tauxSatis: 94,
  },
  {
    title: "Adm Microsoft",
    company: "Microsoft",
    participants: 20,
    reponses: 16,
    tauxSatis: 94,
  },
];

export default function Notification({ addStyle, btnColor }) {
  // const length = data.length;
  const list = data.slice(0, 3);
  const date = new Date().toLocaleDateString();
  return (
    <div className={`${style.container} ${addStyle ? addStyle : ""}`}>
      <p className={style.text}>Questionnaires Actifs</p>
      <div className={style.card}>
        {list.map((e, i) => (
          <div
            key={i}
            className={i == 2 ? style.details : style.notLastDetails}
          >
            <div className={style.title}>
              <h2>{e.title}</h2>
            </div>
            <div>
              <p className={style.date}>
                Reponnses:{" "}
                <b>
                  {e.reponses}/{e.participants}
                </b>
              </p>
              <p className={style.date}>
                Moyenne de satisfaction : <b>{e.tauxSatis}%</b>
              </p>
            </div>
          </div>
        ))}
        <button className={`${style.btn} ${btnColor ? btnColor : ""}`}>
          Voir plus
        </button>
      </div>
    </div>
  );
}
