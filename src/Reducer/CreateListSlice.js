import { createSlice } from "@reduxjs/toolkit";

export const CreateListSlice = createSlice({
  name: "create",
  initialState: {
    createList: {
      isfetching: false,
      item: null,
      error: false,
    },
    deleteList: {
      isfetching: false,
      item: null,
      error: false,
    },
  },
  reducers: {
    createListStart: (state) => {
      state.createList.isfetching = true;
    },
    createListSuccess: (state, action) => {
      state.createList.isfetching = false;
      state.createList.item = action.payload;
      state.createList.error = false;
    },
    createListFault: (state) => {
      state.createList.isfetching = false;
      state.createList.error = true;
    },
    deleteListStart: (state) => {
      state.deleteList.isfetching = true;
    },
    deleteListSuccess: (state, action) => {
      state.deleteList.isfetching = false;
      state.deleteList.item = action.payload;
      state.deleteList.error = false;
    },
    deleteListFault: (state) => {
      state.deleteList.isfetching = false;
      state.deleteList.error = true;
    },
  },
});

export const {
  createListStart,
  createListSuccess,
  createListFault,
  deleteListStart,
  deleteListSuccess,
  deleteListFault,
} = CreateListSlice.actions;

export default CreateListSlice.reducer;
