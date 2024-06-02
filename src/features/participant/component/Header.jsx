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
      {location.pathname === "/Participant" && (
        <input type="search" placeholder="Search Here" />
      )}
      {location.pathname === "/Participant/questionnaire_en_attente" && (
        <div className={style.path}>
          <NavLink to="/Participant" className={style.link}>
            Acceuil
          </NavLink>
          <span>
            {">"}
            <NavLink
              to="/Participant/questionnaire_en_attente"
              className={style.link}
            >
              Questionnaire en attente
            </NavLink>
          </span>
        </div>
      )}
      {location.pathname === "/Participant/questionnaire_non_cloture" && (
        <div className={style.path}>
          <NavLink to="/Participant" className={style.link}>
            Acceuil
          </NavLink>
          <span>
            {">"}
            <NavLink
              to="/Participant/questionnaire_non_cloture"
              className={style.link}
            >
              Questionnaire non cloturer
            </NavLink>
          </span>
        </div>
      )}
      {location.pathname === "/Participant/questionnaire_cloture" && (
        <div className={style.path}>
          <NavLink to="/Participant" className={style.link}>
            Acceuil
          </NavLink>
          <span>
            {">"}
            <NavLink
              to="/Participant/questionnaire_cloture"
              className={style.link}
            >
              Questionnaire cloturer
            </NavLink>
          </span>
        </div>
      )}
      {location.pathname === "/Participant/parametre" && (
        <div className={style.path}>
          <NavLink to="/Participant" className={style.link}>
            Acceuil
          </NavLink>
          <span>
            {">"}
            <NavLink to="/Participant/parametre" className={style.link}>
              Parametre
            </NavLink>
          </span>
        </div>
      )}
      {location.pathname === "/Participant/questionnaire" && (
        <div className={style.path}>
          <NavLink to="/Participant" className={style.link}>
            Acceuil
          </NavLink>
          <span>
            {">"}
            <NavLink
              to="/Participant/questionnaire_en_attente"
              className={style.link}
            >
              Questionnaire en attente
            </NavLink>
          </span>
          <span>
            {">"}
            <NavLink to="/Participant/questionnaire" className={style.link}>
              Questionnaire
            </NavLink>
          </span>
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
