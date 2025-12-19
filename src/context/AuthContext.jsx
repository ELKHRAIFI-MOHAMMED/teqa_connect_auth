// src/context/AuthContext.jsx
import { createContext, useEffect, useState } from "react";
import {
  login as loginAPI,
  getCurrentUser,
} from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);   // loading user session

  // ───────────────────────────────────────────────
  // LOAD USER SESSION ON APP START
  // ───────────────────────────────────────────────
  const loadUser = async () => {
    const token = localStorage.getItem("access");

    if (!token) {
      setUser(null);
      setLoading(false);
      return;
    }

    try {
      const res = await getCurrentUser();
      setUser(res.data);
    } catch (err) {
      // token expiré → logout auto
      logout();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

// ───────────────────────────────────────────────
// LOGIN
// ───────────────────────────────────────────────
const login = async (credentials) => {
  try {
    const res = await loginAPI(credentials);

    const { access, refresh } = res.data.tokens;

    // save tokens
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);

    // load user data
    await loadUser();

    return {
      success: true,
      status: res.status,          // ⭐ AJOUT IMPORTANT
      message: res.data?.message || null
    };

  } catch (error) {
    return {
      success: false,
      status: error.response?.status || 500,       // ⭐ AJOUT
      message:
        error.response?.data?.message ||          // message backend
        "Invalid credentials"                      // fallback
    };
  }
};


  // ───────────────────────────────────────────────
  // LOGOUT
  // ───────────────────────────────────────────────
  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUser(null);
  };

  // ───────────────────────────────────────────────
  // REDIRECT BY ROLE AFTER LOGIN
  // ───────────────────────────────────────────────
  const redirectByRole = () => {
    if (!user) return;

    if (user.role === "STORE") {
      window.location.href = "https://store-app.yourdomain.com";
    }
    if (user.role === "AGENCY_OWNER") {
      window.location.href = "https://agency-app.yourdomain.com";
    }
    if (user.role === "AGENCY_AGENT") {
      window.location.href = "https://agent-app.yourdomain.com";
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        loadUser,
        redirectByRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
