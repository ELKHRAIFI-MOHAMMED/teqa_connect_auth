// src/pages/Register/StepAgency.jsx

import { useContext } from "react";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import FileUpload from "../../components/ui/FileUpload";
import { LanguageContext } from "../../context/LanguageContext";
import { checkAgencyeName } from "../../api/auth";

export default function StepAgency({
    profileData,
    updateProfileData,
    prevStep,
    submit,
    loading,
    updateErrors,
    errors,
}) {
    const { t, lang } = useContext(LanguageContext);
    const isRTL = lang === "ar";

    const handleChange = async (e) => {
        const { name, value } = e.target;
        updateProfileData({ [name]: value });

        // reset error
        updateErrors({ [name]: "" });

        // Vérification du nom d'agence en temps réel
        if (name === "agency_name" && value.trim() !== "") {
            const res = await checkAgencyeName({ agency_name: value });
            if (res.data?.exists) {
                updateErrors({ agency_name: t("agency.taken") });
            } else {
                updateErrors({ agency_name: "" });
            }
        }
    };

    // ───────────────────────────────────────────────
    // 🔍 VALIDATION AVANT SUBMIT
    // ───────────────────────────────────────────────
    const validateBeforeSubmit = () => {
        let ok = true;

        const requiredFields = ["agency_name", "industry"];

        requiredFields.forEach((field) => {
            if (!profileData[field] || profileData[field].trim() === "") {
                updateErrors({ [field]: t("auth.required") });
                ok = false;
            }
        });

        // ne pas soumettre si erreur async sur le nom d'agence
        if (errors.agency_name) ok = false;

        if (ok) submit();
    };

    return (
        <div dir={isRTL ? "rtl" : "ltr"}>
            {/* Title */}
            <h2
                className={`text-xl font-semibold text-gray-900 dark:text-white mb-4 ${
                    isRTL ? "text-right" : "text-left"
                }`}
            >
                {t("agency.title")}
            </h2>

            {/* Fields */}
            <div className="space-y-4">
                <Input
                    label={t("agency.name")}
                    name="agency_name"
                    required
                    value={profileData.agency_name || ""}
                    onChange={handleChange}
                    currentLanguage={lang}
                    error={errors.agency_name ?? null}
                />

                <Input
                    label={t("agency.industry")}
                    name="industry"
                    required
                    value={profileData.industry || ""}
                    onChange={handleChange}
                    currentLanguage={lang}
                    error={errors.industry ?? null}
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
                    onClick={validateBeforeSubmit}
                >
                    {t("agency.submit")}
                </Button>
            </div>
        </div>
    );
}
