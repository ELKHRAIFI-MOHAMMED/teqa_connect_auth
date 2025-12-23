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

const PrivacyPolicy = () => {    
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
            Teqa Connect Privacy Policy
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

          {/* Section wrapper */}
          {[
            {
              title: "Introduction",
              content: (
                <>
                  <p>
                    At <strong>Teqa Connect</strong>, accessible from{" "}
                    <a
                      href="https://www.teqa.app"
                      target="_blank"
                      rel="noreferrer"
                      className="text-rose-600 hover:underline"
                    >
                      https://www.teqa.app
                    </a>
                    , your privacy is a top priority. This Privacy Policy
                    explains what data we collect, how we use it, and how we
                    protect it.
                  </p>

                  <p className="mt-4">
                    <strong>Contact:</strong>{" "}
                    <a
                      href="mailto:Billing@teqa.app"
                      className="text-rose-600 hover:underline"
                    >
                      Billing@teqa.app
                    </a>
                  </p>
                </>
              ),
            },
            {
              title: "1. About Teqa Connect",
              content: (
                <>
                  <p className="mb-4">
                    Teqa Connect is a SaaS platform focused on Cash-on-Delivery
                    (COD) operations, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Risk analytics</li>
                    <li>AI-powered customer scoring</li>
                    <li>Merchant–delivery–call center marketplace</li>
                  </ul>
                </>
              ),
            },
            {
              title: "2. Information We Collect",
              content: (
                <>
                  <p className="font-semibold text-gray-900 mb-2">
                    Information you provide:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-4">
                    <li>Contact and account details</li>
                    <li>Billing information</li>
                    <li>COD transaction data</li>
                  </ul>

                  <p className="font-semibold text-gray-900 mb-2">
                    Automatically collected:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Usage logs and IP address</li>
                    <li>Device and browser metadata</li>
                    <li>Aggregated scoring metrics</li>
                  </ul>

                  <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm">
                    <strong>Important:</strong> We do not sell personal data to
                    third parties.
                  </div>
                </>
              ),
            },
            {
              title: "3. How We Use Information",
              content: (
                <ul className="list-disc pl-6 space-y-2">
                  <li>Operate and improve Teqa Connect</li>
                  <li>Generate COD scoring and analytics</li>
                  <li>Enable secure merchant collaboration</li>
                  <li>Prevent fraud and misuse</li>
                </ul>
              ),
            },
            {
              title: "4. Sharing & Third Parties",
              content: (
                <ul className="list-disc pl-6 space-y-2">
                  <li>No sharing of personal customer data between merchants</li>
                  <li>Trusted providers under strict contracts</li>
                  <li>Legal or security-based disclosure if required</li>
                </ul>
              ),
            },
            {
              title: "5. Data Retention & Deletion",
              content: (
                <ul className="list-disc pl-6 space-y-2">
                  <li>Data retained only as long as necessary</li>
                  <li>
                    Deletion requests via{" "}
                    <a
                      href="mailto:privacy@teqa.app"
                      className="text-rose-600 hover:underline"
                    >
                      privacy@teqa.app
                    </a>
                  </li>
                  <li>Data deleted or anonymized per law</li>
                </ul>
              ),
            },
            {
              title: "6. Security",
              content: (
                <>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>TLS encryption</li>
                    <li>Role-based access control</li>
                    <li>Regular security audits</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    No system can guarantee absolute security.
                  </p>
                </>
              ),
            },
            {
              title: "7–12. Additional Policies",
              content: (
                <p className="text-gray-700">
                  This includes user controls, cookies, children’s privacy,
                  policy scope, consent, and future updates as outlined in this
                  document.
                </p>
              ),
            },
          ].map((section, idx) => (
            <motion.div
              key={idx}
              variants={sectionFade}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <h2 className="mb-4 text-xl font-semibold text-gray-900 border-l-4 border-rose-600 pl-4">
                {section.title}
              </h2>
              <div className="text-gray-700 leading-relaxed">
                {section.content}
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
