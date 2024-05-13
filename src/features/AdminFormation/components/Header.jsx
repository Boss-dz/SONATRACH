import style from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuDroped, setMenuDroped] = useState(false);
  const [subMenuDroped, setSubMenuDroped] = useState(false);
  const location = useLocation();
  return (
    <div className={style.container}>
      {location.pathname === "/AdminFormation" && (
        <input type="search" placeholder="Search Here" />
      )}
      {location.pathname === "/AdminFormation/formations_non_cloture" && (
        <div className={style.path}>
          <NavLink to="/AdminFormation" className={style.link}>
            Acceuil
          </NavLink>
          <span>{">"} Formations non clôturé</span>
        </div>
      )}
      {location.pathname === "/AdminFormation/ajouter_une_formation" && (
        <div className={style.path}>
          <NavLink to="/AdminFormation" className={style.link}>
            Acceuil
          </NavLink>
          <span>{">"} Ajouter une formation</span>
        </div>
      )}
      {location.pathname === "/AdminFormation/formations_cloture" && (
        <div className={style.path}>
          <NavLink to="/AdminFormation" className={style.link}>
            Acceuil
          </NavLink>
          <span>{">"} Formations clôturé</span>
        </div>
      )}
      {location.pathname === "/AdminFormation/parametre" && (
        <div className={style.path}>
          <NavLink to="/AdminFormation" className={style.link}>
            Acceuil
          </NavLink>
          <span>{">"} Parametres</span>
        </div>
      )}
      <div className={style.img}>
        <img className={style.one} src="/public/bell.svg" alt="bell" />
        <img
          className={style.one}
          src="/public/Mask_group.svg"
          alt="profile"
          onClick={() => setMenuDroped((drop) => !drop)}
        />

        <div
          className={style.dropMenu}
          style={menuDroped ? { display: "flex" } : { display: "none" }}
          onMouseLeave={() => {
            setMenuDroped((drop) => !drop);
          }}
        >
          <p onClick={() => setSubMenuDroped((drop) => !drop)}>
            Changer le rôle
          </p>
          <ul
            style={subMenuDroped ? { display: "block" } : { display: "none" }}
          >
            <NavLink to="/Participant">
              <li>Participant</li>
            </NavLink>
            <NavLink to="/AdminFormation">
              <li>Admin Formation</li>
            </NavLink>
            <NavLink to="/AdminIT">
              <li>Admin It</li>
            </NavLink>
            <NavLink to="/AdminVisiteur">
              <li>Admin Visiteur</li>
            </NavLink>
          </ul>
          <NavLink to="/" style={{ width: "100%", textAlign: "center" }}>
            <p>Se Deconecter</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
