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

const CookiePolicy = () => {
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
            Teqa Connect Cookie Policy
          </h1>
          <p className="mt-4 text-gray-600">
            Last Updated: December 2, 2025
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
              At <strong>Teqa Connect</strong>, accessible at{" "}
              <a
                href="https://www.teqa.app"
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://www.teqa.app
              </a>
              , we use cookies and similar technologies to enhance user
              experience, improve our services, and understand platform usage.
            </p>
          </motion.div>

          {/* What are cookies */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">1. What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device by your browser.
              They help remember preferences, analyze usage, and deliver a
              smoother, personalized experience. Cookies may be session-based or
              persistent.
            </p>
          </motion.div>

          {/* Types */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">2. Types of Cookies We Use</h2>

            <p className="font-semibold mb-2">Essential Cookies</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Enable login, session management, and security</li>
              <li>Cannot be disabled without impacting platform functionality</li>
            </ul>

            <p className="font-semibold mb-2">Performance & Analytics Cookies</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Track pages visited, usage patterns, and errors</li>
              <li>Help optimize performance and user experience</li>
            </ul>

            <p className="font-semibold mb-2">Functional Cookies</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Store preferences such as language and UI settings</li>
              <li>Enable a more personalized experience</li>
            </ul>

            <p className="font-semibold mb-2">Third-Party Cookies</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Used for analytics, marketing, or integrations</li>
              <li>Subject to third-party privacy policies</li>
            </ul>
          </motion.div>

          {/* How we use */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">3. How We Use Cookies</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Operate and improve Teqa Connect services</li>
              <li>Analyze platform performance and usage</li>
              <li>Personalize user experience</li>
              <li>Detect fraud or unauthorized access</li>
              <li>Measure marketing effectiveness</li>
            </ul>
          </motion.div>

          {/* Choices */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">4. Your Cookie Choices</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Manage or disable cookies via browser settings</li>
              <li>Blocking essential cookies may limit platform features</li>
              <li>Disabling analytics may reduce personalization</li>
            </ul>

            <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm">
              <strong>Browsers:</strong> Google Chrome · Mozilla Firefox · Apple Safari
            </div>
          </motion.div>

          {/* Consent */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">5. Consent</h2>
            <p>
              By using Teqa Connect, you consent to the use of cookies as outlined
              in this policy. You may withdraw consent at any time by adjusting
              browser settings.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div variants={sectionFade} className="legal-card">
            <h2 className="legal-title">6. Contact Us</h2>
            <p>
              For questions regarding this Cookie Policy, contact us at:
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:support@teqa.app"
                className="text-rose-600 hover:underline"
              >
                support@teqa.app
              </a>
              <br />
              Website:{" "}
              <a
                href="https://www.teqa.app"
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 hover:underline"
              >
                https://www.teqa.app
              </a>
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

export default CookiePolicy;
