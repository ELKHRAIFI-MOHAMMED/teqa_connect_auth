// src/components/misc/HomeIconButton.jsx
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { HomeIcon } from "@heroicons/react/24/solid";

export default function HomeIconButton() {
  const navigate = useNavigate();
  const { t, isRTL } = useContext(LanguageContext);

  return (
    <button
      onClick={() => navigate("/")}
      className="
        flex items-center gap-2
        px-3 py-2 rounded-lg
        bg-gray-200 dark:bg-gray-700
        text-gray-800 dark:text-gray-100
        hover:bg-gray-300 dark:hover:bg-gray-600
        transition-all
        shadow-sm
      "
      title={t("common.go_home")}
    >
      {/* Icône */}
      <HomeIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />

      {/* Texte (optionnel) */}
      <span className={isRTL ? "order-first" : "order-last"}>
        {t("common.home")}
      </span>
    </button>
  );
}
