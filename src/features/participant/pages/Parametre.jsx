import style from "./Parametre.module.css";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import Titre from "../component/Titre";
import ToggleProfile from "../component/ToggleProfile";
import Footer from "../component/Footer";
import Profile from "../component/Profile";
import EditProfile from "../component/EditProfile";
import InfoPersonnel from "../component/InfoPersonnel";
export default function Parametre() {
  return (
    <div className={style.container}>
      <Header />
      <Sidebar />
      <Titre />
      <ToggleProfile />
      <div className={style.profile}>
        <Profile />
        <EditProfile />
      </div>
      <InfoPersonnel />
      <Footer change />
    </div>
  );
}
