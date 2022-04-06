import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactInterface } from "../../utils/data";

interface ContactsState {
  contacts: ContactInterface[];
  contactChosen: ContactInterface | undefined;
  search: string;
}

const initialState: ContactsState = {
  contacts: [],
  contactChosen: undefined,
  search: "",
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
    contactChosen(state, action: PayloadAction<number>) {
      state.contactChosen = state.contacts.find(
        (contact) => contact.id === action.payload
      );
    },
    contactUnchosen(state) {
      state.contactChosen = undefined;
    },
    contactEdited(state, action: PayloadAction<Partial<ContactInterface>>) {
      const contactEditedIndex = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      state.contacts[contactEditedIndex] = {
        ...state.contacts[contactEditedIndex],
        ...action.payload,
      };
    },
    searchChanged(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const {
  contactsLoaded,
  contactCreated,
  contactDeleted,
  contactChosen,
  contactUnchosen,
  contactEdited,
  searchChanged,
} = contactsSlice.actions;
export default contactsSlice.reducer;
