import { useContext } from "react";
import { authContext } from "../backend/context/Auth";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { user } = useContext(authContext);
  
  if (!user) {
    return <Navigate to="/admin/login" />;
  }
  return children;
};

export default RequireAuth;
