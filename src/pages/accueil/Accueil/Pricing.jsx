import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/mo",
      description: "Best to explore Teqa basics",
      features: [
        "200 orders / month",
        "1 store",
        "1 team member",
        "Basic analytics (limited)",
        "Email support (48–72h)",
        "2 free integrations"
      ],
      cta: "Sign Up Free",
      highlighted: false,
    },
    {
      name: "Starter",
      price: "$55",
      period: "/mo",
      description: "For small growing stores",
      features: [
        "300 orders / month",
        "2 stores",
        "2 team members",
        "Shipping & COD success overview",
        "Email support (24–48h)",
        "Unlimited integrations",
      ],
      cta: "Sign Up",
      highlighted: true,
    },
    {
      name: "Advanced",
      price: "$245",
      period: "/mo",
      description: "Advanced analytics & performance",
      features: [
        "1,500 orders / month",
        "5 stores",
        "5 team members",
        "Carrier comparison by city",
        "Delivery speed & reliability",
        "Email + Chat support (12–24h)",
        "Optional account manager",
        "Unlimited integrations"
      ],
      cta: "Sign Up",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$680",
      period: "/mo",
      description: "For high-volume COD operations",
      features: [
        "5,000 orders / month",
        "10 stores",
        "15 team members",
        "Customer & basket analytics",
        "Preferred delivery windows",
        "Priority support (4–8h SLA)",
        "Account manager included",
        "Unlimited integrations"
      ],
      cta: "Sign Up",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Large-scale & custom operations",
      features: [
        "Unlimited orders (Fair Use)",
        "20+ stores",
        "50 users",
        "Custom dashboards & AI models",
        "24/7 priority support",
        "Dedicated account manager",
        "Unlimited integrations",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-black">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that fits your COD volume and analytics needs.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className={`rounded-2xl border p-8 shadow-sm ${
                plan.highlighted
                  ? "border-indigo-600 bg-indigo-50"
                  : "border-gray-200 bg-rose-50"
              }`}
            >
              <h3 className="text-xl font-bold text-black">{plan.name}</h3>

              <p className="mt-2 text-sm text-gray-600">{plan.description}</p>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-black">
                  {plan.price}
                </span>
                <span className="text-sm text-gray-500">{plan.period}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-indigo-600">✓</span>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-lg py-3 font-semibold transition ${
                  plan.highlighted
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border border-gray-300 bg-white hover:bg-gray-50"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center text-sm text-gray-500"
        >
          Questions about pricing? Contact{" "}
          <a
            href="mailto:sales@teqa.app"
            className="text-indigo-600 hover:underline"
          >
            sales@teqa.app
          </a>
        </motion.p>
      </div>
    </section>
  );
}
