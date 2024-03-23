import { NavLink } from "react-router-dom";
import style from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={style.sidebar}>
      <div className={style.choices}>
        <NavLink to="/">
          <img className={style.logo} src="Logo_Mask.svg" alt="LOGO" />
        </NavLink>
        <NavLink to="/">
          <img className={style.utils} src="DashBoard.svg" alt="UTILS" />
        </NavLink>
        <NavLink to="Questionnaire_En_Attente">
          <img className={style.utils} src="quill_paper.svg" alt="UTILS" />
        </NavLink>
        {/* <NavLink> */}
        <img className={style.utils} src="bx_edit.svg" alt="UTILS" />
        {/* </NavLink> */}
        {/* <NavLink> */}
        <img
          className={style.utils}
          src="iconamoon_file-close.svg"
          alt="UTILS"
        />
        {/* </NavLink> */}
        {/* <NavLink> */}
        <img className={style.utils} src="setting.svg" alt="UTILS" />
        {/* </NavLink> */}
      </div>

      <div className={style.out}>
        {/* <NavLink> */}
        <img src="sign-out.svg" alt="OUT" />
        {/* </NavLink> */}
      </div>
    </div>
  );
}
