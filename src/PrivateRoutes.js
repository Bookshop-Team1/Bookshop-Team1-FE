import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { isLogin } from "./utils.js";

import { LOGIN_ENDPOINT, PATH_KEY } from "./constants";

import { setValueToLocalStorage } from "./services/localStorage";

export default function PrivateRoute() {
  const location = useLocation();
  setValueToLocalStorage(PATH_KEY, location.pathname + location.search);
  return isLogin() ? <Outlet /> : <Navigate to={LOGIN_ENDPOINT} />;
}
