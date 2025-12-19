// src/pages/ResetPasswordConfirm.jsx
import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { LanguageContext } from "../context/LanguageContext";
import HomeIconButton from "../components/misc/HomeIconButton";
import ThemeToggle from "../components/misc/ThemeToggle";
import LanguageSwitcher from "../components/misc/LanguageSwitcher";

export default function ResetPasswordConfirm() {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const { t, isRTL } = useContext(LanguageContext);

  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [strength, setStrength] = useState(0);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  // -------------------------
  // Password Strength Checker
  // -------------------------
  const evaluatePasswordStrength = (value) => {
    let score = 0;
    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[a-z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;

    setStrength(score);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    setMessage(null);

    if (!password) {
      setError(t("reset.password_required"));
      setLoading(false);
      return;
    }

    if (password !== confirmPass) {
      setError(t("reset.password_mismatch"));
      setLoading(false);
      return;
    }

    try {
      await axios.post("http://localhost:8000/auth/password/reset/confirm/", {
        uid,
        token,
        password,
      });

      setMessage(t("reset.success"));
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.response?.data?.error || t("reset.error_generic"));
    }

    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 relative"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Header */}
      <header
        className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} flex gap-3`}
      >
        <LanguageSwitcher />
        <ThemeToggle />
        <HomeIconButton />
      </header>

      {/* Card */}
      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700">

        <h2
          className={`text-xl font-semibold mb-4 text-gray-900 dark:text-white ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {t("reset.confirm_title")}
        </h2>

        {/* PASSWORD */}
        <Input
          label={t("reset.new_password")}
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            evaluatePasswordStrength(e.target.value);
          }}
        />

        {/* PASSWORD STRENGTH METER */}
        {password && (
          <div className="mt-2">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`h-2 flex-1 rounded transition-all
                    ${
                      strength >= level
                        ? strength <= 2
                          ? "bg-red-500"
                          : strength === 3
                          ? "bg-yellow-500"
                          : "bg-green-500"
                        : "bg-gray-300 dark:bg-gray-700"
                    }`}
                ></div>
              ))}
            </div>
            <p
              className={`text-xs mt-1 ${
                strength <= 2
                  ? "text-red-500"
                  : strength === 3
                  ? "text-yellow-500"
                  : "text-green-500"
              }`}
            >
              {strength <= 2
                ? t("reset.weak")
                : strength === 3
                ? t("reset.medium")
                : t("reset.strong")}
            </p>
          </div>
        )}

        {/* CONFIRM PASSWORD */}
        <Input
          label={t("reset.confirm_password")}
          type="password"
          className="mt-3"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
        />

        {/* ERROR MESSAGE */}
        {error && (
          <p
            className={`mt-2 text-sm bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-700 px-3 py-2 rounded-md ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {error}
          </p>
        )}

        {/* SUCCESS MESSAGE */}
        {message && (
          <p
            className={`mt-2 text-sm bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-700 px-3 py-2 rounded-md ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {message}
          </p>
        )}

        {/* SUBMIT BUTTON */}
        <Button className="mt-4 w-full" onClick={handleSubmit} loading={loading}>
          {t("reset.confirm_button")}
        </Button>
      </div>
    </div>
  );
}
