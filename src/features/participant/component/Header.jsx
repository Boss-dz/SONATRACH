import style from "./Header.module.css";

export default function Header() {
  return (
    <div className={style.container}>
      <input type="search" placeholder="Search Here" />
      <div className={style.img}>
        <img className={style.one} src="bell.svg" alt="bell" />
        <img className={style.one} src="Mask_group.svg" alt="profile" />
      </div>
    </div>
  );
}
