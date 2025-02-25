
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addCommingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useCommingMovies = () => {
    const dispatch = useDispatch();
    const getCommingMovies = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS)
            const json = await data.json();
            console.log("comming movies data", json.results);
            dispatch(addCommingMovies(json.results));
        } catch (err) {
            console.error("Fetch error:", err);
        }


    }
    useEffect(() => { getCommingMovies() }, [])
}


export default useCommingMovies;