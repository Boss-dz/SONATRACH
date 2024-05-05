import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";
import { useLocation } from "react-router-dom";
export default function Sidebar() {
  const location = useLocation();
  return (
    <div className={style.sidebar}>
      <div className={style.choices}>
        <NavLink to="/AdminFormation">
          <img className={style.logo} src="/public/Logo_Mask.svg" alt="LOGO" />
        </NavLink>
        {/* <NavLink to="/">
          <img className={style.utils} src="DashBoardA.svg" alt="UTILS" />
        </NavLink> */}
        <NavLink to="/AdminFormation">
          <img
            className={
              location.pathname === "/AdminFormation"
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="/public/DashBoardA.svg"
            alt="UTILS"
          />
        </NavLink>
        <NavLink to="/AdminFormation/formations_non_cloture">
          <img
            className={
              location.pathname === "/AdminFormation/formations_non_cloture"
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="/public/quill_paperA.svg"
            alt="UTILS"
          />
        </NavLink>
        <NavLink to="/AdminFormation/ajouter_une_formation">
          <img
            className={
              location.pathname === "/AdminFormation/ajouter_une_formation"
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="/public/gg_add-r.svg"
            alt="UTILS"
          />
        </NavLink>
        <NavLink to="/AdminFormation/formations_cloture">
          <img
            className={
              location.pathname === "/AdminFormation/formations_cloture"
                ? style.utils
                : `${style.utils} ${style.active}`
            }
            src="/public/iconamoon_file-closeA.svg"
            alt="UTILS"
          />
        </NavLink>
        <NavLink to="/AdminFormation/parametre">
          <img
            className={
              location.pathname === "/AdminFormation/parametre"
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
