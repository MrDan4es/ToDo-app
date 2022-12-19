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
    })
      .then(response => response.json())
      .then(user => user);
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
    })
      .then(response => response.json())
      .then(user => user);
  }
}
