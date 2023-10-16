const { createSlice } = require("@reduxjs/toolkit");

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptMoviesResult: null,
    gptMovieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { gptMovieNames, gptMoviesResult } = action.payload;
      state.gptMoviesResult = gptMoviesResult;
      state.gptMovieNames = gptMovieNames;
    },
  },
});

export default gptSlice.reducer;
export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
