import HomepageP from "./features/participant/pages/HomepageP";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestEnAttente from "./features/participant/pages/QuestEnAttente";
import QuestNonClot from "./features/participant/pages/QuestNonClot";
import QuestClot from "./features/participant/pages/QuestClot";
import Parametre from "./features/participant/pages/Parametre";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomepageP />} />
        <Route path="/questionnaire_en_attente" element={<QuestEnAttente />} />
        <Route path="/questionnaire_non_cloture" element={<QuestNonClot />} />
        <Route path="/questionnaire_cloture" element={<QuestClot />} />
        <Route path="/parametre" element={<Parametre />} />
      </Routes>
    </BrowserRouter>
  );
}
