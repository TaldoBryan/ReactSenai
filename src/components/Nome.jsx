
import { useState, useEffect } from "react";
import axios from "axios";

function Person() {
  const [person, setPerson] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const resposta = await axios.get(
          "https://6a79e554674f43f4db11ebc8.mockapi.io/api/person"
        );

        setPerson(resposta.data);
        console.log(resposta.data);
        console.log(resposta.data[4]);
      } catch (erro) {
        console.error("Erro ao buscar pessoas:", erro);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <p>Carregando pessoas...</p>;
  }

  return (
    <div>

        <div>
          <h1>{person[4]?.nome}</h1>
        </div>
    </div>
  );
}

export default Person;
