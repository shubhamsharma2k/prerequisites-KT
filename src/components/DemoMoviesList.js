import React, { useContext } from "react";
import { MovieContext } from "../context/DemoContext";

const DemoMoviesList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <ul>
            <li>{movie.movieName}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DemoMoviesList;
