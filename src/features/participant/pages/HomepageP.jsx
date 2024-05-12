import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import style from "./HomepageP.module.css";
import Welcome from "../component/Welcome";
import Notification from "../component/Notification";
import Footer from "../component/Footer";
export default function HomepageP() {
  return (
    <div className={style.container}>
      <Header />
      <Sidebar />
      <Welcome content="Bienvenue , Rayane" />
      <div className={style.notificationContainer}>
        <Notification />
        <Notification
          addStyle={style.secondNotification}
        />
      </div>
      <Footer />
    </div>
  );
}
