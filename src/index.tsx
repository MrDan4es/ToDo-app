import React, { createContext } from "react";
import ReactDOM from "react-dom/client";

import Routing from "routing/Routing";
import AuthStore from "store/auth.store";

import "global.scss";

const authStore = new AuthStore();

export const AuthContext = createContext({ authStore });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <AuthContext.Provider value={{ authStore }}>
    <Routing />
  </AuthContext.Provider>
);
