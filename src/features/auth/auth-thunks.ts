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
    switch (response.status) {
      case 200:
        const data = await response.json();
        if (typeof data === "object") return true;
        return false;
      case 400: {
        return false;
      }
      case 401: {
        return false;
      }
      case 500: {
        return false;
      }
    }

    return false;
  }
);

export default fetchLogin;
