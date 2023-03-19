import { createSlice } from "@reduxjs/toolkit";

const AccesUserSlice = createSlice({
  name: "acces",
  initialState: {
    acces: {
      user: "",
      token: "",
    },
    error: {
      message: "",
      showError: false,
      error: true,
    },
  },
  reducers: {
    AccesUser: (state, { payload }) => {
      state.acces = payload;
    },
    ChangeError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { AccesUser, ChangeError } = AccesUserSlice.actions;
export default AccesUserSlice.reducer;
