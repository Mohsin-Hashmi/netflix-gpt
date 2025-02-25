import React from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addTrendingMovies } from '../utils/moviesSlice';
const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const getTrendingMovies = async () => {
        try {
            const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS)
            const json = await data.json();
            console.log("comming movies data", json.results);
            dispatch(addTrendingMovies(json.results));
        } catch (err) {
            console.error("Fetch error:", err);
        }


    }
    useEffect(() => { getTrendingMovies() }, [])
}

export default useTrendingMovies