export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}
        <div>
          <span className="font-semibold uppercase tracking-widest text-blue-700">
            About Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Packaging That Protects Your Products
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Perfect Packers is a leading manufacturer of Corrugated Boxes,
            Mono Cartons and Multi Colour Packaging Boxes based in
            Indore, Madhya Pradesh.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide customized packaging solutions for industries
            including FMCG, Food, Pharmaceuticals, Electronics,
            Textile and E-commerce with a strong focus on quality,
            durability and timely delivery.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">

            <div className="rounded-xl bg-slate-100 p-6">
              <h3 className="text-3xl font-bold text-blue-900">
                100%
              </h3>
              <p className="mt-2 text-gray-600">
                Quality Assurance
              </p>
            </div>

            <div className="rounded-xl bg-slate-100 p-6">
              <h3 className="text-3xl font-bold text-blue-900">
                Custom
              </h3>
              <p className="mt-2 text-gray-600">
                Box Sizes Available
              </p>
            </div>

          </div>
        </div>

        {/* Right Side */}

        <div className="flex justify-center">
          <div className="flex h-[450px] w-full max-w-md items-center justify-center rounded-3xl bg-gradient-to-br from-blue-800 to-blue-600 text-center text-white shadow-2xl">
            <div>
              <div className="text-7xl">📦</div>

              <h3 className="mt-6 text-3xl font-bold">
                Perfect Packers
              </h3>

              <p className="mt-4 px-8 text-blue-100">
                Premium Corrugated Packaging
                Solutions for Every Industry.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}