import style from "./AddParticipant.module.css";
import Titre from "./Titre";
import CloseBtn from "./CloseBtn";
import QuestDetails from "./QuestDetails";
import SearchBar from "./SearchBar";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";

function AddParticipant({
  active,
  setActive,
  membresConcernes,
  setMembresConcernes,
}) {
  const [users, setUsers] = useState([]);
  const [structures, setStructures] = useState({});

  useEffect(() => {
    const fetchUsersAndStructures = async () => {
      try {
        const userResponse = await axios.get("http://localhost:8000/allUsers");
        const structureResponse = await axios.get(
          "http://localhost:8000/api/structure"
        );

        const structureMap = structureResponse.data.reduce((map, structure) => {
          map[structure.structureID] = structure.nom_structure;
          return map;
        }, {});

        const usersWithStructureNames = userResponse.data.map((user) => ({
          ...user,
          structureID: structureMap[user.structureID] || "Unknown Structure",
        }));

        setUsers(usersWithStructureNames);
      } catch (error) {
        console.error("Error fetching users or structures:", error);
      }
    };

    fetchUsersAndStructures();
  }, []);

  const handleClick = useCallback(() => {
    setActive(false);
  }, []);
  return (
    <div
      className={style.blurredBackground}
      style={{ visibility: active ? "visible" : "hidden" }}
    >
      <div className={style.container}>
        <div
          style={{
            display: `flex`,
            justifyContent: `flex-end`,
            margin: "10px 10px 0 0",
          }}
        >
          <CloseBtn onClick={handleClick} />
        </div>
        <Titre titre="Ajouter des participants" searchbar={false} />
        <div
          style={{
            display: `flex`,
            justifyContent: `flex-end`,
            margin: "10px 10px 0 0",
          }}
        >
          <SearchBar
            border={{
              border: "solid #B1B5B8 1px",
              borderRadius: "10px",
              width: "300px",
              height: "38px",
              overflow: "hidden",
              margin: "0 60px 40px 0",
            }}
          />
        </div>

        <QuestDetails
          color="#f29e4f"
          columns={["Nom", "Prénom", "Fonction", "Structure", "Action"]}
          propData={users}
          dataType="utilisateur"
          border={true}
          lineHeight="small"
          setMembresConcernes={setMembresConcernes}
          membresConcernes={membresConcernes}
        />
      </div>
    </div>
  );
}

export default AddParticipant;

// [
//   {
//     nom: "MELZI",
//     prenom: "Rayane",
//     fonction: "Ingénieur Etudes et Développement Informatique",
//     structure: "IT",
//   },
//   {
//     nom: "HAOUA",
//     prenom: "Mohammed Nouredine",
//     fonction: "Ingénieur Etudes et Développement Informatique",
//     structure: "IT",
//   },
//   {
//     nom: "MELZI",
//     prenom: "Rayane",
//     fonction: "Ingénieur Etudes et Développement Informatique",
//     structure: "IT",
//   },
//   {
//     nom: "HAOUA",
//     prenom: "Mohammed Nouredine",
//     fonction: "Ingénieur Etudes et Développement Informatique",
//     structure: "IT",
//   },
//   {
//     nom: "nom",
//     prenom: "prenom",
//     fonction: "fonction",
//     structure: "structure",
//   },
//   {
//     nom: "HAOUA",
//     prenom: "Mohammed Nouredine",
//     fonction: "Ingénieur Etudes et Développement Informatique",
//     structure: "IT",
//   },
//   {
//     nom: "nom",
//     prenom: "prenom",
//     fonction: "fonction",
//     structure: "structure",
//   },
//   {
//     nom: "HAOUA",
//     prenom: "Mohammed Nouredine",
//     fonction: "Ingénieur Etudes et Développement Informatique",
//     structure: "IT",
//   },
//   {
//     nom: "nom",
//     prenom: "prenom",
//     fonction: "fonction",
//     structure: "structure",
//   },
//   {
//     nom: "HAOUA",
//     prenom: "Mohammed Nouredine",
//     fonction: "Ingénieur Etudes et Développement Informatique",
//     structure: "IT",
//   },
//   {
//     nom: "nom",
//     prenom: "prenom",
//     fonction: "fonction",
//     structure: "structure",
//   },
// ];
