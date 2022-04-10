import { createAsyncThunk } from "@reduxjs/toolkit";
import LoginService from "../../api/LoginService";

interface CredentialsInterface {
  login: string;
  password: string;
}

const fetchLogin = createAsyncThunk(
  "login",
  async (credentials: CredentialsInterface, thunkAPI) => {
    const { login, password } = credentials;
    const response = await LoginService.signIn(login, password);
    const data = await response.json();

    return data;
  }
);

export default fetchLogin;
