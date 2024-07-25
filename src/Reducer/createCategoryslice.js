import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: {
    createCategory: {
      isfetching: false,
      item: null,
      error: false,
    },
    getCategory: {
      isfetching: false,
      item: null,
      error: false,
    },
    deleteCategory: {
      isfetching: false,
      item: null,
      error: false,
    },
  },
};
export const CreateCategoryslice = createSlice({
  name: "create",
  initialState,
  reducers: {
    createCategoryStart: (state) => {
      state.categories.createCategory.isfetching = true;
    },
    createCategorySuccess: (state, action) => {
      state.categories.createCategory.isfetching = false;
      state.categories.createCategory.item = action.payload;
      state.categories.createCategory.error = false;
    },
    createCategoryFault: (state) => {
      state.categories.createCategory.isfetching = false;
      state.categories.createCategory.error = true;
    },
    getCategoryStart: (state) => {
      state.categories.getCategory.isfetching = true;
    },
    getCategorySuccess: (state, action) => {
      state.categories.getCategory.isfetching = false;
      state.categories.getCategory.item = action.payload;
      state.categories.getCategory.error = false;
    },
    getCategoryFault: (state) => {
      state.categories.getCategory.isfetching = false;
      state.categories.getCategory.error = true;
    },
    deleteCategoryStart: (state) => {
      state.categories.deleteCategory.isfetching = true;
    },
    deleteCategorySuccess: (state, action) => {
      state.categories.deleteCategory.isfetching = false;
      state.categories.deleteCategory.item = action.payload;
      state.categories.deleteCategory.error = false;
    },
    deleteCategoryFault: (state) => {
      state.categories.deleteCategory.isfetching = false;
      state.categories.deleteCategory.error = true;
    },
  },
});

export const {
  createCategoryStart,
  createCategorySuccess,
  createCategoryFault,
  getCategoryStart,
  deleteCategoryStart,
  getCategorySuccess,
  getCategoryFault,
  deleteCategorySuccess,
  deleteCategoryFault,
} = CreateCategoryslice.actions;

export default CreateCategoryslice.reducer;
