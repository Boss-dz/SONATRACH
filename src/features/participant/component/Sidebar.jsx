import style from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={style.sidebar}>
      <div className={style.choices}>
        <img className={style.logo} src="Logo_Mask.svg" alt="LOGO" />
        <img className={style.utils} src="DashBoard.svg" alt="UTILS" />
        <img className={style.utils} src="quill_paper.svg" alt="UTILS" />
        <img className={style.utils} src="bx_edit.svg" alt="UTILS" />
        <img
          className={style.utils}
          src="iconamoon_file-close.svg"
          alt="UTILS"
        />
        <img className={style.utils} src="setting.svg" alt="UTILS" />
      </div>

      <div className={style.out}>
        <img src="sign-out.svg" alt="OUT" />
      </div>
    </div>
  );
}
