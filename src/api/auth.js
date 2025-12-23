// src/api/auth.js
import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/auth/",
});

// ─────────────────────────────────────
// JWT : Attach token automatically
// ─────────────────────────────────────
API.interceptors.request.use((config) => {
    const token = localStorage.getItem("access");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});



// ─────────────────────────────────────
// AUTH ENDPOINTS
// ─────────────────────────────────────

// LOGIN
export const login = (data) => API.post("login/", data);

// REGISTER (multi-step → données combinées)
export const register = (data) => API.post("register/", data);

// CHECK EMAIL
export const checkEmail = (data) => API.post("check-email/", data);

// CHECK USERNAME
export const checkUsername = (data) => API.post("check-username/", data);

// CHECK STORE_NAME
export const checkStoreName = (data) => API.post("check-store-name/", data);

// CHECK AGENCY_NAME
export const checkAgencyeName = (data) => API.post("check-agency-name/", data);

// PASSWORD RESET REQUEST
export const requestPasswordReset = (data) => API.post("password/reset/", data);

// PASSWORD RESET CONFIRM
export const confirmPasswordReset = (data) =>
    API.post("password/reset/confirm/", data);

// GET CURRENT USER
export const getCurrentUser = () => API.get("user/me/");

// UPDATE LANGUAGE
export const updateLanguage = (data) => API.patch("user/language/", data);

// UPDATE PROFILE (general update)
export const updateProfile = (data) => API.patch("user/profile/", data);

// UPDATE THEME (light/dark)
export const updateTheme = (data) => API.patch("user/profile/", data);

export default API;