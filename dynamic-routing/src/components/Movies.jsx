import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Movies() {
  const [movies, setMovies] = useState([]);
  const fetchMovies = () => {
    fetch("http://www.omdbapi.com/?apikey=144e0763&s=Harry")
      .then((res) => res.json())
      .then((data) => setMovies(data.Search))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <h1>hi</h1>
      {movies.map((item, index) => (
        <Link to={`/movie-detail/${item.imdbID}`}>
          <div>
            <img src={item.Poster} />
            <h3>{item.Title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
