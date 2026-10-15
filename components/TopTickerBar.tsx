"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Laptop,
  MapPin,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

interface TickerItem {
  id: string;
  icon: typeof GraduationCap;
  iconColor: string;
  tag: string;
  tagBg: string;
  text: string;
  actionLabel: string;
  actionHref: string;
}

const TICKER_ITEMS: TickerItem[] = [
  {
    id: "courses",
    icon: GraduationCap,
    iconColor: "text-white",
    tag: "Admissions Open",
    tagBg: "bg-blue-600 text-white border-transparent shadow-xs",
    text: "Professional IT Training: Full-Stack Web Development with AI, Graphic Design & Computer Maintenance Cohorts",
    actionLabel: "Explore Courses",
    actionHref: "/#courses",
  },
  {
    id: "accessories",
    icon: Laptop,
    iconColor: "text-white",
    tag: "Hardware Store",
    tagBg: "bg-indigo-600 text-white border-transparent shadow-xs",
    text: "Over 110+ Laptops, Keyboards, Monitors & Accessories with Warranty & After-Sales Support",
    actionLabel: "Shop Peripherals",
    actionHref: "/accessories",
  },
  {
    id: "location",
    icon: MapPin,
    iconColor: "text-white",
    tag: "Bogije, Lagos",
    tagBg: "bg-emerald-600 text-white border-transparent shadow-xs",
    text: "Visit Us: Elemoro Shopping Complex, Bogije Bus-stop, Ibeju-Lekki • Mon – Sat 9AM – 5PM",
    actionLabel: "Book Visit",
    actionHref: "/#contact",
  },
];

export default function TopTickerBar() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fadeState, setFadeState] = useState<"in" | "out">("in");

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setFadeState("out");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % TICKER_ITEMS.length);
        setFadeState("in");
      }, 200);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (newIndex: number) => {
    if (newIndex === index) return;
    setFadeState("out");
    setTimeout(() => {
      setIndex(newIndex);
      setFadeState("in");
    }, 180);
  };

  const goToPrev = () => {
    goToSlide((index - 1 + TICKER_ITEMS.length) % TICKER_ITEMS.length);
  };

  const goToNext = () => {
    goToSlide((index + 1) % TICKER_ITEMS.length);
  };

  const current = TICKER_ITEMS[index];
  const Icon = current.icon;

  return (
    <aside
      aria-label="Site Announcements"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="hidden lg:block w-full bg-white text-slate-700 border-b border-slate-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.03)] relative z-40 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-6 text-[11px]">
        {/* Left: Animated Rotating Content */}
        <div className="flex-1 flex items-center min-w-0 overflow-hidden">
          <div
            className={`flex items-center gap-2.5 transition-all duration-300 ease-out ${
              fadeState === "in"
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-1.5"
            }`}
          >
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[10px] font-semibold shrink-0 ${current.tagBg}`}
            >
              <Icon size={12} className={current.iconColor} />
              {current.tag}
            </span>
            <span className="text-slate-800 font-medium truncate">
              {current.text}
            </span>
            <Link
              href={current.actionHref}
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-2 transition-colors shrink-0"
            >
              <span>{current.actionLabel}</span>
              <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Right: Interactive Dash/Pill Switcher & Contacts */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Interactive Dash/Pill Switcher */}
          <div className="flex items-center gap-1 bg-slate-100/90 hover:bg-slate-100 px-1.5 py-0.5 rounded-full border border-slate-200/70 transition-colors">
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous announcement"
              className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-white transition-all cursor-pointer"
            >
              <ChevronLeft size={12} />
            </button>
            <div className="flex items-center gap-1 px-0.5">
              {TICKER_ITEMS.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSlide(i)}
                  aria-label={`Jump to slide ${i + 1}: ${item.tag}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    index === i
                      ? "w-4 bg-blue-600 shadow-sm"
                      : "w-1.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next announcement"
              className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-white transition-all cursor-pointer"
            >
              <ChevronRight size={12} />
            </button>
          </div>

          <span className="w-px h-3.5 bg-slate-200" />

          {/* Quick Direct Actions */}
          <a
            href="tel:+2348032310325"
            className="flex items-center gap-1 text-slate-600 hover:text-blue-600 font-medium transition-colors"
            title="Call Hero Link Systems"
          >
            <Phone size={11} className="text-blue-600" />
            <span className="font-semibold text-slate-700">+234 803 231 0325</span>
          </a>

          <span className="w-px h-3.5 bg-slate-200" />

          <a
            href="https://wa.me/2348032310325?text=Hi%2C%20I%20saw%20your%20website%20and%20would%20like%20to%20make%20an%20enquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
            title="Chat on WhatsApp"
          >
            <MessageCircle size={12} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
