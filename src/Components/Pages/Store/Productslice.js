import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Categoriesapi from "../../common/Card/Cardapicartegory";

export const STATUES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productslice = createSlice({
  name: "product",

  initialState: {
    data: [],
    status: STATUES.IDLE,
  },
  reducers: {
    // setProduct(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },

    extraReducers: (builder) => {
      builder
        .addCase(fetchproduct.pending, (state, action) => {
          state.status = STATUES.LOADING;
        })
        .addCase(fetchproduct.fulfilled, (state, action) => {
          state.data = action.payload;
          state.status = STATUES.IDLE;
        })
        .addCase(fetchproduct.rejected, (state, action) => {
          state.status = STATUES.ERROR;
        });
    },
  },
});

export const { setProduct, setStatus } = productslice.actions;

export default productslice.reducer;

// export function fetchproduct() {
//   return function fetchproductthunk(dispatach, getState) {
//     dispatach(setStatus(STATUES.LOADING));
//     try {
//       const data = Categoriesapi;

//       dispatach(setProduct(data));
//       dispatach(setStatus(STATUES.IDLE));
//     } catch (err) {
//       dispatach(setStatus(STATUES.ERROR));
//     }
//   };
// }
export const fetchproduct = createAsyncThunk("product/fetch", () => {
  const data = Categoriesapi;
  return data;
});
