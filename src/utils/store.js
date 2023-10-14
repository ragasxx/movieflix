import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieReducer from "./movieSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    movies: movieReducer,
  },
});

export default store;
