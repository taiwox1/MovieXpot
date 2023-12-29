import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/movieApiKey";

export const fetchAsynMovies = createAsyncThunk(
  "movies/fetchAsynMovies",
  async (term) => {
    try {
      
      const response = await movieApi.get(
        `?apikey=${APIkey}&s=${term}&type=movie`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchAsynShows = createAsyncThunk(
  "movies/fetchAsynShows",
  async (term) => {
    try {
     
      const response = await movieApi.get(
        `?apikey=${APIkey}&s=${term}&type=series`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchAsynMovies_Shows_Details = createAsyncThunk(
  "movies/fetchAsynMovies_Shows_Details",
  async (id) => {
    try {
      const response = await movieApi.get(
        `?apikey=${APIkey}&i=${id}&Plot=full`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  movies: {
    data: {},
    status: "idle",
    error: null,
  },
  series: {
    data: {},
    status: "idle",
    error: null,
  },
  plot: {
    data: {},
    status: "idle",
    error: null,
  },
};

const movieslice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addmovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedmovieOrShow: (state) => {
      state.plot = {};
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAsynMovies.pending, (state) => {
        state.movies.status = "loading";
      })
      .addCase(fetchAsynMovies.fulfilled, (state, action) => {
        state.movies.status = "succeeded";
        state.movies.data = action.payload;
      })
      .addCase(fetchAsynMovies.rejected, (state, action) => {
        state.movies.status = "failed";
        state.movies.error = action.error.message;
      })

      .addCase(fetchAsynShows.pending, (state) => {
        state.series.status = "loading";
      })
      .addCase(fetchAsynShows.fulfilled, (state, action) => {
        state.series.status = "succeeded";
        state.series.data = action.payload;
      })
      .addCase(fetchAsynShows.rejected, (state, action) => {
        state.series.status = "failed";
        state.series.error = action.error.message;
      })

      .addCase(fetchAsynMovies_Shows_Details.pending, (state) => {
        state.plot.status = "loading";
      })
      .addCase(fetchAsynMovies_Shows_Details.fulfilled, (state, action) => {
        state.plot.status = "succeeded";
        state.plot.data = action.payload;
      })
      .addCase(fetchAsynMovies_Shows_Details.rejected, (state, action) => {
        state.plot.status = "failed";
        state.plot.error = action.error.message;
      });
  },
});

export const { removeSelectedmovieOrShow } = movieslice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.series;
export const getAllPlot = (state) => state.movies.plot;

export default movieslice.reducer;
