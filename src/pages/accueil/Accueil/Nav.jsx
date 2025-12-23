import { motion, AnimatePresence } from "framer-motion";
import logo from "../../logo copy/Beta_v0.01.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "../../../components/misc/ThemeToggle";
import LanguageSwitcher from "../../../components/misc/LanguageSwitcher";


export default function Navbar() {
  const [openLang, setOpenLang] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  const MotionNavLink = motion(NavLink);

  return (

    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full border-b border-gray-200 bg-white"
    >


      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Teqa logo" className="w-24" />
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          {[
            { label: "Features", path: "/features" },
            { label: "How It Works", path: "/How_It_Works" },
            { label: "Pricing", path: "/pricing" },
            { label: "FAQ", path: "/faq" },
          ].map((item) => (
            <MotionNavLink
              key={item.label}
              to={item.path}
              whileHover={{ y: -2 }}
              className={({ isActive }) =>
                `transition hover:text-indigo-600 ${
                  isActive ? "text-indigo-600 font-semibold" : ""
                }`
              }
            >
              {item.label}
            </MotionNavLink>
          ))}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Language */}
          <div className="relative">
            <ThemeToggle />
          </div>
          <div className="relative">
            <LanguageSwitcher />
          </div>

          <a href="/login" className="font-medium text-gray-700 hover:text-indigo-600">
            Log in
          </a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/register"
            className="rounded-lg bg-indigo-600 px-5 py-2 font-semibold text-white"
          >
            Sign up
          </motion.a>
        </div>
        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpenMobile(!openMobile)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="h-0.5 w-6 bg-gray-800"></span>
          <span className="h-0.5 w-6 bg-gray-800"></span>
          <span className="h-0.5 w-6 bg-gray-800"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {openMobile && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t bg-white"
          >
            <div className="flex flex-col gap-6 px-6 py-6">

              {/* LINKS */}
              {[
                { label: "Features", path: "/features" },
                { label: "How It Works", path: "/How_It_Works" },
                { label: "Pricing", path: "/pricing" },
                { label: "FAQ", path: "/faq" },
              ].map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setOpenMobile(false)}
                  className="text-gray-700 font-medium"
                >
                  {item.label}
                </NavLink>
              ))}

                <div className="relative">
            <ThemeToggle />
          </div>
          <div className="relative">
            <LanguageSwitcher />
          </div>
              {/* ACTION BUTTONS (TWO BUTTONS LIKE YOUR IMAGE) */}
              <div className="flex flex-col gap-3 pt-4">
                <a
                  href="/login"
                  className="rounded-lg border border-gray-300 py-3 text-center font-semibold text-gray-800"
                >
                  Log in
                </a>

                <a
                  href="/register"
                  className="rounded-lg bg-indigo-600 py-3 text-center font-semibold text-white"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
