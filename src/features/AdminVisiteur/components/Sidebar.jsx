import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";
import { useLocation } from "react-router-dom";
export default function Sidebar() {
  const location = useLocation();
  return (
    <div className={style.sidebar}>
      <div className={style.choices}>
        <NavLink to="/AdminVisiteur">
          <img className={style.logo} src="/public/Logo_Mask.svg" alt="LOGO" />
        </NavLink>
        <NavLink to="/AdminVisiteur">
          <img
            className={
              location.pathname === "/AdminVisiteur"
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="/public/DashBoardA.svg"
            alt="UTILS"
          />
        </NavLink>
        <NavLink to="/AdminVisiteur/formations_non_cloture">
          <img
            className={
              location.pathname.startsWith(
                "/AdminVisiteur/formations_non_cloture"
              )
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="/public/quill_paperA.svg"
            alt="UTILS"
          />
        </NavLink>
        <NavLink to="/AdminVisiteur/formations_cloture">
          <img
            className={
              location.pathname.startsWith("/AdminVisiteur/formations_cloture")
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="/public/iconamoon_file-closeA.svg"
            alt="UTILS"
          />
        </NavLink>
        <NavLink to="/AdminVisiteur/parametre">
          <img
            className={
              location.pathname === "/AdminVisiteur/parametre"
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
