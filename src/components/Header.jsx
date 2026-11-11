import ThemeButton from "./ThemeButton";
import "../styles/Header.css";
import BuscaFilme from "./BuscaFilmes";

function Header() {
    return (
        <header className="app-header">
            <ThemeButton />
            <BuscaFilme />
        </header>
    );
}

export default Header;
