import style from "./Parametre.module.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Titre from "../components/Titre";
import ToggleProfile from "../components/ToggleProfile";
import ParametreModule from "../components/ParametreModule";
import AppSettings from "../components/AppSettings";
import Footer from "../components/Footer";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Parametre() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [user, setUser] = useState(userData);
  const [ldap, setLdap] = useState({});

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/user/${userData.username}`
        );
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching the user information", error);
      }
    };

    const fetchLDAPdata = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/parametres`
        );
        console.log(response.data);
        setLdap(response.data);
      } catch (error) {
        console.error("Error fetching the LDAP Server information", error);
      }
    };

    fetchUserInfo();
    fetchLDAPdata();
  }, []);

  useEffect(() => {
    console.log(ldap);
  }, [ldap]);

  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);

  const handleProfileSubmit = async (event) => {
    event.preventDefault();

    const updatedData = {
      password: event.target["Mot de passe"].value,
      nom: userData.nom,
      prenom: userData.prenom,
      email: event.target["Email"].value,
      fonction: userData.fonction,
      structureID: userData.structureID,
    };

    try {
      await axios.put(
        `http://localhost:8000/api/user/${user.username}`,
        updatedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Paramètres de profil mis à jour avec succès !");
    } catch (error) {
      console.error("Error updating LDAP settings", error);
      alert("Échec de la mise à jour des paramètres de profil.");
    }
  };

  const handleLDAPSubmit = async (event) => {
    event.preventDefault();

    const updatedData = {
      ServeurLDAP: event.target["Serveur LDAP"].value,
      PORT: event.target["PORT"].value,
      baseDN: event.target["Base DN"].value,
      DN_cmpt: event.target["DN du compte"].value,
      Serveur_msgr: ldap.Serveur_msgr,
      nom_Admin: ldap.nom_Admin,
      LDAP_username: ldap.LDAP_username,
      LDAP_password: ldap.LDAP_password,
      periode_synch: ldap.periode_synch,
    };

    try {
      await axios.put(`http://localhost:8000/api/parametres`, updatedData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Paramètres LDAP mis à jour avec succès !");
    } catch (error) {
      console.error("Error updating LDAP settings", error);
      alert("Échec de la mise à jour des paramètres LDAP.");
    }
  };

  const handleMessagerieSubmit = async (event) => {
    event.preventDefault();

    const updatedData = {
      ServeurLDAP: ldap.ServeurLDAP,
      PORT: ldap.PORT,
      baseDN: ldap.baseDN,
      DN_cmpt: ldap.DN_cmpt,
      Serveur_msgr: event.target["Courriel de l'administrateur"].value,
      nom_Admin: event.target["Nom de l'administrateur"].value,
      LDAP_username: event.target["Nom d’utilisateur"].value,
      LDAP_password: event.target["Mot de passe"].value,
      periode_synch: ldap.periode_synch,
    };

    try {
      await axios.put(`http://localhost:8000/api/parametres`, updatedData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Paramètres de messagerie mis à jour avec succès !");
    } catch (error) {
      console.error("Error updating messagerie settings", error);
      alert("Échec de la mise à jour des paramètres de messagerie.");
    }
  };

  const handleSynchronisationSubmit = async (event) => {
    event.preventDefault();

    const updatedData = {
      ServeurLDAP: ldap.ServeurLDAP,
      PORT: ldap.PORT,
      baseDN: ldap.baseDN,
      DN_cmpt: ldap.DN_cmpt,
      Serveur_msgr: ldap.Serveur_msgr,
      nom_Admin: ldap.nom_Admin,
      LDAP_username: ldap.LDAP_username,
      LDAP_password: ldap.LDAP_password,
      periode_synch:
        event.target["Période de synchronisation automatique (en jours)"].value,
    };

    try {
      await axios.put(`http://localhost:8000/api/parametres`, updatedData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert("Paramètres de synchronisation mis à jour avec succès !");
    } catch (error) {
      console.error("Error updating synchronisation settings", error);
      alert("Échec de la mise à jour des paramètres de synchronisation.");
    }
  };

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
        <Titre searchbar={false} />
        <ToggleProfile />
        <ParametreModule
          toggleId="Profil"
          title="Profil"
          inputName1="Email"
          value1={user.email}
          inputName2="Mot de passe"
          value2={user.password}
          onSubmit={handleProfileSubmit}
        />
        <ParametreModule
          toggleId="AuthLDAP"
          title="Authentification LDAP"
          inputName1="Serveur LDAP"
          value1={ldap.ServeurLDAP}
          inputName2="PORT"
          value2={ldap.PORT}
          inputName3="Base DN"
          value3={ldap.baseDN}
          inputName4="DN du compte"
          value4={ldap.DN_cmpt}
          onSubmit={handleLDAPSubmit}
        />
        <ParametreModule
          toggleId="Messagerie"
          title="Messagerie"
          inputName1="Courriel de l'administrateur"
          value1={ldap.Serveur_msgr}
          inputName2="Nom de l'administrateur"
          value2={ldap.nom_Admin}
          inputName3="Nom d’utilisateur"
          value3={ldap.LDAP_username}
          inputName4="Mot de passe"
          value4={ldap.LDAP_password}
          secondBtn="Envoyer un couriel de test a l’administrateur"
          secondBtnStyle="white"
          onSubmit={handleMessagerieSubmit}
        />
        <ParametreModule
          toggleId="Synchronisation"
          title="Synchronisation"
          inputName1="Période de synchronisation automatique (en jours)"
          value1={ldap.periode_synch}
          mainBtn="Synchroniser Manuellement"
          secondBtn="Enregistrer"
          onSubmit={handleSynchronisationSubmit}
        />
        <Footer change />
      </div>
    </div>
  );
}
