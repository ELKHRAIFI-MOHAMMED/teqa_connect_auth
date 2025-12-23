import { useState  , useEffect} from "react";

const faqData = [
  {
    section: "Subscription & Plans",
    items: [
      {
        q: "Can I switch my plan anytime?",
        a: "Yes, you can upgrade or downgrade at any time. Mid-cycle changes are prorated.",
      },
      {
        q: "Are discounts applied to overage fees?",
        a: "No, discounts apply only to the base subscription.",
      },
      {
        q: "How do I upgrade from Free to a paid plan?",
        a: "Log in, select the plan, and complete the payment process. Overage fees start after included limits.",
      },
      {
        q: "Are there any setup fees?",
        a: "No, Teqa Connect does not charge setup fees.",
      },
      {
        q: "Can I pause my subscription?",
        a: "Subscriptions cannot be paused but can be canceled anytime; unused days are prorated for the first month only.",
      },
      {
        q: "How are additional orders billed?",
        a: "Additional orders above your plan are billed at tiered overage rates specified for your plan.",
      },
      {
        q: "Can I add more team members?",
        a: "Yes, each plan allows extra users at the specified monthly rate.",
      },
      {
        q: "Does the Free plan allow multiple stores?",
        a: "No, the Free plan supports 1 store only. Paid plans allow multiple stores.",
      },
      {
        q: "How do I downgrade my plan?",
        a: "You can downgrade at any time; new limits take effect in the next billing cycle.",
      },
      {
        q: "Are annual or quarterly plans refundable?",
        a: "Refunds are only available as described in the contract; overage fees are non-refundable.",
      },
    ],
  },
  {
    section: "Orders & COD",
    items: [
      {
        q: "What counts as an Order Received?",
        a: "An order is marked as received when the COD is collected and confirmed by the carrier.",
      },
      {
        q: "What happens if a delivery is canceled by the customer?",
        a: "Orders canceled before delivery are not counted and do not generate fees.",
      },
      {
        q: "Can I track order status in real time?",
        a: "Yes, you can monitor delivery progress and COD collection in your dashboard.",
      },
      {
        q: "Does Teqa handle customer refunds?",
        a: "No, refunds are handled directly by the merchant.",
      },
      {
        q: "Are returned orders included in analytics?",
        a: "Yes, return rates are included in the Advanced Analytics dashboard.",
      },
    ],
  },
  {
    section: "Analytics & Scoring",
    items: [
      {
        q: "What metrics are included in Advanced Analytics?",
        a: "Customer behavior, delivery windows, carrier performance, return rates, and regional statistics.",
      },
      {
        q: "Is customer scoring 100% accurate?",
        a: "No, scoring depends on the quality of merchant and carrier data.",
      },
      {
        q: "Can analytics be exported?",
        a: "Yes, reports can be exported in CSV or PDF formats.",
      },
      {
        q: "Can analytics be segmented?",
        a: "Yes, by store, city, or neighborhood.",
      },
    ],
  },
  {
    section: "Integrations & API",
    items: [
      {
        q: "Which platforms are supported?",
        a: "WooCommerce, Shopify, YouCan, and custom stores via API.",
      },
      {
        q: "Is API documentation available?",
        a: "Yes, full API documentation is available after signup.",
      },
      {
        q: "Can I test the API?",
        a: "Yes, sandbox environments are provided.",
      },
      {
        q: "Are custom integrations possible?",
        a: "Yes, for Enterprise plans.",
      },
    ],
  },
  {
    section: "Billing & Payments",
    items: [
      {
        q: "What payment methods are accepted?",
        a: "Major credit cards and PayPal (where available).",
      },
      {
        q: "Are invoices provided?",
        a: "Yes, invoices are downloadable from your dashboard.",
      },
      {
        q: "Are overage fees refundable?",
        a: "No, overage fees are non-refundable.",
      },
    ],
  },
  {
    section: "Security & Privacy",
    items: [
      {
        q: "How does Teqa protect data?",
        a: "All data is encrypted, access-controlled, and securely stored.",
      },
      {
        q: "Does Teqa sell customer data?",
        a: "No, customer data is never sold.",
      },
      {
        q: "Is Teqa GDPR compliant?",
        a: "Yes, we comply with regional and international data protection standards.",
      },
    ],
  },
];

export default function Faq() {
  const [open, setOpen] = useState(null);

    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <main className="bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-center text-4xl font-bold text-gray-900">
          Teqa Connect — FAQ
        </h1>
        <p className="mt-4 text-center text-gray-600">
          Answers to common questions about plans, orders, analytics, and security.
        </p>

        <div className="mt-16 space-y-12">
          {faqData.map((section, i) => (
            <div key={i}>
              <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                {section.section}
              </h2>

              <div className="space-y-4">
                {section.items.map((item, j) => {
                  const index = `${i}-${j}`;
                  const isOpen = open === index;

                  return (
                    <div
                      key={index}
                      className="rounded-xl border bg-white shadow-sm"
                    >
                      <button
                        onClick={() => setOpen(isOpen ? null : index)}
                        className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-gray-800"
                      >
                        {item.q}
                        <span>{isOpen ? "−" : "+"}</span>
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-4 text-gray-600">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
