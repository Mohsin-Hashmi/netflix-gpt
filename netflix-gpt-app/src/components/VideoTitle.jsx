import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="pt-60 px-8 absolute">
        <h1 className="text-6xl font-bold text-white">{title}</h1>
        <p className="py-6 text-lg w-1/4 text-gray-500">{overview}</p>
        <div className="">
          <button className="bg-gray-500 text-white px-12 py-4 text-lg font-semibold rounded-lg bg-opacity-50">Play</button>
          <button className="bg-gray-500 text-white px-12 py-4 text-lg font-semibold rounded-lg bg-opacity-50 mx-2">More Info</button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
