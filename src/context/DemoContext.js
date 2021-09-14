import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const ContextProvider = (props) => {
  const [movies, setMovies] = useState([
    { id: 1, movieName: "Demon Slayer" },
    { id: 2, movieName: "Pursuit Of Happyness" },
    { id: 3, movieName: "Shawshank Redemption" },
    { id: 4, movieName: "John Wick" },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
