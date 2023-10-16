import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptMovieSuggestions = () => {
  const { gptMovieNames, gptMoviesResult } = useSelector((store) => store.gpt);

  if (!gptMovieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      <div>
        {gptMovieNames.map((movie, index) => (
          <MovieList
            key={movie}
            title={movie}
            movies={gptMoviesResult[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
