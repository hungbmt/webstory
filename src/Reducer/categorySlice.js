import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: {
      isfetching: false,
      item: null,
      error: false,
    },
    // getCategory: {
    //   isfetching: false,
    //   item: null,
    //   error: false,
    // },
  },
  reducers: {
    categoryStart: (state) => {
      state.category.isfetching = true;
    },
    categorySuccess: (state, action) => {
      state.category.isfetching = false;
      state.category.item = action.payload;
      state.category.error = false;
    },
    categoryFault: (state) => {
      state.category.isfetching = false;
      state.category.error = true;
    },
    // getcategoryStart: (state) => {
    //   state.category.isfetching = true;
    // },
    // getcategorySuccess: (state, action) => {
    //   state.category.isfetching = false;
    //   state.category.item = action.payload;
    //   state.category.error = false;
    // },
    // getcategoryFault: (state) => {
    //   state.category.isfetching = false;
    //   state.category.error = true;
    // },
  },
});

export const {
  categoryStart,
  categorySuccess,
  categoryFault,
  // getcategoryStart,
  // getcategorySuccess,
  // getcategoryFault,
} = categorySlice.actions;

export default categorySlice.reducer;
