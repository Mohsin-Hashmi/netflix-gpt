import React from "react";

import MovieCarousel from "./MovieCarousel ";
const MovieList = ({ title, movies }) => {
  return (
    <>
      <div className="px-16 ">
        <h1 className=" py-4 text-3xl font-bold text-white">{title}</h1>
        <div className="flex">
          <div className="w-full">
             <MovieCarousel movies= {movies} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieList;
