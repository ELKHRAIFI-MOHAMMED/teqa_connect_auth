import Button from "../../components/ui/Button";

export default function StepStorePlan({
  profileData,
  updateProfileData,
  prevStep,
  submit,
  loading,
}) {
  const selectPlan = (plan) =>
    updateProfileData({ subscription_plan: plan });

  const plans = [
    { id: "basic", name: "Basic", price: "10€/mois",
      features: ["1 Store", "5 produits", "Support email"] },
    { id: "pro", name: "Pro", price: "29€/mois",
      features: ["Store illimité", "50 produits", "Support chat + email"] },
    { id: "premium", name: "Premium", price: "59€/mois",
      features: ["Toutes options", "Support prioritaire", "API"] }
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Choisissez votre plan d’abonnement
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((p) => (
          <div
            key={p.id}
            onClick={() => selectPlan(p.id)}
            className={`p-4 border rounded-lg cursor-pointer transition ${
              profileData.subscription_plan === p.id
                ? "border-blue-600 bg-blue-50 dark:bg-blue-900"
                : "border-gray-300"
            }`}
          >
            <h3 className="text-lg font-bold">{p.name}</h3>
            <p className="text-blue-600">{p.price}</p>

            <ul className="text-sm mt-2">
              {p.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>

            <Button
              className="mt-4 w-full"
              onClick={() => selectPlan(p.id)}
            >
              Choisir
            </Button>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mt-6">
        <Button className="bg-gray-400" onClick={prevStep}>Retour</Button>
        <Button
          className="bg-blue-600 text-white"
          disabled={!profileData.subscription_plan || loading}
          loading={loading}
          onClick={submit}
        >
          Créer le compte
        </Button>
      </div>
    </div>
  );
}
