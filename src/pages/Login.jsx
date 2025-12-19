// src/pages/Login.jsx
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { LanguageContext } from "../context/LanguageContext";

import Input from "../components/ui/Input";
import PasswordInput from "../components/ui/PasswordInput";
import Button from "../components/ui/Button";

import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);
  const { t, isRTL } = useContext(LanguageContext);

  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const res = await login(form);
   console.log(res)
    if (res.success) {
      navigate("/redirect");
    } else {
      let msg = t("auth_login.invalid_credentials");

      switch (res.status) {
        case 400:
          msg = t("auth_login.invalid_credentials");
          break;

        case 401:
          msg = t("auth_login.errors.unauthorized") || "Non autorisé.";
          break;

        case 403:
          msg = t("auth_login.errors.forbidden") || "Votre compte est désactivé.";
          break;

        case 404:
          msg = t("auth_login.errors.not_found") || "Compte introuvable.";
          break;

        case 429:
          msg = t("auth_login.errors.too_many_requests") || "Trop de tentatives.";
          break;

        case 500:
          msg = t("auth_login.errors.server") || "Erreur serveur.";
          break;

        default:
          msg = t("auth_login.errors.unknown") || "Erreur inconnue.";
      }

      setErrorMsg(msg);
    }

    setLoading(false);
  };

  return (
    <div
      className="
      min-h-screen flex items-center justify-center
      bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4
      "
      dir={isRTL ? "rtl" : "ltr"}
    >
      <form
        onSubmit={handleSubmit}
        className="
        w-full max-w-md
        bg-white dark:bg-gray-800
        p-8 rounded-2xl
        shadow-xl dark:shadow-lg
        border border-gray-200 dark:border-gray-700
        transition-all
        "
      >
        <h2
          className={`text-3xl font-bold text-gray-900 dark:text-white mb-6 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {t("auth_login.login_title")}
        </h2>

        {errorMsg && (
          <p
            className="
            mb-4 text-red-600 bg-red-50
            dark:bg-red-900/20 border border-red-300 dark:border-red-700
            px-3 py-2 rounded-md text-sm animate-fadeIn
            "
          >
            {errorMsg}
          </p>
        )}

        <div className="space-y-4">
          <Input
            label={t("auth_login.email")}
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
          />

          <PasswordInput
            label={t("auth_login.password")}
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <Button
          loading={loading}
          className="mt-6 w-full py-2 rounded-lg shadow-sm hover:shadow-md transition-all"
        >
          {t("auth_login.login_btn")}
        </Button>

        <div
          className={`mt-6 flex justify-between text-sm text-blue-600 ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          <Link
            to="/reset-password"
            className="hover:underline hover:text-blue-800 dark:hover:text-blue-400 transition"
          >
            {t("auth_login.forgot_password")}
          </Link>

          <Link
            to="/register"
            className="hover:underline hover:text-blue-800 dark:hover:text-blue-400 transition"
          >
            {t("auth_login.create_account")}
          </Link>
        </div>
      </form>

      <style>{`
        .animate-fadeIn {
          animation: fadeIn .35s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
