
import Header from "../components/Header";
import Footer from "../components/Footer";
import PokemonCard from "../components/PokemonCard";
import Pokemon from "../components/Pokemon";
import RandomEncounter from "../components/RandomEncounter";
import usePokemon from "../hooks/usePokemon";

export default function PokemonPage() {
  const { poke, loading, error } = usePokemon();

  return (
    <>
      <Header mostrarBusca={false} />

      <main>
        {loading && <p>Carregando Pokémon...</p>}
        {error && <p>{error}</p>}

        {poke && <Pokemon poke={poke} />}

        <RandomEncounter />
      </main>

      <Footer />
    </>
  );
}
