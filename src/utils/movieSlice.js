import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    upcomingMovies: null,
    popularMovies: null,
    topRated: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedmovies: (state, action) => {
      state.topRated = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addUpcomingMovies,
  addPopularMovies,
  addTopRatedmovies,
} = movieSlice.actions;
