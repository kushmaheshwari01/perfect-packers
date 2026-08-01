"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DevelopmentPopup from "./DevelopmentPopup";

export default function Hero() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">

        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 lg:flex-row">

          {/* Left Side */}

          <div className="w-full lg:w-1/2">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-900">
              Trusted Packaging Manufacturer
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-white lg:text-6xl">
              Premium Corrugated Boxes &
              <span className="block text-yellow-400">
                Packaging Solutions
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Perfect Packers manufactures high-quality Corrugated Boxes,
              Mono Cartons and Multi Colour Boxes for industries across India.
              We deliver durable, customized and cost-effective packaging
              solutions.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <button
                onClick={() => setShowPopup(true)}
                className="rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:bg-yellow-300"
              >
                Get Free Quote
              </button>

              <Link
                href="#products"
                className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
              >
                View Products
              </Link>

            </div>

          </div>

          {/* Right Side */}

          <div className="mt-12 flex w-full justify-center lg:mt-0 lg:w-1/2">

            <Image
              src="/images/hero.jpg"
              alt="Packaging Boxes"
              width={600}
              height={500}
              className="rounded-3xl shadow-2xl"
              priority
            />

          </div>

        </div>

      </section>

      <DevelopmentPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
    </>
  );
}