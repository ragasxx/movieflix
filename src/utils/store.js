import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieReducer from "./movieSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: movieReducer,
    gpt: gptSlice,
    config: configSlice,
  },
});

export default store;
