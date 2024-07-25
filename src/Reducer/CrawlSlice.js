import { createSlice } from "@reduxjs/toolkit";

export const CrawlSlice = createSlice({
  name: "crawl",
  initialState: {
    CrawlTruyenFull: {
      isfetching: false,
      item: null,
      error: false,
    },
  },
  reducers: {
    CrawlTruyenFullStart: (state) => {
      state.CrawlTruyenFull.isfetching = true;
    },
    CrawlTruyenFullSuccess: (state, action) => {
      state.CrawlTruyenFull.isfetching = false;
      state.CrawlTruyenFull.item = action.payload;
      state.CrawlTruyenFull.error = false;
    },
    CrawlTruyenFullFault: (state) => {
      state.CrawlTruyenFull.isfetching = false;
      state.CrawlTruyenFull.error = true;
    },
  },
});

export const {
  CrawlTruyenFullStart,
  CrawlTruyenFullSuccess,
  CrawlTruyenFullFault,
} = CrawlSlice.actions;

export default CrawlSlice.reducer;
