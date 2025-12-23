import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "How does the AI scoring work?",
      answer:
        "Our AI analyzes customer order history, delivery patterns, and return behavior to calculate a risk score (0–100). Customers are classified as High Risk, Medium Risk, or Safe.",
    },
    {
      question: "What e-commerce platforms do you support?",
      answer: "We support Shopify, WooCommerce, YouCan.",
    },
    {
      question: "Can I integrate with my existing systems?",
      answer:
        "Yes. Teqa Connect integrates seamlessly with existing CRMs, ERPs, and custom systems via API and webhooks.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Most merchants see measurable improvements within the first few weeks.",
    },
    {
      question: "Is my customer data secure?",
      answer:
        "Absolutely. We use enterprise-grade security, encryption, and strict access controls.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "If you cancel within 7 days after your first payment, unused days are refunded on a pro-rated basis.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes. Contact Billing@teqa.app for billing or technical assistance.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-indigo-50 py-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* Header animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-black">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to know about Teqa Connect
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="rounded-xl border border-gray-200 bg-white shadow-sm"
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-semibold text-black"
                >
                  {faq.question}
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    ⌄
                  </motion.span>
                </button>

                {/* Animated Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden px-6 pb-4 text-sm leading-relaxed text-gray-600"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
