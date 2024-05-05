import style from "./QuestionnaireInfo.module.css";
export default function QuestionnaireInfo() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.col}>
          <h2>Intitulé de la formation :</h2>
          <span>Administration Microsoft</span>
        </div>
        <div className={style.col}>
          <h2>Nom du formateur :</h2>
          <span>null</span>
        </div>
        <div className={style.col}>
          <h2>Organisme Formateur :</h2>
          <span> ITcomp</span>
        </div>
        <div className={style.col}>
          <h2>Lieu :</h2>
          <span> 10, Rue Khoudjet El Djeld Les Sources, Alger</span>
        </div>
        <div className={style.col}>
          <h2>période de formation : </h2>
          <span>du 2021-06-27</span>
        </div>
        <div className={style.col}>
          <h2>au : </h2>
          <span>2021-07-01</span>
        </div>
      </div>
    </div>
  );
}
