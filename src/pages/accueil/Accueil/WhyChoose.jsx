import { motion } from "framer-motion";

export default function WhyChoose() {
  const reasons = [
    {
      title: "Risk Analytics",
      description:
        "Understand potential risks before accepting COD orders and make data-driven decisions.",
    },
    {
      title: "Customer Scoring",
      description:
        "Evaluate customer reliability based on purchasing behavior and delivery outcomes.",
    },
    {
      title: "Merchant–Call Center Marketplace",
      description:
        "Connect with verified call centers and delivery partners to streamline operations and ensure smooth COD processes.",
    },
  ];

  return (
    <section className="bg-indigo-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-black">
            Why Choose Teqa Connect
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Protect your business, make smarter decisions, and integrate seamlessly.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-2 items-center">

          {/* Left list */}
          <div className="space-y-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <h3 className="text-lg font-semibold text-indigo-600">
                  {reason.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="flex h-[380px] w-full max-w-lg items-center justify-center rounded-2xl bg-indigo-200/70">
              <div className="flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-300">
                  🛡️
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Enterprise Security
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
