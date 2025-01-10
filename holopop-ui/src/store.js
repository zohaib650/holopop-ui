import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counter";

// create reducer using slice

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
