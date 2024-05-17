import style from "./EditProfile.module.css";
import Button from "./Button";
export default function EditProfile() {
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div className={style.container}>
      <h2 className={style.title}>Modifier le profil</h2>
      <form action="POST" className={style.form}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className={style.input}
          id="email"
          value={userData.email}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          className={style.input}
          id="password"
          value={userData.password}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "15px",
          }}
        >
          <Button content="Enregistrer" />
        </div>
      </form>
    </div>
  );
}
