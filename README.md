# Hero Link Systems Limited — Next.js Website

A full-featured Next.js 14 website for Hero Link Systems Limited, converted from a vanilla HTML/CSS/JS project with improved design, SEO, and security.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email**: Nodemailer (via Zoho Mail SMTP)
- **Fonts**: Next.js Google Fonts (Plus Jakarta Sans + Poppins)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
```bash
cp .env.example .env.local
```
Then edit `.env.local` with your Zoho credentials:
```
SMTP_HOST=smtppro.zoho.com
SMTP_PORT=465
SMTP_SECURE=true
EMAIL_USER=info@herolinksystems.com
EMAIL_PASS=your_zoho_app_password
EMAIL_TO=info@herolinksystems.com
NEXT_PUBLIC_SITE_URL=https://www.herolinksystems.com
```

> 💡 **Zoho Mail Setup:** Generate an Application-Specific Password in [Zoho Accounts](https://accounts.zoho.com) -> **Security** -> **Application-Specific Passwords**. Set it as `EMAIL_PASS`.

### 3. Run development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
npm start
```

## Project Structure

```
modem-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata, fonts, JSON-LD
│   ├── page.tsx            # Home page (hero, about, courses, services, testimonials, contact)
│   ├── globals.css         # Global styles + Tailwind
│   ├── sitemap.ts          # Auto-generated sitemap.xml
│   ├── robots.ts           # Auto-generated robots.txt
│   ├── accessories/
│   │   └── page.tsx        # Accessories gallery page
│   └── api/
│       └── register/
│           └── route.ts    # Secure POST endpoint with sanitisation & rate limiting
├── components/
│   ├── Header.tsx          # Sticky header with hide-on-scroll, mobile menu
│   ├── Footer.tsx          # Full footer with links and socials
│   ├── ContactForm.tsx     # Client form with validation & success/error modal
│   ├── AccessoriesGallery.tsx  # Filterable gallery with lightbox modal
│   ├── ScrollAnimator.tsx  # IntersectionObserver scroll animations
│   └── StatsCounter.tsx    # Animated counter stats
├── lib/
│   └── accessories-data.ts # All 110+ product data
├── public/
│   ├── images/             # Site images (logo, hero, etc.)
│   ├── accessories/images/ # All product images (cables, keyboards, etc.)
│   └── docs/
│       └── Course Outline.pdf
├── next.config.ts          # Security headers, image optimisation
├── tailwind.config.ts
└── .env.example
```

## Security Improvements

| Issue | Fix |
|---|---|
| Hardcoded email password in legacy code | Moved to secure SMTP environment variables in `.env.local` |
| No input sanitisation on form POST | All fields sanitised (length-limited, angle brackets stripped) |
| No rate limiting | In-memory rate limiter: 5 req/min per IP on `/api/register` |
| `X-Powered-By: Express` header | Removed via `poweredByHeader: false` in `next.config.ts` |
| No security headers | Full CSP, X-Frame-Options, X-XSS-Protection, etc. in `next.config.ts` |
| HTTP form action in HTML | All form handling via typed Next.js API route |
| `console.log` leaking scroll events in production | Removed debug logs |

## SEO Improvements

- `next/metadata` with full Open Graph, Twitter cards, canonical URLs
- Schema.org JSON-LD for `EducationalOrganization` (home) and `Store` (accessories)
- `app/sitemap.ts` → auto-generates `/sitemap.xml`
- `app/robots.ts` → auto-generates `/robots.txt`
- Semantic HTML with proper heading hierarchy and ARIA roles
- `next/image` with automatic WebP/AVIF conversion and lazy loading
- `next/font` for zero-CLS font loading

## Deployment

The project is ready for **Vercel** (recommended):
1. Push to GitHub
2. Import on vercel.com
3. Add environment variables in the Vercel dashboard
4. Deploy
