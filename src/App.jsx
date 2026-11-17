import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import FilmesPages from "./pages/FilmePages.jsx";
import PokemonPage from "./pages/PokemonPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<FilmesPages />} />
        <Route path="/pokemon" element={<PokemonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;