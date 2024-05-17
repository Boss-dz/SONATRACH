import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import style from "./HomepageP.module.css";
import Welcome from "../components/Welcome";
import Notification from "../components/Notification";
import Footer from "../components/Footer";
import Graph from "../components/Graph";

export default function HomepageAF() {
  const userData = JSON.parse(localStorage.getItem("userData"));

  return (
    <div className={style.container}>
      <Sidebar />
      <div
        style={{
          maxHeight: "100vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Welcome content={`Bienvenue, ${userData.prenom}!`} change />
        <div className={style.notificationContainer}>
          <Graph />
          <Notification />
        </div>
        <Footer />
      </div>
    </div>
  );
}
