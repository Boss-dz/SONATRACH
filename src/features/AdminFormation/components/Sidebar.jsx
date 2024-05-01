import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";
import { useLocation } from "react-router-dom";
export default function Sidebar() {
  const location = useLocation();
  return (
    <div className={style.sidebar}>
      <div className={style.choices}>
        <NavLink to="/">
          <img className={style.logo} src="Logo_Mask.svg" alt="LOGO" />
        </NavLink>
        {/* <NavLink to="/">
          <img className={style.utils} src="DashBoardA.svg" alt="UTILS" />
        </NavLink> */}
        <NavLink to="/">
          <img
            className={
              location.pathname === "/"
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="DashBoardA.svg"
            alt="UTILS"
          />
        </NavLink>
        <NavLink to="/formations_non_cloture">
          <img
            className={
              location.pathname === "/formations_non_cloture"
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="quill_paperA.svg"
            alt="UTILS"
          />
        </NavLink>
        <NavLink to="/ajouter_une_formation">
          <img
            className={
              location.pathname === "/ajouter_une_formation"
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="gg_add-r.svg"
            alt="UTILS"
          />
        </NavLink>
        <NavLink to="/formations_cloture">
          <img
            className={
              location.pathname === "/formations_cloture"
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="iconamoon_file-closeA.svg"
            alt="UTILS"
          />
        </NavLink>
        <NavLink to="/parametre">
          <img
            className={
              location.pathname === "/parametre"
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="clarity_settings-line.svg"
            alt="UTILS"
          />
        </NavLink>
      </div>

      <div className={style.out}>
        {/* <NavLink> */}
        <img src="sign-out.svg" alt="OUT" />
        {/* </NavLink> */}
      </div>
    </div>
  );
}
