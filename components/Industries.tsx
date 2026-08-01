import {
  ShoppingCart,
  Pill,
  UtensilsCrossed,
  Shirt,
  Laptop,
  Package,
} from "lucide-react";

const industries = [
  {
    icon: ShoppingCart,
    title: "FMCG",
    description: "Packaging solutions for consumer goods and retail products.",
  },
  {
    icon: Pill,
    title: "Pharmaceutical",
    description: "Safe, reliable and compliant packaging for medicines.",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    description: "Food-grade packaging with excellent durability.",
  },
  {
    icon: Shirt,
    title: "Textile",
    description: "Packaging designed to protect garments and fabrics.",
  },
  {
    icon: Laptop,
    title: "Electronics",
    description: "Protective packaging for delicate electronic products.",
  },
  {
    icon: Package,
    title: "E-Commerce",
    description: "Strong shipping boxes for online businesses.",
  },
];

export default function Industries() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">
            Industries We Serve
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Packaging Solutions Across Industries
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Our packaging products are trusted by businesses across multiple
            industries, delivering protection, quality and brand value.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-900 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-900 text-white transition group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {industry.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {industry.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}