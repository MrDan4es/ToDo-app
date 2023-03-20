import { API_URL } from "../http";

export default class AuthService {
  static async login(email: string, password: string) {
    return fetch(`${API_URL}/login`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json());
  }

  static async register(email: string, password: string) {
    return fetch(`${API_URL}/register`, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => res.json());
  }
}
