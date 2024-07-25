import { createSlice } from "@reduxjs/toolkit";

export const CreateListSlice = createSlice({
  name: "create",
  initialState: {
    getList: {
      isfetching: false,
      item: null,
      error: false,
    },
  },
  reducers: {
    getListStart: (state) => {
      state.getList.isfetching = true;
    },
    getListSuccess: (state, action) => {
      state.getList.isfetching = false;
      state.getList.error = false;
      state.getList.item = action.payload;
    },
    getListFault: (state) => {
      state.getList.isfetching = false;
      state.getList.error = true;
    },
  },
});

export const { getListStart, getListSuccess, getListFault } =
  CreateListSlice.actions;

export default CreateListSlice.reducer;
