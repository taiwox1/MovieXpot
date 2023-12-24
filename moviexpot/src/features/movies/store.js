import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice"
export const Store = configureStore({
    reducer: {
        movies: moviesReducer,
    },

})