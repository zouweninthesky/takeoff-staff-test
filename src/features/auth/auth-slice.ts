import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetchLogin from "../auth/auth-thunks";

interface AuthState {
  loggedIn: boolean;
}

const initialState: AuthState = {
  loggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut(state) {
      state.loggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.loggedIn = action.payload;
    });
  },
});

export const { signOut } = authSlice.actions;
export default authSlice.reducer;
