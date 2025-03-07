
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo:null,
        popularMovies:null,
        commingMovies:null,
        trendingMovies:null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },  
        addTrailerVideo:(state, action)=>{
            state.trailerVideo = action.payload;
        },
        addCommingMovies: (state, action) => {
            state.commingMovies= action.payload;
        },
        addTrendingMovies: (state, action)=>{
            state.trendingMovies= action.payload;
        }

    }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addCommingMovies, addTrendingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;