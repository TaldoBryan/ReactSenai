import { useState, useEffect } from "react";
import "../styles/ThemeButton.css"

function themeButton(){
    const [darkMode, setDarkMode] = useState(true)
    useEffect(() => {
        document.documentElement.dataset.theme =
        darkMode ? "dark" : "light";
        }, [darkMode]);

    function mudarTema(){
        setDarkMode(!darkMode)
    }

    return(
        <button
        className="theme-button"
        onClick={mudarTema}
        type="button"
        aria-pressed={darkMode}
        >
        {darkMode? "Tema Claro": "Tema Escuro"}
        </button>
    )
}

export default themeButton