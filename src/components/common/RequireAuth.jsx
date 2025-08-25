import React from "react";
import { useContext } from "react";
import { authContext } from "../backend/context/Auth";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const RequireAuth = ({ children }) => {
  const { user } = useContext(authContext);

  if (!user) {
    return <Navigate to="/admin/login" />;
  }
  return children;
};

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RequireAuth;
