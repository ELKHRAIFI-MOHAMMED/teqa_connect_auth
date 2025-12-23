import { useEffect } from "react";
export default function Contact() {
        useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, []);
  return (
    <main className="bg-gray-50">
      
      {/* HERO */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Contact Teqa
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Have questions or need assistance? We're here to help you grow your
            e-commerce business.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">

            {/* LEFT – CONTACT INFO */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900">
                Contact Information
              </h2>

              {/* Emails */}
              <div className="mt-6 space-y-4 text-gray-700">
                <p>
                  <strong>General inquiries:</strong>{" "}
                  <a
                    href="mailto:contact@teqa.app"
                    className="text-rose-600 hover:underline"
                  >
                    contact@teqa.app
                  </a>
                </p>

                <p>
                  <strong>Sales:</strong>{" "}
                  <a
                    href="mailto:sales@teqa.app"
                    className="text-rose-600 hover:underline"
                  >
                    sales@teqa.app
                  </a>
                </p>

                <p>
                  <strong>Support:</strong>{" "}
                  <a
                    href="mailto:support@teqaconnect.com"
                    className="text-rose-600 hover:underline"
                  >
                    support@teqaconnect.com
                  </a>
                </p>

                <p>
                  <strong>Billing:</strong>{" "}
                  <a
                    href="mailto:billing@teqa.app"
                    className="text-rose-600 hover:underline"
                  >
                    billing@teqa.app
                  </a>
                </p>

                <p>
                  <strong>Privacy:</strong>{" "}
                  <a
                    href="mailto:privacy@teqa.app"
                    className="text-rose-600 hover:underline"
                  >
                    privacy@teqa.app
                  </a>
                </p>
              </div>

              {/* Address */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900">Address</h3>
                <p className="mt-2 text-gray-600">
                  Av. Allal Ben Abdullah
                  <br />
                  Rabat – Morocco
                </p>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold text-gray-900">
                  Follow Us
                </h3>

                <div className="mt-4 flex flex-wrap gap-4">
                  <a
                    href="https://www.instagram.com/teqaconnect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-rose-600"
                  >
                    Instagram
                  </a>

                  <a
                    href="https://www.facebook.com/share/17QUTjY5nJ/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-rose-600"
                  >
                    Facebook
                  </a>

                  <a
                    href="https://www.linkedin.com/company/teqaconnect/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-rose-600"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://x.com/teqaconnect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-rose-600"
                  >
                    X (Twitter)
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT – CONTACT FORM */}
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900">
                Send Us a Message
              </h2>

              <form className="mt-6 space-y-5">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-rose-500 focus:outline-none"
                />

                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-rose-500 focus:outline-none"
                />

                <textarea
                  rows="5"
                  placeholder="Your message"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-rose-500 focus:outline-none"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-rose-600 px-6 py-3 font-semibold text-white hover:bg-rose-700"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
