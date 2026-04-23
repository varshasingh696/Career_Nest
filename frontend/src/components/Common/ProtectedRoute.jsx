import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../../main";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { isAuthorized, isLoadingAuth, user } = useContext(Context);

  if (isLoadingAuth) {
    return <div className="page">Loading...</div>;
  }

  if (!isAuthorized) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles?.length && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
