"use client";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function DevelopmentPopup({
  isOpen,
  onClose,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">

      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl">

        <div className="text-center">

          <div className="mb-4 text-6xl">
            🚧
          </div>

          <h2 className="text-3xl font-bold text-slate-900">
            Website Under Development
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Our online quotation system is currently under development.
            <br />
            <br />
            Please contact us directly for pricing or product enquiries.
          </p>

          <div className="mt-8 rounded-2xl bg-slate-100 p-6">

            <p className="font-semibold text-slate-900">
              📞 +91 12345 67890
            </p>

            <p className="mt-3 text-slate-700">
              📧 info@perfectpackers.in
            </p>

          </div>

          <button
            onClick={onClose}
            className="mt-8 rounded-xl bg-blue-900 px-8 py-3 font-semibold text-white hover:bg-blue-800"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}