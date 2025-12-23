import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Account Registration & Subscription",
      description:
        "Merchants create their Teqa account and select the plan that fits their business needs. This ensures immediate access to features based on their subscription tier.",
    },
    {
      id: 2,
      title: "Store Integration",
      description:
        "Merchants connect their e-commerce store (Shopify, WooCommerce, Prestashop, or custom API). Orders are automatically imported into Teqa for processing.",
    },
    {
      id: 3,
      title: "Customer Risk Analysis & Scoring",
      description:
        "Every order is analyzed using AI-powered algorithms. Each customer receives a risk score (0–100) and is classified as High Risk, Medium Risk, or Safe.",
    },
    {
      id: 4,
      title: "Smart Order Confirmation",
      description:
        "Orders are routed to call-center partners or internal teams based on risk scoring and priority.",
    },
    {
      id: 5,
      title: "Reporting & Continuous Optimization",
      description:
        "Merchants receive detailed reports to optimize COD operations and improve delivery success rates.",
    },
  ];

  return (
    <section className="bg-indigo-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-black">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Teqa End-to-End COD Ecosystem Workflow
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white font-bold">
                {step.id}
              </div>

              <h3 className="text-lg font-semibold text-black">
                {step.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
