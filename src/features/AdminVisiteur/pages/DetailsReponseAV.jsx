import style from "./DetailsReponseAV.module.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BienvenueText from "../components/BienvenueText";
import QuestionnaireInfo from "../components/QuestionnaireInfo";
import QuestUserInfo from "../components/QuestUserInfo";
import Satisfaction from "../components/Satisfaction";
import TableDevaluation from "../components/TableDevaluation";
import Footer from "../components/Footer";

export default function DetailsReponseAV() {
  return (
    <div className={style.container}>
      <Sidebar />
      <div
        style={{
          maxHeight: "100vh",
          width: "100%",
          display: "flex",
          gap: "35px",
          flexDirection: "column",
        }}
      >
        <Header />
        <div
          style={{
            padding: "0 70px",
          }}
        >
          <BienvenueText />
          <QuestUserInfo />
          <QuestionnaireInfo />
          <Satisfaction />
          <TableDevaluation isCloture={true} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
