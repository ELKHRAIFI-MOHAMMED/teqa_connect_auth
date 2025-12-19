// src/router/AppRouter.jsx
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register/Register";
import ResetPasswordRequest from "../pages/ResetPasswordRequest";
import ResetPasswordConfirm from "../pages/ResetPasswordConfirm";
import RedirectRole from "../pages/RedirectRole";

import PublicRoute from "./PublicRoute";

export default function AppRouter() {
  return (
    <Routes>
      {/* Page d'accueil */}
      <Route path="/" element={<Home />} />

      {/* AUTH ROUTES */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />

      <Route
        path="/reset-password"
        element={
          <PublicRoute>
            <ResetPasswordRequest />
          </PublicRoute>
        }
      />

      <Route
        path= "/:uid/:token"
        element={
          <PublicRoute>
            <ResetPasswordConfirm />
          </PublicRoute>
        }
      />

      {/* REDIRECT ACCORDING TO ROLE */}
      <Route path="/redirect" element={<RedirectRole />} />

      {/* Unknown route → Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
