# Anand Technologies — Project History and Design Standard

## IMPORTANT FOR ALL AI ASSISTANTS
This file is the single source of truth for this project.
When the user says "read PROJECT_HISTORY.md", follow everything here exactly.
Do NOT revert, simplify, or rebuild from scratch. Only ADD to or IMPROVE what exists.

---

## Project: Anand Technologies Website
**Stack:** Next.js 16.2.4 (Turbopack), Tailwind CSS v4, TypeScript, App Router
**Root folder:** `anand-technologies/` inside the workspace
**Run:** `npm run dev` from `anand-technologies/` — opens on `localhost:3001`

---

## CURRENT DESIGN STANDARD (DO NOT CHANGE WITHOUT ASKING)

The user is very happy with the current state. Preserve all of it.

### Spacing philosophy
- Section vertical padding: `var(--section-y)` = **112px** — generous breathing room like Legends Brewery site
- Card internal padding: `var(--card-p)` = **32px**
- Card gap: `var(--gap-cards)` = **28px**
- Footer: `3.5rem` top/bottom padding — compact but clean

### Colors (CSS variables in `app/globals.css`)
```
--brand:       #1a6fb5   (primary blue)
--brand-dark:  #0f5290
--brand-light: #eaf3fb   (light blue tint for icons/badges)
--bg:          #f7f9fc   (page background)
--panel:       #ffffff   (card/nav background)
--text:        #15202e   (main text)
--muted:       #5a6a7a   (secondary text)
--line:        #e2eaf2   (borders)
--soft:        #f0f5fb   (subtle fill)
--nav-h:       72px      (navbar height)
```

### Key CSS utility classes (defined in `app/globals.css`)
- `.card` — white card with 16px radius, subtle shadow, hover lift effect
- `.btn-primary` — blue filled button
- `.btn-outline` — bordered transparent button
- `.label` — small eyebrow text (uppercase, 0.7rem, brand color)
- `.badge` — small pill tag (brand-light background)
- `.hero-section` — full viewport height hero (homepage only)
- `.hero-banner` — sub-page hero (not full height)
- `.stats-bar` — white stats section
- `.section` — `padding-block: var(--section-y)`
- `.section-sm`, `.section-top`, `.section-bot` — spacing helpers
- `.spec-table` — product spec table
- `.lg-product-grid` — products page sidebar+grid layout (collapses on mobile)
- `.stats-grid` — 2-col on mobile, 4-col on desktop
- `.dark-overlay` — hero video overlay (adapts in dark mode)

---

## FILE STRUCTURE

```
anand-technologies/
  app/
    globals.css              ← Design tokens, all utility classes
    layout.tsx               ← Navbar + Footer + SiteProvider wrapper
    page.tsx                 ← Homepage (CLIENT component — uses useSite for translations)
    about/page.tsx
    products/page.tsx        ← CLIENT, uses Suspense for useSearchParams
    products/[slug]/page.tsx ← Server component + AddToEnquiryButton client component
    industries/page.tsx
    custom-solutions/page.tsx
    resources/page.tsx
    resources/[slug]/page.tsx ← 6 full articles, generateStaticParams
    contact/page.tsx         ← CLIENT, has Google Maps iframe + enquiry form
    admin/page.tsx
    api/
      enquiry/route.ts
      products/route.ts      ← GET returns { categories, subcategories, products }
  src/
    components/
      Navbar.tsx             ← CLICK-based dropdown (not hover), hamburger on mobile
      Footer.tsx             ← CLIENT component (uses onMouseEnter for hover effects)
      AddToEnquiryButton.tsx ← Client component for product detail page
    data/
      catalog.ts             ← All RF product data
    hooks/
      useSite.tsx            ← Lang/dark/enquiry state + 30+ translated strings
```

---

## NAVBAR RULES (critical — do not break)
- Desktop (≥1024px): logo + all nav links + dark toggle + language select + Enquiry button
- Mobile (<1024px): logo + hamburger icon ONLY. Drawer opens on click with all links inside.
- Products dropdown is **CLICK-TO-OPEN**, not CSS hover — prevents content overlap bug
- Dropdown closes on: outside click, route change, any link click
- Uses `hidden lg:flex` / `flex lg:hidden` Tailwind classes for responsive behavior

