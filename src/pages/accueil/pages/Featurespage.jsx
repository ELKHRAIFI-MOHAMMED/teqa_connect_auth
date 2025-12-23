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

const features = [
  {
    title: "COD Risk Scoring",
    desc:
      "AI-powered scoring evaluates each customer from 0 to 100 and classifies them as High Risk, Medium Risk, or Safe. Merchants can request prepayments, flag risky orders, or prioritize safe ones to reduce returns and improve delivery success.",
  },
  {
    title: "Advanced Risk Analytics Dashboard",
    desc:
      "A full behavioral overview including preferred shipping companies, frequently ordered product categories, recommended delivery windows, and feedback from other merchants. Includes instant WhatsApp verification for rapid scoring.",
  },
  {
    title: "Smart Order Confirmation System",
    desc:
      "Automatically routes orders to call-center partners or internal teams based on scoring rules and priority. Includes notifications, tracking, and SLA monitoring for fast and accurate confirmations.",
  },
  {
    title: "Merchant–Call Center Marketplace",
    desc:
      "Connect with verified call-center partners through a transparent marketplace featuring performance ratings, SLA tracking, smart order assignment, and collaborative risk management.",
  },
  {
    title: "Seamless E-commerce Integrations",
    desc:
      "Ready-made plugins for Shopify, WooCommerce, YouCan, Dropify, Prestashop, Zid, and Salla, plus a flexible API. Supports full data sync, automation, and order import/export.",
  },
  {
    title: "Fraud & Spam Detection",
    desc:
      "Automatically detects suspicious behavior, duplicate orders, fake accounts, and abnormal patterns, protecting merchants from fraud and financial loss.",
  },
  {
    title: "Automated Rules & Webhooks",
    desc:
      "Configure intelligent rules to auto-cancel risky orders, trigger follow-up calls or WhatsApp verification, pause campaigns, or prioritize safe orders for faster shipping.",
  },
  {
    title: "Multi-Role Dashboards",
    desc:
      "Dedicated dashboards for Merchants, Call Centers, and Admins, each optimized to manage orders, confirmations, analytics, SLAs, and marketplace performance.",
  },
  {
    title: "Customer History & Behavior Profiling",
    desc:
      "Build detailed customer profiles tracking past deliveries, returns, and interactions to improve prediction accuracy and reduce operational risk.",
  },
  {
    title: "Real-Time Status Sync",
    desc:
      "All order updates — confirmations, cancellations, and deliveries — are instantly synced with your e-commerce store for full transparency.",
  },
  {
    title: "Social Media Integrations",
    desc:
      "Native support for WhatsApp API, Facebook Leads, TikTok Forms, and Google Sheets — perfect for merchants selling directly through social channels.",
  },
  {
    title: "Performance Tracking & SLA Monitoring",
    desc:
      "Track call-center response times, confirmation rates, and service quality to ensure consistent, high-standard operations.",
  },
  {
    title: "Bulk Data Import & Export",
    desc:
      "Import customer lists, export analytics, and synchronize records across systems to save time and improve decision-making.",
  },
];

const Featurespage = () => {
      useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, []);
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-white" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-20 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Teqa Connect Features
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            Everything you need to reduce COD risk, automate confirmations,
            and scale operations with confidence.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-rose-600 transition">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-28 rounded-3xl bg-gray-900 p-12 text-center text-white"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Ready to Secure Your COD Operations?
          </h2>
          <p className="mb-6 text-gray-300">
            Start using Teqa Connect to reduce fraud, improve delivery success,
            and make smarter decisions with AI-powered insights.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-rose-600 px-8 py-3 font-medium text-white hover:bg-rose-700 transition"
          >
            Get Started
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Featurespage;