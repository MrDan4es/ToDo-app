import ReactDOM from "react-dom/client";
import { createContext } from "react";

import AuthStore from "store/auth.store";
import Routing from "routing/Routing";

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
