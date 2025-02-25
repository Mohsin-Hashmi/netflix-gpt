import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useCommingMovies from "../hooks/useCommingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import GptSearch from "./GptSearch";
const Browse = () => {
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useCommingMovies();
  useTrendingMovies();
  return (
    <>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
