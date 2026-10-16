"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Download,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Home,
  Building,
  GraduationCap,
  Wrench,
  ShoppingBag,
  MessageSquare,
} from "lucide-react";
import TopTickerBar from "@/components/TopTickerBar";

const navLinks = [
  { href: "/#home", label: "Home", icon: Home },
  { href: "/#about", label: "About", icon: Building },
  { href: "/#courses", label: "Courses", icon: GraduationCap },
  { href: "/#services", label: "Services", icon: Wrench },
  { href: "/accessories", label: "Accessories", icon: ShoppingBag },
  { href: "/#contact", label: "Contact", icon: MessageSquare },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeLink, setActiveLink] = useState("/#home");
  const lastScrollY = useRef(0);
  const isUserClickingRef = useRef(false);

  useEffect(() => {
    // Handle hash changes from clicking nav links
    const updateActiveLink = () => {
      isUserClickingRef.current = true;
      const path = window.location.pathname || "/";
      const hash = window.location.hash || (path === "/" ? "#home" : "");
      const current = `${path}${hash}`;
      setActiveLink(current === "/" ? "/#home" : current);

      // Allow scroll-based updates to resume after a short delay
      setTimeout(() => {
        isUserClickingRef.current = false;
      }, 500);
    };

    updateActiveLink();
    window.addEventListener("hashchange", updateActiveLink);
    return () => window.removeEventListener("hashchange", updateActiveLink);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || window.location.pathname !== "/")
      return;

    const sectionIds = ["home", "about", "courses", "services", "contact"];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isUserClickingRef.current) return;

        const viewportTop = window.innerHeight * 0.25;
        const inViewport = entries.filter((entry) => {
          const rect = entry.target.getBoundingClientRect();
          return rect.top <= viewportTop && rect.bottom > viewportTop;
        });

        if (inViewport.length > 0) {
          setActiveLink(`/#${inViewport[0].target.id}`);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* ── scroll behaviour ── */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      setHidden(y > lastScrollY.current && y > 100);
      lastScrollY.current = y <= 0 ? 0 : y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── keyboard + body-scroll lock ── */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      {/* ── DESKTOP TOP ANNOUNCEMENT TICKER ── */}
      <TopTickerBar />

      {/* ── MOBILE HEADER WITH QUICK ACTIONS & HAMBURGER MENU ── */}
      <header
        role="banner"
        className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
      >
        <div className="flex items-center justify-between px-4 h-14">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 active:scale-95 transition-transform"
            onClick={close}
          >
            <div className="w-8 h-8 rounded-lg bg-white p-1 border border-slate-200/60 shadow-xs flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Hero Link Systems Limited Logo"
                width={28}
                height={28}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="font-heading font-bold text-[11px] text-slate-900 leading-tight">
                Hero Link Systems Limited
              </div>
              <div className="text-[8px] text-slate-500 font-medium tracking-wide">
                Power. Connect. Advance.
              </div>
            </div>
          </Link>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+2348032310325"
              aria-label="Call Hero Link Systems"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200 active:scale-95 shadow-xs"
            >
              <Phone size={16} />
            </a>

            {/* Hamburger button */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-slate-100 text-slate-800 hover:bg-blue-600 hover:text-white transition-all duration-200 active:scale-95"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* ── DESKTOP FLOATING ISLAND NAVIGATION ── */}
      <header
        role="banner"
        style={{
          transition:
            "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease, top 0.3s ease",
        }}
        className={[
          "site-header fixed left-1/2 -translate-x-1/2 z-50 hidden lg:block",
          scrolled ? "top-3" : "top-12",
          "bg-white/95 backdrop-blur-2xl",
          "rounded-2xl shadow-card-hover border border-slate-200/70 ring-1 ring-slate-900/[0.03]",
          hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100",
        ].join(" ")}
      >
        <div className="flex items-center gap-3 px-4 py-2.5">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0 pr-5 border-r border-slate-200/60"
            onClick={close}
          >
            <div className="w-9 h-9 rounded-xl bg-white p-1 border border-slate-200/60 shadow-xs flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Hero Link Systems Limited Logo"
                width={30}
                height={30}
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-heading font-bold text-[11px] text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                Hero Link Systems Limited
              </div>
              <div className="text-[9px] text-slate-500 font-medium tracking-wide">
                Power. Connect. Advance.
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            <ul className="flex items-center gap-1">
              {navLinks.map(({ href, label, icon: Icon }) => {
                const isActive = href === activeLink;
                return (
                  <li key={href} className="list-none">
                    <Link
                      href={href}
                      className={`relative px-3.5 py-2 text-xs font-semibold rounded-xl transition-all duration-200 flex items-center gap-1.5 ${
                        isActive
                          ? "text-blue-600 bg-blue-50/80 shadow-xs"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                      }`}
                    >
                      <Icon size={14} className={isActive ? "text-blue-600" : "text-slate-400"} />
                      <span>{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3 pl-3 border-l border-slate-200/60">
            <a
              href="/docs/Course Outline.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-50 border border-slate-200/70 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-600 active:scale-95 transition-all duration-200 whitespace-nowrap shadow-xs"
            >
              <Download size={13} />
              <span>Syllabus (PDF)</span>
            </a>
            <Link
              href="/#contact"
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl shadow-xs transition-all duration-200 whitespace-nowrap"
            >
              <span>Enroll Now</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ── BACKDROP ── always in DOM, fades in/out */}
      <div
        aria-hidden="true"
        onClick={close}
        className="lg:hidden fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      />

      {/* ── MOBILE DRAWER ── full height slide-over */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className="lg:hidden fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white flex flex-col shadow-2xl"
        style={{
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 p-1 flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Hero Link Systems"
                width={26}
                height={26}
                className="object-contain"
              />
            </div>
            <span className="font-heading font-bold text-xs text-slate-900 block leading-tight">
              Hero Link Systems Limited
            </span>
          </div>
          <button
            onClick={close}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 active:scale-90 transition-all"
          >
            <X size={16} />
          </button>
        </div>

        {/* Mobile nav links */}
        <nav aria-label="Mobile navigation" className="flex-1 px-4 py-4 overflow-y-auto">
          <ul className="space-y-1.5">
            {navLinks.map(({ href, label, icon: Icon }) => {
              const isActive = href === activeLink;
              return (
                <li key={href} className="list-none">
                  <Link
                    href={href}
                    onClick={close}
                    className={[
                      "flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-150 active:scale-[0.98]",
                      isActive
                        ? "bg-blue-600 text-white font-semibold shadow-xs"
                        : "text-slate-700 hover:bg-slate-50 font-medium",
                    ].join(" ")}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                    <span className="text-sm">{label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Action Hub & Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/70 space-y-2.5">
          <a
            href="tel:+2348032310325"
            className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white text-sm font-semibold rounded-xl shadow-xs transition-all"
          >
            <Phone size={16} />
            <span>Call +234 803 231 0325</span>
          </a>

          <a
            href="/docs/Course Outline.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold rounded-xl shadow-xs transition-all"
          >
            <Download size={14} />
            <span>Download Course Syllabus (PDF)</span>
          </a>

          <div className="pt-2 text-center text-[11px] text-slate-400">
            <p>Elemoro Shopping Complex, Bogije, Lagos</p>
          </div>
        </div>
      </div>
    </>
  );
}
