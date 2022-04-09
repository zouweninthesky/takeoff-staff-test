import { createSlice } from "@reduxjs/toolkit";
import fetchLogin from "../auth/auth-thunks";

interface AuthState {
  isLoggedIn: boolean;
  error: string;
}

const initialState: AuthState = {
  isLoggedIn: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn(state) {
      state.isLoggedIn = true;
      state.error = "";
    },
    signedOut(state) {
      state.isLoggedIn = false;
    },
    errorOccured(state, action) {
      state.error = action.payload;
    },
  },
});

export const { loggedIn, signedOut, errorOccured } = authSlice.actions;
export default authSlice.reducer;
