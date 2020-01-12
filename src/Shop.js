import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Shop() {
  const apiKey = "31a2acbd095355e3b5ac823a2a6f17a4";

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en`
    );
    const items = await data.json();
    console.log(items);
    setItems(items.results);
  };

  return (
    <div>
      {items.map(item => (
        <h1 key={item.id}>
          <Link to={`/shop/${item.id}`}> {item.title}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
