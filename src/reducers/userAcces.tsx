import { createSlice } from "@reduxjs/toolkit";

interface UserAcces {
  data?: Data | null;
  error: Error;
  loading: boolean;
}
export interface Data {
  user: string;
  token: string;
}
export interface Error {
  message: string;
  showError: boolean;
  error: boolean;
}
const initialState: UserAcces = {
  data: null,
  error: {
    message: "",
    showError: false,
    error: false,
  },
  loading: false,
};

const AccesUserSlice = createSlice({
  name: "Session",
  initialState: initialState,
  reducers: {
    setData: (state, { payload }: { payload: Data | null }) => {
      state.data = payload;
      state.loading = false;
    },
    setError: (state, { payload }: { payload: Error }) => {
      state.error = payload;
      state.loading = false;
    },
    setLoading: (state) => {
      state.loading = true;
    },
  },
});

export const { setData, setError, setLoading } = AccesUserSlice.actions;
export default AccesUserSlice.reducer;
