import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen relative overflow-x-hidden">
      <iframe
        className="w-screen aspect-video "
        src={`https://www.youtube.com/embed/5PSzFLV-EyQ?si=ykaSeNtoVvvfC6y3&autoplay=1&mute=1&controls=0&loop=1&playlist=5PSzFLV-EyQ${
          trailerVideo?.key ? `&key=${trailerVideo.key}` : ""
        }`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
