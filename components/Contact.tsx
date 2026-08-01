export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-100 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Get in Touch
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Looking for premium packaging solutions? Contact Perfect Packers
            today for customized corrugated boxes, mono cartons and
            multi-colour packaging.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Left Card */}

          <div className="rounded-3xl bg-blue-900 p-10 text-white shadow-xl">

            <h3 className="text-3xl font-bold">
              Contact Information
            </h3>

            <p className="mt-4 text-blue-100 leading-7">
              We'd love to discuss your packaging requirements.
              Contact us through phone, email or simply fill the enquiry form.
            </p>

            <div className="mt-10 space-y-8">

              <div>
                <h4 className="text-lg font-semibold">
                  📍 Address
                </h4>

                <p className="mt-2 text-blue-100">
                  Indore, Madhya Pradesh
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold">
                  📞 Phone
                </h4>

                <p className="mt-2 text-blue-100">
                  +91 12345 67890
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold">
                  📧 Email
                </h4>

                <p className="mt-2 text-blue-100">
                  info@perfectpackers.in
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold">
                  🕒 Business Hours
                </h4>

                <p className="mt-2 text-blue-100">
                  Monday – Saturday
                  <br />
                  9:00 AM – 7:00 PM
                </p>
              </div>

            </div>

          </div>

          {/* Right Card */}

          <div className="rounded-3xl bg-white p-10 shadow-xl">

            <h3 className="mb-8 text-2xl font-bold text-slate-900">
              Request a Quote
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-500 focus:border-blue-900 focus:outline-none"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-500 focus:border-blue-900 focus:outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-500 focus:border-blue-900 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-500 focus:border-blue-900 focus:outline-none"
              />

              <select
                className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 focus:border-blue-900 focus:outline-none"
              >
                <option>Select Product</option>
                <option>Corrugated Boxes</option>
                <option>Mono Cartons</option>
                <option>Multi Colour Boxes</option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your packaging requirement..."
                className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 placeholder:text-slate-500 focus:border-blue-900 focus:outline-none"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-900 py-4 text-lg font-semibold text-white transition duration-300 hover:bg-blue-800"
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