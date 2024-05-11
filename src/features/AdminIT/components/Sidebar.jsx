import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";
import { useLocation } from "react-router-dom";
export default function Sidebar() {
  const location = useLocation();
  return (
    <div className={style.sidebar}>
      <div className={style.choices}>
        <NavLink to="/AdminIT">
          <img className={style.logo} src="/public/Logo_Mask.svg" alt="LOGO" />
        </NavLink>
        {/* <NavLink to="/">
          <img className={style.utils} src="DashBoardA.svg" alt="UTILS" />
        </NavLink> */}
        <NavLink to="/AdminIT">
          <img
            className={
              location.pathname === "/AdminIT"
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="/public/DashBoardA.svg"
            alt="UTILS"
          />
        </NavLink>
        <NavLink to="/AdminIT/gerer_les_membres">
          <img
            className={
              location.pathname === "/AdminIT/gerer_les_membres" ||
              location.pathname ===
                "/AdminIT/gerer_les_membres/informations_d'un_membre" ||
              location.pathname ===
                "/AdminIT/gerer_les_membres/informations_d'un_membre/modifier_les_informations_d'un_membre"
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="/public/gerer-membres.svg"
            alt="UTILS"
          />
        </NavLink>
        <NavLink to="/AdminIT/ajouter_un_membre">
          <img
            className={
              location.pathname === "/AdminIT/ajouter_un_membre"
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="/public/add-membre.svg"
            alt="UTILS"
          />
        </NavLink>
        <NavLink to="/AdminIT/gerer_les_roles">
          <img
            className={
              location.pathname === "/AdminIT/gerer_les_roles"
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="/public/gerer-roles.svg"
            alt="UTILS"
          />
        </NavLink>
        <NavLink to="/AdminIT/parametre">
          <img
            className={
              location.pathname === "/AdminIT/parametre"
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="/public/clarity_settings-line.svg"
            alt="UTILS"
          />
        </NavLink>
      </div>

      <div className={style.out}>
        <NavLink to="/">
          <img src="/public/sign-out.svg" alt="OUT" />
        </NavLink>
      </div>
    </div>
  );
}
