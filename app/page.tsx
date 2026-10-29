import Image from "next/image";
import Link from "next/link";
import {
  Award,
  GraduationCap,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Clock,
  Monitor,
  UserCheck,
  Scroll,
  FileType,
  Palette,
  Code2,
  Building2,
  Wrench,
  Laptop,
  CalendarDays,
  Wallet,
  ArrowRight,
  Send,
  ExternalLink,
  Settings,
  ShoppingBag,
  Package,
  Check,
  Quote,
  User,
  ShieldCheck,
  TrendingUp,
  Star,
  Info,
  ShoppingCart,
  FileText,
  PlayCircle,
  Users,
  Briefcase,
  MessageCircle,
  Download,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ScrollAnimator from "@/components/ScrollAnimator";

interface CourseItem {
  icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  duration: string | null;
  price: string | null;
  featured?: boolean;
}

const courses: CourseItem[] = [
  {
    icon: Code2,
    badge: "Flagship Program",
    title: "Full-Stack Web Development With AI",
    description:
      "Students learn the basics of coding and how to use AI to build, deploy, and scale modern full-stack websites.",
    highlights: ["Coding Fundamentals", "Full-Stack JS", "AI Development Tools", "Live Portfolio Projects"],
    duration: "5 months",
    price: "₦500,000",
    featured: true,
  },
  {
    icon: Palette,
    badge: "Creative Suite",
    title: "Digital Graphic Design",
    description:
      "Master CorelDraw, Corel Photo-Paint, and Adobe Photoshop CC for digital branding, vector art, and print pre-press.",
    highlights: ["Logo & Brand Identity", "Photoshop CC", "CorelDraw Suite", "Print Production"],
    duration: "3 months",
    price: "₦150,000",
  },
  {
    icon: FileType,
    badge: "Foundations",
    title: "Desktop Publishing (DTP)",
    description:
      "Computer fundamentals, touch typing speed, MS Word, Excel, PowerPoint, and essential business tools.",
    highlights: ["Computer Basics", "MS Office Mastery", "Speed Typing", "Document Layout"],
    duration: "3 months",
    price: "₦90,000",
  },
  {
    icon: Building2,
    badge: "Career Accelerator",
    title: "Internship — Business Management",
    description:
      "Applied workplace placement and enterprise administrative skills to accelerate entrepreneurship and employment readiness.",
    highlights: ["Office Administration", "Business Operations", "Hands-on Tasks", "Career Mentorship"],
    duration: "5 months",
    price: "₦200,000",
  },
  {
    icon: Wrench,
    badge: "Technical",
    title: "Computer Maintenance & Repair",
    description:
      "Hardware diagnostics, component troubleshooting, system upgrades, OS installation, and preventive maintenance.",
    highlights: ["PC & Laptop Repair", "OS Installation", "Component Upgrades", "Preventive Care"],
    duration: "Variable",
    price: "Contact us",
  },
  {
    icon: Laptop,
    badge: "Hardware Store",
    title: "Sales of Computers & Accessories",
    description:
      "Direct supply of verified laptops, desktops, monitors, keyboards, and accessories with local warranty.",
    highlights: ["110+ Products", "Hardware Warranty", "Pre-tested Gear", "After-sales Support"],
    duration: null,
    price: null,
  },
];

const features = [
  {
    icon: Monitor,
    title: "Conducive Learning Environment",
    desc: "Spacious classroom with real equipment and guided exercises.",
  },
  {
    icon: UserCheck,
    title: "Experienced Tutors",
    desc: "Trainers with real-world industry experience.",
  },
  {
    icon: Clock,
    title: "Flexible Schedules",
    desc: "Morning, evening and weekend classes to suit working learners.",
  },
  {
    icon: Scroll,
    title: "Industry Certification",
    desc: "Recognised certificates upon course completion.",
  },
];

const testimonials = [
  {
    quote:
      "The web development course transformed my career. Within 3 months of completing, I landed a job as a junior developer.",
    name: "Chidera O.",
    role: "Web Development Graduate",
  },
  {
    quote:
      "Professional tutors, modern equipment, and practical projects. Best training center in Ibeju-Lekki. Highly recommend!",
    name: "Itoje David",
    role: "Graphic Design Student",
  },
  {
    quote:
      "Started as a complete beginner and became inspired to pursue a career in Computer Science. The hands-on approach made all the difference.",
    name: "Chinonso Ewesiobi",
    role: "Desktop Publishing Alumni",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <ScrollAnimator />
      <main id="main" className="pt-14 lg:pt-0">
        {/* ── HERO ── */}
        <section
          id="home"
          aria-labelledby="hero-heading"
          className="relative min-h-[88vh] bg-slate-950 text-white overflow-hidden hero-ambient-mesh flex items-center"
        >
          {/* Subtle grid pattern without tacky animations */}
          <div className="absolute inset-0 hero-grid-pattern opacity-30 pointer-events-none" />

          {/* Refined ambient glow */}
          <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute -bottom-32 left-10 w-[400px] h-[400px] bg-sky-500/10 rounded-full blur-[110px] pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-28 w-full">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                {/* Clean Pill Badge */}
                <div className="inline-flex items-center gap-2.5 bg-white/[0.06] hover:bg-white/[0.09] border border-white/10 rounded-full px-4 py-2 text-xs font-semibold text-blue-200 tracking-wide backdrop-blur-md transition-all">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="uppercase tracking-wider text-[11px] text-blue-300 font-bold">Admissions Open</span>
                  <span className="text-white/40">•</span>
                  <span>Bogije, Ibeju-Lekki</span>
                </div>

                <h1
                  id="hero-heading"
                  className="font-heading text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white"
                >
                  <span className="block">Practical Tech Skills.</span>
                  <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-white">
                    Engineered for Careers.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-xl font-normal">
                  Master Full-Stack Web Development With AI, Graphic Design, Desktop Publishing, and Computer Maintenance. Guided by experienced instructors in state-of-the-art computer labs.
                </p>

                {/* Primary & Secondary Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
                  <Link
                    href="#courses"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-semibold rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-200 text-sm sm:text-base group"
                  >
                    <GraduationCap size={19} />
                    <span>Explore Cohorts</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/[0.07] hover:bg-white/[0.12] active:scale-[0.98] border border-white/15 text-white font-semibold rounded-xl backdrop-blur-md transition-all duration-200 text-sm sm:text-base"
                  >
                    <Calendar size={18} className="text-slate-300" />
                    <span>Book Center Tour</span>
                  </Link>
                </div>

                {/* Trust & Location Highlights */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-3 text-xs sm:text-sm text-slate-400 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <MapPin size={15} className="text-blue-400 shrink-0" />
                    <span>Elemoro Complex, Bogije</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={15} className="text-blue-400 shrink-0" />
                    <a href="tel:+2348032310325" className="hover:text-white transition-colors">
                      +234 803 231 0325
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={15} className="text-emerald-400 shrink-0" />
                    <span>Accredited Institute</span>
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
                {/* Hero Lab Preview Frame */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-card-dark group bg-slate-900">
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src="/images/hero_image.jpg"
                      alt="Students learning at Hero Link Systems computer lab in Bogije, Ibeju-Lekki"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-semibold text-white">
                    <span className="inline-flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      Interactive Workstations
                    </span>
                    <span className="bg-blue-600/90 backdrop-blur-md px-3 py-1.5 rounded-full">
                      Bogije Campus
                    </span>
                  </div>
                </div>

                {/* Stat Badges */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 transition-colors">
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">200+</div>
                    <div className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">Graduates Trained</div>
                  </div>
                  <div className="bg-white/[0.05] hover:bg-white/[0.08] backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 transition-colors">
                    <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">15+</div>
                    <div className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="py-16 sm:py-24 lg:py-28 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="animate-on-scroll">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 rounded-full px-3.5 py-1 mb-3">
                  About Us
                </span>
                <h2
                  id="about-heading"
                  className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4 sm:mb-6"
                >
                  Building Nigeria&apos;s Tech Workforce
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
                  We deliver practical, job-ready training for individuals and
                  organisations. Our instructors are industry practitioners who
                  emphasise real-world projects, internships and post-training
                  support.
                </p>

                <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
                  {features.map(({ icon: Icon, title, desc }) => (
                    <li key={title} className="flex gap-3.5 sm:gap-4 items-start">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <strong className="text-slate-900 text-sm sm:text-base font-bold block">
                          {title}
                        </strong>
                        <p className="text-slate-600 text-xs sm:text-sm mt-0.5 leading-relaxed">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href="/docs/Course Outline.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                >
                  <FileText size={18} className="group-hover:scale-110 transition-transform" />
                  <span>Download full course outline (PDF)</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div
                className="animate-on-scroll"
                style={{ transitionDelay: "0.15s" }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-card-dark group border border-slate-200/80">
                  <Image
                    src="/images/codescreen.jpeg"
                    alt="Computer lab training session showing code on screen"
                    width={600}
                    height={450}
                    className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="inline-flex items-center gap-2 bg-slate-900/85 backdrop-blur-md border border-white/15 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg">
                      <PlayCircle size={18} className="text-blue-400" />
                      <span>Practical Training Labs</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6">
                  {[
                    { icon: ShieldCheck, label: "Accredited Center" },
                    { icon: TrendingUp, label: "15+ Years Experience" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 sm:gap-3.5 bg-slate-50 rounded-2xl px-4 py-3.5 sm:px-5 sm:py-4 border border-slate-200/70 shadow-xs"
                    >
                      <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-blue-600" />
                      </div>
                      <span className="text-sm font-bold text-slate-800 leading-snug">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── COURSES ── */}
        <section
          id="courses"
          aria-labelledby="courses-heading"
          className="py-16 sm:py-24 lg:py-28 bg-slate-50/70 border-y border-slate-200/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 rounded-full px-3.5 py-1 mb-3">
                Industry-Ready Curriculum
              </span>
              <h2
                id="courses-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4"
              >
                Comprehensive Training Cohorts
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
                Practical, project-based courses with guaranteed workstation access, mentor feedback, and industry-recognized certification.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {courses.map((course, i) => {
                const Icon = course.icon;
                const isFeatured = !!course.featured;
                return (
                  <article
                    key={course.title}
                    className={`animate-on-scroll relative rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between group ${
                      isFeatured
                        ? "bg-slate-950 text-white border border-blue-500/50 shadow-2xl hover:shadow-glow-blue hover:-translate-y-1.5 ring-1 ring-blue-500/30"
                        : "bg-white text-slate-900 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-blue-300 hover:-translate-y-1.5"
                    }`}
                    style={{ transitionDelay: `${i * 0.08}s` }}
                  >
                    <div>
                      {/* Top Row: Icon + Badge */}
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                            isFeatured
                              ? "bg-blue-600/30 border border-blue-400/40 text-blue-300"
                              : "bg-blue-50 border border-blue-100 text-blue-600"
                          }`}
                        >
                          <Icon size={22} />
                        </div>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                            isFeatured
                              ? "bg-blue-500/20 text-blue-300 border border-blue-400/30"
                              : "bg-slate-100 text-slate-600 border border-slate-200/60"
                          }`}
                        >
                          {course.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className={`font-heading font-bold text-xl mb-2.5 leading-snug ${
                          isFeatured ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {course.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-sm leading-relaxed mb-4 ${
                          isFeatured ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        {course.description}
                      </p>

                      {/* Highlights Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {course.highlights.map((tag) => (
                          <span
                            key={tag}
                            className={`text-[11px] font-medium px-2.5 py-1 rounded-lg ${
                              isFeatured
                                ? "bg-white/[0.07] text-blue-200 border border-white/10"
                                : "bg-slate-50 text-slate-600 border border-slate-200/60"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Metadata & CTA */}
                    <div>
                      <div
                        className={`flex items-center justify-between border-t pt-4 mb-4 ${
                          isFeatured ? "border-white/10" : "border-slate-100"
                        }`}
                      >
                        {course.duration ? (
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                            <Clock size={14} className={isFeatured ? "text-blue-400" : "text-slate-500"} />
                            <span>{course.duration}</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                            <Package size={14} className="text-blue-500" />
                            <span>In Stock</span>
                          </div>
                        )}

                        <div className={`text-base sm:text-lg font-black tracking-tight ${
                          isFeatured ? "text-white" : "text-slate-900"
                        }`}>
                          {course.price ?? "Retail Catalog"}
                        </div>
                      </div>

                      <Link
                        href={course.price ? "#contact" : "/accessories"}
                        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-[0.98] ${
                          isFeatured
                            ? "bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30"
                            : "bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800"
                        }`}
                      >
                        <span>{course.price ? "Enroll in Cohort" : "Browse Accessories"}</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-12 sm:mt-16 animate-on-scroll">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold rounded-xl shadow-md shadow-blue-600/25 transition-all duration-200 text-sm sm:text-base"
              >
                <Send size={16} />
                <span>Register for Classes</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/docs/Course Outline.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold rounded-xl shadow-xs transition-all text-sm sm:text-base"
              >
                <Download size={16} className="text-slate-500" />
                <span>Download Full Syllabus (PDF)</span>
              </a>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section
          id="services"
          aria-labelledby="services-heading"
          className="py-16 sm:py-24 lg:py-28 bg-white border-t border-slate-200/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 rounded-full px-3.5 py-1 mb-3">
                Additional Services
              </span>
              <h2
                id="services-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4"
              >
                Beyond Training
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
                Comprehensive IT solutions for businesses and individuals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {/* Maintenance */}
              <div className="animate-on-scroll bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-blue-200/60 transition-all duration-300 hover:-translate-y-1.5 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Settings size={22} className="text-blue-600" />
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2.5">
                  Computer Maintenance &amp; Repair
                </h3>
                <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                  On-site and in-lab servicing for corporate clients and
                  individuals.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Hardware diagnostics",
                    "Software troubleshooting",
                    "Preventive maintenance",
                    "Software installation",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-slate-600"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                        <Check size={11} className="text-emerald-600" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Accessories — featured */}
              <div
                className="animate-on-scroll relative bg-slate-950 rounded-3xl p-6 sm:p-7 text-white border border-slate-800 shadow-2xl hover:shadow-glow-blue hover:-translate-y-1.5 transition-all duration-300 group ring-1 ring-blue-500/20"
                style={{ transitionDelay: "0.08s" }}
              >
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-full px-2.5 py-1">
                    <ShoppingBag size={10} /> Store
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-400/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <ShoppingBag size={22} className="text-blue-300" />
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl mb-2.5">
                  Laptops &amp; Computer Accessories
                </h3>
                <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                  Browse our extensive collection of 100+ quality products
                  available for purchase.
                </p>
                <ul className="space-y-2.5 mb-6">
                  {[
                    "Laptops & Printers",
                    "Keyboards & Mice",
                    "Monitors & Displays",
                    "Cables & Storage",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-slate-300"
                    >
                      <div className="w-5 h-5 rounded-full bg-white/[0.07] border border-white/15 flex items-center justify-center shrink-0">
                        <Check size={11} className="text-blue-300" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/accessories"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-600/30 active:scale-[0.98] transition-all duration-200"
                >
                  <span>Browse Accessories</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Procurement */}
              <div
                className="animate-on-scroll bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-blue-200/60 transition-all duration-300 hover:-translate-y-1.5 group"
                style={{ transitionDelay: "0.16s" }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Package size={22} className="text-blue-600" />
                </div>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 mb-2.5">
                  Procurement of Office Equipment
                </h3>
                <p className="text-slate-600 text-sm mb-5 leading-relaxed">
                  Office setup and procurement tailored to business budgets and
                  compliance.
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Bulk ordering",
                    "Budget planning",
                    "Installation support",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-slate-600"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                        <Check size={11} className="text-emerald-600" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section
          aria-labelledby="testimonials-heading"
          className="py-16 sm:py-24 lg:py-28 bg-slate-50/70 border-y border-slate-200/60"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 rounded-full px-3.5 py-1 mb-3">
                Success Stories
              </span>
              <h2
                id="testimonials-heading"
                className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4"
              >
                What Our Students Say
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg">
                Real outcomes from real students who trained at our Bogije campus.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="animate-on-scroll bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 group"
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <span className="text-base sm:text-lg font-bold text-blue-600">{t.name.charAt(0)}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-900 text-sm sm:text-base">
                        {t.name}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500">{t.role}</div>
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-full px-2 py-0.5 mt-1">
                        <ShieldCheck size={10} /> Verified Student
                      </span>
                    </div>
                    <Quote size={22} className="text-slate-200 shrink-0" />
                  </div>
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex gap-0.5 mt-5 pt-5 border-t border-slate-100">
                    {[...Array(5)].map((_, si) => (
                      <Star
                        key={si}
                        size={14}
                        className="text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="py-16 sm:py-24 lg:py-28 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-start">
              {/* Info */}
              <div className="animate-on-scroll">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 border border-blue-100 rounded-full px-3.5 py-1 mb-3">
                  Get In Touch
                </span>
                <h2
                  id="contact-heading"
                  className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4 sm:mb-6"
                >
                  Contact &amp; Visit
                </h2>
                <p className="text-slate-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                  <strong className="text-slate-900">
                    Hero Link Systems Limited
                  </strong>
                  <br />
                  Elemoro Shopping Complex, Bogije Bus-stop, Ibeju-Lekki, Lagos
                  State, Nigeria.
                </p>

                {/* Quick mobile action buttons */}
                <div className="flex gap-3 mb-8 sm:mb-10">
                  <a
                    href="tel:+2348032310325"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-semibold rounded-xl shadow-md shadow-blue-600/20 transition-all duration-200 text-sm"
                  >
                    <Phone size={16} />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/2348032310325?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20courses."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white font-semibold rounded-xl shadow-md shadow-emerald-600/20 transition-all duration-200 text-sm"
                  >
                    <MessageCircle size={16} />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="space-y-4 sm:space-y-5 mb-8 sm:mb-10">
                  {[
                    {
                      icon: Phone,
                      label: "Phone",
                      content: (
                        <a
                          href="tel:+2348032310325"
                          className="text-blue-600 hover:text-blue-700 font-semibold text-base sm:text-lg"
                        >
                          +234 803 231 0325
                        </a>
                      ),
                    },
                    {
                      icon: Mail,
                      content: (
                        <a
                          href="mailto:info@herolinksystems.com"
                          className="text-blue-600 hover:text-blue-700 font-semibold text-base sm:text-lg break-all sm:break-normal"
                        >
                          info@herolinksystems.com
                        </a>
                      ),
                      label: "Email",
                    },
                    {
                      icon: Clock,
                      label: "Hours",
                      content: (
                        <span className="font-semibold text-slate-700 text-base sm:text-lg">
                          Mon–Sat: 9AM – 5PM
                        </span>
                      ),
                    },
                  ].map(({ icon: Icon, label, content }) => (
                    <div key={label} className="flex items-start gap-3.5 sm:gap-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5 sm:mb-1">
                          {label}
                        </div>
                        <div className="text-base">{content}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover border border-slate-200/80 h-64 sm:h-72 lg:h-80 w-full transition-shadow duration-300">
                  <iframe
                    title="Hero Link Systems Limited location on Google Maps"
                    src="https://www.google.com/maps?q=Elemoro+Shopping+Complex,+Bogije+Bus+stop+Ibeju-Lekki,+Lagos&output=embed"
                    className="w-full h-full"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Form */}
              <div
                className="animate-on-scroll"
                style={{ transitionDelay: "0.15s" }}
              >
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
