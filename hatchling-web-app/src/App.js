import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../src/pages/HomePage.jsx";
import CharactersPage from "../src/pages/CharactersPage.jsx";
import AboutPage from "../src/pages/AboutPage.jsx";
import HelpPage from "../src/pages/HelpPage.jsx";
import Error404Page from "../src/pages/Error404Page.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </Router>
  );
}

export default App;
