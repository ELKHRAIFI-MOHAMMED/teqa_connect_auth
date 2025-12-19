import { useContext, useState } from "react";
import InputPro from "../../components/ui/InputPro";
import PasswordInput from "../../components/ui/PasswordInput";

import { checkEmail, checkUsername } from "../../api/auth";
import { LanguageContext } from "../../context/LanguageContext";

export default function StepUser({
    userData,
    updateUserData,
    errors,
    updateErrors,
    role,
    setRole,
    nextStep,
}) {
    const [checking, setChecking] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);
    const { t } = useContext(LanguageContext);

    const evaluatePasswordStrength = (value) => {
        let score = 0;
        if (value.length >= 8) score++;
        if (/[A-Z]/.test(value)) score++;
        if (/[a-z]/.test(value)) score++;
        if (/[0-9]/.test(value)) score++;
        if (/[^A-Za-z0-9]/.test(value)) score++;

        setPasswordStrength(score);
    };

    const handleChange = async (e) => {
        const { name, value } = e.target;
        updateUserData({ [name]: value });
        updateErrors({ [name]: "" });

        // EMAIL CHECK
        if (name === "email") {
            if (!value.trim()) return;

            try {
                setChecking(true);
                const res = await checkEmail({ email: value });
                if (res.data?.exists)
                    updateErrors({ email: t("auth.email_taken") });
            } finally {
                setChecking(false);
            }
        }

        // USERNAME CHECK
        if (name === "username") {
            if (!value.trim()) return;

            try {
                setChecking(true);
                const res = await checkUsername({ username: value });
                if (res.data?.exists)
                    updateErrors({ username: t("auth.username_taken") });
            } finally {
                setChecking(false);
            }
        }

        // PASSWORD: force meter en live
        if (name === "password") {
            evaluatePasswordStrength(value);
            updateErrors({ password: "" });
        }
    };

    // VALIDATION BEFORE NEXT
    const validateBeforeNext = () => {
        let ok = true;

        const required = ["email", "username", "password", "country"];
        required.forEach((f) => {
            if (!userData[f]) {
                updateErrors({ [f]: t("auth.required") });
                ok = false;
            }
        });

        // Email format
        const  emailRegex = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;

        if (userData.email && !emailRegex.test(userData.email)) {
            updateErrors({ email: t("auth.email_invalid") });
            ok = false;
        }

        // ---------------------------------------------------
        // 🔥 Password rules + vérification des conditions
        // ---------------------------------------------------
        if (userData.password) {
            const pass = userData.password;

            const conditions = [
                pass.length >= 8,
                /[A-Z]/.test(pass),
                /[0-9]/.test(pass),
                /[^A-Za-z0-9]/.test(pass),
            ];

            const validCount = conditions.filter(Boolean).length;

            if (validCount < 2) {
                updateErrors((prev) => ({
                    ...prev,
                    password: t("auth.password_very_weak"),
                }));
                ok = false;
            } else {
                updateErrors((prev) => ({ ...prev, password: "" }));
            }
        }

        // Si API a déjà mis des erreurs
        if (errors.email || errors.username || errors.password) ok = false;

        // Si vérif async en cours
        if (checking) ok = false;

        if (ok) nextStep();
    };

    const passwordStrengthLabel =
        passwordStrength <= 2
            ? t("reset.weak")
            : passwordStrength === 3
            ? t("reset.medium")
            : t("reset.strong");

    const passwordStrengthClass =
        passwordStrength <= 2
            ? "text-red-500"
            : passwordStrength === 3
            ? "text-yellow-500"
            : "text-green-500";

    return (
        <div>
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {t("auth.accountInfos")}
            </h2>

            <InputPro
                label={t("auth.email")}
                name="email"
                required
                value={userData.email || ""}
                error={errors.email}
                onChange={handleChange}
            />

            <InputPro
                label={t("auth.username")}
                name="username"
                required
                value={userData.username || ""}
                error={errors.username}
                onChange={handleChange}
            />

            {/* PASSWORD FIELD */}
            <PasswordInput
                label={t("auth.password")}
                name="password"
                required
                value={userData.password || ""}
                error={errors.password}
                onChange={handleChange}
            />

            {/* CONDITIONS AFFICHÉES AU USER */}
            {userData.password && (
                <ul className="mt-2 text-sm space-y-1">
                    <li className={`${userData.password.length >= 8 ? "text-green-600" : "text-red-500"}`}>
                        • {t("auth.pass_min")}
                    </li>
                    <li className={`${/[A-Z]/.test(userData.password) ? "text-green-600" : "text-red-500"}`}>
                        • {t("auth.pass_upper")}
                    </li>
                    <li className={`${/[0-9]/.test(userData.password) ? "text-green-600" : "text-red-500"}`}>
                        • {t("auth.pass_digit")}
                    </li>
                    <li className={`${/[^A-Za-z0-9]/.test(userData.password) ? "text-green-600" : "text-red-500"}`}>
                        • {t("auth.pass_special")}
                    </li>
                </ul>
            )}

            {/* PASSWORD STRENGTH METER */}
            {userData.password && (
                <div className="mt-2">
                    <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((level) => (
                            <div
                                key={level}
                                className={`h-2 flex-1 rounded transition-all ${
                                    passwordStrength >= level
                                        ? passwordStrength <= 2
                                            ? "bg-red-500"
                                            : passwordStrength === 3
                                            ? "bg-yellow-500"
                                            : "bg-green-500"
                                        : "bg-gray-300 dark:bg-gray-700"
                                }`}
                            ></div>
                        ))}
                    </div>
                    <p className={`text-xs mt-1 ${passwordStrengthClass}`}>
                        {passwordStrengthLabel}
                    </p>
                </div>
            )}

            <InputPro
                label={t("auth.country")}
                name="country"
                required
                value={userData.country || ""}
                error={errors.country}
                onChange={handleChange}
            />

            <label className="block mb-1 text-sm text-gray-600 dark:text-gray-300 mt-4">
                {t("auth.account_type") || "Type de compte"}
            </label>

            <select
                className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            >
                <option value="">{t("auth.select")}</option>
                <option value="STORE">{t("auth.role_store")}</option>
                <option value="AGENCY_OWNER">{t("auth.role_agency_owner")}</option>
                <option value="AGENCY_AGENT">{t("auth.role_agency_agent")}</option>
            </select>

            <button
                className="w-full mt-6 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed transition"
                onClick={validateBeforeNext}
                disabled={checking}
            >
                {checking ? t("auth.checking") || "Vérification..." : "Suivant →"}
            </button>
        </div>
    );
}
