import ThemeButton from "./ThemeButton";
import "../styles/Header.css";
import BuscaFilme from "./BuscaFilmes";
import Nome from "./Nome";
import { Link } from "react-router-dom";

function Header({ nomeFilme, setNomeFilme, mostrarBusca = true }) {
  return (
    <header className="app-header">

        <nav>
            <Link to="/">Home</Link>
            <Link to="/filmes">Filmes</Link>
            <Link to="/pokemon">Pokémon</Link>
            <Link to="/dbz">Dragon Ball</Link>
        </nav>

      <ThemeButton />

      {mostrarBusca && (
        <BuscaFilme
        nomeFilme={nomeFilme}
        setNomeFilme={setNomeFilme}
      />
      )}

      <div className="nome-style">
        <Nome />
      </div>
    </header>
  );
}

export default Header;
