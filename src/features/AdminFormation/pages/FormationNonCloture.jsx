import Footer from "../components/Footer";
import Header from "../components/Header";
import QuestDetails from "../components/QuestDetails";
import Titre from "../components/Titre";
import Sidebar from "../components/Sidebar";
import style from "./FormationNonCloture.module.css";
import AddButton from "../components/AddButton";

export default function QuestEnAttente() {
  return (
    <div className={style.container}>
      <Sidebar />
      <div
        style={{
          maxHeight: "100vh",
          width: "100%",
          // overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Titre />
        <QuestDetails />
        <AddButton />
        <Footer />
      </div>
    </div>
  );
}
