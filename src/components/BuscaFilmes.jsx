
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/BuscaFilmes.css"

function BuscaFilme() {
  const [nomeFilme, setNomeFilme] = useState("");
  const [filmes, setFilmes] = useState([]);
  const [buscaRealizada, setBuscaRealizada] = useState(false);
  const [filmeAtual, setFilmeAtual] = useState(0);

    useEffect(() => {
    const tempo = setTimeout(() => {
      if (nomeFilme.trim() !== "") {
        buscarFilme(nomeFilme);
      } else {
        setFilmes([]);
        setBuscaRealizada(false);
        setFilmeAtual(0);
      }
    }, 800);

    return () => clearTimeout(tempo);
  }, [nomeFilme]);

  async function buscarFilme(nome) {
    try {
      const resposta = await axios.get(
        `https://www.omdbapi.com/?s=${encodeURIComponent(nome)}&apikey=52a3729b`
      );

      setFilmes(resposta.data.Search || []);
      setFilmeAtual(0);
      setBuscaRealizada(true);
    } catch (erro) {
      console.error("Erro ao buscar filmes:", erro);
      setFilmes([]);
      setBuscaRealizada(true);
    }
  }

  function anterior() {
    setFilmeAtual((atual) => atual - 1);
  }

  function proximo() {
    setFilmeAtual((atual) => atual + 1);
  }

  const filme = filmes[filmeAtual];

  return (
    <div className="busca-filmes">
      <h2>Buscar filmes</h2>

      <input
        type="text"
        placeholder="Digite o nome do filme"
        value={nomeFilme}
        onChange={(e) => {
          setNomeFilme(e.target.value);
          setBuscaRealizada(false);
        }}
      />

      {buscaRealizada && filmes.length === 0 && (
        <p>Nenhum filme encontrado</p>
      )}

      {filme && (
        <div className="filme-card">
          {filme.Poster !== "N/A" ? (
            <img src={filme.Poster} alt={filme.Title} />
          ) : (
            <div className="poster-indisponivel">
              Poster indisponível
            </div>
          )}

          <h3>{filme.Title}</h3>
          <p>{filme.Year}</p>

          <div className="filme-navegacao">
            <button
              onClick={anterior}
              disabled={filmeAtual === 0}
            >
              Anterior
            </button>

            <span>
              {filmeAtual + 1} / {filmes.length}
            </span>

            <button
              onClick={proximo}
              disabled={filmeAtual === filmes.length - 1}
            >
              Próximo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BuscaFilme;