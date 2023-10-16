import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieReducer from "./movieSlice";
import gptSlice from "./gptSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: movieReducer,
    gpt: gptSlice,
  },
});

export default store;
