import style from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <div className={style.container}>
      {location.pathname === "/" && (
        <input type="search" placeholder="Search Here" />
      )}
      {location.pathname === "/formations_non_cloture" && (
        <div className={style.path}>
          <NavLink to="/" className={style.link}>
            Acceuil
          </NavLink>
          <span>{">"} Formations non clôturé</span>
        </div>
      )}
      {location.pathname === "/ajouter_une_formation" && (
        <div className={style.path}>
          <NavLink to="/" className={style.link}>
            Acceuil
          </NavLink>
          <span>{">"} Ajouter une formation</span>
        </div>
      )}
      {location.pathname === "/formations_cloture" && (
        <div className={style.path}>
          <NavLink to="/" className={style.link}>
            Acceuil
          </NavLink>
          <span>{">"} Formations clôturé</span>
        </div>
      )}
      {location.pathname === "/parametre" && (
        <div className={style.path}>
          <NavLink to="/" className={style.link}>
            Acceuil
          </NavLink>
          <span>{">"} Parametres</span>
        </div>
      )}
      <div className={style.img}>
        <img className={style.one} src="bell.svg" alt="bell" />
        <img className={style.one} src="Mask_group.svg" alt="profile" />
      </div>
    </div>
  );
}
