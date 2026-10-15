"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Grid3x3,
  Laptop,
  Keyboard,
  Monitor,
  Network,
  HardDrive,
  Package,
  PlusCircle,
  CheckCircle,
  X,
  Phone,
  MessageCircle,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import {
  accessories,
  categoryLabels,
  type Category,
  type AccessoryItem,
} from "@/lib/accessories-data";

const ITEMS_PER_PAGE = 12;

const CATEGORY_KEYS: Category[] = [
  "all",
  "laptops",
  "keyboards",
  "monitors",
  "cables",
  "storage",
  "accessories",
];

function CategoryIcon({ cat }: { cat: Category }) {
  const cls = "w-4 h-4 shrink-0";
  if (cat === "all")          return <Grid3x3 className={cls} />;
  if (cat === "laptops")      return <Laptop className={cls} />;
  if (cat === "keyboards")    return <Keyboard className={cls} />;
  if (cat === "monitors")     return <Monitor className={cls} />;
  if (cat === "cables")       return <Network className={cls} />;
  if (cat === "storage")      return <HardDrive className={cls} />;
  if (cat === "accessories")  return <Package className={cls} />;
  return null;
}

export default function AccessoriesGallery() {
  const [filter, setFilter]     = useState<Category>("all");
  const [page, setPage]         = useState<number>(1);
  const [selected, setSelected] = useState<AccessoryItem | null>(null);
  const [filterVisible, setFilterVisible] = useState(true);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const checkVisibility = () => {
      const gallery = galleryRef.current;
      if (!gallery) return;

      const rect = gallery.getBoundingClientRect();
      // On mobile (< 1024px), the sticky bar sits at top-14 (56px) with ~48px height -> bottom edge is ~105px.
      // On desktop (>= 1024px), the sticky bar sits at top-0 with ~52px height -> bottom edge is ~52px.
      const threshold = window.innerWidth >= 1024 ? 60 : 115;

      // Disappear when the gallery items have scrolled past the filter bar
      const isPastBottom = rect.bottom < threshold;
      setFilterVisible(!isPastBottom);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(checkVisibility);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    checkVisibility(); // Initial check

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [filter, page]);

  const filtered: AccessoryItem[] =
    filter === "all"
      ? accessories
      : accessories.filter((item) => item.category === filter);

  const total        = filtered.length;
  const visibleCount = page * ITEMS_PER_PAGE;
  const visible      = filtered.slice(0, visibleCount);
  const hasMore      = visibleCount < total;

  function handleFilter(cat: Category) {
    setFilter(cat);
    setPage(1);
  }

  return (
    <>
      {/* ── GALLERY & FILTER SECTION ── */}
      <div ref={galleryRef} className="relative">
        {/* ── FILTER BAR ── */}
        <div
          className={[
            "filter-bar sticky top-14 lg:top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm",
            "transition-all duration-300 ease-out",
            filterVisible
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none",
          ].join(" ")}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="filter-scroll-row flex items-center gap-1.5 sm:gap-2 py-2 sm:py-3 overflow-x-auto">
            {CATEGORY_KEYS.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleFilter(cat)}
                className={[
                  "inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full",
                  "text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 border-0",
                  "transition-colors duration-150 cursor-pointer",
                  filter === cat
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200",
                ].join(" ")}
              >
                <CategoryIcon cat={cat} />
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── ITEM COUNT ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4 pb-2">
        <p className="text-xs sm:text-sm text-slate-500">
          Showing{" "}
          <strong className="text-slate-800">{visible.length}</strong> of{" "}
          <strong className="text-slate-800">{total}</strong> items
          {filter !== "all" && (
            <>
              {" "}in{" "}
              <span className="text-blue-600 font-medium">
                {categoryLabels[filter]}
              </span>
            </>
          )}
        </p>
      </div>

      {/* ── PRODUCT GRID ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        {visible.length === 0 ? (
          <div className="py-24 text-center">
            <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 text-sm font-medium">
              No items found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {visible.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelected(item)}
                className="group bg-white rounded-2xl border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-blue-300 hover:-translate-y-1 active:scale-[0.98] transition-all duration-200 overflow-hidden text-left cursor-pointer p-0 flex flex-col justify-between"
              >
                <div className="relative aspect-square bg-slate-50 overflow-hidden w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 18vw"
                    className="object-contain p-2 sm:p-2.5 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-2.5 sm:p-3 w-full border-t border-slate-100">
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-900 leading-snug line-clamp-2">
                    {item.name}
                  </p>
                  <span className="inline-block mt-1 text-[9px] sm:text-[10px] text-blue-600 font-medium capitalize leading-none">
                    {categoryLabels[item.category]}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* ── LOAD MORE ── */}
        <div className="flex justify-center mt-10 sm:mt-12">
          {hasMore ? (
            <button
              type="button"
              onClick={() => setPage((p) => p + 1)}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-semibold rounded-xl shadow-md shadow-blue-600/25 transition-all duration-200 cursor-pointer border-0 text-sm"
            >
              <PlusCircle className="w-[17px] h-[17px]" />
              <span>
                Load More Items
                <span className="hidden sm:inline"> ({total - visible.length} remaining)</span>
              </span>
            </button>
          ) : (
            <span className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 border border-slate-200/60 text-slate-600 rounded-xl text-xs sm:text-sm font-medium">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              All {total} items loaded
            </span>
          )}
        </div>
      </div>
    </div>

      {/* ── READY TO PURCHASE CTA ── */}
      <section className="relative bg-slate-950 text-white overflow-hidden hero-ambient-mesh border-t border-slate-800/80 py-16 sm:py-20">
        <div className="absolute inset-0 hero-grid-pattern opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <div className="flex items-start gap-4 sm:gap-5 text-white">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-blue-500/10">
                <ShoppingBag className="w-6 h-6 sm:w-7 sm:h-7 text-blue-300" />
              </div>
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-2">
                  Ready to Make a Purchase?
                </h2>
                <p className="text-slate-300 max-w-lg leading-relaxed text-sm sm:text-base">
                  Contact us via phone or WhatsApp to enquire about pricing,
                  availability, and delivery. All products come with after-sales support.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <a
                href="tel:+2348032310325"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-semibold rounded-xl shadow-md shadow-blue-600/25 transition-all whitespace-nowrap text-sm sm:text-base"
              >
                <Phone className="w-[17px] h-[17px]" />
                Call Us Now
              </a>
              <a
                href="https://wa.me/2348032310325?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-semibold rounded-xl shadow-md shadow-emerald-600/25 transition-all whitespace-nowrap text-sm sm:text-base"
              >
                <MessageCircle className="w-[17px] h-[17px]" />
                WhatsApp
              </a>
              <a
                href="/#contact"
                className="arrow-link inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.07] hover:bg-white/[0.12] active:scale-[0.98] border border-white/15 text-white font-semibold rounded-xl backdrop-blur-md transition-all whitespace-nowrap text-sm sm:text-base"
              >
                Send Enquiry
                <span className="arrow-icon"><ArrowRight className="w-4 h-4" /></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT MODAL ── */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.name}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-md animate-fade-in"
          onClick={(e) => { if (e.target === e.currentTarget) setSelected(null); }}
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden animate-fade-up">

            {/* Image */}
            <div className="relative aspect-[4/3] bg-slate-50">
              <Image
                src={selected.image}
                alt={selected.name}
                fill
                className="object-contain p-6"
                sizes="500px"
              />
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-3.5 right-3.5 w-9 h-9 flex items-center justify-center bg-slate-900/60 hover:bg-slate-900/90 active:scale-95 text-white rounded-full transition-all border-0 cursor-pointer backdrop-blur-sm"
              >
                <X className="w-[18px] h-[18px]" />
              </button>
            </div>

            {/* Info */}
            <div className="p-6 sm:p-7">
              <h3 className="font-heading font-black text-xl text-slate-900 mb-1">
                {selected.name}
              </h3>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-2.5 py-0.5 capitalize">
                {categoryLabels[selected.category]}
              </span>

              <div className="border-t border-slate-100 mt-5 pt-5">
                <p className="text-xs sm:text-sm text-slate-500 mb-4 font-medium">
                  Interested in this product? Speak with our sales desk:
                </p>
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="tel:+2348032310325"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-semibold rounded-xl text-sm transition-all shadow-md shadow-blue-600/20"
                  >
                    <Phone className="w-[15px] h-[15px]" />
                    Call Now
                  </a>
                  <a
                    href={`https://wa.me/2348032310325?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(selected.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-semibold rounded-xl text-sm transition-all shadow-md shadow-emerald-600/20"
                  >
                    <MessageCircle className="w-[15px] h-[15px]" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
