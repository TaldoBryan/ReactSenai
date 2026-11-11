import { useState } from "react";
import axios from "axios";
import "../styles/RandomEncounter.css"

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
                <article>
                    <h3>{pokemon.name}</h3>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />

                    <div className="pokemon-tipos">
                        {pokemon.types.map((item)=>(
                            <span key={item.type.name}>
                                {item.type.name}
                            </span>
                        ))}
                    </div>
                </article>
            )}
        </section>
    );
};

export default RandomEncounter;