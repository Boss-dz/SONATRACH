import Footer from "../component/Footer";
import Header from "../component/Header";
import QuestDetails from "../component/QuestDetails";
import Sidebar from "../component/Sidebar";
import Titre from "../component/Titre";
import style from "./QuestEnAttente.module.css";
export default function QuestEnAttente() {
  return (
    <div className={style.container}>
      <Header />
      <Sidebar />
      <Titre />
      <QuestDetails />
      <Footer />
    </div>
  );
}
