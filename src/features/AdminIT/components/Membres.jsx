import React, { useState } from "react";
import style from "./Membres.module.css";
import Titre from "./Titre";
import RolesMembresList from "./RolesMembresList";

const roles = ["Participant", "Admin Formation", "Admin IT", "Admin Visiteur"];

function VerticalDotsIcon() {
  const [isDroped, setIsDroped] = useState(false);

  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;
  while (a === b || a === c || a === d || b === c || b === d || c === d) {
    a = Math.random();
    b = Math.random();
    c = Math.random();
    d = Math.random();
  }

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        onClick={() => setIsDroped((d) => !d)}
        style={{
          fontSize: "20px",
          fontWeight: "900",
          cursor: "pointer",
        }}
      >
        &#8942;
      </div>

      <form
        className={style.form}
        style={isDroped ? { display: "flex" } : { display: "none" }}
        onMouseLeave={() => {
          setIsDroped((drop) => !drop);
        }}
      >
        {roles.map((role) => (
          <>
            <input
              className={style.input}
              type="checkbox"
              id={`${role.replace(/\s/g, "")}-${a}`}
              name="roles"
              value={role.replace(/\s/g, "")}
            />
            <label
              className={style.label}
              htmlFor={`${role.replace(/\s/g, "")}-${a}`}
            >
              {role.replace(/ /g, "\u00A0")}
            </label>
          </>
        ))}
        {/* <input
          className={style.input}
          type="checkbox"
          id={`Participant${a}`}
          name="roles"
          value="Participant"
        />
        <label className={style.label} htmlFor={`Participant${a}`}>
          Participant
        </label>

        <input
          className={style.input}
          type="checkbox"
          id={`AdminFormation${b}`}
          name="roles"
          value="AdminFormation"
        />
        <label className={style.label} htmlFor={`AdminFormation${b}`}>
          Admin&nbsp;Formation
        </label>

        <input
          className={style.input}
          type="checkbox"
          id={`AdminIT${c}`}
          name="roles"
          value="AdminIT"
        />
        <label className={style.label} htmlFor={`AdminIT${c}`}>
          Admin IT
        </label>

        <input
          className={style.input}
          type="checkbox"
          id={`AdminVisiteur${d}`}
          name="roles"
          value="AdminVisiteur"
        />
        <label className={style.label} htmlFor={`AdminVisiteur${d}`}>
          Admin Visiteur
        </label> */}
      </form>
    </div>
  );
}

function Membres({ roleFilter, setRoleFilter }) {
  return (
    <div>
      <Titre
        titre="Membres"
        padding={{ paddingLeft: "0", paddingRight: "0", paddingTop: "0" }}
        size="small"
      />
      <div className={style.container}>
        <RolesMembresList
          columns={["Nom", "Prénom", "Roles"]}
          propData={[
            {
              nom: "Rayane",
              prenom: "MELZI",
              action: <VerticalDotsIcon />,
              roles: [
                "Participant",
                "Admin Formation",
                "Admin IT",
                "Admin Visiteur",
              ],
            },
            {
              nom: "Mohammed",
              prenom: "HAOUA",
              vide1: "",
              vide2: "",
              action: <VerticalDotsIcon />,
              roles: ["Participant"],
            },
            {
              nom: "Nadjib",
              prenom: "DJELLALI",
              vide1: "",
              vide2: "",
              action: <VerticalDotsIcon />,
              roles: ["Admin IT"],
            },
            {
              nom: "Salah",
              prenom: "BENSAID",
              vide1: "",
              vide2: "",
              action: <VerticalDotsIcon />,
              roles: ["Admin Visiteur"],
            },
          ].filter((membre) => {
            return membre.roles.includes(roleFilter) || roleFilter === "tous";
          })}
          lineHeight="small"
          border={true}
        />
      </div>
    </div>
  );
}

export default Membres;
