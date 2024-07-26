import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function MovieDetail() {
  const { imdbid } = useParams();
  const [movie, setmovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchMovie = () => {
    setLoading(true);
    fetch(`http://www.omdbapi.com/?apikey=144e0763&i=${imdbid}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) setmovie(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <div>
      {loading == true ? (
        <p>Please wait we are fetching the data ......</p>
      ) : (
        <div>
          {movie == null ? (
            <p>NO data found</p>
          ) : (
            <div>
              <img src={movie.Poster} />
              <p>Name : {movie.Title}</p>
              <p>Desc : {movie.Plot}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
