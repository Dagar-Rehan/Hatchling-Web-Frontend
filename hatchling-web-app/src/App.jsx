import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import EditorPage from "./pages/EditorPage.jsx";
import CharactersPage from "./pages/CharactersPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import HelpPage from "./pages/HelpPage.jsx";
import Error404Page from "./pages/Error404Page.jsx";

function App() {
  return (
    <Router className="bg-stone-800 text-lime-200">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </Router>
  );
}

export default App;
