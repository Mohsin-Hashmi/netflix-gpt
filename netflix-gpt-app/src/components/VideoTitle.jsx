import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black  z-20">
        <h1 className="text-6xl font-bold ">{title}</h1>
        <p className="py-6 text-lg w-1/4 ">{overview}</p>
        <div className="">
          <button className="bg-white text-black px-12 py-4 text-lg font-semibold rounded-lg hover:bg-opacity-80">Play</button>
          <button className="bg-gray-500 text-white px-12 py-4 text-lg font-semibold rounded-lg  mx-2 hover:bg-opacity-10">More Info</button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
