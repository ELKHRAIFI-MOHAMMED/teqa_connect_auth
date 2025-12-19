// src/components/ui/Button.jsx
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ArrowPathIcon
} from "@heroicons/react/24/outline";

export default function Button({
  children,
  className = "",
  loading = false,
  variant = "primary",
  size = "medium",
  icon = null,
  iconPosition = "left",
  fullWidth = true,
  ...props
}) {
  // Styles par variante
  const variantStyles = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl shadow-blue-500/30",
    secondary: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600",
    danger: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl shadow-red-500/30",
    success: "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl shadow-green-500/30",
    ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700",
    outline: "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 dark:text-blue-400 dark:border-blue-400",
  };

  // Styles par taille
  const sizeStyles = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2.5 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Animation de chargement
  const LoadingSpinner = () => (
    <ArrowPathIcon className="w-5 h-5 animate-spin mx-auto" />
  );

  // Rendu de l'icône
  const renderIcon = () => {
    if (loading) return <LoadingSpinner />;

    const IconComponent = icon;
    if (IconComponent) {
      return <IconComponent className="w-5 h-5" />;
    }

    return null;
  };

  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-lg font-semibold
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none
        active:scale-[0.98]
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {iconPosition === "left" && renderIcon()}
      <span className={loading ? "opacity-0" : "opacity-100 transition-opacity"}>
        {children}
      </span>
      {iconPosition === "right" && renderIcon()}
    </button>
  );
}
