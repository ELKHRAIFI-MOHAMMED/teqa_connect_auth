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

const TermsAndConditions = () => {
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
            Teqa Connect Terms & Conditions
          </h1>
          <p className="mt-4 text-gray-600">
            Last reviewed: {new Date().getFullYear()}
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
              Welcome to <strong>Teqa Connect</strong>. These Terms and Conditions
              govern your use of our platform accessible at{" "}
              <a
                href="https://www.teqa.app"
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://www.teqa.app
              </a>
              . By accessing or using Teqa Connect, you agree to these Terms.
            </p>
            <p className="mt-4">
              We reserve the right to update these Terms at any time. Continued
              use constitutes acceptance of the updated Terms.
            </p>
          </motion.div>

          {/* Definitions */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">Definitions</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Client / You:</strong> Merchant or business using Teqa Connect</li>
              <li><strong>Teqa / We:</strong> Teqa Connect and affiliates</li>
              <li><strong>Parties:</strong> Client and Teqa Connect collectively</li>
            </ul>
          </motion.div>

          {/* Use of Platform */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">1. Use of Platform</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Compliance with Moroccan and applicable laws is required</li>
              <li>Platform provides COD analytics, scoring, and marketplace tools</li>
              <li>Abuse, fraud, or manipulation may result in termination</li>
            </ul>
          </motion.div>

          {/* Prohibited Products */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">2. Prohibited Products & Services</h2>
            <p className="mb-4">
              Teqa Connect enforces ethical business practices and legal
              compliance.
            </p>
            <ul className="grid gap-2 sm:grid-cols-2 list-disc pl-6">
              <li>Interest-based financial services</li>
              <li>Insurance companies</li>
              <li>Gambling & betting</li>
              <li>Alcohol & pork products</li>
              <li>Adult content</li>
              <li>Tobacco & drugs</li>
              <li>Weapons & arms trading</li>
              <li>Pyramid / MLM schemes</li>
              <li>Fraudulent business models</li>
            </ul>

            <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm">
              <strong>Enforcement:</strong> Violations result in immediate
              suspension or termination.
            </div>
          </motion.div>

          {/* Scoring */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">3. Customer Scoring & Manipulation</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI-based scoring supports risk assessment</li>
              <li>Merchant misconduct may affect customer scores</li>
              <li>Teqa Connect may investigate scoring abuse</li>
            </ul>
          </motion.div>

          {/* Termination */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">4. Account Termination</h2>
            <p>
              Accounts violating these Terms may be suspended or terminated
              without prior notice to protect the platform and users.
            </p>
          </motion.div>

          {/* Intellectual Property */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">5. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>All platform content belongs to Teqa Connect</li>
              <li>Use is limited to permitted business purposes</li>
              <li>Unauthorized redistribution is prohibited</li>
            </ul>
          </motion.div>

          {/* Liability */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">6. Disclaimer & Liability</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Services provided “as is”</li>
              <li>No guarantee of 100% analytics accuracy</li>
              <li>Liability limited to extent permitted by law</li>
            </ul>
          </motion.div>

          {/* Cookies */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">7. Cookies & Tracking</h2>
            <p>Cookies improve experience and analytics. Disabling may limit functionality.</p>
          </motion.div>

          {/* Media */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">8. Media Policy</h2>
            <p>Inappropriate media may be removed. Repeated violations lead to suspension.</p>
          </motion.div>

          {/* Updates */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">9. Updates to Terms</h2>
            <p>
              Terms may be updated at any time. Continued use indicates
              acceptance.
            </p>
            <div className="mt-4 rounded-xl bg-rose-50 border border-rose-200 p-4 text-sm">
              <strong>Important:</strong> If you do not agree, stop using Teqa
              Connect immediately.
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Shared styles */}
      <style jsx>{`
        .legal-card {
          background: white;
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

export default TermsAndConditions;
