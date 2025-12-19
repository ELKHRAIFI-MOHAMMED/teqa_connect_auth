// src/components/ui/InputPro.jsx
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  EyeIcon,
  EyeSlashIcon,
  InformationCircleIcon
} from "@heroicons/react/24/solid";
import { useState, forwardRef, useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const InputPro = forwardRef(function InputPro(
  {
    label,
    name,
    type = "text",
    value = "",
    onChange,
    onBlur,
    error,
    success,
    helperText,
    required = false,
    placeholder = "",
    disabled = false,
    icon,
    iconPosition = "left",
    className = "",
    showPasswordToggle = true,
    ...props
  },
  ref
) {
  const { t, lang } = useContext(LanguageContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // RTL
  const isRTL = lang === "ar";
  const dir = isRTL ? "rtl" : "ltr";

  // Floating label
  const isFilled = Boolean(value && value.toString().trim());
  const showLabel = isFocused || isFilled;

  // Password toggle
  const inputType =
    type === "password" && showPassword && showPasswordToggle ? "text" : type;

  const passwordToggleLabel = showPassword
    ? t("auth.hide_password")
    : t("auth.show_password");

  // Icon position (auto RTL)
  const actualIconPosition =
    isRTL && iconPosition === "left"
      ? "right"
      : isRTL && iconPosition === "right"
      ? "left"
      : iconPosition;

  return (
    <div className={`relative mb-5 ${className}`} dir={dir}>
      <div className="relative group">

        {/* INPUT FIELD */}
        <input
          ref={ref}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur && onBlur(e);
          }}
          disabled={disabled}
          placeholder={showLabel ? placeholder : ""}
          aria-invalid={!!error}
          aria-describedby={
            error
              ? `${name}-error`
              : success
              ? `${name}-success`
              : helperText
              ? `${name}-help`
              : undefined
          }
          className={`
            peer w-full pt-6 pb-2 px-4 rounded-xl
            bg-white dark:bg-gray-900
            text-gray-900 dark:text-gray-100
            placeholder-gray-400 dark:placeholder-gray-500
            border transition-all duration-200
            focus:outline-none
            disabled:opacity-50 disabled:cursor-not-allowed
            ${isRTL ? "text-right" : "text-left"}
            ${
              error
                ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
                : success
                ? "border-green-500 focus:ring-2 focus:ring-green-500/30"
                : "border-gray-300 dark:border-gray-700 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30"
            }
          `}
          {...props}
        />

        {/* FLOATING LABEL */}
        <label
          htmlFor={name}
          className={`
            absolute transition-all duration-200 pointer-events-none
            ${isRTL ? "right-4" : "left-4"}
            ${
              showLabel
                ? "top-2 text-xs font-medium"
                : "top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
            }
            peer-focus:top-2 peer-focus:text-xs
            ${
              error
                ? "text-red-600 dark:text-red-400"
                : success
                ? "text-green-600 dark:text-green-400"
                : "text-gray-700 dark:text-gray-300 peer-focus:text-teal-600 dark:peer-focus:text-teal-400"
            }
          `}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>

        {/* CUSTOM ICON LEFT/RIGHT */}
        {icon && actualIconPosition === "left" && (
          <div
            className={`absolute ${
              isRTL ? "right-4" : "left-4"
            } top-1/2 transform -translate-y-1/2 text-gray-400`}
          >
            {icon}
          </div>
        )}

        {/* PASSWORD TOGGLE */}
        {type === "password" && showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={passwordToggleLabel}
            className={`
              absolute top-1/2 transform -translate-y-1/2
              text-gray-400 hover:text-gray-600 dark:hover:text-gray-300
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

        {/* SUCCESS / ERROR ICONS */}
        {success && !error && (
          <CheckCircleIcon
            className={`w-5 h-5 text-green-500 absolute top-1/2 -translate-y-1/2 ${
              isRTL ? "left-4" : "right-4"
            }`}
          />
        )}

        {error && (
          <ExclamationCircleIcon
            className={`w-5 h-5 text-red-500 absolute top-1/2 -translate-y-1/2 ${
              isRTL ? "left-4" : "right-4"
            }`}
          />
        )}
      </div>

      {/* ERROR MESSAGE */}
      {error && (
        <p
          id={`${name}-error`}
          className={`mt-1 text-sm text-red-600 dark:text-red-400 flex items-center gap-1 ${
            isRTL ? "flex-row-reverse text-right" : ""
          }`}
        >
          <ExclamationCircleIcon className="w-4 h-4" />
          {error}
        </p>
      )}

      {/* SUCCESS MESSAGE */}
      {success && !error && (
        <p
          id={`${name}-success`}
          className={`mt-1 text-sm text-green-600 dark:text-green-400`}
        >
          {success}
        </p>
      )}

      {/* HELPER TEXT */}
      {helperText && !error && !success && (
        <p
          id={`${name}-help`}
          className="mt-1 text-xs text-gray-500 dark:text-gray-400"
        >
          {helperText}
        </p>
      )}
    </div>
  );
});

// LOADING SKELETON
InputPro.Loading = function InputProLoading({ label }) {
  const { lang } = useContext(LanguageContext);
  const isRTL = lang === "ar";

  return (
    <div className="relative mb-5" dir={isRTL ? "rtl" : "ltr"}>
      <div className="w-full pt-6 pb-2 px-4 rounded-xl bg-gray-200 dark:bg-gray-700 animate-pulse">
        <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/3 mb-2" />
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded" />
      </div>
      <label
        className={`absolute ${isRTL ? "right-4" : "left-4"} top-2 text-xs text-gray-400`}
      >
        {label}
      </label>
    </div>
  );
};

// ERROR MESSAGE HELPERS
InputPro.ErrorMessages = {
  required: (t) => t("common.field_required"),
  email: (t) => t("auth.email_invalid"),
  password: {
    min: (t) => t("auth.password_min"),
    number: (t) => t("auth.password_number"),
  },
  username: {
    min: (t) => t("auth.username_min"),
    max: (t) => t("auth.username_max"),
    invalid: (t) => t("auth.username_invalid"),
  },
};

export default InputPro;
