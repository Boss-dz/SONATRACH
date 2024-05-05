import style from "./Parametre.module.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Titre from "../components/Titre";
import ToggleProfile from "../components/ToggleProfile";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import EditProfile from "../components/EditProfile";
import InfoPersonnel from "../components/InfoPersonnel";
import AppSettings from "../components/AppSettings";
export default function Parametre() {
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
        <Titre />
        <ToggleProfile />
        <div className={style.profile} id="profile">
          <Profile />
          <EditProfile />
        </div>
        <InfoPersonnel />
        <AppSettings />
        <Footer change />
      </div>
    </div>
  );
}
