import style from "./Button.module.css";

export default function Button({ content, onClick }) {
  return (
    <button className={style.btn} onClick={onClick}>
      {content}
    </button>
  );
}
