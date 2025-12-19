// src/pages/ResetPasswordRequest.jsx
import { useState, useContext } from "react";
import Button from "../components/ui/Button";
import { requestPasswordReset } from "../api/auth";

import { LanguageContext } from "../context/LanguageContext";
import InputPro from "../components/ui/InputPro";
import LanguageSwitcher from "../components/misc/LanguageSwitcher";
import ThemeToggle from "../components/misc/ThemeToggle";
import HomeIconButton from "../components/misc/HomeIconButton";

export default function ResetPasswordRequest() {
    const { t, isRTL } = useContext(LanguageContext);

    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email.trim() !== "") {
            setLoading(true);
            setError("");
            await requestPasswordReset({ email });
            setSent(true);
            setLoading(false);
        } else {
            setError(t("reset.required"));
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4 relative"
            dir={isRTL ? "rtl" : "ltr"}
        >
            {/* Header */}
            <header
                className={`absolute top-4 flex gap-3 ${
                    isRTL ? "left-4" : "right-4"
                }`}
            >
                <LanguageSwitcher />
                <ThemeToggle />
                <HomeIconButton />
            </header>

            {/* Form Container */}
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md border border-gray-100 dark:border-gray-700 transition-all"
            >
                <h2
                    className={`text-2xl font-semibold mb-5 text-gray-900 dark:text-white ${
                        isRTL ? "text-right" : "text-left"
                    }`}
                >
                    {t("reset.request_title")}
                </h2>

                {/* SUCCESS MESSAGE */}
                {sent ? (
                    <p
                        className={`text-green-700 dark:text-green-400 text-sm bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 px-4 py-3 rounded-md animate-fadeIn ${
                            isRTL ? "text-right" : "text-left"
                        }`}
                    >
                        {t("reset.email_sent")}
                    </p>
                ) : (
                    <>
                        {/* Email Input */}
                        <InputPro
                            label={t("auth.email")}
                            required
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`${
                                error
                                    ? "ring-1 ring-red-400 focus:ring-red-500"
                                    : ""
                            }`}
                        />

                        {/* ERROR MESSAGE */}
                        {error && (
                            <div
                                className={`mt-2 text-sm text-red-700 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 px-3 py-2 rounded-md animate-fadeIn ${
                                    isRTL ? "text-right" : "text-left"
                                }`}
                            >
                                {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <Button loading={loading} className="mt-4 w-full">
                            {t("reset.send_link")}
                        </Button>
                    </>
                )}
            </form>

            {/* Small fade animation */}
            <style>{`
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(4px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
