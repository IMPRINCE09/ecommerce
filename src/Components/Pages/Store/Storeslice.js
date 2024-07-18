import { createSlice } from "@reduxjs/toolkit";

export const CARTSTATUS = Object.freeze({
  LOADING: "loading",
});

const cartslice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    // increase(state, action) {
    //   return state.map((itemId) => itemId.id === action.payload);
    // },
    // decrease(state, action) {
    //   return state.map((itemId) => itemId.id === action.payload);
    // },
  },
});

export const { add, remove } = cartslice.actions;

export default cartslice.reducer;
