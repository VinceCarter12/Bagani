# Bagani Website - Implementation Progress

## Project: Adapt Toplax Template for Bagani Motorcycle Oils

---

## Bagani Product Catalog (from uploaded images)

| # | Product Name | Line | Type | Spec | Size | Image File |
|---|---|---|---|---|---|---|
| 1 | Amihan 2T | Amihan | 2-Stroke Motorcycle Oil | API TA | 200ml | BAGANI 2T OIL 200ML MOCKUP.png |
| 2 | Amihan 2T | Amihan | 2-Stroke Motorcycle Oil | API TA | 1L | 2T AMIHAN CYL.png |
| 3 | Amihan Gust 4T | Amihan | 4-Stroke Motorcycle Engine Oil | SAE 40, JASO MA | 1L | AMIHAN GUST CYL.png |
| 4 | Amihan Gale 4T | Amihan | Semi-Synthetic Motorcycle Engine Oil | 10W-40, JASO MB | 1L | amihan gale 1L-BOTTLE-TEMPLATE.png |
| 5 | Amihan Tempest 4T | Amihan | Premium Motorcycle Engine Oil | 20W-50, JASO MA-2 | 1L | amihan tempest 1L-BOTTLE-TEMPLATE.png |
| 6 | Laon Core | Laon | High Grade Engine Oil | SAE 40, CF/SF | 1L | LAON CORE.png |
| 7 | Laon Burst | Laon | Premium Diesel Engine Oil | 15W-40, CI-4 | 1L | laon-burst-1L-BOTTLE-TEMPLATE.png |
| 8 | Aman Deep | Aman | Automotive Gear Oil | SAE 140, GL-4 | 1L | aman deep 1L-BOTTLE-TEMPLATE.png |
| 9 | Aman Deep 90 | Aman | Automotive Gear Oil | SAE 90, GL-4 | 1L | aman deep 90 1L-BOTTLE-TEMPLATE.png |
| 10 | Aman Gear Oil | Aman | Gear Oil | - | - | aman GEAR OIL.png |
| 11 | Anitun DXIII | Anitun | Automatic Transmission Fluid | DEXRON III, GM | 1L | nitun-dxiii -1L-BOTTLE-TEMPLATE.png |

### Product Lines
- **Amihan** - Motorcycle oils (2T & 4T)
- **Laon** - Engine oils (diesel/general)
- **Aman** - Gear oils & lubricants
- **Anitun** - Transmission fluids

