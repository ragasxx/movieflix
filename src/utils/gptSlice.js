const { createSlice } = require("@reduxjs/toolkit");

const gptSlice = createSlice({
  name: "gpt",
  initialState: { showGptSearch: false },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export default gptSlice.reducer;
export const { toggleGptSearchView } = gptSlice.actions;
