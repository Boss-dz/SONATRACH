import React from "react";
import Welcome from "./participant/component/Welcome";
import Button from "./participant/component/Button";
import Footer from "./participant/component/Footer";

import style from "./Authentification.module.css";

function Authentification() {
  return (
    <div className={style.container}>
      <Welcome content="Connexion a la platform des Réponses aux questionnaire d'évaluation des formation à chaud" />

      <form action="" className={style.form}>
        <label htmlFor="" className={style.label}>
          Nom d'utilisateur :
        </label>
        <input type="text" name="" id="" className={style.input} />
        <label htmlFor="" className={style.label}>
          Mot de passe :
        </label>
        <input type="password" name="" id="" className={style.input} />

        <div className={style.btn}>
          <Button content="se connecter" />
        </div>
      </form>

      <Footer />
    </div>
  );
}

export default Authentification;
