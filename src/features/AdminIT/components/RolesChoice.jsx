import style from "./RolesChoice.module.css";
import React from "react";

function RolesChoice() {
  return (
    <form className={style.container}>
      <input
        className={style.input}
        type="checkbox"
        id="Participant"
        name="roles"
        value="Participant"
      />
      <label className={style.label} for="Participant">
        Participant
      </label>

      <input
        className={style.input}
        type="checkbox"
        id="AdminFormation"
        name="roles"
        value="AdminFormation"
      />
      <label className={style.label} for="AdminFormation">
        Admin Formation
      </label>

      <input
        className={style.input}
        type="checkbox"
        id="AdminIT"
        name="roles"
        value="AdminIT"
      />
      <label className={style.label} for="AdminIT">
        Admin IT
      </label>

      <input
        className={style.input}
        type="checkbox"
        id="AdminVisiteur"
        name="roles"
        value="AdminVisiteur"
      />
      <label className={style.label} for="AdminVisiteur">
        Admin Visiteur
      </label>
    </form>
  );
}

export default RolesChoice;
