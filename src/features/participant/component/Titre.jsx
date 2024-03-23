import style from "./Titre.module.css";
export default function Titre() {
  return (
    <div className={style.container}>
      <h1>Questionnaire En Attente</h1>
      <input type="search" placeholder="Search Here" />
    </div>
  );
}
