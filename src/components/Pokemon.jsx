import PokemonCard from "./PokemonCard";

function Pokemon({ poke }) {
  return (
    <PokemonCard
        nome={poke.name}
        imagem={
            poke.sprites.other["official-artwork"].front_default ||
            poke.sprites.front_default
        }
        vida={poke.stats[0].base_stat}
        ataque={poke.stats[1].base_stat}
        tipo={poke.types[0].type.name}
        tipos={poke.types.map((item) => item.type.name)}
      />
  );
}

export default Pokemon;
