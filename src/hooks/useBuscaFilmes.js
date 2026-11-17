import { useState, useEffect } from "react";
import axios from "axios";

export default function useBuscaFilmes(){
    const [nomeFilme, setNomeFilme] = useState("")
    const [filmes, setFilmes] = useState([])
    const [buscaRealizada, setBuscaRealizada] = useState(false)
    const [filmeAtual, setFilmeAtual] = useState(0)

    useEffect(() => {
  const tempo = setTimeout(async () => {
    if (nomeFilme.trim() === "") {
      setFilmes([]);
      setBuscaRealizada(false);
      setFilmeAtual(0);
      return;
    }

    try {
      const resposta = await axios.get(
        `https://www.omdbapi.com/?s=${encodeURIComponent(nomeFilme)}&apikey=52a3729b`
      );

      setFilmes(resposta.data.Search || []);
      setFilmeAtual(0);
      setBuscaRealizada(true);
    } catch (erro) {
      console.error("Erro ao buscar filmes:", erro);
      setFilmes([]);
      setBuscaRealizada(true);
    }
  }, 800);

  return () => clearTimeout(tempo);
}, [nomeFilme]);

function anterior() {
  setFilmeAtual((atual) => atual - 1);
}

function proximo() {
  setFilmeAtual((atual) => atual + 1);
}

const filme = filmes[filmeAtual];
return {
  nomeFilme,
  setNomeFilme,
  filmes,
  buscaRealizada,
  filmeAtual,
  filme,
  anterior,
  proximo,
};
}