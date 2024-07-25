import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
export default function MovieDetail() {
  const { id } = useParams();

  const fetchMovieDetail = () => {
    fetch(`http://www.omdbapi.com/?apikey=144e0763&i=${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  return <div>MovieDetail {id}</div>;
}
