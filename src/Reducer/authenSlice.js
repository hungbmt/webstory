import { createSlice } from "@reduxjs/toolkit";

export const AuthenSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      isfetching: false,
      item: null,
      error: false,
    },
    register: {
      isfetching: false,
      item: null,
      error: false,
    },
  },
  reducers: {
    registerStart: (state) => {
      state.register.isfetching = true;
    },
    registerSuccess: (state, action) => {
      state.register.isfetching = false;
      state.register.item = action.payload;
      state.register.error = false;
    },
    registerFault: (state) => {
      state.register.isfetching = false;
      state.register.error = true;
    },
    loginStart: (state) => {
      state.login.isfetching = true;
    },
    loginSuccess: (state, action) => {
      state.login.isfetching = false;
      state.login.item = action.payload;
      state.login.error = false;
    },
    loginFault: (state) => {
      state.login.isfetching = false;
      state.login.error = true;
    },
  },
});

export const {
  registerStart,
  registerSuccess,
  registerFault,
  loginStart,
  loginSuccess,
  loginFault,
} = AuthenSlice.actions;

export default AuthenSlice.reducer;
