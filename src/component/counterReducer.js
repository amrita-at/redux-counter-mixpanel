import { createSlice } from "@reduxjs/toolkit";
import mixpanel from "mixpanel-browser";

export const cReducer = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },

  // writing the functionalities for each actions defined in counterAction file

  reducers: {
    increment: (state) => {
      state.value += 1;
      mixpanel.track("+ Button");
    },
    decrement: (state) => {
      state.value -= 1;
      mixpanel.track("- Button");
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      mixpanel.track("Add Button");
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
      mixpanel.track("Reduce Button");
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} = cReducer.actions;

export const selectCount = (state) => state.counter.value;

export default cReducer.reducer;
