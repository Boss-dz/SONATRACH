import style from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuDroped, setMenuDroped] = useState(false);
  const [subMenuDroped, setSubMenuDroped] = useState(false);
  const location = useLocation();
  return (
    <div className={style.container}>
      {location.pathname === "/AdminIT" && (
        <input type="search" placeholder="Search Here" />
      )}
      {location.pathname === "/AdminIT/gerer_les_membres" && (
        <div className={style.path}>
          <NavLink to="/AdminIT" className={style.link}>
            Acceuil
          </NavLink>
          <span>{">"} Gérer les membres</span>
        </div>
      )}
      {location.pathname ===
        "/AdminIT/gerer_les_membres/informations_d'un_membre" && (
        <div className={style.path}>
          <NavLink to="/AdminIT" className={style.link}>
            Acceuil
          </NavLink>
          <span>{">"} </span>
          <NavLink to="/AdminIT/gerer_les_membres" className={style.link}>
            Gérer les membres
          </NavLink>
          <span>{">"} Informations d'un membre</span>
        </div>
      )}
      {location.pathname ===
        "/AdminIT/gerer_les_membres/informations_d'un_membre/modifier_les_informations_d'un_membre" && (
        <div className={style.path}>
          <NavLink to="/AdminIT" className={style.link}>
            Acceuil
          </NavLink>
          <span>{">"} </span>
          <NavLink to="/AdminIT/gerer_les_membres" className={style.link}>
            Gérer les membres
          </NavLink>
          <span>{">"} </span>
          <NavLink
            to="/AdminIT/gerer_les_membres/informations_d'un_membre"
            className={style.link}
          >
            Informations d'un membre
          </NavLink>
          <span>{">"} Modifier les informations</span>
        </div>
      )}
      {location.pathname === "/AdminIT/ajouter_un_membre" && (
        <div className={style.path}>
          <NavLink to="/AdminIT" className={style.link}>
            Acceuil
          </NavLink>
          <span>{">"} Ajouter un membre local</span>
        </div>
      )}
      {location.pathname === "/AdminIT/gerer_les_roles" && (
        <div className={style.path}>
          <NavLink to="/AdminIT" className={style.link}>
            Acceuil
          </NavLink>
          <span>{">"} Gérer les roles</span>
        </div>
      )}
      {location.pathname === "/AdminIT/parametre" && (
        <div className={style.path}>
          <NavLink to="/AdminIT" className={style.link}>
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
