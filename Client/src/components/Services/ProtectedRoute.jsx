import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ element: Element }) => {
  const { pathname } = useLocation();
  const token = JSON.parse(localStorage.getItem("token"));
  const protectUserRoutes = ["/profile", "/products"];
  const protectAdminRoutes = ["/dashboard", "/admin/addproducts"];

  if (!token && (protectUserRoutes.includes(pathname) || protectAdminRoutes.includes(pathname))) {
    return <Navigate to="/login" />;
  }

  if (token && token.role === "admin") {
    return <Navigate to="/dashboard" />;
  }

  if (token && token.role === "user") {
    return <Navigate to="/profile" />;
  }

  return <Element />;
}
