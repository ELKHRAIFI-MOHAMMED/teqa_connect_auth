import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

export default function Marketplace() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Teqa Marketplace Pricing
          </h2>
          <p className="mt-4 text-gray-600">
            Pay only for successful COD deliveries — zero risk for merchants.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >

          {/* Slide 1 – Pricing Model */}
          <SwiperSlide>
            <PricingCard
              title="Pay-Per-Success Model"
              subtitle="No subscriptions. No setup fees."
              highlight="Only pay when orders are delivered"
              points={[
                "Fees apply only to successful shipments",
                "No cost for canceled or failed orders",
                "Commission paid by call centers",
                "Encourages quality & fast confirmations",
              ]}
              cta="Get Started"
            />
          </SwiperSlide>

          {/* Slide 2 – Agent Plan */}
          <SwiperSlide>
            <PricingCard
              title="Agent Plan"
              subtitle="For Freelance Call Center Agents"
              highlight="8–10 MAD / successful order"
              points={[
                "Teqa commission: 20%",
                "1,000–3,000 orders → 18%",
                "3,000+ orders → 15%",
                "Paid only for delivered orders",
              ]}
              cta="Join as Agent"
            />
          </SwiperSlide>

          {/* Slide 3 – Company Plan */}
          <SwiperSlide>
            <PricingCard
              title="Company Plan"
              subtitle="For Call Center Companies"
              highlight="8–10 MAD / successful order"
              points={[
                "Teqa commission: 15%",
                "5,000–15,000 orders → 12%",
                "15,000+ orders → 10%",
                "Higher volume = higher margins",
              ]}
              cta="Apply as Company"
            />
          </SwiperSlide>

        </Swiper>
      </div>
    </section>
  )
}

function PricingCard({ title, subtitle, highlight, points, cta }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm">
      <h3 className="text-2xl font-semibold text-gray-900">
        {title}
      </h3>
      <p className="mt-2 text-gray-600">
        {subtitle}
      </p>

      <div className="mt-6 rounded-xl bg-rose-50 px-4 py-3 text-lg font-bold text-rose-600">
        {highlight}
      </div>

      <ul className="mt-6 space-y-3 text-gray-700">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="mt-1 text-rose-500">✓</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <button className="mt-auto rounded-xl bg-rose-600 px-6 py-3 font-semibold text-white transition hover:bg-rose-700">
        {cta}
      </button>
    </div>
  )
}
