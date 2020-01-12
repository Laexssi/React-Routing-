import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function MovieCard({ match }) {
  const apiKey = "31a2acbd095355e3b5ac823a2a6f17a4";

  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${apiKey}&language=en`
    );
    const item = await data.json();
    console.log(item);
    setItem(item);
  };

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />>
    </div>
  );
}

export default MovieCard;
