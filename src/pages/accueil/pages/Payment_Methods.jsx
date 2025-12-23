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

const PaymentMethods = () => {
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
            Payment Methods
          </h1>
          <p className="mt-4 text-gray-600">
            Secure, flexible, and convenient payment options for Teqa Connect merchants.
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

          {/* Bank Cards */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">1. Bank Cards</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Visa</li>
              <li>Mastercard</li>
            </ul>
            <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm">
              Payments are processed through a <strong>PCI-compliant</strong> and
              secure payment gateway.
            </div>
          </motion.div>

          {/* Bank Transfers */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">2. Bank Transfers</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>International bank transfers</li>
              <li>Local bank transfers</li>
            </ul>
            <p className="mt-4">
              Processing time is typically <strong>1–3 business days</strong>.
              Please include your <strong>account ID or invoice number</strong>{" "}
              to ensure accurate and timely credit.
            </p>
          </motion.div>

          {/* Money Transfer */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">3. Money Transfer Agencies</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cash Plus</li>
              <li>Wafa Cash</li>
              <li>Western Union</li>
            </ul>
            <p className="mt-4">
              Always provide your <strong>Teqa account ID</strong> when
              completing the transfer to ensure proper allocation.
            </p>
          </motion.div>

          {/* Crypto */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">4. Crypto Payments</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>USDT (Tether)</li>
            </ul>
            <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm">
              Crypto payments are accepted via our secure crypto gateway. Include
              your <strong>account ID</strong> in the transaction note.
            </div>
          </motion.div>

          {/* Billing */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">Billing & Policies</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Subscription frequency: Monthly, Quarterly, or Annual</li>
              <li>All payments are processed in USD</li>
              <li>Prices exclude applicable taxes unless stated otherwise</li>
              <li>Refunds and overage fees follow the Refund Policy</li>
            </ul>
          </motion.div>

          {/* Security */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">Security</h2>
            <p>
              All payment methods are protected with{" "}
              <strong>industry-standard encryption</strong> and secure processing
              to safeguard your financial data.
            </p>
          </motion.div>

          {/* Help */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">Need Help with Payment?</h2>
            <p>
              For billing issues or payment assistance, contact our billing team
              at{" "}
              <a
                href="mailto:Billing@teqa.app"
                className="text-rose-600 hover:underline"
              >
                Billing@teqa.app
              </a>
              .
            </p>
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
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
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

export default PaymentMethods;
