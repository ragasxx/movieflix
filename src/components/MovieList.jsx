import React from "react";
import VideoCard from "./VideoCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-auto scrollbar-hide hover:overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <VideoCard
              key={movie.id}
              posterPath={movie.poster_path}
              movieTitle={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