### Brand Visual Identity (from packaging)
- Logo: Bagani warrior/flame bird emblem with stars
- Tagline: "Gawang Pilipino, Para sa Pilipino!"
- Primary Color: Golden Yellow (#FFC107)
- Accent: Dark Navy/Black labels
- Accent 2: Blue highlights on product names
- Accent 3: Red accents on branding elements
- Premium bottles: Gold metallic finish with angular design

---

## Implementation Steps

### Step 1: Copy product images to template ✅ DONE
- [x] Created `html/images/products/` folder
- [x] Copied and renamed all 11 Bagani product images (web-safe filenames)

### Step 2: Update branding colors in CSS ✅ DONE
- [x] Changed accent color to Bagani Yellow (#FFC107) in custom.css
- [x] Added full dark mode CSS variables and styles
- [x] Added product card styles (.product-card, .product-categories)
- [x] Added product spec table styles

### Step 3: Update all page titles and meta ✅ DONE
- [x] All pages updated from "Toplax" to "Bagani"

### Step 4: Update navigation (ALL pages) ✅ DONE
- [x] Simplified nav: Home | About Us | Products | News | Contact
- [x] No more submenus or extra pages
- [x] Dark mode toggle button added to all pages

### Step 5: Rename/create files ✅ DONE
- [x] products.html (from services.html)
- [x] news.html (from blog.html)
- [x] news-single.html (from blog-single.html)
- [x] product-single.html (from service-single.html)

### Step 6: Modify index.html (Home) ✅ DONE
- [x] Hero: "Fuel Your Ride with Bagani Power"
- [x] About section for Bagani motorcycle oils
- [x] Services → Product Lines (Amihan, Laon, Aman, Anitun)
- [x] Our Story → Bagani Brand Story
- [x] What We Do → Why Choose Bagani
- [x] Removed: Our Work, Our Process, Our Pricing sections
- [x] Testimonials → Filipino rider reviews
- [x] Blog → Latest News (Bagani articles)
- [x] Footer updated for Bagani

### Step 7: Modify about.html ✅ DONE
- [x] Mission, vision, values updated for Bagani brand
- [x] History content updated for motorcycle oil company

### Step 8: Create products.html ✅ DONE
- [x] All 11 Bagani products displayed as cards
- [x] Isotope filter by product line (Amihan / Laon / Aman / Anitun)
- [x] Product images from images/products/

### Step 9: Create product-single.html ✅ DONE
- [x] Product image displayed prominently
- [x] Full specifications table
- [x] Key features (4 items)
- [x] FAQ accordion (5 Q&As)
- [x] Sidebar with product line links & contact CTA
- [x] Using Amihan Tempest 4T as example

### Step 10: Create news.html ✅ DONE
- [x] All blog references changed to news
- [x] 6 Bagani-themed news article titles
- [x] Links to news-single.html

### Step 11: Create news-single.html ✅ DONE
- [x] Blog references changed to news
- [x] Article about Amihan Tempest 4T launch
- [x] Supports text, images, and can embed YouTube video

### Step 12: Update contact.html ✅ DONE
- [x] Bagani contact info (Manila, Philippines)
- [x] Form: first name, last name, email, phone, message
- [x] Action: form-process.php (server-side, no email client opening)

### Step 13: form-process.php ✅ DONE
- [x] Sanitizes all inputs (XSS-safe)
- [x] Validates required fields
- [x] Sends email server-side via PHP mail()
- [x] Reply-To set to visitor's email
- [x] From: Bagani server (no mailto: opened)

### Step 14: Dark mode toggle ✅ DONE
- [x] Toggle button in header (all pages)
- [x] CSS variables for dark mode
- [x] localStorage persistence
- [x] Moon/sun icon switch

### Step 15: Footer updated (all pages) ✅ DONE
- [x] Bagani branding and tagline
- [x] Updated quick links (products/news)
- [x] Bagani contact info

---

---

## Session: 2026-03-31 — Fixes & Improvements

### Fix A: Remove Dark Mode ✅ DONE
- [x] Removed dark mode toggle button from all 23 pages
- [x] Removed dark mode JS IIFE from all 23 pages
- [x] Removed 150+ lines of dark mode CSS from custom.css
- [x] Updated CSS comment header (removed Toplax/Awaiken)

### Fix B: Remove Toplax Branding ✅ DONE
- [x] All `<title>` tags → "Bagani - Premium Motorcycle Oils & Lubricants"
- [x] All `<meta name="author">` → "Bagani"
- [x] CSS comment header updated

### Fix C: Logo Replacement ✅ DONE
- [x] Header/navbar/footer → `bagani-logo.png` (horizontal transparent logo)
- [x] Preloader → `bagani-icon.png` (icon only transparent)
- [x] Both sourced from: `C:\Users\vince\Downloads\assets\`

### Fix D: Hero Video ✅ DONE
- [x] Copied `Dark_Industrial_Motorcycle_Engine_Scene.mp4` → `html/videos/hero-bg.mp4`
- [x] Replaced static parallax hero in `index.html` with video hero
- [x] Updated `index-video.html` to use local MP4 (removed Toplax demo URL)

### Fix E: Product Card Alignment ✅ DONE
- [x] Added `display: flex; flex-direction: column; height: 100%` to `.product-card`
- [x] Added `flex: 1` to `.product-body` for uniform card stretch
- [x] Fixed `.product-image` height to `240px` (consistent across all cards)
- [x] Added `.project-item-box { display: flex }` for equal-height grid columns

### Fix F: Aman Gear Oil Missing Image ✅ DONE
- [x] Diagnosed: file was 77MB at 762×2550px — too large for browser to render
- [x] Resized to 600×2008px (420KB) using PowerShell System.Drawing
- [x] File overwritten in-place: `html/images/products/aman-gear-oil.png`

### Fix G: Contact Form → Gmail ✅ DONE
- [x] Replaced `form-process.php` action with FormSubmit.co
- [x] Target email: `vincecarterdelostrico12@gmail.com`
- [x] Added hidden fields: `_subject`, `_next`, `_captcha`, `_honey` (spam trap)
- [x] ⚠️ First submission will send a verification email to Gmail — click confirm link

### Fix H: Google Maps → Pasay City ✅ DONE
- [x] Replaced New York map embed with Pasay, Metro Manila, Philippines
- [x] Uses standard Google Maps embed iframe

---

---

## Session: 2026-04-02 — 11ty + Decap CMS Migration

### Step 1: Convert HTML to 11ty Templates ✅ DONE
- [x] `eleventy.config.js` — passthrough, globalData (productsList, faqsList, storesList), `where` filter
- [x] `src/_includes/base.njk` — master layout with `{{ content | safe }}`
- [x] `src/_includes/header.njk`, `footer.njk`, `topbar.njk`, `preloader.njk`, `page-header.njk`
- [x] `src/index.njk`, `about.njk`, `products.njk`, `contact.njk`, `news.njk`, `faqs.njk`, `404.njk`
- [x] `src/products/product.njk` — dynamic product pages via Eleventy pagination
- [x] `src/news/bagani-launches-amihan-tempest.njk`
- [x] `netlify.toml`, `package.json`, `.gitignore`
- [x] Build: 21 pages, 0 errors (0.67s)

### Step 2: Decap CMS Setup ✅ DONE
- [x] `src/admin/index.html` — Decap CMS + Netlify Identity
- [x] `src/admin/config.yml` — 6 collections: products, news, faqs, stores, settings, homepage
- [x] `src/_data/site.json`, `homepage.json` — CMS-managed site settings
- [x] `src/_data/products/*.json` — 11 product files
- [x] `src/_data/faqs/*.json` — 6 FAQ files
- [x] Netlify Identity widget in base.njk with login redirect to /admin/
- [x] Build includes /admin/ as passthrough

### Step 3: Store Locator Page ✅ DONE
- [x] `src/_data/stores/*.json` — 8 Metro Manila store seed files
- [x] `src/store-locator.njk` — Leaflet map, custom gold markers, store cards, search filter
- [x] "Use My Location" geolocation with haversine nearest-store sort
- [x] Full stores table at page bottom
- [x] Store Locator added to header nav and footer quick links

### Step 4: Facebook Messenger Chat Plugin ✅ DONE
- [x] `site.facebookPageId` field in `src/_data/site.json`
- [x] Messenger Chat SDK in `base.njk` — conditionally shown when Page ID is set
- [x] CMS field added to Site Settings collection in `config.yml`
- [x] Theme color: #FFC107 (Bagani gold)

### Step 5: Tagalog/English Language Toggle ✅ DONE
- [x] EN/TL toggle button in header (gold pill style)
- [x] `toggleLang()` / `applyLang()` JS in base.njk — swaps `data-en` / `data-tl` attributes
- [x] `localStorage` persistence across page loads
- [x] Bilingual attributes on: nav links, hero text, footer tagline, breadcrumb "home"
- [x] `<html lang>` attribute updated on toggle

### Step 6: Deploy on Netlify
- [ ] Push repo to GitHub
- [ ] Connect repo to Netlify (Build: `npx @11ty/eleventy`, Publish: `_site`)
- [ ] Enable Netlify Identity in Site Settings → Identity
- [ ] Enable Git Gateway under Identity → Services
- [ ] Set `facebookPageId` in CMS Settings once Facebook Page ID is known
- [ ] Invite admin user via Netlify Identity

---

## Current Status: ✅ IMPLEMENTATION COMPLETE

### Files Created/Modified
| File | Status |
|---|---|
| `html/index.html` | ✅ Modified — Bagani Home |
| `html/about.html` | ✅ Modified — Bagani About Us |
| `html/products.html` | ✅ Created — Product Grid (11 products) |
| `html/product-single.html` | ✅ Created — Product Detail Page |
| `html/news.html` | ✅ Created — News & Announcements |
| `html/news-single.html` | ✅ Created — News Article |
| `html/contact.html` | ✅ Modified — Bagani Contact |
| `html/form-process.php` | ✅ Updated — Server-side email handler |
| `html/css/custom.css` | ✅ Modified — Bagani colors + dark mode |
| `html/images/products/` | ✅ Created — 11 product images |

### Remaining Optional Tasks
- [ ] Add a Bagani logo SVG (currently using placeholder footer-logo.svg)
- [ ] Update hero background image (hero-bg.jpg) to motorcycle-themed image
- [ ] Add real Google Maps embed for Bagani office
- [ ] Update author/testimonial images to Filipino riders
- [ ] Configure SMTP service for reliable email delivery (recommended over PHP mail())
