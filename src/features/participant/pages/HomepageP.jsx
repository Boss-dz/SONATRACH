import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import style from "./HomepageP.module.css";
import Welcome from "../component/Welcome";
import Notification from "../component/Notification";

export default function HomepageP() {
  return (
    <div className={style.container}>
      <Header />
      <Sidebar />
      <Welcome />
      <Notification />
      <Notification />
    </div>
  );
}
