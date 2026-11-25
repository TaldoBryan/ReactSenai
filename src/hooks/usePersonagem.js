
import { useState, useEffect } from "react";
import axios from "axios";

export default function usePersonagem(id) {
    const [personagem, setPersonagem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function buscarPersonagem() {
            try {
                setLoading(true);
                setError(null);

                const resposta = await axios.get(
                    `https://dragonball-api.com/api/characters/${id}`
                );

                setPersonagem(resposta.data);
            } catch (erro) {
                setError(erro);
            } finally {
                setLoading(false);
            }
        }

        buscarPersonagem();
    }, [id]);

    return { personagem, loading, error };
}
