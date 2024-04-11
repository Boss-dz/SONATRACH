import style from "./TableDevaluation.module.css";

export default function TableDevaluation() {
  return (
    <div className={style.container}>
      <div className={style.tableContainer}>
        <table>
          <thead>
            <tr className={style.tableHead}>
              <th>AXES D'EVALUATION</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5} className={style.color}>
                1. Qualité pédagogique de la formation
              </td>
            </tr>
            <tr>
              <td>Conformité du contenu à ce qui était prévu</td>
              <td className={style.emojis}>
                <img src="Insatisfait.svg" alt="Insatisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Peu_satisfait.svg" alt="Peu_satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Satisfait.svg" alt="Satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="TresSatisfait.svg" alt="TresSatisfait" />
              </td>
            </tr>
            <tr>
              <td>Adéquation par rapport aux besoins professionnels</td>
              <td className={style.emojis}>
                <img src="Insatisfait.svg" alt="Insatisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Peu_satisfait.svg" alt="Peu_satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Satisfait.svg" alt="Satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="TresSatisfait.svg" alt="TresSatisfait" />
              </td>
            </tr>
            <tr>
              <td>Equilibre entre les partie théorique et pratique</td>
              <td className={style.emojis}>
                <img src="Insatisfait.svg" alt="Insatisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Peu_satisfait.svg" alt="Peu_satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Satisfait.svg" alt="Satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="TresSatisfait.svg" alt="TresSatisfait" />
              </td>
            </tr>
            <tr>
              <td>Exercices , Etude de cas ,jeux de roles</td>
              <td className={style.emojis}>
                <img src="Insatisfait.svg" alt="Insatisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Peu_satisfait.svg" alt="Peu_satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Satisfait.svg" alt="Satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="TresSatisfait.svg" alt="TresSatisfait" />
              </td>
            </tr>
            <tr>
              <td>Les supports pédagogique</td>
              <td className={style.emojis}>
                <img src="Insatisfait.svg" alt="Insatisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Peu_satisfait.svg" alt="Peu_satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Satisfait.svg" alt="Satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="TresSatisfait.svg" alt="TresSatisfait" />
              </td>
            </tr>
            <tr>
              <td colSpan={5} className={style.color}>
                2. Le Formateur
              </td>
            </tr>
            <tr>
              <td>Maitrise du theme</td>
              <td className={style.emojis}>
                <img src="Insatisfait.svg" alt="Insatisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Peu_satisfait.svg" alt="Peu_satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Satisfait.svg" alt="Satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="TresSatisfait.svg" alt="TresSatisfait" />
              </td>
            </tr>
            <tr>
              <td>Gestion du temps</td>
              <td className={style.emojis}>
                <img src="Insatisfait.svg" alt="Insatisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Peu_satisfait.svg" alt="Peu_satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Satisfait.svg" alt="Satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="TresSatisfait.svg" alt="TresSatisfait" />
              </td>
            </tr>
            <tr>
              <td>
                Efficacité des méthodes et techniques pédagogiques utilisées
              </td>
              <td className={style.emojis}>
                <img src="Insatisfait.svg" alt="Insatisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Peu_satisfait.svg" alt="Peu_satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Satisfait.svg" alt="Satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="TresSatisfait.svg" alt="TresSatisfait" />
              </td>
            </tr>
            <tr>
              <td>
                Ecoute, compréhension des problèmes et réponses aux questions
              </td>
              <td className={style.emojis}>
                <img src="Insatisfait.svg" alt="Insatisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Peu_satisfait.svg" alt="Peu_satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Satisfait.svg" alt="Satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="TresSatisfait.svg" alt="TresSatisfait" />
              </td>
            </tr>
            <tr>
              <td>Implication des participants</td>
              <td className={style.emojis}>
                <img src="Insatisfait.svg" alt="Insatisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Peu_satisfait.svg" alt="Peu_satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="Satisfait.svg" alt="Satisfait" />
              </td>
              <td className={style.emojis}>
                <img src="TresSatisfait.svg" alt="TresSatisfait" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
