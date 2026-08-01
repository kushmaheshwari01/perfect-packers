import {
  ClipboardList,
  PencilRuler,
  Factory,
  ShieldCheck,
  Truck,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Requirement Analysis",
    description: "Understanding your packaging needs and product specifications.",
  },
  {
    icon: PencilRuler,
    title: "Design & Planning",
    description: "Creating customized packaging designs and dimensions.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Precision manufacturing using quality materials and modern machinery.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection",
    description: "Every order undergoes strict quality checks before dispatch.",
  },
  {
    icon: Truck,
    title: "Delivery",
    description: "Timely and safe delivery to your business location.",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-900">
            Manufacturing Process
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            How We Deliver Quality Packaging
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Our streamlined process ensures every packaging solution meets
            the highest standards of quality and customer satisfaction.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-900 text-white">
                  <Icon size={30} />
                </div>

                <div className="mb-4 text-sm font-bold text-blue-900">
                  Step {index + 1}
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}