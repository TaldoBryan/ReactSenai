import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import FilmesPages from "./pages/FilmePages.jsx";
import PokemonPage from "./pages/PokemonPage.jsx";
import DBZPages from "./pages/DBZPages.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<FilmesPages />} />
        <Route path="/pokemon" element={<PokemonPage />} />
        <Route path="/dbz" element={<DBZPages />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;