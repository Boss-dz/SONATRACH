import style from "./BienvenueText.module.css";
export default function BienvenueText() {
  return (
    <div className={style.contenu}>
      <h3 className={style.titre}>Questionnaire</h3>
      <h3 className={style.text}>
        Nous vous remercions de bien vouloir répondre à ce questionnaire. Vos
        réponses nous permettront d'améliorer la qualité de la formation et de
        mieux répondre à vos attentes.
      </h3>
    </div>
  );
}
