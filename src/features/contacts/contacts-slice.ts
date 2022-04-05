import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactInterface } from "../../utils/data";

interface ContactsState {
  contacts: ContactInterface[];
}

const initialState: ContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    contactsLoaded(state, action: PayloadAction<ContactInterface[]>) {
      state.contacts = action.payload;
    },
  },
});

export const { contactsLoaded } = contactsSlice.actions;
export default contactsSlice.reducer;
