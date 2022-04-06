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
    contactCreated(state, action: PayloadAction<ContactInterface>) {
      state.contacts.push(action.payload);
    },
    contactDeleted(state, action: PayloadAction<number>) {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { contactsLoaded, contactCreated, contactDeleted } =
  contactsSlice.actions;
export default contactsSlice.reducer;
