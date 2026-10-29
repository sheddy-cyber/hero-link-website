import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessoriesGallery from "@/components/AccessoriesGallery";
import { accessories } from "@/lib/accessories-data";

export const metadata: Metadata = {
  title: "Computer Accessories & Laptops in Ibeju-Lekki, Lagos",
  description:
    "Buy laptops and computer accessories in Ibeju-Lekki, Lagos. We sell keyboards, mice, monitors, printers, cables, storage devices, and more with after-sales support.",
  alternates: { canonical: "/accessories" },
  openGraph: {
    title: "Computer Accessories & Laptops in Ibeju-Lekki, Lagos",
    description:
      "Browse and buy laptops, printers, and computer accessories from Hero Link Systems Limited in Ibeju-Lekki, Lagos.",
    images: ["/images/hero_image.jpg"],
  },
};

export default function AccessoriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Hero Link Systems Limited - Accessories Store",
    url: "https://www.herolinksystems.com/accessories",
    telephone: "+2348032310325",
    email: "info@herolinksystems.com",
    description: `Computer accessories, laptops, and peripherals store in Ibeju-Lekki, Lagos. Over ${accessories.length} quality products available.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Elemoro Shopping Complex, Bogije Bus-stop",
      addressLocality: "Ibeju-Lekki",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <>
      <Header />
      <main id="main" className="pt-14 lg:pt-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Page hero */}
        <section
          aria-labelledby="page-heading"
          className="relative bg-slate-950 text-white overflow-hidden hero-ambient-mesh border-b border-slate-800/80 py-12 sm:py-16 lg:py-20"
        >
          {/* Subtle grid pattern without animations */}
          <div className="absolute inset-0 hero-grid-pattern opacity-25 pointer-events-none" />

          {/* Refined ambient glow */}
          <div className="absolute -top-24 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-xs sm:text-sm font-semibold mb-6 transition-colors group"
            >
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>

            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/10">
                <ShoppingBag size={24} className="text-blue-300" />
              </div>
              <div>
                <h1 id="page-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3">
                  Laptops &amp; Computer Accessories
                </h1>
                <p className="text-slate-300 max-w-2xl text-sm sm:text-base leading-relaxed font-normal">
                  Explore our extensive collection of {accessories.length}+ quality products. Click any item to inspect specifications and enquire via phone or WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </section>

        <AccessoriesGallery />
      </main>
      <Footer />
    </>
  );
}
