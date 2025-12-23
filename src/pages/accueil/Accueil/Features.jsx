import { motion } from "framer-motion";

export default function Features() {
  const features = [
    {
      title: "COD Risk Scoring",
      description:
        "AI-powered scoring evaluates each customer from 0 to 100 and classifies them into High Risk, Medium Risk, or Safe.",
    },
    {
      title: "Smart Order Confirmation System",
      description:
        "Automatically routes orders based on scoring rules and priority.",
    },
    {
      title: "Seamless E-commerce Integrations",
      description:
        "Ready-made plugins and flexible API integration.",
    },
    {
      title: "Fraud & Spam Detection",
      description:
        "Automatically identifies suspicious or duplicate orders.",
    },
    {
      title: "Customer History & Profiling",
      description:
        "Tracks past deliveries, returns, and interaction notes.",
    },
    {
      title: "Real-Time Status Sync",
      description:
        "Instant synchronization with your e-commerce store.",
    },
    {
      title: "Social Media Integrations",
      description:
        "WhatsApp API, Facebook Leads, TikTok Forms, and more.",
    },
    {
      title: "Performance Tracking & SLA Monitoring",
      description:
        "Track confirmation rates and operational efficiency.",
    },
    {
      title: "Bulk Data Import & Export",
      description:
        "Import customer lists and export analytics easily.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-black">
            Powerful Features
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Everything you need to reduce returns and optimize COD operations.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-gray-200 bg-rose-50 p-6 shadow-sm"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                <span className="h-4 w-4 rounded-full bg-indigo-600"></span>
              </div>

              <h3 className="text-lg font-semibold text-black">
                {feature.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
