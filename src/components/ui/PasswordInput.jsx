// src/components/ui/PasswordInputPro.jsx
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import { useState, forwardRef, useContext, useEffect } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const PasswordInputPro = forwardRef(function PasswordInputPro(
  {
    label,
    name,
    value = "",
    onChange,
    onBlur,
    error,
    success,
    required = true,
    disabled = false,
    className = "",
    showStrength = true,
    ...props
  },
  ref
) {
  const { t, lang } = useContext(LanguageContext);
  const isRTL = lang === "ar";

  const [show, setShow] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Float label
  const isFilled = Boolean(value.trim());
  const showLabel = isFocused || isFilled;

  // Strength state
  const [strength, setStrength] = useState({
    level: 0,
    label: "",
    color: "",
    score: 0,
  });

  // PASSWORD STRENGTH CALCULATION
  useEffect(() => {
    if (!value || !showStrength) {
      setStrength({ level: 0, label: "", color: "", score: 0 });
      return;
    }

    let score = 0;

    if (value.length >= 8) score += 25;
    if (value.length >= 12) score += 10;

    if (/[A-Z]/.test(value)) score += 20;
    if (/[a-z]/.test(value)) score += 20;
    if (/\d/.test(value)) score += 15;
    if (/[^A-Za-z0-9]/.test(value)) score += 10;

    score = Math.min(score, 100);

    let label = "";
    let color = "";

    if (score < 40) {
      label = t("auth.password_weak") || "Faible";
      color = "bg-red-500";
    } else if (score < 70) {
      label = t("auth.password_medium") || "Moyen";
      color = "bg-yellow-500";
    } else if (score < 90) {
      label = t("auth.password_good") || "Bon";
      color = "bg-blue-500";
    } else {
      label = t("auth.password_strong") || "Fort";
      color = "bg-green-500";
    }

    setStrength({ level: score, label, color, score });
  }, [value, showStrength, t]);

  return (
    <div className={`relative mb-6 ${className}`} dir={isRTL ? "rtl" : "ltr"}>

      {/* FLOAT LABEL INPUT */}
      <div className="relative">
        <input
          ref={ref}
          type={show ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur && onBlur(e);
          }}
          disabled={disabled}
          className={`
            peer w-full pt-6 pb-2 px-4 rounded-xl
            bg-white dark:bg-gray-900
            text-gray-900 dark:text-gray-100
            border transition-all duration-200
            focus:outline-none
            ${isRTL ? "text-right" : "text-left"}
            ${
              error
                ? "border-red-500 focus:ring-2 focus:ring-red-400/40"
                : success
                ? "border-green-500 focus:ring-2 focus:ring-green-400/40"
                : "border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-400/40"
            }
          `}
          placeholder={showLabel ? "" : label}
          {...props}
        />

        {/* Floating label */}
        <label
          className={`
            absolute pointer-events-none transition-all duration-200
            ${isRTL ? "right-4" : "left-4"}
            ${
              showLabel
                ? "top-2 text-xs text-blue-600 dark:text-blue-400"
                : "top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
            }
            ${error ? "text-red-600 dark:text-red-400" : ""}
            ${success ? "text-green-600 dark:text-green-400" : ""}
          `}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>

        {/* SHOW / HIDE BUTTON */}
        <button
          type="button"
          onClick={() => setShow(!show)}
          className={`
            absolute top-1/2 -translate-y-1/2
            ${isRTL ? "left-4" : "right-4"}
            text-gray-400 hover:text-gray-600 dark:hover:text-gray-300
          `}
        >
          {show ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
        </button>

        {/* SUCCESS / ERROR ICON */}
        {error && (
          <ExclamationCircleIcon
            className={`w-5 h-5 text-red-500 absolute top-1/2 -translate-y-1/2 ${
              isRTL ? "left-10" : "right-10"
            }`}
          />
        )}
        {success && !error && (
          <CheckCircleIcon
            className={`w-5 h-5 text-green-500 absolute top-1/2 -translate-y-1/2 ${
              isRTL ? "left-10" : "right-10"
            }`}
          />
        )}
      </div>

      {/* ERROR MESSAGE */}
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400 mt-1 flex items-center gap-1">
          <ExclamationCircleIcon className="w-4 h-4" />
          {error}
        </p>
      )}

      {/* SUCCESS */}
      {success && !error && (
        <p className="text-sm text-green-600 dark:text-green-400 mt-1">
          {success}
        </p>
      )}

      {/* PASSWORD STRENGTH BAR */}
      
    </div>
  );
});

export default PasswordInputPro;
