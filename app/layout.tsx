import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const raleway = localFont({
  src: "../public/fonts/raleway-variable.woff2",
  variable: "--font-raleway",
  display: "swap",
  weight: "100 900",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.herolinksystems.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Computer Training Centre in Ibeju-Lekki, Lagos | Hero Link Systems Limited",
    template: "%s | Hero Link Systems Limited",
  },
  description:
    "Hero Link Systems Limited is a leading computer training centre in Ibeju-Lekki, Lagos. We offer web design, graphic design, computer maintenance, and sales of computers & accessories.",
  keywords: [
    "computer training Lagos",
    "web design training Ibeju-Lekki",
    "graphic design courses Lagos",
    "computer maintenance Lagos",
    "laptop sales Nigeria",
    "IT training Lagos",
  ],
  authors: [{ name: "Hero Link Systems Limited" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteUrl,
    siteName: "Hero Link Systems Limited",
    title: "Hero Link Systems Limited — Professional IT Training in Lagos",
    description:
      "Practical computer training, maintenance and procurement in Ibeju-Lekki, Lagos. Learn web design, graphic design, and more.",
    images: [{ url: "/images/hero_image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hero Link Systems Limited — IT Training in Lagos",
    description: "Professional computer training in Ibeju-Lekki, Lagos",
    images: ["/images/hero_image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Hero Link Systems Limited",
    alternateName: "Hero Link Systems",
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    image: `${siteUrl}/images/hero_image.jpg`,
    description:
      "Leading computer training centre in Ibeju-Lekki, Lagos offering professional IT courses, computer maintenance, and equipment sales.",
    telephone: "+2348032310325",
    email: "info@herolinksystems.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Elemoro Shopping Complex, Bogije Bus-stop",
      addressLocality: "Ibeju-Lekki",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "6.4698",
      longitude: "3.6408",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Training Courses",
      itemListElement: [
        {
          "@type": "Course",
          name: "Desktop Publishing",
          description: "Computer fundamentals, typing, MS Office suite training",
          provider: {
            "@type": "EducationalOrganization",
            name: "Hero Link Systems Limited",
          },
        },
        {
          "@type": "Course",
          name: "Digital Graphic Design",
          description: "CorelDraw, Adobe Photoshop training",
          provider: {
            "@type": "EducationalOrganization",
            name: "Hero Link Systems Limited",
          },
        },
        {
          "@type": "Course",
          name: "Full-Stack Web Development With AI",
          description: "Students learn the basics of coding and how to use AI to build websites",
          provider: {
            "@type": "EducationalOrganization",
            name: "Hero Link Systems Limited",
          },
        },
      ],
    },
  };

  return (
    <html
      lang="en"
      className={`${raleway.variable}`}
    >
      <body>
        <SmoothScroll />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
