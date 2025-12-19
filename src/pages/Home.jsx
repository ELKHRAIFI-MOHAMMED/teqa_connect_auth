// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { useContext } from "react";

import LanguageSwitcher from "../components/misc/LanguageSwitcher";
import ThemeToggle from "../components/misc/ThemeToggle";
import HomeIconButton from "../components/misc/HomeIconButton";
import { LanguageContext } from "../context/LanguageContext";

export default function Home() {
  const { t, lang } = useContext(LanguageContext);

  const isRTL = lang === "ar";

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="min-h-screen flex flex-col items-center justify-center
                 bg-gray-50 dark:bg-gray-900 text-center px-6"
    >
      {/* HEADER ACTIONS */}
      <header
        className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} flex gap-3`}
      >
        <LanguageSwitcher />
        <ThemeToggle />
        <HomeIconButton/>
      </header>

      {/* TITLE */}
      <h1
        className={`text-4xl font-bold text-gray-900 dark:text-white mb-4
        ${isRTL ? "text-right" : "text-center"}`}
      >
        {t("home.title")} <span className="text-blue-600">SaaS</span>
      </h1>

      {/* SUBTITLE */}
      <p
        className={`text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed
        ${isRTL ? "text-right" : "text-center"}`}
      >
        {t("home.subtitle")}
      </p>

      {/* BUTTONS */}
      <div className={`flex gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
        <Link
          to="/login"
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700
          text-white rounded-md transition"
        >
          {t("home.login")}
        </Link>

        <Link
          to="/register"
          className="px-6 py-2 bg-gray-200 hover:bg-gray-300
          text-gray-800 rounded-md dark:bg-gray-700 dark:text-gray-200
          dark:hover:bg-gray-600 transition"
        >
          {t("home.register")}
        </Link>
      </div>
    </div>
  );
}
