import { configureStore } from "@reduxjs/toolkit";
import counterReducers from "./counterReducer.js";

export default configureStore({
  reducer: {
    counter: counterReducers,
  },
});
