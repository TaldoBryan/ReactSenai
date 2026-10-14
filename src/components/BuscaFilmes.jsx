
import { useState, useEffect } from "react";
import axios from "axios";

function BuscaFilme() {
  const [nomeFilme, setNomeFilme] = useState("");
  const [filmes, setFilmes] = useState([]);

    useEffect(() => {
    const tempo = setTimeout(() => {
        if (nomeFilme.trim() !== "") {
        buscarFilme();
        } else {
        setFilmes([]);
        }
    }, 800);

    return () => clearTimeout(tempo);
    }, [nomeFilme]);

  async function buscarFilme() {
    const resposta = await axios.get(
      `https://www.omdbapi.com/?s=${nomeFilme}&apikey=52a3729b`
    );

    setFilmes(resposta.data.Search);
  }

  return (
    <div>
      <h2>Buscar filmes</h2>

      <input
        type="text"
        placeholder="Digite o nome do filme"
        value={nomeFilme}
        onChange={(e) => setNomeFilme(e.target.value)}
      />

      {filmes.map((filme) => (
        <div key={filme.imdbID}>
            <h3>{filme.Title}</h3>
            <p>{filme.Year}</p>
            <img src={filme.Poster} alt={filme.Title} />
        </div>
        ))}
    </div>
  );
}

export default BuscaFilme;
