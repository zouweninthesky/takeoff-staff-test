import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../features/contacts/contacts-slice";
import globalReducer from "../features/global/global-slice";

export const store = configureStore({
  reducer: { contacts: contactsReducer, global: globalReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
