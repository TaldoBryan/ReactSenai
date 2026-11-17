import { useState, useEffect } from "react";
import axios from "axios";

export default function usePokemon() {
  const [poke, setPoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function buscarPokemon() {
      try {
        const resposta = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/garchomp"
        );

        setPoke(resposta.data);
      } catch (erro) {
        console.error("Erro ao buscar Pokémon:", erro);
        setError("Não foi possível carregar o Pokémon.");
      } finally {
        setLoading(false);
      }
    }

    buscarPokemon();
  }, []);

  return { poke, loading, error };
}
