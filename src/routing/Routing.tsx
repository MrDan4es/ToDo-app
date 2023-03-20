import { BrowserRouter, Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";

import PrivateRoute from "./PrivateRoute";
import { AuthContext } from "index";
import { IndexPage, Page404, ToDoPage } from "pages";
import { useContext, useEffect } from "react";

const Routing = () => {
  const { authStore } = useContext(AuthContext);

  useEffect(() => {
    authStore.initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!authStore.isInit) return <></>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route
          path="/todo"
          element={
            <PrivateRoute>
              <ToDoPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default observer(Routing);
