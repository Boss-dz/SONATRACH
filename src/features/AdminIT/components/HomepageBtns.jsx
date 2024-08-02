import React from "react";
import { NavLink } from "react-router-dom";
import style from "./HomepageBtns.module.css";
// import MaskSVG from "/public/adminIT-homeIcons/clarity_settings-line.svg";
// import ContentSVG from "/public/Welcome.svg";

function HomepageBtns() {
  return (
    <div className={style.container}>
      <NavLink className={style.btnContainer} to="./gerer_les_membres">
        <div className={style.btn}>
          <img src="/public/gerer-membres.svg" alt="UTILS" />
          {/* <svg width="50" height="50">
          
            <mask id="mask" x="0" y="0" width="50" height="500">
              <image href={MaskSVG} x="0" y="0" width="50" height="50" />
            </mask>

            <image
              href={ContentSVG}
              x="0"
              y="0"
              width="50"
              height="50"
              mask="url(#mask)"
            />
          </svg> */}
          <p>Gérer Les Membres</p>
        </div>
      </NavLink>

      <NavLink className={style.btnContainer} to="./ajouter_un_membre">
        <div className={style.btn}>
          <img src="/public/add-membre.svg" alt="UTILS" />
          <p>Ajouter un Membre</p>
        </div>
      </NavLink>

      <NavLink className={style.btnContainer} to="./gerer_les_roles">
        <div className={style.btn}>
          <img src="/public/gerer-roles.svg" alt="UTILS" />
          <p>Gérer Les Roles</p>
        </div>
      </NavLink>

      <NavLink className={style.btnContainer} to="./parametre">
        <div className={style.btn}>
          <img src="/public/clarity_settings-line.svg" alt="UTILS" />
          <p>Parametres</p>
        </div>
      </NavLink>
    </div>
  );
}

export default HomepageBtns;
