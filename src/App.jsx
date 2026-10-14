import { useState, useEffect } from "react";
import axios from "axios";

import Personagem from "./components/Personagem";
import Pokemon from "./components/Pokemon";
import BuscaFilme from "./components/BuscaFilmes";
import Nome from "./components/Nome"

function App() {
  const [personagem, setPersonagem] = useState(null);
  const [poke, setPoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res2 = await axios.get(
          "https://dragonball-api.com/api/characters/66"
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
      <BuscaFilme />
      <Nome />
      <div   style={{ //Eu não estava conseguindo deixar eles lado a lado na pagina do CSS então tentei por aqui
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "30px",
    width: "100%",
  }}>
      {personagem && <Personagem personagem={personagem} />}
      {poke && <Pokemon poke={poke} />}
      </div>
    </>
  );
}

export default App;
