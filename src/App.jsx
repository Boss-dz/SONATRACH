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

import HomepageAIT from "./features/AdminIT/pages/HomepageAIT";
import GererMembres from "./features/AdminIT/pages/GererMembres";
import InfoMembre from "./features/AdminIT/pages/InfoMembre";
import EditInfoMembre from "./features/AdminIT/pages/EditInfoMembre";
import AjouterMembre from "./features/AdminIT/pages/AjouterMembre";
import GererRoles from "./features/AdminIT/pages/GererRoles";
import ParametreAIT from "./features/AdminIT/pages/Parametre";

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

        <Route path="/AdminIT" element={<HomepageAIT />} />
        <Route path="/AdminIT/gerer_les_membres" element={<GererMembres />} />
        <Route
          path="/AdminIT/gerer_les_membres/informations_d'un_membre"
          element={<InfoMembre />}
        />
        <Route
          path="/AdminIT/gerer_les_membres/informations_d'un_membre/modifier_les_informations_d'un_membre"
          element={<EditInfoMembre />}
        />
        <Route path="/AdminIT/ajouter_un_membre" element={<AjouterMembre />} />
        <Route path="/AdminIT/gerer_les_roles" element={<GererRoles />} />
        <Route path="/AdminIT/parametre" element={<ParametreAIT />} />
      </Routes>
    </BrowserRouter>
  );
}
