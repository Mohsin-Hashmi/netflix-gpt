import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useCommingMovies from "../hooks/useCommingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useCommingMovies();
  useTrendingMovies();
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
