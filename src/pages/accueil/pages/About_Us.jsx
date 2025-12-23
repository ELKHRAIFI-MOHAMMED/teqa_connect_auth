import { motion } from "framer-motion";
import { useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const About = () => {
      useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, []);
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-rose-50/60 via-white to-white" />

      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-20 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            About Teqa Connect
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            Revolutionizing <span className="font-semibold text-gray-900">
              Cash on Delivery
            </span> with data-driven risk intelligence and AI-powered decision tools.
          </p>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-lg leading-relaxed text-gray-700">
            Teqa Connect is built for modern merchants operating in high-risk
            Cash on Delivery environments. We combine advanced risk analytics,
            customer reliability scoring, and a trusted merchant–call center
            marketplace to reduce losses, optimize operations, and increase
            customer trust.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-28 grid gap-10 md:grid-cols-2 items-center"
        >
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We go beyond traditional CRM platforms. Teqa Connect equips
              merchants with actionable insights, predictive scoring, and
              intelligent automation to make safer decisions, reduce COD
              failures, and scale confidently.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <code className="block text-sm text-gray-800">
              <span className="text-rose-600">if</span> (order.riskScore {"<"} threshold) {"{"}<br />
              &nbsp;&nbsp;approveCOD();<br />
              {"}"} <span className="text-rose-600">else</span> {"{"}<br />
              &nbsp;&nbsp;verifyWithCallCenter();<br />
              {"}"}
            </code>
          </div>
        </motion.div>

        {/* What We Offer */}
        <div className="mt-32">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center text-3xl font-semibold text-gray-900 mb-14"
          >
            What We Offer
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Risk Analytics",
                text: "Detect fraud and high-risk orders before confirmation using data-driven risk models.",
              },
              {
                title: "Customer Scoring",
                text: "Evaluate customer reliability based on historical behavior and delivery outcomes.",
              },
              {
                title: "Merchant–Call Center Marketplace",
                text: "Collaborate with verified call centers and delivery partners in one ecosystem.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-32 text-center"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-12">
            Why Choose Teqa Connect
          </h2>

          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {[
              "Protect your business from fraudulent or high-risk transactions",
              "Make smarter decisions with AI-powered analytics",
              "Integrate seamlessly with any CRM or e-commerce platform",
              "Operate with compliance, transparency, and trust",
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 p-5 text-gray-700"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitment */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-32 mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Our Commitment
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Security, transparency, and ethical data usage are at the core of
            Teqa Connect. Customer data is never sold to third parties, and all
            insights are used exclusively to improve COD performance. While our
            algorithms are highly reliable, external factors such as delivery or
            merchant errors may occasionally affect outcomes.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-32 rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 p-10 text-center text-white"
        >
          <h2 className="text-3xl font-semibold mb-4">
            Contact Us
          </h2>
          <p className="mb-4 text-gray-300">
            Want to learn more about Teqa Connect?
          </p>
          <p className="font-medium">
            contact@teqa.app ·{" "}
            <a
              href="https://www.teqa.app"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              www.teqa.app
            </a>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
