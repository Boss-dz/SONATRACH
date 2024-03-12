
import style from "./Welcome.module.css";

export default function Welcome() {
  return (
    <div className={style.welcome}>
      <div className={style.container}>
        <p className={style.text}>Your Text Here</p>
      </div>
    </div>
  );
}
