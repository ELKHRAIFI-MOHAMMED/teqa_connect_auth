// src/components/ui/FloatingInput.jsx
import { forwardRef, useState } from "react";
import {
  EyeIcon,
  EyeSlashIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

// Traductions internes (fallback)
const translations = {
  fr: {
    hidePassword: "Cacher le mot de passe",
    showPassword: "Afficher le mot de passe",
    required: "*",
  },
  ar: {
    hidePassword: "إخفاء كلمة المرور",
    showPassword: "إظهار كلمة المرور",
    required: "*",
  },
  en: {
    hidePassword: "Hide password",
    showPassword: "Show password",
    required: "*",
  },
};

const FloatingInput = forwardRef(function FloatingInput(
  {
    label,
    error,
    success,
    type = "text",
    className = "",
    value = "",
    required = false,
    currentLanguage = "fr",
    customTranslations,
    ...props
  },
  ref
) {
  // -------------------------------
  // STATES
  // -------------------------------
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // -------------------------------
  // TEXTES TRADUITS
  // -------------------------------
  const texts =
    customTranslations || translations[currentLanguage] || translations.fr;

  // -------------------------------
  // RTL / LTR
  // -------------------------------
  const isRTL = currentLanguage === "ar";
  const dir = isRTL ? "rtl" : "ltr";

  // -------------------------------
  // LABEL FLOTTANT
  // -------------------------------
  const isFilled = Boolean(value && value.toString().trim());
  const showLabel = isFocused || isFilled;

  const inputType =
    type === "password" && showPassword ? "text" : type;

  return (
    <div className="relative w-full" dir={dir}>
      <div className="relative">

        {/* Champ Input */}
        <input
          ref={ref}
          type={inputType}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            peer w-full pt-6 pb-2 px-4 rounded-lg
            bg-gray-50 dark:bg-gray-800/50
            border border-gray-300 dark:border-gray-600
            text-gray-900 dark:text-gray-100
            placeholder-transparent
            focus:outline-none
            focus:border-blue-500
            focus:ring-2 focus:ring-blue-500/20
            transition-all duration-200
            ${error ? "border-red-500 focus:ring-red-500/20" : ""}
            ${success ? "border-green-500 focus:ring-green-500/20" : ""}
            ${isRTL ? "text-right" : "text-left"}
            ${className}
          `}
          placeholder={label}
          {...props}
        />

        {/* Label flottant */}
        <label
          className={`
            absolute transition-all duration-200 pointer-events-none
            ${showLabel
              ? "top-2 text-xs font-medium text-blue-600 dark:text-blue-400"
              : "top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
            }
            peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600
            ${error ? "text-red-600 dark:text-red-400" : ""}
            ${success ? "text-green-600 dark:text-green-400" : ""}
            ${isRTL ? "right-4" : "left-4"}
          `}
        >
          {label}
          {required && <span className="text-red-500 ml-1">{texts.required}</span>}
        </label>

        {/* Bouton show/hide password */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? texts.hidePassword : texts.showPassword}
            className={`
              absolute top-1/2 -translate-y-1/2
              text-gray-400 dark:text-gray-500
              hover:text-gray-600 dark:hover:text-gray-300
              ${isRTL ? "left-4" : "right-4"}
            `}
          >
            {showPassword ? (
              <EyeSlashIcon className="w-5 h-5" />
            ) : (
              <EyeIcon className="w-5 h-5" />
            )}
          </button>
        )}

        {/* Icône Success */}
        {success && (
          <CheckCircleIcon
            className={`
              w-5 h-5 text-green-500 absolute top-1/2 -translate-y-1/2
              ${isRTL ? "left-4" : "right-4"}
            `}
          />
        )}

        {/* Icône Erreur */}
        {!success && error && (
          <ExclamationCircleIcon
            className={`
              w-5 h-5 text-red-500 absolute top-1/2 -translate-y-1/2
              ${isRTL ? "left-4" : "right-4"}
            `}
          />
        )}
      </div>

      {/* Texte d'erreur */}
      {error && (
        <p
          className={`mt-2 flex items-center gap-1 text-sm text-red-600 dark:text-red-400 ${
            isRTL ? "text-right flex-row-reverse" : "text-left"
          }`}
        >
          <ExclamationCircleIcon className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
});

export default FloatingInput;
