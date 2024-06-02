import style from "./Header.module.css";
import { NavLink, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Header() {
  const [menuDroped, setMenuDroped] = useState(false);
  const [subMenuDroped, setSubMenuDroped] = useState(false);
  const [roles, setRoles] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/user/${
            JSON.parse(localStorage.getItem("userData")).utilisateurID
          }/roles`
        );
        const formatedData = response.data.map((role) => role.nom_role);
        setRoles(formatedData);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchRoles();
  }, []);

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
      {location.pathname.startsWith(
        "/AdminFormation/formations_non_cloture/reponses_formation"
      ) && (
        <div className={style.path}>
          <NavLink to="/AdminFormation" className={style.link}>
            Acceuil
          </NavLink>
          <span>{"> "}</span>

          <NavLink
            to="/AdminFormation/formations_non_cloture"
            className={style.link}
          >
            Formations non clôturé
          </NavLink>
          <span>{">"} Reponses de la Formation</span>
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
        <img className={style.one} src="/bell.svg" alt="bell" />
        <img
          className={style.one}
          src="/Mask_group.svg"
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
            {roles.map((role, i) => {
              return (
                <NavLink to={`/${role.replace(/\s/g, "")}`} key={i}>
                  <li>{role}</li>
                </NavLink>
              );
            })}
          </ul>
          <NavLink to="/" style={{ width: "100%", textAlign: "center" }}>
            <p>Se Deconecter</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
