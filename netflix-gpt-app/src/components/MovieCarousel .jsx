import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import MovieCard from "./MovieCard";
import "swiper/css";

const MovieCarousel = ({ movies }) => {
  return (
    <div className=" py-6">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={16}
        slidesPerView={8}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 9 },
        }}
        className="w-full h-auto"
      >
        {movies?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard posterPath={movie?.poster_path} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieCarousel;
