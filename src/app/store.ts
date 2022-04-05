import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import contactsReducer from "../features/contacts/contacts-slice";
import gameReducer from "../features/game/game-slice";

export const store = configureStore({
  reducer: { counter: counterReducer, contacts: contactsReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
