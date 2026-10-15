
function Personagem({ personagem }) {
  return (
    <div className="cardPersonagem">
      <h2>{personagem.name}</h2>

      <img
        src={personagem.image}
        alt={personagem.name}
        width="250"
      />

      <h2>Ki = {personagem.ki}</h2>
      <h2>Raça = {personagem.race}</h2>
      <br />
      <h1>Transformação Favorita dele:</h1>
      {personagem.transformations?.[0] && (
        <>
          <h2>{personagem.transformations[0].name}</h2>

          <img
            src={personagem.transformations[0].image}
            alt={personagem.transformations[0].name}
            width="250"
          />

          <h2>KI = {personagem.transformations[0].ki}</h2>
        </>
      )}
    </div>
  );
}

export default Personagem;
