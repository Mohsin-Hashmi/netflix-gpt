import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice.js";
import { useEffect } from "react";

const usePopularMovies = () => {
    /**Fetch Data from TMDB API and update store */
    const dispatch = useDispatch();
    const getNowPopularMovies = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    };

    useEffect(() => {
        getNowPopularMovies();
    }, []);
}

export default usePopularMovies;