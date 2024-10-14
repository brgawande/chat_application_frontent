import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  error: null,
  token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //   login action
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
    },
    loginFaliure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Register Action
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.loading = false;

      state.user = action.payload;
    },
    registerFaliure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // logoutAction
    logoutStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    logoutSuccess: (state, action) => {
      state.loading = false;
      state.isLoggedIn = false;
    },
    logoutFaliure: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.error = action.payload;
    },

    // get user profile
    userProfileStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    userProfileSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    userProfileFaliure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // get all users
    getUsersStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getUsersSuccess: (state, action) => {
      state.loading = false;
      state.allusers = action.payload;
    },
    getUsersFaliure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFaliure,
  registerStart,
  registerSuccess,
  registerFaliure,
  logoutStart,
  logoutFaliure,
  logoutSuccess,
  userProfileStart,
  userProfileSuccess,
  userProfileFaliure,
  getUsersFaliure,
  getUsersStart,
  getUsersSuccess,
} = authSlice.actions;

export default authSlice.reducer;
