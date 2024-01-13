import axios from "axios";

const API_URL = "http://192.168.1.36:8080/api/auth/";

class AuthService {
  async login(username, password) {
    const response = await axios
      .post(API_URL + "signin", {
        username,
        password
      });
    if (response.data.accessToken) {
      localStorage.setItem("DeGuzmanStuffAnywhere_Token", JSON.stringify(response.data));
    }
    return response.data;
  }

  logout() {
    localStorage.removeItem("DeGuzmanStuffAnywhere_Token");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('DeGuzmanStuffAnywhere_Token'));;
  }
}

export default new AuthService();