import { motion } from "framer-motion";
import { useEffect } from "react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const RefundPolicy = () => {
      useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, []);
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rose-50/50 via-white to-white py-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Teqa Connect Refund Policy
          </h1>
          <p className="mt-4 text-gray-600">
            Last updated: {new Date().getFullYear()}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10"
        >

          {/* Introduction */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">Introduction</h2>
            <p>
              At <strong>Teqa Connect</strong>, we provide an advanced platform
              for Cash-on-Delivery risk analytics, customer scoring, and
              marketplace management. We are committed to transparency and
              fairness in all billing and refund practices.
            </p>
          </motion.div>

          {/* Refunds */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">
              1. Refunds (First 7 Days – First Monthly Payment Only)
            </h2>

            <p className="mb-4">
              If you cancel within <strong>7 calendar days</strong> after your
              first monthly subscription payment, we will refund the unused
              portion of that billing cycle on a{" "}
              <strong>pro-rated basis</strong>.
            </p>

            <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-gray-900 mb-4">
              <strong>Refund calculation:</strong>
              <br />
              (Monthly fee ÷ total days in billing cycle) × unused days remaining
            </div>

            <p className="font-semibold text-gray-900 mb-2">Exclusions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Renewals or subsequent subscription payments</li>
              <li>Add-ons, upgrades, or usage-based fees</li>
              <li>Services already delivered or activated</li>
            </ul>

            <p className="mt-4">
              <strong>How to request a refund:</strong>
              <br />
              Email{" "}
              <a
                href="mailto:Billing@teqa.app"
                className="text-rose-600 hover:underline"
              >
                Billing@teqa.app
              </a>{" "}
              from your registered email with your account ID before the 7-day
              window ends. Approved refunds are issued within{" "}
              <strong>5–10 business days</strong>.
            </p>
          </motion.div>

          {/* Billing */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">2. Billing & Renewals</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All subscriptions are billed in full at purchase</li>
              <li>Plans renew automatically unless canceled before renewal</li>
              <li>Customers are responsible for managing cancellations</li>
              <li>
                Payments are final except for the first 7-day refund eligibility
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">3. Support & Assistance</h2>
            <p>
              For billing or technical inquiries, please contact our billing
              team at{" "}
              <a
                href="mailto:Billing@teqa.app"
                className="text-rose-600 hover:underline"
              >
                Billing@teqa.app
              </a>
              .
            </p>
          </motion.div>

          {/* Acceptance */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">4. Acceptance of Policy</h2>
            <p>
              By subscribing to Teqa Connect, you acknowledge and agree to this
              Refund Policy. If you do not agree, please do not proceed with your
              purchase.
            </p>

            <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800">
              <strong>Important:</strong> Refunds outside the stated conditions
              are not guaranteed.
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Shared legal styles */}
      <style jsx>{`
        .legal-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04);
        }
        .legal-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #111827;
          border-left: 4px solid #e11d48;
          padding-left: 1rem;
          margin-bottom: 1rem;
        }
      `}</style>

    </section>
  );
};

export default RefundPolicy;
