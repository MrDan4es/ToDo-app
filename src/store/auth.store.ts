import { makeAutoObservable } from "mobx";

import AuthService from "services/auth.service";
import { parseJwt } from "utils/parseJWT";

export default class AuthStore {
  isInit = false;
  isAuth = false;
  email = "";
  userID = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setInit(bool: boolean) {
    this.isInit = bool;
  }

  setEmail(email: string) {
    this.email = email;
  }

  setUserID(id: number) {
    this.userID = id;
  }

  authenticate(access: string, email: string, id: number) {
    localStorage.setItem("accessToken", access);
    this.setEmail(email);
    this.setAuth(true);
    this.setUserID(id);
  }

  initialize() {
    const token = localStorage.getItem("accessToken");
    if (!token) return this.setInit(true);
    const data = parseJwt(token);
    this.setUserID(+data.sub);
    this.setEmail(data.email);
    this.setAuth(true);
    this.setInit(true);
  }

  async login(email: string, password: string, errorFunction: Function) {
    try {
      const response = await AuthService.login(email, password);
      this.authenticate(
        response.accessToken,
        response.user.email,
        response.user.id
      );
    } catch (e) {
      errorFunction(e);
    }
  }

  async register(email: string, password: string, errorFunction: Function) {
    try {
      const response = await AuthService.register(email, password);
      this.authenticate(
        response.accessToken,
        response.user.email,
        response.user.id
      );
    } catch (e) {
      errorFunction(e);
    }
  }

  async logout() {
    localStorage.removeItem("accessToken");
    this.setAuth(false);
    this.setEmail("");
    this.setUserID(0);
  }
}
