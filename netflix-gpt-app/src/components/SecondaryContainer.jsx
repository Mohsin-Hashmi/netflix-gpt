import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies)
  return (
    <>
      {/* 
        MovieList - Popular
          MoviesCard*n
        MovieList - Now Playing
        MovieList - Trending
        MovieList - Top Rated
       */}
      <MovieList title= {"Now Playing"} movies= {movies?.nowPlayingMovies}/>
      <MovieList title= {"Trending"} movies= {movies?.nowPlayingMovies}/>
      <MovieList title= {"Popular"} movies= {movies?.nowPlayingMovies}/>
      <MovieList title= {"Upcoming Movies"} movies= {movies?.nowPlayingMovies}/>
      <MovieList title= {"Top Rated"} movies= {movies?.nowPlayingMovies}/>
    </>
  );
};

export default SecondaryContainer;
