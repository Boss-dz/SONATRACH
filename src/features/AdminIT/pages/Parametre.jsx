import style from "./Parametre.module.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Titre from "../components/Titre";
import ToggleProfile from "../components/ToggleProfile";
import ParametreModule from "../components/ParametreModule";
import AppSettings from "../components/AppSettings";
import Footer from "../components/Footer";
export default function Parametre() {
  return (
    <div className={style.container}>
      <Sidebar />
      <div
        style={{
          maxHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Titre />
        <ToggleProfile />
        <ParametreModule
          toggleId="Profil"
          title="Profil"
          inputName1="Email"
          inputName2="Mot de passe"
        />
        <ParametreModule
          toggleId="AuthLDAP"
          title="Authentification LDAP"
          inputName1="Serveur LDAP"
          inputName2="PORT"
          inputName3="Base DN"
          inputName4="DN du compte"
        />
        <ParametreModule
          toggleId="Messagerie"
          title="Messagerie"
          inputName1="Courriel de l'administrateur"
          inputName2="Nom de l'administrateur"
          inputName3="Nom d’utilisateur"
          inputName4="Mot de passe"
          secondBtn="Envoyer un couriel de test a l’administrateur"
          secondBtnStyle="white"
        />
        <ParametreModule
          toggleId="Synchronisation"
          title="Synchronisation"
          inputName1="Période de synchronisation automatique (en jours)"
          mainBtn="Synchroniser Manuellement"
          secondBtn="Enregistrer"
        />
        <Footer change />
      </div>
    </div>
  );
}
