import HomepageP from "./features/participant/pages/HomepageP";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestEnAttente from "./features/participant/pages/QuestEnAttente";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomepageP />} />
        <Route path="/Questionnaire_En_Attente" element={<QuestEnAttente />} />
      </Routes>
    </BrowserRouter>
  );
}
