
import Header from "../components/Header";
import Footer from "../components/Footer";
import WelcomeCard from "../components/WelcomeCard";
import useBuscaFilmes from "../hooks/useBuscaFilmes";

function Home() {
  const {
    nomeFilme,
    setNomeFilme,
    filmes,
    buscaRealizada,
    filmeAtual,
    filme,
    anterior,
    proximo,
  } = useBuscaFilmes();

  return (
    <>
      <Header
        nomeFilme={nomeFilme}
        setNomeFilme={setNomeFilme}
      />

      <main>
        <WelcomeCard />

        <div className="resultado-filmes">
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
      </main>

      <Footer />
    </>
  );
}

export default Home;
