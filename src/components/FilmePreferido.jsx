import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/FilmeFavorito.css"

export default function FilmeFavorito(){
    const [filme, setFilme] = useState(null);

    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?i=tt0245429&apikey=52a3729b`)
        .then((response) => {
            setFilme(response.data)
        })
    }, []);

   return (
    <div className="filme-favorito">
        <h2>Um dos meus filmes favoritos</h2>

        {filme && (
        <div className="filme-favorito-card">
         <img src={filme.Poster} alt={filme.Title} />

        <div className="filme-favorito-info">
          <h3>{filme.Title}</h3>
          <p>Ano: {filme.Year}</p>
          <p>Diretor: {filme.Director}</p>
        </div>
      </div>
    )}
  </div>
)};