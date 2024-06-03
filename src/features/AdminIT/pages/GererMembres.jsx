import style from "./GererMembres.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import QuestDetails from "../components/QuestDetails";
import Titre from "../components/Titre";
import Sidebar from "../components/Sidebar";
import AddButton from "../components/AddButton";
import UserType from "../components/UserType";

import { useState, useEffect } from "react";
import axios from "axios";

export default function GererMembres() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/allUsers-structure"
        );
        const formatedAllUsers = response.data.map((user) => {
          return {
            userName: user.username,
            nom: user.nom,
            prenom: user.prenom,
            structure: user.nom_structure,
            action: (
              <UserType
                type={
                  user.username.substring(0, 4) == "sona" ? "LDAP" : "Local"
                }
              />
            ),
          };
        });
        // console.log(formatedAllUsers);
        setAllUsers(formatedAllUsers);
      } catch (error) {
        console.error("Error fetching Users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className={style.container}>
      <Sidebar />
      <div
        style={{
          maxHeight: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "0 70px",
        }}
      >
        <Header />
        <Titre />
        <QuestDetails
          color="#68676E80"
          columns={["Nom d’Utilisateur", "Nom", "Prénom", "Structure", "Type"]}
          propData={allUsers}
          lineHeight="small"
          link="/AdminIT/gerer_les_membres/informations_d'un_membre"
        />
        <AddButton />
        <Footer />
      </div>
    </div>
  );
}
