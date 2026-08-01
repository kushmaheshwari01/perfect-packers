import { ShieldCheck, Box, Clock3, Truck } from "lucide-react";

const stats = [
  {
    icon: ShieldCheck,
    title: "100%",
    subtitle: "Quality Assurance",
  },
  {
    icon: Box,
    title: "Custom",
    subtitle: "Box Sizes",
  },
  {
    icon: Clock3,
    title: "24/7",
    subtitle: "Customer Support",
  },
  {
    icon: Truck,
    title: "Fast",
    subtitle: "Delivery",
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.subtitle}
                className="rounded-2xl bg-white p-8 text-center shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Icon className="text-blue-900" size={30} />
                </div>

                <h3 className="text-3xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-600">
                  {item.subtitle}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}