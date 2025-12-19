import { useContext, useState, useRef, useCallback } from "react";
import InputPro from "../../components/ui/InputPro";
import Button from "../../components/ui/Button";
import { LanguageContext } from "../../context/LanguageContext";
import { checkStoreName } from "../../api/auth";

export default function StepStore({
  profileData = {},
  updateProfileData,
  prevStep,
  nextStep,
  errors,
  updateErrors,
  submit,
  loading,
}) {
  const { lang, t } = useContext(LanguageContext);
  const isRTL = lang === "ar";

  const [checking, setChecking] = useState(false);
  const [isValidName, setIsValidName] = useState(false);
  const debounceRef = useRef(null);

  // -------------------------------------------------------
  // ⭐ Validation locale immédiate (AFFICHAGE DIRECT)
  // -------------------------------------------------------
  const validateLocal = (value) => {
    if (!value.trim()) {
      updateErrors((prev) => ({ ...prev, store_name: t("store.errors.required") }));
      setIsValidName(false);
      return false;
    }

    if (value.length < 3) {
      updateErrors((prev) => ({ ...prev, store_name: t("store.errors.too_short") }));
      setIsValidName(false);
      return false;
    }

    // Si local OK → retirer erreur
    updateErrors((prev) => {
      const copy = { ...prev };
      delete copy.store_name;
      return copy;
    });

    return true;
  };

  // -------------------------------------------------------
  // 🔍 Vérification API (debounce)
  // -------------------------------------------------------
  const checkAPI = useCallback(
    async (name) => {
      try {
        setChecking(true);

        const res = await checkStoreName({ store_name: name });
        if (res.data?.exists) {
          updateErrors({ store_name: t("store.errors.exists") });
          setIsValidName(false);
        } else {
          updateErrors({ store_name: "" });

          setIsValidName(true);
        }
      } catch (err) {
        updateErrors((prev) => ({
          ...prev,
          store_name: t("store.errors.check_failed"),
        }));
        setIsValidName(false);
      } finally {
        setChecking(false);
      }
    },
    [updateErrors, t]
  );

  // -------------------------------------------------------
  // ✏️ Handle Change → VALIDATION DIRECTE + DEBOUNCE API
  // -------------------------------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
  console.log(errors)
    updateProfileData({ [name]: value });
    if (name === "store_name") {
      setIsValidName(false); // reset success
      if (debounceRef.current) clearTimeout(debounceRef.current);

      const validLocal = validateLocal(value); // 🔥 Validation INSTANTANÉE

      if (validLocal) {
        // Lancer vérification API après 500ms
        debounceRef.current = setTimeout(() => {
          checkAPI(value);
        }, 500);
      }
    }
  };

  // -------------------------------------------------------
  // ➡️ Continuer
  // -------------------------------------------------------
  const handleNext = async () => {
    const name = profileData.store_name;

    if (!validateLocal(name)) return;

    const res = await checkStoreName({ store_name: name });

    if (res.data.exists) {
      updateErrors({ store_name: t("store.errors.exists") });
      setIsValidName(false);
      return;
    }

    nextStep();
  };

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <h2 className={`text-xl font-semibold mb-4 ${isRTL ? "text-right" : "text-left"}`}>
        {t("store.title")}
      </h2>

      {/* Store Name */}
      <InputPro
        label={t("store.name")}
        name="store_name"
        value={profileData.store_name || ""}
        onChange={handleChange}
        error={errors.store_name ?? null}
        success={isValidName && !checking ? t("store.available") : null}
        required
        autoComplete="off"
      />

      <InputPro
        label={t("store.activity")}
        name="activity_sector"
        value={profileData.activity_sector || ""}
        onChange={handleChange}
      />

      <InputPro
        label={t("store.address")}
        name="store_address"
        value={profileData.store_address || ""}
        onChange={handleChange}
      />

      <div className={`flex gap-3 mt-6 ${isRTL ? "flex-row-reverse" : ""}`}>
        <Button className="bg-gray-400" onClick={prevStep}>
          {t("common.back")}
        </Button>


                <Button
                  className="bg-blue-600 text-white"
                  loading={loading}
                  onClick={submit}
                >
                  {t("home.register")}
                </Button>
      </div>
    </div>
  );
}
