import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
const GptSearch = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#434343] to-black w-full h-[100vh]">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
