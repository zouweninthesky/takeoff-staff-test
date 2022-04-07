import { createAsyncThunk } from "@reduxjs/toolkit";
import ContactsService from "../../api/ContactsService";

const fetchContacts = createAsyncThunk("", async (thunkAPI) => {
  const response = await ContactsService.getContacts();
  return response;
});

export default fetchContacts;
