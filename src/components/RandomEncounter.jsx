import { useState } from "react";
import axios from "axios";
import "../styles/RandomEncounter.css"
import PokemonCard from "./PokemonCard";

function RandomEncounter(){
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")

    const buscarPokemon = async () => {
        setLoading(true);
        setError("");
        setPokemon(null);

        try{
            const id = Math.floor(Math.random() * 1025) + 1;

            const resposta = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${id}`
            );

            setPokemon(resposta.data);
        }

        catch(erro){
            console.error("Erro ao carregar Pokémon", erro);
            setError("Não foi possível econtrar um Pokémon!")
        }

        finally {
            setLoading(false)
        }
    }
    return(
        <section className="random-encounter">
            <h2>Random Encounter</h2>
            <br />
            <button className="random-encounter-button" onClick={buscarPokemon} disabled={loading}>
                {loading ? "Procurando..." : "Encontrar Pokémon"}
            </button>
            {loading && <p>Procurando um Pokémon...</p>}
            {error && <p>{error}</p>}
            {pokemon && (
                <PokemonCard
                    nome={pokemon.name}
                    imagem={
                        pokemon.sprites.other["official-artwork"].front_default ||
                        pokemon.sprites.front_default
                    }
                    vida={pokemon.stats[0].base_stat}
                    ataque={pokemon.stats[1].base_stat}
                    tipo={pokemon.types[0].type.name}
                    tipos={pokemon.types.map((item) => item.type.name)}
                />
            )}
        </section>
    );
};

export default RandomEncounter;