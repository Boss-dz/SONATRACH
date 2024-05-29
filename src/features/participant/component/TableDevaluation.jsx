import { useState } from "react";
import style from "./TableDevaluation.module.css";

export default function TableDevaluation() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [section3Visible, setSection3Visible] = useState(false);

  const handleOptionChange = (sectionIndex, rowIndex, colIndex) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [`${sectionIndex}-${rowIndex}`]: colIndex,
    }));
  };

  const handleSection3VisibilityChange = (event) => {
    const isVisible = event.target.value === "yes";
    setSection3Visible(isVisible);

    if (!isVisible) {
      // Clear selected options for section 3 when not concerned
      setSelectedOptions((prevState) => {
        const newState = { ...prevState };
        for (let key in newState) {
          if (key.startsWith("2-")) {
            delete newState[key];
          }
        }
        return newState;
      });
    }
  };
  console.log(selectedOptions);
  const renderCell = (sectionIndex, rowIndex, colIndex, emoji, altText) => (
    <td
      key={`${sectionIndex}-${rowIndex}-${colIndex}`}
      className={style.emojis}
      onClick={() => handleOptionChange(sectionIndex, rowIndex, colIndex)}
    >
      {selectedOptions[`${sectionIndex}-${rowIndex}`] === colIndex ? (
        <img src="/public/mdi_check-bold.svg" alt="Checkmark" />
      ) : (
        <img src={emoji} alt={altText} />
      )}
    </td>
  );

  const calculateSatisfactionRate = () => {
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0 };
    Object.values(selectedOptions).forEach((value) => {
      counts[value] += 1;
    });
    const N =
      counts[1] * 0.25 + counts[2] * 0.5 + counts[3] * 0.75 + counts[4] * 1;
    const satisfactionRate = (N / 22) * 100;
    console.log(`Satisfaction Rate: ${satisfactionRate.toFixed(2)}%`);
    return satisfactionRate.toFixed(2);
  };

  const handleSave = async () => {
    if (!validateSelections()) {
      alert("Please select an option in each row.");
      return;
    }

    try {
      const satisfactionRate = calculateSatisfactionRate();
      const formationID = 1; // Replace with actual formationID
      const userID = 1; // Replace with actual userID
      const response = await fetch("http://localhost:8000/api/Responses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formationID,
          userID,
          selectedOptions,
          satisfactionRate,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save responses");
      }

      console.log("Responses saved successfully");
      alert("Responses saved successfully");
      setSelectedOptions({});
    } catch (error) {
      console.error("Error saving responses:", error);
      alert("Error saving responses. Please try again.");
    }
  };

  const validateSelections = () => {
    for (
      let sectionIndex = 0;
      sectionIndex < tableData.length;
      sectionIndex++
    ) {
      if (sectionIndex === 2 && !section3Visible) continue;
      for (
        let rowIndex = 0;
        rowIndex < tableData[sectionIndex].rows.length;
        rowIndex++
      ) {
        if (!selectedOptions.hasOwnProperty(`${sectionIndex}-${rowIndex}`)) {
          return false;
        }
      }
    }
    return true;
  };

  const tableData = [
    {
      section: "1. Qualité pédagogique de la formation",
      rows: [
        "Adaptation du contenu à votre niveau",
        "Conformité du contenu à ce qui était prévu",
        "Adéquation par rapport aux besoins professionnels",
        "Équilibre entre les parties théorique et pratique",
        "Exercices, Étude de cas, jeux de rôles",
        "Les supports pédagogiques",
      ],
    },
    {
      section: "2. Le Formateur",
      rows: [
        "Maîtrise du thème",
        "Gestion du temps",
        "Efficacité des méthodes et techniques pédagogiques utilisées",
        "Écoute, compréhension des problèmes et réponses aux questions",
        "Implication des participants",
      ],
    },
    {
      section: "3. Environnement et Logistique",
      rows: [
        "Accueil",
        "Organisation",
        "Salle de formation/équipements",
        "Hébergement",
        "Restauration",
      ],
    },
    {
      section: "4. Groupe",
      rows: [
        "Homogénéité du groupe",
        "Intensité des échanges dans le groupe et participation",
      ],
    },
    {
      section: "5. Appréciation globale",
      rows: [
        "Information préalable sur le contenu de la formation",
        "Atteinte des objectifs de la formation",
        "Durée de la formation",
        "Possibilité de mettre en œuvre les acquis de la formation",
      ],
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.tableContainer}>
        <table>
          <thead>
            <tr className={style.tableHead}>
              <th>AXES D'EVALUATION</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((section, sectionIndex) => (
              <>
                <tr key={`section-${sectionIndex}`}>
                  <td colSpan={1} className={style.color}>
                    {section.section}
                  </td>
                </tr>
                {sectionIndex === 2 && (
                  <tr key={`section3-options`}>
                    <td className={style.concernedText} colSpan={1}>
                      Concerné
                    </td>
                    <td colSpan={2}>
                      <input
                        type="radio"
                        name="section3"
                        value="yes"
                        checked={section3Visible === true}
                        onChange={handleSection3VisibilityChange}
                      />
                      Yes
                    </td>
                    <td colSpan={2}>
                      <input
                        type="radio"
                        name="section3"
                        value="no"
                        checked={section3Visible === false}
                        onChange={handleSection3VisibilityChange}
                      />
                      No
                    </td>
                  </tr>
                )}
                {(sectionIndex !== 2 || section3Visible) &&
                  section.rows.map((row, rowIndex) => (
                    <tr key={`${sectionIndex}-${rowIndex}`}>
                      <td>{row}</td>
                      {renderCell(
                        sectionIndex,
                        rowIndex,
                        1,
                        "/public/Insatisfait.svg",
                        "Insatisfait"
                      )}
                      {renderCell(
                        sectionIndex,
                        rowIndex,
                        2,
                        "/public/Peu_satisfait.svg",
                        "Peu satisfait"
                      )}
                      {renderCell(
                        sectionIndex,
                        rowIndex,
                        3,
                        "/public/Satisfait.svg",
                        "Satisfait"
                      )}
                      {renderCell(
                        sectionIndex,
                        rowIndex,
                        4,
                        "/public/TresSatisfait.svg",
                        "Très satisfait"
                      )}
                    </tr>
                  ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={handleSave} className={style.saveButton}>
        Enregistrer
      </button>
    </div>
  );
}
