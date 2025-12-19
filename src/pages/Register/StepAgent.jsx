// src/pages/Register/StepAgent.jsx

import { useContext } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import { LanguageContext } from "../../context/LanguageContext";

export default function StepAgent({
  profileData,
  updateProfileData,
  prevStep,
  submit,
  loading,
}) {
  const { currentLanguage, t } = useContext(LanguageContext);

  const isRTL = currentLanguage === "ar";

  const handleChange = (e) =>
    updateProfileData({ [e.target.name]: e.target.value });

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      {/* Title */}
      <h2
        className={`text-xl font-semibold text-gray-900 dark:text-white mb-4 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {t("agent.title")}
      </h2>

      {/* Fields */}
      <div className="space-y-4">
        <Input
          label={t("agent.first_name")}
          name="first_name"
          required
          value={profileData.first_name || ""}
          onChange={handleChange}
          currentLanguage={currentLanguage}
        />

        <Input
          label={t("agent.last_name")}
          name="last_name"
          required
          value={profileData.last_name || ""}
          onChange={handleChange}
          currentLanguage={currentLanguage}
        />

        <Input
          label={t("agent.bio")}
          name="bio"
          value={profileData.bio || ""}
          onChange={handleChange}
          currentLanguage={currentLanguage}
        />

        <Input
          label={t("agent.skills")}
          name="skills"
          value={profileData.skills || ""}
          onChange={handleChange}
          currentLanguage={currentLanguage}
        />
      </div>

      {/* Buttons */}
      <div className={`flex gap-3 mt-6 ${isRTL ? "flex-row-reverse" : ""}`}>
        <Button
          className="bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500"
          onClick={prevStep}
        >
          {t("common.back")}
        </Button>

        <Button
          loading={loading}
          className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          onClick={submit}
        >
          {t("agent.submit")}
        </Button>
      </div>
    </div>
  );
}
