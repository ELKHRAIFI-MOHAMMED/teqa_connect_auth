// src/pages/Register.jsx
import { useState, useContext } from "react";
import { register } from "../../api/auth";
import useRegisterSteps from "../../hooks/useRegisterSteps";

import StepUser from "./StepUser";
import StepStore from "./StepStore";
import StepStorePlan from "./StepStorePlan";
import StepAgency from "./StepAgency";
import StepAgent from "./StepAgent";

import StepProgress from "../../components/misc/StepProgress";
import LanguageSwitcher from "../../components/misc/LanguageSwitcher";
import ThemeToggle from "../../components/misc/ThemeToggle";

import { LanguageContext } from "../../context/LanguageContext";

export default function Register() {
  const { t, isRTL } = useContext(LanguageContext);

  const {
    step,
    setStep,
    role,
    setRole,
    userData,
    updateUserData,
    profileData,
    updateProfileData,
    errors,
    updateErrors,
    nextStep,
    prevStep,
    resetRegister,
  } = useRegisterSteps();

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  // -------------------------------------------------------
  // 📌 SUBMIT FINAL
  // -------------------------------------------------------
  const handleSubmit = async () => {
    setLoading(true);

    let payload;
    const containsFile =
      profileData.verification_document ||
      profileData.logo ||
      profileData.file;

    if (containsFile) {
      payload = new FormData();
      Object.entries(userData).forEach(([k, v]) => payload.append(k, v));
      payload.append("role", role);
      Object.entries(profileData).forEach(([k, v]) => payload.append(k, v));
    } else {
      payload = { ...userData, role, ...profileData };
    }

    try {
      await register(payload);
      setDone(true);
      resetRegister();
    } catch (err) {
      const backend = err.response?.data ?? {};

      if (backend.password) updateErrors({ password: backend.password[0] });
      if (backend.email) updateErrors({ email: backend.email[0] });
      if (backend.username) updateErrors({ username: backend.username[0] });
      if (backend.country) updateErrors({ country: backend.country[0] });

      alert(t("register.fix_errors"));
    }

    setLoading(false);
  };

  // -------------------------------------------------------
  // 🟢 SUCCESS SCREEN
  // -------------------------------------------------------
  if (done) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="p-6 bg-white dark:bg-gray-800 rounded shadow text-center">
          <h2 className="text-xl font-semibold text-green-600">
            {t("register.success")}
          </h2>
          <p className="text-gray-500 mt-2">
            {t("register.can_login_now")}
          </p>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------
  // 🟦 MAIN FORM
  // -------------------------------------------------------
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <header className={`absolute top-4 flex gap-3 ${isRTL ? "left-4" : "right-4"}`}>
        <LanguageSwitcher />
        <ThemeToggle />
      </header>

      <div className="w-full max-w-xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow">

        {/* Step progress */}
        <StepProgress step={step} total={2} />

        {/* STEP 1 – User Info */}
        {step === 1 && (
          <StepUser
            userData={userData}
            updateUserData={updateUserData}
            errors={errors}
            updateErrors={updateErrors}
            role={role}
            setRole={setRole}
            nextStep={nextStep}
          />
        )}

        {/* STEP 2 – STORE OWNER */}
        {step === 2 && role === "STORE" && (
          <StepStore
            profileData={profileData}
            updateProfileData={updateProfileData}
            prevStep={prevStep}
            nextStep={() => setStep(3)}
            errors={errors}
            updateErrors={updateErrors}
            submit={handleSubmit}
            loading={loading}
          />
        )}

        {/* STEP 3 – STORE PLAN */}
        {step === 3 && role === "STORE" && (
          <StepStorePlan
            profileData={profileData}
            updateProfileData={updateProfileData}
            prevStep={() => setStep(2)}
            submit={handleSubmit}
            loading={loading}
          />
        )}

        {/* STEP 2 – AGENCY OWNER */}
        {step === 2 && role === "AGENCY_OWNER" && (
          <StepAgency
            profileData={profileData}
            updateProfileData={updateProfileData}
            prevStep={prevStep}
            submit={handleSubmit}
            loading={loading}
            errors={errors}
            updateErrors={updateErrors}
          />
        )}

        {/* STEP 2 – AGENCY AGENT */}
        {step === 2 && role === "AGENCY_AGENT" && (
          <StepAgent
            profileData={profileData}
            updateProfileData={updateProfileData}
            prevStep={prevStep}
            submit={handleSubmit}
            loading={loading}
          />
        )}
      </div>
    </div>
  );
}
