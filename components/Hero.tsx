"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
              Trusted Packaging Manufacturer
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
              Premium Packaging
              <br />
              Solutions for
              <span className="text-blue-900"> Every Business</span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Perfect Packers manufactures premium Corrugated Boxes,
              Mono Cartons and Multi Colour Packaging Boxes from
              Indore with a focus on quality, strength and timely
              delivery.
            </p>

            <div className="mt-10 space-y-4 text-slate-700">

  <div className="flex items-center gap-3">
    <CheckCircle2 className="h-6 w-6 text-green-600" />
    <span className="font-medium">Premium Quality Materials</span>
  </div>

  <div className="flex items-center gap-3">
    <CheckCircle2 className="h-6 w-6 text-green-600" />
    <span className="font-medium">Custom Box Sizes</span>
  </div>

  <div className="flex items-center gap-3">
    <CheckCircle2 className="h-6 w-6 text-green-600" />
    <span className="font-medium">On-Time Delivery</span>
  </div>

</div>

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-xl bg-blue-900 px-8 py-4 font-semibold text-white transition hover:bg-blue-800"
              >
                Get Free Quote
                <ArrowRight size={18} />
              </Link>

              <Link
  href="#products"
  className="rounded-xl border-2 border-blue-900 bg-white px-8 py-4 font-semibold text-blue-900 transition duration-300 hover:bg-blue-900 hover:text-white"
>
  View Products
</Link>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <Image
              src="/images/hero.jpg"
              alt="Packaging Factory"
              width={700}
              height={600}
              className="rounded-3xl shadow-2xl"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}