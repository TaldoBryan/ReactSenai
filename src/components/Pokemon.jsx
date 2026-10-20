
function Pokemon({ poke }) {
  return (
    <div className="card-pokemon">
      <h2>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h2>

      <img
        src={poke.sprites.front_default}
        alt={poke.name}
      />

      <h2>
        Types: {poke.types.map((item) => item.type.name).join(", ")}
      </h2>
    </div>
  );
}

export default Pokemon;
