
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        addTrailerVideo:null,
        popularMovies:null,
        commingMovies:null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },  
        addTrailerVideo:(state, action)=>{
            state.addTrailerVideo = action.payload;
        },
        addCommingMovies: (state, action) => {
            state.commingMovies= action.payload;
        }

    }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addCommingMovies } = moviesSlice.actions;
export default moviesSlice.reducer