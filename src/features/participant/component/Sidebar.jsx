import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";
import { useLocation } from "react-router-dom";
export default function Sidebar() {
  const location = useLocation();
  return (
    <div className={style.sidebar}>
      <div className={style.choices}>
        <NavLink to="/Participant">
          <img className={style.logo} src="/public/Logo_Mask.svg" alt="LOGO" />
        </NavLink>
        <NavLink to="/Participant">
          <img
            className={
              location.pathname === "/Participant"
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="/public/DashBoardA.svg"
            alt="UTILS"
          />
        </NavLink>
        <NavLink to="/Participant/questionnaire_en_attente">
          <img
            className={
              location.pathname === "/Participant/questionnaire_en_attente" ||
              location.pathname === "/Participant/questionnaire"
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="/public/quill_paperA.svg"
            alt="UTILS"
          />
        </NavLink>
        <NavLink to="/Participant/questionnaire_non_cloture">
          <img
            className={
              location.pathname === "/Participant/questionnaire_non_cloture"
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="/public/bx_editA.svg"
            alt="UTILS"
          />
        </NavLink>
        <NavLink to="/Participant/questionnaire_cloture">
          <img
            className={
              location.pathname === "/Participant/questionnaire_cloture"
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="/public/iconamoon_file-closeA.svg"
            alt="UTILS"
          />
        </NavLink>
        <NavLink to="/Participant/parametre">
          <img
            className={
              location.pathname === "/Participant/parametre"
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
