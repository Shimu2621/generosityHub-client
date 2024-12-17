import React from "react";
import useAuthProvider from "../../utils/authProvider/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ element, allowedRole }) => {
  const { user, loading } = useAuthProvider();

  console.log(user);
  console.log(allowedRole);

  if (loading) {
    return <p>...Loading</p>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedRole && !allowedRole.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return element;
};

export default PrivateRoute;
