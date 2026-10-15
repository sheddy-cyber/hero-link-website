import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_0.8fr_0.8fr_1.4fr] gap-y-12 gap-x-8 lg:gap-x-6">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-lg shadow-black/20">
                  <Image src="/images/logo.png" alt="Hero Link Systems Limited" width={40} height={40} className="object-contain" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-20 blur -z-10" />
              </div>
              <span className="font-heading font-bold text-white text-base leading-tight">
                Hero Link<br />Systems Limited
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Building Nigeria&apos;s tech workforce through practical, industry-focused training.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`Follow us on ${label}`}
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white active:scale-95 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/#about", label: "About Us" },
                { href: "/#courses", label: "Courses" },
                { href: "/#services", label: "Services" },
                { href: "/accessories", label: "Accessories Gallery" },
                { href: "/#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wide uppercase">Resources</h4>
            <ul className="space-y-3">
              {[
                { href: "/docs/Course Outline.pdf", label: "Course Outline (PDF)", external: true },
                { href: "/#courses", label: "Admission" },
                { href: "/#contact", label: "Visit Location" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm tracking-wide uppercase">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-blue-400" />
                </div>
                <span>Elemoro Shopping Complex, Bogije Bus-stop, Ibeju-Lekki, Lagos</span>
              </li>
              <li className="flex gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-blue-400" />
                </div>
                <a href="tel:+2348032310325" className="text-slate-400 hover:text-white transition-colors">
                  +234 803 231 0325
                </a>
              </li>
              <li className="flex gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-blue-400" />
                </div>
                <a href="mailto:info@herolinksystems.com" className="text-slate-400 hover:text-white transition-colors break-all">
                  info@herolinksystems.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} <strong className="text-slate-400">Hero Link Systems Limited</strong>. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
