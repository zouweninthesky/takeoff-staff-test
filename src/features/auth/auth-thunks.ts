import { createAsyncThunk } from "@reduxjs/toolkit";
import LoginService from "../../api/LoginService";

import { WRONG_CREDENTIALS, SERVER_ERROR } from "../../utils/error-codes";

interface CredentialsInterface {
  login: string;
  password: string;
}

const fetchLogin = createAsyncThunk(
  "login",
  async (credentials: CredentialsInterface, thunkAPI) => {
    const { login, password } = credentials;
    const response = await LoginService.signIn(login, password);
    // switch (response.status) {
    //   case 200:
    //     const data = await response.json();
    //     console.log(data);
    //     if (data[0].login === login) return true;
    //     return WRONG_CREDENTIALS;
    //   case 500: {
    //     return SERVER_ERROR;
    //   }
    // }
    const data = await response.json();

    return data;
  }
);

export default fetchLogin;
