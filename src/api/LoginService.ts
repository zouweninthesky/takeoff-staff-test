import { LOGIN_LINK } from "../utils/links";

class LoginService {
  async signIn(login: string, password: string) {
    const url = `${LOGIN_LINK}?login=${login}&password=${password}`;

    const response = await fetch(url);
    console.log(response);
    return response;
  }
}

export default new LoginService();
