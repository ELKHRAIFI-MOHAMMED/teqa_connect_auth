import { useState } from "react";

export default function useRegisterSteps() {
    const [step, setStep] = useState(1);
    const [role, setRole] = useState("STORE");

    const [userData, setUserData] = useState({});
    const [profileData, setProfileData] = useState({});
    const [errors, setErrors] = useState({});

    const updateUserData = (data) =>
        setUserData((prev) => ({ ...prev, ...data }));

    const updateProfileData = (data) =>
        setProfileData((prev) => ({ ...prev, ...data }));

    const updateErrors = (data) => setErrors((prev) => ({ ...prev, ...data }));

    const nextStep = () => setStep((s) => s + 1);
    const prevStep = () => setStep((s) => s - 1);

    const resetRegister = () => {
        setStep(1);
        setRole("STORE");
        setUserData({});
        setProfileData({});
        setErrors({});
    };

    return {
        step,
        setStep,
        role,
        setRole,
        userData,
        profileData,
        errors,
        updateUserData,
        updateProfileData,
        updateErrors,
        nextStep,
        prevStep,
        resetRegister,
    };
}
