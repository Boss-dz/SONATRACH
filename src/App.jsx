import Authentification from "./features/Authentification";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomepageAF from "./features/AdminFormation/pages/HomepageAF";
import FormationNonCloture from "./features/AdminFormation/pages/FormationNonCloture";
import AjouterFormation from "./features/AdminFormation/pages/AjouterFormation";
import FormationCloture from "./features/AdminFormation/pages/FormationCloture";
import Parametre from "./features/AdminFormation/pages/Parametre";

export default function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<HomepageP />} />
        <Route path="/questionnaire_en_attente" element={<QuestEnAttente />} />
        <Route path="/questionnaire_non_cloture" element={<QuestNonClot />} />
        <Route path="/questionnaire_cloture" element={<QuestClot />} />
        <Route path="/parametre" element={<Parametre />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<HomepageAF />} />
        <Route
          path="/formations_non_cloture"
          element={<FormationNonCloture />}
        />
        <Route path="/ajouter_une_formation" element={<AjouterFormation />} />
        <Route path="/formations_cloture" element={<FormationCloture />} />
        <Route path="/parametre" element={<Parametre />} /> {/* mabedeltoch */}
      </Routes>
    </BrowserRouter>
  );
}
