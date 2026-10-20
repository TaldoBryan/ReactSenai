import { useState, useEffect } from "react";

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
        <button onClick={mudarTema}>
        {darkMode? "Tema Claro": "Tema Escuro"}
        </button>
    )
}

export default themeButton