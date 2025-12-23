import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../../logo copy/LOGO TIQA PNG STANDRAD WHITE.png";

const MotionLink = motion(NavLink);

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.6, ease: "easeOut" },
    }),
  };

  const linkClass =
    "hover:text-white transition text-gray-400";

  return (
    <footer className="bg-black text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-20">

        {/* Top grid */}
        <motion.div
          className="grid grid-cols-1 gap-12 md:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={fadeUp} custom={1}>
            <img src={logo} alt="Teqa Connect logo" className="w-32" />
            <p className="mt-4 max-w-xs text-sm text-gray-400">
              Score. Connect. Deliver — Your end-to-end COD ecosystem for smarter shipping decisions.
            </p>

            <div className="mt-6 flex space-x-4 text-sm">
              <a href="https://www.instagram.com/teqaconnect" target="_blank" className={linkClass}>Instagram</a>
              <a href="https://www.facebook.com/share/17QUTjY5nJ/?mibextid=wwXIfr" target="_blank" className={linkClass}>Facebook</a>
              <a href="https://www.linkedin.com/company/teqaconnect/" target="_blank" className={linkClass}>LinkedIn</a>
              <a href="https://x.com/teqaconnect" target="_blank" className={linkClass}>X</a>
            </div>
          </motion.div>

          {/* Product */}
          <motion.div variants={fadeUp} custom={2}>
            <h4 className="mb-4 text-sm font-semibold uppercase text-white">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><MotionLink to="/Features" className={linkClass}>Features</MotionLink></li>
              <li><MotionLink to="/Pricing" className={linkClass}>Pricing</MotionLink></li>
              <li><MotionLink to="/How_It_Works" className={linkClass}>How It Works</MotionLink></li>
              <li><MotionLink to="/Marketplace_page" className={linkClass}>Marketplace page</MotionLink></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp} custom={3}>
            <h4 className="mb-4 text-sm font-semibold uppercase text-white">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><MotionLink to="/about" className={linkClass}>About Us</MotionLink></li>
              <li><MotionLink to="/Contact" className={linkClass}>Contact Us</MotionLink></li>
              <li><MotionLink to="/faq" className={linkClass}>FAQ</MotionLink></li>
              {/* <li><a href="https://teqa.blog" target="_blank" className={linkClass}>Blog</a></li>
              <li><a href="/contact" className={linkClass}>Contact</a></li> */}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={fadeUp} custom={4}>
            <h4 className="mb-4 text-sm font-semibold uppercase text-white">Legal & Support</h4>
            <ul className="space-y-3 text-sm">
              <li><MotionLink to="/Privacy_Policy" className={linkClass}>Privacy Policy</MotionLink></li>
              <li><MotionLink to="/Terms_And_Conditions" className={linkClass}>Terms & Conditions</MotionLink></li>
              <li><MotionLink to="/Refund_Policy" className={linkClass}>Refund Policy</MotionLink></li>
              <li><MotionLink to="/Payment_Methods" className={linkClass}>Payment Methods</MotionLink></li>
              <li><MotionLink to="/Cookie_Policy" className={linkClass}>Cookie Policy</MotionLink></li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="my-12 border-t border-gray-800" />

        {/* Bottom */}
        <motion.div
          className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <h4 className="mb-4 font-semibold text-white">Get in touch</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 contact@teqa.app</li>
              <li>💼 sales@teqa.app</li>
              <li>🆘 support@teqa.app</li>
            </ul>
          </div>

          <p className="text-sm text-gray-500">
            © 2025 Teqa Connect · Av Allal Ben Abdullah · Rabat, Morocco
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
