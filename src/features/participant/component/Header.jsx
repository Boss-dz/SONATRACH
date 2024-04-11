import style from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <div className={style.container}>
      {location.pathname === "/" && (
        <input type="search" placeholder="Search Here" />
      )}
      {location.pathname === "/questionnaire_en_attente" && (
        <div className={style.path}>
          <NavLink to="/" className={style.link}>
            Acceuil
          </NavLink>
          <span>
            {">"}
            <NavLink to="/questionnaire_en_attente" className={style.link}>
              Questionnaire en attente
            </NavLink>
          </span>
        </div>
      )}
      {location.pathname === "/questionnaire_non_cloture" && (
        <div className={style.path}>
          <NavLink to="/" className={style.link}>
            Acceuil
          </NavLink>
          <span>
            {">"}
            <NavLink to="/questionnaire_non_cloture" className={style.link}>
              Questionnaire non cloturer
            </NavLink>
          </span>
        </div>
      )}
      {location.pathname === "/questionnaire_cloture" && (
        <div className={style.path}>
          <NavLink to="/" className={style.link}>
            Acceuil
          </NavLink>
          <span>
            {">"}
            <NavLink to="/questionnaire_cloture" className={style.link}>
              Questionnaire cloturer
            </NavLink>
          </span>
        </div>
      )}
      {location.pathname === "/parametre" && (
        <div className={style.path}>
          <NavLink to="/" className={style.link}>
            Acceuil
          </NavLink>
          <span>
            {">"}
            <NavLink to="/parametre" className={style.link}>
              Parametre
            </NavLink>
          </span>
        </div>
      )}
      {location.pathname === "/questionnaire" && (
        <div className={style.path}>
          <NavLink to="/" className={style.link}>
            Acceuil
          </NavLink>
          <span>
            {">"}
            <NavLink to="/questionnaire_en_attente" className={style.link}>
              Questionnaire en attente
            </NavLink>
          </span>
          <span>
            {">"}
            <NavLink to="/questionnaire" className={style.link}>
              Questionnaire
            </NavLink>
          </span>
        </div>
      )}
      <div className={style.img}>
        <img className={style.one} src="bell.svg" alt="bell" />
        <img className={style.one} src="Mask_group.svg" alt="profile" />
      </div>
    </div>
  );
}
