import { createSlice } from "@reduxjs/toolkit";

export const SearchSlice = createSlice({
  name: "search",
  initialState: {
    searchtf: {
      isfetching: false,
      item: null,
      error: false,
    },
  },
  reducers: {
    searchtfStart: (state) => {
      state.searchtf.isfetching = true;
    },
    searchtfSuccess: (state, action) => {
      state.searchtf.isfetching = false;
      state.searchtf.item = action.payload;
      state.searchtf.error = false;
    },
    searchtfFault: (state) => {
      state.searchtf.isfetching = false;
      state.searchtf.error = true;
    },
  },
});

export const { searchtfStart, searchtfSuccess, searchtfFault } =
  SearchSlice.actions;

export default SearchSlice.reducer;
