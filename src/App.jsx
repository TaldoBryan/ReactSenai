import { useState, useEffect } from "react";
import axios from "axios";

import Personagem from "./components/Personagem";
import Pokemon from "./components/Pokemon";
import BuscaFilme from "./components/BuscaFilmes";
import Nome from "./components/Nome"
import ThemeButton from "./components/ThemeButton"

function App() {
  const [personagem, setPersonagem] = useState(null);
  const [poke, setPoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res2 = await axios.get(
          "https://dragonball-api.com/api/characters/68"
        );

        const res3 = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/garchomp"
        );

        setPersonagem(res2.data);
        setPoke(res3.data);
      } catch (e) {
        console.error("Erro ao carregar API", e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro ao carregar.</div>;
  }

  return (
    <>
      <div>
        <ThemeButton />
      </div>
      <BuscaFilme />
      <br />
      <Nome />
      <div>
        <br />
        <h1>Personagem Favorito de DBZ</h1>
        <br />
      {personagem && <Personagem personagem={personagem} />}
      <br />
      <h1>Meu Pet</h1>
      {poke && <Pokemon poke={poke} />}
      </div>
      <br />
      
    </>
  );
}

export default App;
