import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    movies: {},
}


const movieslice = createSlice(
    {
        name: 'movies',
        initialState,
        reducers: {
            addmovies: (state, { payload }) => { state.movies = payload;}
        }
    }
)


export const { addmovies } = movieslice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieslice.reducer;