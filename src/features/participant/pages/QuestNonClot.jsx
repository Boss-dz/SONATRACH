import style from "./QuestNonClot.module.css";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Titre from "../component/Titre";
import QuestDetails from "../component/QuestDetails";
import Footer from "../component/Footer";
export default function QuestNonClot() {
  return (
    <div className={style.container}>
      <Header />
      <Sidebar />
      <Titre />
      <QuestDetails color="#302CD780" isCloture={false}/>
      <Footer />
    </div>
  );
}
