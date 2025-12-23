import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Teqa Connect reduced our return rate by 40% in just two months. The AI scoring is incredibly accurate and saved us thousands.",
      name: "Ahmed Hassan",
      role: "E-commerce Manager at Fashion Retail",
      location: "Morocco",
      avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
      quote:
        "We integrated Teqa in less than an hour. The smart order confirmation system streamlined our entire COD workflow.",
      name: "Fatima Bennani",
      role: "Operations Director at Electronics Hub",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
    {
      quote:
        "Simple to use, powerful results. Teqa Connect is now essential to our business operations. Highly recommended!",
      name: "Mohammed Karim",
      role: "Store Owner at Premium Shop",
      avatar: "https://i.pravatar.cc/100?img=48",
    },
  ];

  return (
    <section className="bg-indigo-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-black">
            What Our Merchants Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join hundreds of e-commerce businesses already saving money with Teqa Connect
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              {/* Stars */}
              <div className="mb-4 flex space-x-1 text-indigo-600">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="italic text-gray-700 leading-relaxed">
                “{item.quote}”
              </p>

              {/* Profile */}
              <div className="mt-6 flex items-center space-x-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-black">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {item.role}
                    {item.location && ` • ${item.location}`}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
