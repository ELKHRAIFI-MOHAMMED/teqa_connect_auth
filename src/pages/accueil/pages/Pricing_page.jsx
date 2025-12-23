import { motion } from "framer-motion";
import { useEffect } from "react";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

const plans = [
  {
    name: "Free",
    price: "$0/mo",
    highlight: false,
    features: [
      "Up to 200 orders / month",
      "1 store",
      "1 team member",
      "Basic analytics (limited)",
      "Email support (48–72h)",
      "No account manager",
      "2 free integrations"
    ],
    cta: "Sign Up Free",
  },
  {
    name: "Starter",
    price: "$55/mo",
    highlight: false,
    features: [
      "Up to 300 orders / month",
      "Overage: $0.41 (1–200), $0.55 (201+)",
      "2 stores",
      "2 users included (+$4.10/user)",
      "Shipping analytics by city/area",
      "Email support (24–48h)",
      "Unlimited integrations",
    ],
    cta: "Sign Up",
  },
  {
    name: "Advanced",
    price: "$245/mo",
    highlight: true,
    features: [
      "Up to 1,500 orders / month",
      "Overage: $0.33 (1–1,000), $0.41 (1,001+)",
      "5 stores",
      "5 users included (+$3.30/user)",
      "Carrier comparison & regional insights",
      "Email + chat support (12–24h)",
      "Optional account manager ($82/mo)",
            "Unlimited integrations",

    ],
    cta: "Sign Up",
  },
  {
    name: "Professional",
    price: "$680/mo",
    highlight: false,
    features: [
      "Up to 5,000 orders / month",
      "Overage: $0.25 (1–3,000), $0.33 (3,001+)",
      "10 stores",
      "15 users included (+$2.73/user)",
      "Advanced COD customer analytics",
      "Priority support (4–8h SLA)",
      "Account manager included",
      "OMS integration add-on (+$300/mo)",
            "Unlimited integrations",

    ],
    cta: "Sign Up",
  },
  {
    name: "Enterprise",
    price: "Custom",
    highlight: false,
    features: [
      "Custom or unlimited orders (fair use)",
      "Negotiated overage rates",
      "20+ stores",
      "Up to 50 users included (+$2.18/user)",
      "Custom dashboards & predictive analytics",
      "24/7 priority support with SLA",
      "Dedicated account manager",
      "OMS integration add-on (+$300/mo)",
            "Unlimited integrations",

    ],
    cta: "Contact Sales",
  },
];

const Pricing = () => {
      useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, []);
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-20 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Teqa Connect Pricing
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            Choose the plan that fits your order volume and analytics needs.
            Switch anytime. <strong>Quarterly: 15% off · Annual: 20% off</strong>
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`rounded-3xl border p-8 shadow-sm flex flex-col ${
                plan.highlight
                  ? "border-rose-600 bg-rose-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {plan.name}
              </h3>

              <p className="text-3xl font-bold text-gray-900 mb-6">
                {plan.price}
              </p>

              <ul className="mb-8 space-y-3 text-gray-700 text-sm flex-1">
                {plan.features.map((f, idx) => (
                  <li key={idx}>• {f}</li>
                ))}
              </ul>

              <a
                href={plan.name === "Enterprise" ? "/contact" : "/signup"}
                className={`mt-auto inline-flex items-center justify-center rounded-xl px-4 py-3 font-medium transition ${
                  plan.highlight
                    ? "bg-rose-600 text-white hover:bg-rose-700"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Billing Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-24 max-w-4xl mx-auto text-gray-700"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Billing & Policies
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mid-cycle plan changes are prorated</li>
            <li>Refunds per contract; overage fees are non-refundable</li>
            <li>Usage notifications at 80% and 100% of order limits</li>
            <li>Prices exclude applicable taxes unless stated</li>
          </ul>
        </motion.div>

        {/* Add-ons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 max-w-4xl mx-auto text-gray-700"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Optional Add-ons
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>OMS Custom Integration (+$300/mo)</li>
            <li>Advanced Analytics Reports (on request)</li>
            <li>Dedicated Support or Training</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default Pricing;
