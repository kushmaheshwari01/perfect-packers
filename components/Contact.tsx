export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Let's Discuss Your Packaging Requirements
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Looking for customized packaging solutions? Get in touch with us
            and our team will respond as soon as possible.
          </p>

        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div className="rounded-3xl bg-white p-10 shadow-lg">

            <h3 className="text-2xl font-bold text-slate-900">
              Contact Information
            </h3>

            <div className="mt-8 space-y-8">

              <div>
                <h4 className="font-semibold text-blue-900">
                  📍 Address
                </h4>

                <p className="mt-2 text-slate-600">
                  Indore, Madhya Pradesh
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-900">
                  📞 Phone
                </h4>

                <p className="mt-2 text-slate-600">
                  +91 12345 67890
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-900">
                  📧 Email
                </h4>

                <p className="mt-2 text-slate-600">
                  info@perfectpackers.in
                </p>
              </div>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-3xl bg-white p-10 shadow-lg">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-900"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-900"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-900"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-900"
              />

              <select
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-900"
              >
                <option>Corrugated Boxes</option>
                <option>Mono Cartons</option>
                <option>Multi Colour Boxes</option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your requirement..."
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-blue-900"
              />

              <button
                className="w-full rounded-xl bg-blue-900 py-4 font-semibold text-white transition hover:bg-blue-800"
              >
                Request Quote
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}