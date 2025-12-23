import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600"
            >
              COD Excellence Platform
            </motion.span>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-black md:text-6xl"
            >
              Score. Connect.
              <br />
              Deliver —<br />
              Upsell Smarter,
              <br />
              Save More.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 max-w-xl text-lg text-gray-600"
            >
              Teqa Connect An end-to-end COD ecosystem offering risk analytics,
              customer scoring, and a merchant–call center marketplace.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center space-x-4"
            >
              <button className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 transition">
                Get Started Free
              </button>

              <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition">
                Request Demo
              </button>
            </motion.div>

            {/* Footer text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 text-sm text-gray-500"
            >
              No credit card required. Join hundreds of merchants.
            </motion.p>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="flex h-[420px] w-full items-center justify-center rounded-2xl bg-indigo-100"
            >
              <div className="flex flex-col items-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-200">
                  📊
                </div>
                <span className="text-sm font-medium text-gray-600">
                  Dashboard Preview
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
