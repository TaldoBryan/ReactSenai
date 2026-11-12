import "../styles/PokemonCard.css";

function PokemonCard({ nome, imagem, vida, ataque, tipo, tipos }) {
    return (
        <article className={`pokemon-card tipo-${tipo}`}>
            <img src={imagem} alt={nome} />

            <h2>{nome}</h2>

            <div className="pokemon-tipos">
                {tipos.map((tipoPokemon) => (
                    <span key={tipoPokemon}
                    className={`tipo-${tipoPokemon}`}
                    >
                        {tipoPokemon}
                    </span>
                ))}
            </div>
            <p>Vida: {vida}</p>
            <p>Ataque: {ataque}</p>
        </article>
    );
}

export default PokemonCard;