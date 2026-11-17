
import "../styles/BuscaFilmes.css";

function BuscaFilme({ nomeFilme, setNomeFilme }) {
  return (
    <div className="busca-filmes">
      <h2>Buscar filmes</h2>

      <input
        type="text"
        placeholder="Digite o nome do filme"
        value={nomeFilme}
        onChange={(e) => setNomeFilme(e.target.value)}
      />
    </div>
  );
}

export default BuscaFilme;
