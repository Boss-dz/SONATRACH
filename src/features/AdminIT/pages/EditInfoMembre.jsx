import style from "./InfoMembre.module.css";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Titre from "../components/Titre";
import Footer from "../components/Footer";
import FormModule from "../components/FormModule";
import { useNavigate } from "react-router-dom";

export default function InfoMembre() {
  const navigate = useNavigate();
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
        <Titre titre="Informations d'un Membre" searchbar={false} />

        <FormModule
          inputs={[
            [
              { label: "Nom :", type: "text" },
              { label: "Prénom :", type: "text" },
            ],
            [
              { label: "Fonction :", type: "select", options: ["A", "A", "A"] },
              {
                label: "Structure :",
                type: "select",
                options: ["A", "A", "A"],
              },
            ],
            [{ label: "Email :", type: "email" }],
            [{ label: "Mot de passe :", type: "text" }],
          ]}
          secondBtn="Annuler"
          secondBtnStyle="minimal"
          secondBtnOnClick={() =>
            navigate("/AdminIT/gerer_les_membres/informations_d'un_membre")
          }
        />

        <Footer />
      </div>
    </div>
  );
}
