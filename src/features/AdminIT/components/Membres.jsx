import React from "react";
import style from "./Membres.module.css";
import Titre from "./Titre";
import QuestDetails from "./QuestDetails";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

function VerticalDotsIcon() {
  return (
    <div
      style={{
        fontSize: "20px",
        fontWeight: "900",
      }}
    >
      &#8942;
    </div>
  );
}

function Membres({ roleFilter, setRoleFilter }) {
  return (
    <div>
      <Titre
        titre="Membres"
        padding={{ paddingLeft: "0", paddingRight: "0", paddingTop: "0" }}
        size="small"
      />
      <div className={style.container}>
        <QuestDetails
          columns={["Nom", "Prénom", "", "Roles"]}
          propData={[
            {
              nom: "Rayane",
              prenom: "MELZI",
              vide1: "",
              vide2: "",
              action: <VerticalDotsIcon />,
              roles: ["Participant", "Admin Formation"],
            },
            {
              nom: "Mohammed",
              prenom: "HAOUA",
              vide1: "",
              vide2: "",
              action: <VerticalDotsIcon />,
              roles: ["Participant"],
            },
            {
              nom: "Nadjib",
              prenom: "DJELLALI",
              vide1: "",
              vide2: "",
              action: <VerticalDotsIcon />,
              roles: ["Admin IT"],
            },
            {
              nom: "Salah",
              prenom: "BENSAID",
              vide1: "",
              vide2: "",
              action: <VerticalDotsIcon />,
              roles: ["Admin Visiteur"],
            },
          ].filter((membre) => {
            return membre.roles.includes(roleFilter) || roleFilter === "tous";
          })}
          lineHeight="small"
          border={true}
        />
      </div>
    </div>
  );
}

export default Membres;
