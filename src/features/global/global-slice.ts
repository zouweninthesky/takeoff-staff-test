import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import fetchContacts from "../contacts/contacts-thunks";

interface GlobalState {
  loading: boolean;
  modalId: string;
}

const initialState: GlobalState = {
  loading: false,
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
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.loading = false;
    });
  },
});

export const { modalIdChanged } = globalSlice.actions;
export default globalSlice.reducer;
