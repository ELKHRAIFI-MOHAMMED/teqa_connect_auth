import MarketplaceOverview from "../Accueil/MarketplaceOverview"
import Pricing from "../Accueil/Marketplace"
import { useEffect } from "react";

export default function MarketplacePage() {
        useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-gradient-to-r from-rose-600 to-pink-600 py-28">
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <h1 className="text-5xl font-bold leading-tight">
            One Marketplace. Trusted COD Confirmations.
            <br />
            Better Delivery Results.
          </h1>

          <p className="mt-6 text-lg opacity-90">
            Teqa Marketplace connects e-commerce merchants with verified call
            centers to confirm Cash-on-Delivery orders and reduce returns.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button className="rounded-xl bg-white px-8 py-4 font-semibold text-rose-600 hover:bg-gray-100">
              Get Started with Teqa Marketplace
            </button>
            <button className="rounded-xl border border-white/40 px-8 py-4 font-semibold text-white hover:bg-white/10">
              Join as a Call Center Partner
            </button>
          </div>
        </div>
      </section>

      {/* MARKETPLACE OVERVIEW */}
      <MarketplaceOverview />

      {/* PRICING */}
      <Pricing />

      {/* FINAL CTA */}
      <section className="bg-gray-900 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-4xl font-bold">
            Start Reducing COD Risk Today
          </h2>

          <p className="mt-4 text-lg text-gray-300">
            Join Teqa Marketplace and connect with trusted partners that improve
            your delivery outcomes.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button className="rounded-xl bg-rose-600 px-8 py-4 font-semibold hover:bg-rose-700">
              Create a Merchant Account
            </button>
            <button className="rounded-xl border border-gray-600 px-8 py-4 font-semibold hover:bg-gray-800">
              Apply as a Call Center Partner
            </button>
          </div>
        </div>
      </section>

    </main>
  )
}
