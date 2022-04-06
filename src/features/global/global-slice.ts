import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GlobalState {
  loading: boolean;
  modalId: string;
}

const initialState: GlobalState = {
  loading: true,
  modalId: "",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    modalIdChanged(state, action: PayloadAction<string>) {
      state.modalId = action.payload;
    },
  },
});

export const { modalIdChanged } = globalSlice.actions;
export default globalSlice.reducer;
