import { Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

interface Props {
  children: JSX.Element;
}

const PrivateRoute = (props: Props) => {
  const isAuthenticated = !!localStorage.getItem("accessToken");

  return isAuthenticated ? props.children : <Navigate to="/" />;
};

export default observer(PrivateRoute);
