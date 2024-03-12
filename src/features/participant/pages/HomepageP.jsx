import Sidebar from "../component/Sidebar";
import Header from "../component/Header";
import style from "./HomepageP.module.css";
import Welcome from "../component/Welcome";
export default function HomepageP() {
  return (
    <div className={style.container}>
      <Header />
      <Sidebar />
      <Welcome />
    </div>
  );
}
