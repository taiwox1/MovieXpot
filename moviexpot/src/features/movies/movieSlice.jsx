import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/movieApiKey";

export const fetchAsynMovies = createAsyncThunk(
  "movies/fetchAsynMovies",
  async () => {
    try {
      const movieText = "Harry";
      const response = await movieApi.get(
        `?apikey=${APIkey}&s=${movieText}&type=movie`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  data: {},
  status: "idle",
  error: null,
};

const movieslice = createSlice({
  name: "movies",
  initialState,
  reducers: {
      addmovies: (state, { payload }) => { state.movies = payload; }
     
  },
  

  extraReducers: (builder) => {
    builder
      .addCase(fetchAsynMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsynMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAsynMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addmovies } = movieslice.actions;
export const getAllMovies = (state) => state.movies;
export default movieslice.reducer;
