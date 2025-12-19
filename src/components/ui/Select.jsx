// src/components/ui/SelectSimple.jsx
import { ChevronDownIcon, ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { forwardRef } from "react";

const SelectSimple = forwardRef(function SelectSimple({
  label,
  options = [],
  error,
  className = "",
  icon,
  ...props
}, ref) {
  return (
    <div className="relative mb-4">
      {label && (
        <label className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}

        <select
          ref={ref}
          className={`
            w-full px-${icon ? '10' : '3'} py-3 pr-10 rounded-xl
            bg-white dark:bg-gray-800
            text-gray-900 dark:text-gray-100
            border transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500
            appearance-none cursor-pointer
            ${error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : 'border-gray-300 dark:border-gray-600 focus:border-blue-500'
            }
            ${className}
          `}
          {...props}
        >
          {options.map((opt) => (
            <option
              key={opt.value}
              value={opt.value}
              disabled={opt.disabled}
              className="py-2"
            >
              {opt.label}
            </option>
          ))}
        </select>

        {/* Chevron custom */}
        <ChevronDownIcon className="
          absolute right-3 top-1/2 transform -translate-y-1/2
          w-5 h-5 text-gray-400 pointer-events-none
        " />

        {/* Icône d'erreur */}
        {error && (
          <ExclamationCircleIcon className="
            absolute right-10 top-1/2 transform -translate-y-1/2
            w-5 h-5 text-red-500
          " />
        )}
      </div>

      {error && (
        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
          <ExclamationCircleIcon className="w-3 h-3" />
          {error}
        </p>
      )}
    </div>
  );
});

export default SelectSimple;
