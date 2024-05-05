import Authentification from "./features/Authentification";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomepageP from "./features/participant/pages/HomepageP";
import QuestEnAttente from "./features/participant/pages/QuestEnAttente";
import QuestNonClot from "./features/participant/pages/QuestNonClot";
import QuestClot from "./features/participant/pages/QuestClot";
import Questionnaire from "./features/participant/pages/Questionnaire";
import ParametreP from "./features/participant/pages/Parametre";

import HomepageAF from "./features/AdminFormation/pages/HomepageAF";
import FormationNonCloture from "./features/AdminFormation/pages/FormationNonCloture";
import AjouterFormation from "./features/AdminFormation/pages/AjouterFormation";
import FormationCloture from "./features/AdminFormation/pages/FormationCloture";
import ParametreAF from "./features/AdminFormation/pages/Parametre";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentification />} />
        <Route path="/Participant" element={<HomepageP />} />

        <Route
          path="/Participant/questionnaire_en_attente"
          element={<QuestEnAttente />}
        />
        <Route
          path="/Participant/questionnaire_non_cloture"
          element={<QuestNonClot />}
        />
        <Route
          path="/Participant/questionnaire_cloture"
          element={<QuestClot />}
        />
        <Route path="/Participant/questionnaire" element={<Questionnaire />} />
        <Route path="/Participant/parametre" element={<ParametreP />} />
      </Routes>

      <Routes>
        <Route path="/AdminFormation" element={<HomepageAF />} />
        <Route
          path="/AdminFormation/formations_non_cloture"
          element={<FormationNonCloture />}
        />
        <Route
          path="/AdminFormation/ajouter_une_formation"
          element={<AjouterFormation />}
        />
        <Route
          path="/AdminFormation/formations_cloture"
          element={<FormationCloture />}
        />
        <Route path="/AdminFormation/parametre" element={<ParametreAF />} />
      </Routes>
    </BrowserRouter>
  );
}
