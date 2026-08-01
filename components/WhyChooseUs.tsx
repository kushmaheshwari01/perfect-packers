import {
  ShieldCheck,
  Truck,
  Settings,
  Leaf,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    description:
      "Every product is manufactured using high-quality materials and undergoes strict quality checks.",
  },
  {
    icon: Settings,
    title: "Custom Manufacturing",
    description:
      "We manufacture packaging in custom sizes, designs and specifications as per client requirements.",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    description:
      "Our efficient production and logistics ensure your orders are delivered on time.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Packaging",
    description:
      "We focus on sustainable and recyclable packaging solutions for a greener future.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Trusted Packaging Partner
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We combine quality manufacturing, modern technology and
            customer-focused service to deliver packaging solutions
            that businesses can rely on.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-900 text-white">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}