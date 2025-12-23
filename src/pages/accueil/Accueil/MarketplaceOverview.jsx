export default function MarketplaceOverview() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-rose-50 px-4 py-1 text-sm font-semibold text-rose-600">
            Teqa Marketplace
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            The Smart Bridge Between Merchants and Call Centers
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            One marketplace. Trusted COD confirmations. Better delivery results.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              What Is Teqa Marketplace?
            </h3>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Teqa Marketplace is an integrated platform within the Teqa ecosystem
              that connects e-commerce merchants with verified call centers in a
              secure, data-driven environment.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              It enables transparent collaboration, performance-based order
              assignment, and shared intelligence to reduce COD risks and improve
              delivery success rates.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-rose-500">✓</span>
                Verified & performance-rated call centers
              </li>
              <li className="flex gap-3">
                <span className="text-rose-500">✓</span>
                Smart order distribution by risk, location & language
              </li>
              <li className="flex gap-3">
                <span className="text-rose-500">✓</span>
                Real-time confirmation & tracking
              </li>
            </ul>
          </div>

          {/* Right Steps */}
          <div className="space-y-6">
            {[
              {
                title: "Partner Onboarding & Verification",
                desc: "Call centers are verified based on performance history, capacity, and service quality."
              },
              {
                title: "Smart Order Distribution",
                desc: "Orders are assigned using risk score, availability, and past performance."
              },
              {
                title: "Real-Time Confirmation",
                desc: "Call centers confirm orders while merchants track progress instantly."
              },
              {
                title: "Performance Scoring",
                desc: "Call centers are ranked using confirmation rate, speed, and accuracy."
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h4 className="font-semibold text-gray-900">
                  {index + 1}. {item.title}
                </h4>
                <p className="mt-2 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button className="rounded-xl bg-rose-600 px-8 py-4 font-semibold text-white hover:bg-rose-700">
            Create a Merchant Account
          </button>
          <button className="rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-900 hover:bg-gray-100">
            Apply as a Call Center Partner
          </button>
        </div>
      </div>
    </section>
  )
}
