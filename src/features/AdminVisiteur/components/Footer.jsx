import style from "./Footer.module.css";
export default function Footer({ change }) {
  return (
    <div className={`${style.container} ${change ? style.change : ""}`}>
      <span>
        SONATRACH • Division Forage • Département Information et Technologies
      </span>
      <button className={style.button}>Contact</button>
    </div>
  );
}
