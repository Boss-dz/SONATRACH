import style from "./QuestDetails.module.css";

const data = [
  {
    title: "Adm Microsoft",
    company: "Microsoft",
    dureFormation: "4j",
    debutQestionnaire: "3h",
    tempRestant: "5jrs",
  },
  {
    title: "Adm Microsoft",
    company: "Microsoft",
    dureFormation: "4j",
    debutQestionnaire: "3h",
    tempRestant: "5jrs",
  },
  {
    title: "Adm Microsoft",
    company: "Microsoft",
    dureFormation: "4j",
    debutQestionnaire: "3h",
    tempRestant: "5jrs",
  },
  {
    title: "Adm Microsoft",
    company: "Microsoft",
    dureFormation: "4j",
    debutQestionnaire: "3h",
    tempRestant: "5jrs",
  },
  {
    title: "Adm Microsoft",
    company: "Microsoft",
    dureFormation: "4j",
    debutQestionnaire: "3h",
    tempRestant: "5jrs",
  },
  {
    title: "Adm Microsoft",
    company: "Microsoft",
    dureFormation: "4j",
    debutQestionnaire: "3h",
    tempRestant: "5jrs",
  },

];
export default function QuestDetails() {
  return (
    <div className={style.container}>
      <ul className={style.info}>
        <li>Intitulé de la formation</li>
        <li>Organisme Formateur</li>
        <li>Duré du formation</li>
        <li>Début de questionnaire</li>
        <li>Temps restant</li>
      </ul>
      {data.map((e,i) => (
        <div className={style.details} key={i}>
          <h3>{e.title}</h3>
          <h5>{e.company}</h5>
          <span>{e.dureFormation}</span>
          <span>{e.debutQestionnaire}</span>
          <span>{e.tempRestant}</span>
        </div>
      ))}
    </div>
  );
}
