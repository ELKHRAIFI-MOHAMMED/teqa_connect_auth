import { motion } from "framer-motion";
import { useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const steps = [
  {
    step: "01",
    title: "Account Registration & Subscription",
    desc:
      "Merchants create their Teqa account and choose the subscription plan that fits their business needs. Access to features is instantly unlocked based on the selected tier.",
  },
  {
    step: "02",
    title: "Store Integration",
    desc:
      "Merchants connect their e-commerce store (Shopify, WooCommerce, Prestashop, or custom API). Orders are automatically imported into Teqa for processing.",
  },
  {
    step: "03",
    title: "Customer Risk Analysis & Scoring",
    desc:
      "Each order is analyzed using AI-powered algorithms. Customers receive a risk score from 0 to 100 and are classified as High Risk, Medium Risk, or Safe.",
  },
  {
    step: "04",
    title: "Smart Order Confirmation",
    desc:
      "Orders are routed to call-center partners or internal teams based on risk score and priority. All confirmation tasks are tracked in real time.",
  },
  {
    step: "05",
    title: "Reporting & Continuous Optimization",
    desc:
      "Merchants receive detailed reports on order performance, customer reliability, and call-center efficiency to continuously optimize COD operations.",
  },
];

const How_It_Works = () => {
      useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, []);
  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50/50 via-white to-white" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-24 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            How Teqa Works
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            An end-to-end Cash on Delivery ecosystem designed to reduce risk,
            automate confirmations, and optimize performance.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gray-200 md:left-1/2 md:-translate-x-1/2" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`relative mb-20 flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Step Card */}
              <div className="md:w-1/2 px-6">
                <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                  <span className="text-sm font-semibold text-rose-600">
                    STEP {step.step}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-4 top-8 h-3 w-3 rounded-full bg-rose-600 md:left-1/2 md:-translate-x-1/2" />
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-32 rounded-3xl bg-gray-900 p-12 text-white"
        >
          <div className="grid gap-10 md:grid-cols-2">

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-semibold mb-6">
                Contact Information
              </h2>

              <ul className="space-y-3 text-gray-300">
                <li>
                  <strong className="text-white">General:</strong>{" "}
                  contact@teqa.app
                </li>
                <li>
                  <strong className="text-white">Sales:</strong>{" "}
                  sales@teqa.app
                </li>
                <li>
                  <strong className="text-white">Support:</strong>{" "}
                  support@teqaconnect.com
                </li>
                <li className="mt-4">
                  <strong className="text-white">Address:</strong><br />
                  Av. Allal Ben Abdullah,<br />
                  Rabat – Morocco
                </li>
              </ul>
            </div>

            {/* Social + Blog */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Follow & Learn More
              </h3>

              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="https://www.instagram.com/teqaconnect" target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/share/17QUTjY5nJ/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/teqaconnect/" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://x.com/teqaconnect" target="_blank" rel="noreferrer">
                    X (Twitter)
                  </a>
                </li>
                <li className="pt-4">
                  <strong className="text-white">Blog:</strong>{" "}
                  <a href="https://teqa.blog" target="_blank" rel="noreferrer">
                    teqa.blog
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default How_It_Works;
