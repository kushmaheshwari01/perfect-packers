import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Corrugated Boxes",
    image: "/images/corrugated-box.jpg",
    description:
      "Strong and durable corrugated boxes designed for shipping, warehousing and industrial packaging applications.",
  },
  {
    title: "Multi Colour Boxes",
    image: "/images/multicolor-box.jpg",
    description:
      "Premium printed packaging boxes that enhance your product's branding while ensuring excellent protection.",
  },
  {
    title: "Mono Cartons",
    image: "/images/mono-carton.jpg",
    description:
      "High-quality mono cartons suitable for FMCG, pharmaceutical, cosmetic and retail packaging.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            Our Products
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Premium Packaging Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We manufacture premium quality packaging products
            for businesses across multiple industries with
            superior strength, attractive printing and
            customized dimensions.
          </p>

        </div>

        {/* Product Cards */}

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {products.map((product) => (
            <div
              key={product.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* Product Image */}

              <div className="overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.title}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                />

              </div>

              {/* Card Content */}

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {product.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-600">
                  {product.description}
                </p>

                <Link
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-900 transition hover:gap-3"
                >
                  Request Quote →
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}