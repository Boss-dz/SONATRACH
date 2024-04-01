import style from "./QuestClot.module.css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Sidebar from "../component/Sidebar";
import Titre from "../component/Titre";
import QuestDetails from "../component/QuestDetails";

export default function QuestClot() {
  return (
    <div className={style.container}>
      <Header />
      <Sidebar />
      <Titre />
      <QuestDetails color="gray" />
      <Footer />
    </div>
  );
}
