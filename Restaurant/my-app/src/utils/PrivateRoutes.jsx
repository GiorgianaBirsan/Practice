import React from "react";
import {Navigate, Outlet} from "react-router-dom";
import {auth} from "../firebase";

export default function PrivateRoutes() {
  return auth.currentUser ? <Outlet /> : <Navigate to="/" />;
}