---

## TRANSLATION SYSTEM
- Languages: EN (English), KN (Kannada), ZH (Chinese)
- All strings stored in `src/hooks/useSite.tsx` in `translations` object
- Access via `const { t } = useSite()` in any client component
- Homepage, Products page, Contact page, and Navbar all fully translated
- Language selector in Navbar — changes entire site instantly
- 30+ keys: navbar labels, hero text, section headings, button labels, form labels

---

## HOMEPAGE FEATURES
- Full-screen hero with **background video** (looping, opacity 0.12, gradient overlay for readability)
- Stats bar: 20+, 500+, 15+, 98% — 4 columns on desktop
- 3 Product Line cards with icons
- 4 "Why Choose Us" feature cards
- Industry sector pills
- Blue gradient CTA banner

---

## PRODUCTS PAGE FEATURES
- Hero banner at top (not full screen)
- Category tabs: Low Gain Antenna | High Gain Antenna | Microwave Devices
- Left sidebar (220px): subcategory filter + search box
- Product grid: `auto-fill minmax(220px)` — responsive
- Each card: image placeholder, title, freq/gain specs, application badges, Details + Add to Enquiry buttons
- "Added" state shows green with checkmark
- URL param `?category=slug` auto-selects the right tab

---

## CONTACT PAGE FEATURES
- Left column: Contact details card + Enquiry list card + **Google Maps iframe**
  - Map URL: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7608072562516!2d77.50462137409617!3d12.987144887329636...`
  - Shows Anand Technologies exact location in Bengaluru
- Right column: Enquiry form (name, email, phone, company, selected products, requirement details)
- Form submits to `/api/enquiry`
- Success state with green checkmark after submission
- Enquiry list auto-fills into "Selected Products" field

---

## FOOTER STRUCTURE
- 4 columns: Brand (with ISO Certified + Made in India badges) | Navigate | Visit Us | Connect
- Navigate: Home, Products, About Us, Industries, Custom Solutions, Resources, Contact Us
- Connect: sales email, CEO email, phone, LinkedIn/Instagram/YouTube icons
- Bottom bar: copyright + Privacy Policy / Terms of Use / Sitemap
- Total height ~280px — compact and clean

---

## PRODUCT DATA (src/data/catalog.ts)
3 categories:
1. **Low Gain Antenna** — VHF, DVB, CDMA, GSM, GPS, IRNSS, Combo, LTE, WIFI, PCB, RFID
2. **High Gain Antenna** — FM, VHF, CDMA, GSM, GPS, GLONASS, Horn, Yagi, Patch Panel
3. **Microwave Devices** — Attenuator, BPF, Coupler, Duplexer, Lightning Arrestor, Power Splitter, Power Amplifier

Each subcategory has 2 products: Series A and Series Pro.

---

## COMPANY INFO
- **Name:** Anand Technologies
- **Location:** No. 21, 6th Main Road, Srigandada Kavalu, Magadi Main Road, Sunkadakatte, Bengaluru, Karnataka 560091
- **Sales email:** sales@anandtechnologies.co.in
- **CEO email:** ceo@anandtechnologies.co.in
- **Phone:** +91 90000 00000
- **Industry:** RF antenna and microwave component manufacturer
- **Products:** Low Gain Antennas, High Gain Antennas, Microwave Devices

---

## PENDING / FUTURE INTEGRATIONS (not yet wired)
- Supabase auth for admin login
- Lead storage and enquiry lifecycle management
- Google Apps Script webhook for email notifications on form submit
- Real product images (currently placeholder SVGs)
- Real datasheets (currently `/datasheets/sample-datasheet.pdf`)

---

## WHAT THE USER WANTS
- Clean, professional B2B website like Legends Brewery (legendsbrewery.in) in terms of spacing
- Generous white space, cards with breathing room, no overlapping content
- Navbar: all links visible on desktop, hamburger on mobile
- Translation working across the whole site (EN/KN/ZH)
- Footer compact and well-structured like Legends reference
- Products page clean sidebar + card grid
- Google Maps in contact page
- Hero with background video
- Build must always pass (`npx next build` → 19/19 pages)
