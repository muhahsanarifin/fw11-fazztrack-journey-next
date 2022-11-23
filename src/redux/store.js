import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    counterUp: (state, action) => {
      state.number = state.number + 1;
    },
    counterDown: (state, action) => {
      if (state.number === 0) return { number: 0 };
      state.number = state.number - 1;
    },
    counterReset: (state, action) => {
      state.number = 0;
    },
  },
});

export const { counterUp, counterDown, counterReset } = slice.actions;

const store = configureStore({
  reducer: slice,
});

export default store;
