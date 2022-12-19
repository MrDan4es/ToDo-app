import { BrowserRouter, Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { IndexPage, Page404, ToDoPage } from "pages";
import PrivateRoute from "./PrivateRoute";

const Routing = () => {
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
