import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const [state] = useContext(AuthContext);

  if (!state.isAuth) {
    return <Navigate to="/LoginPage" />;
  }
  return children;
}

export default PrivateRoute