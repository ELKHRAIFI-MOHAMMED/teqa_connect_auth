// src/router/PublicRoute.jsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Loader from "../components/misc/Loader";

export default function PublicRoute({ children }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <Loader />;

  // Si l'utilisateur est déjà connecté → redirection
  if (user) {
    return <Navigate to="/redirect" replace />;
  }

  return children;
}
