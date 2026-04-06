# Bagani Website - Conversation Continues

## Date: 2026-04-01

## Context
- Static site is **live on Netlify** (all 23 pages, 11 products, branding complete)
- Client requires a **CMS** so they can update content themselves
- Focus: **speed** and **user experience**

---

## Decision: No Full Next.js Rebuild

The user considered a GPT-generated prompt for a full Next.js 15 + TypeScript + Tailwind + shadcn/ui rebuild with custom CMS. After discussion, we decided **against** a full rebuild because:

- The current static site is already deployed and working
- Next.js is overkill for the current needs
- A full rebuild would delay launch by weeks/months
- GPT output would be boilerplate skeleton, not a working product

---

## Decision: Decap CMS + 11ty (Eleventy)

**Chosen stack:**
- **Decap CMS** (formerly Netlify CMS) — no database needed, stores content as JSON/Markdown in Git
- **11ty (Eleventy)** — lightweight static site generator to template the existing HTML
- **Netlify Identity** — free auth for admin login
- **Netlify** — already deployed, auto-rebuilds on CMS changes

**Why this approach:**
- Keeps the current design exactly as-is
- No database required
- Free (Decap CMS + Netlify Identity free tier)
- Client gets a professional admin UI at `/admin`
- Site stays fast (still outputs static HTML)

---

## Features To Add

### 1. CMS Admin Dashboard (`/admin`)
- Authentication (Netlify Identity)
- Sidebar navigation
- CRUD functionality for:
  - Products
  - FAQs (global + per product)
  - Store locator (with map coordinates)
  - News / updates
  - Homepage content
  - Settings (contact number, messenger link)

### 2. Product System
- Products categorized (Amihan, Laon, Aman, Anitun)
- Each product has: Image, Description, Specs, FAQ
- Dynamic product pages generated from CMS data

### 3. Store Locator
- Map-based (Leaflet — free, no API key)
- Pins from CMS-managed store data
- Search nearest store

### 4. Homepage
- Editable via CMS
- Hero section (video/image)
- Featured products
- CTA buttons

### 5. User Experience
- Very simple navigation (3 clicks max)
- Large buttons (mobile-friendly)
- Fast loading (static HTML output)

### 6. Language
- Default: Tagalog
- Optional toggle: English

### 7. Design Style
- Theme: Warrior / tribal (Bagani identity)
- Colors: gold, black, brown
- Strong, bold typography
- Mass market riders feel (not premium luxury)

### 8. Chat Support
- Facebook Messenger chat plugin
- Quick FAQ buttons

### 9. Media Library (Optional)
- Built-in with Decap CMS

---

## Implementation Plan (in order)

1. Convert current HTML to 11ty templates (keeps exact design)
2. Set up Decap CMS at `/admin` with Netlify Identity auth
3. Configure CMS collections — Products, News, FAQs, Store Locations, Homepage, Settings
4. Add Store Locator page with Leaflet map
5. Add Messenger Chat plugin
6. Add Tagalog/English toggle
7. Test & deploy on Netlify

---

## Previous Work (from PROGRESS.md)
- All 23 pages adapted from Toplax template
- 11 Bagani products with images
- Branding (logo, colors, typography) complete
- Contact form via FormSubmit.co
- Google Maps embed (Pasay City)
- Dark mode removed
- Video hero on homepage
- Deployed to Netlify
