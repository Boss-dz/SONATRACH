import style from "./GererMembres.module.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import QuestDetails from "../components/QuestDetails";
import Titre from "../components/Titre";
import Sidebar from "../components/Sidebar";
import AddButton from "../components/AddButton";
import UserType from "../components/UserType";

export default function GererMembres() {
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
          propData={[
            {
              userName: "sona02735",
              nom: "MELZI",
              prenom: "Rayane",
              structure: "IT",
              action: <UserType type="LDAP" />,
            },
            {
              userName: "sona02735",
              nom: "MELZI",
              prenom: "Rayane",
              structure: "IT",
              action: <UserType type="Local" />,
            },
            {
              userName: "sona02735",
              nom: "MELZI",
              prenom: "Rayane",
              structure: "IT",
              action: <UserType type="LDAP" />,
            },
            {
              userName: "sona02735",
              nom: "MELZI",
              prenom: "Rayane",
              structure: "IT",
              action: <UserType type="Local" />,
            },
            {
              userName: "sona02735",
              nom: "MELZI",
              prenom: "Rayane",
              structure: "IT",
              action: <UserType type="Local" />,
            },
            {
              userName: "sona02735",
              nom: "MELZI",
              prenom: "Rayane",
              structure: "IT",
              action: <UserType type="LDAP" />,
            },
          ]}
          lineHeight="small"
          link="/AdminIT/gerer_les_membres/informations_d'un_membre"
        />
        <AddButton />
        <Footer />
      </div>
    </div>
  );
}
