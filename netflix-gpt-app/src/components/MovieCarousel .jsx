import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import "swiper/css";

const MovieCarousel = ({ movies }) => {
  return (
    <div className=" py-6">
    <Swiper
      spaceBetween={16}
      slidesPerView={8}

      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      className="w-full h-auto"
    >
      {movies?.map((movie) => (
        <SwiperSlide key={movie.id} className="flex justify-center items-center gap-x-10">
          <MovieCard posterPath={movie?.poster_path} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  );
};

export default MovieCarousel;
