# Barrow Plumbing & Heating - Official Website

A high-converting, mobile-responsive, modern website crafted for **Barrow Plumbing & Heating** located in Huntingdale, Victoria 3166.

---

## 📍 Business Details (Source of Truth)
- **Business Name:** Barrow Plumbing & Heating
- **Category:** Plumbing & Heating Services
- **Physical Address:** 2 Garnett St, Huntingdale VIC 3166
- **Contact Number:** 0449 081 921 (Click-to-call: `tel:0449081921`)
- **Google Business Profile:** [https://maps.app.goo.gl/FaPnR8P8vwAuHxw56](https://maps.app.goo.gl/FaPnR8P8vwAuHxw56)
- **Primary Suburb:** Huntingdale VIC 3166 (City of Monash)
- **Key Service Suburbs:** Oakleigh, Clayton, Chadstone, Mount Waverley, Bentleigh East, Clarinda, Murrumbeena, Hughesdale, Monash.

---

## 📁 File Structure

```text
f:\GoogleWebSite\BarrowPlumbing\
├── index.html              # Homepage: Hero, Services, Trust, Google Profile, FAQ, Quote Form
├── services.html           # Services: Detailed breakdown of 6 core plumbing & heating categories
├── service-areas.html      # Local SEO Service Areas: Suburb breakdowns & interactive map
├── about.html              # About Us: Workmanship, reliability, and local commitment
├── contact.html            # Contact Us: Click-to-call, NAP details, embedded Google map & form
├── privacy-policy.html     # Customer privacy statement compliant with APPs
├── robots.txt              # Search engine crawler configuration
├── sitemap.xml             # XML sitemap for Google Search Console
├── css/
│   └── style.css           # Modern custom CSS design system (variables, responsive, mobile UI)
├── js/
│   └── main.js             # Mobile nav, FAQ accordion, quote modal, form validation
└── images/
    ├── logo.svg            # Vector brand logo (navy & sky blue theme with warm flame/water drop)
    ├── favicon.svg         # High-resolution vector favicon
    ├── hero-plumbing.jpg   # Hero section photography
    ├── service-tap.jpg     # General plumbing & tapware imagery
    ├── service-hotwater.jpg# Hot water system imagery
    ├── service-heating.jpg # Home heating servicing imagery
    ├── service-drain.jpg   # Blocked drain and drainage pipe imagery
    ├── service-bathroom.jpg# Bathroom and renovation plumbing imagery
    └── about-workmanship.jpg # Workmanship and tools imagery
```

---

## 🚀 Key Features & Optimisations

### 1. High-Conversion Mobile Experience
- **Sticky Mobile Call Bar:** Fixed bottom bar on smartphones offering instantaneous `Call 0449 081 921` and `Request Quote` buttons.
- **Click-to-Call Everywhere:** All phone instances are hyperlinked with `tel:0449081921` for zero friction.
- **Quick Quote Modal:** Visitors can trigger the quote modal anywhere on the page without losing their place.

### 2. Local SEO & Search Engine Readability
- **JSON-LD Schema Markup:** Structured data embedded (`Plumber`, `LocalBusiness`, `ContactPage`, `Service`) with exact latitude/longitude coordinates (`-37.902436, 145.1058901`), street address, phone, and confirmed service areas.
- **Geo Meta Tags:** `geo.region`, `geo.placename`, `geo.position`, and `ICBM` configured for Huntingdale VIC.
- **Targeted Suburb Keywords:** Dedicated subpage targeting searches like *"Plumber Huntingdale"*, *"Blocked drains Oakleigh"*, *"Hot water repairs Clayton"*, and *"Gas heating servicing Mount Waverley"*.
- **XML Sitemap & Robots.txt:** Ready for Google Search Console indexing.

### 3. Accuracy & Trust Integrity
- **Authentic Review Policy:** Strictly links to the verified Google Business Profile rather than displaying fabricated quotes or unverified awards.
- **Accurate Trade Representation:** Focuses on standard, verified plumbing and heating services.
- **Transparent Privacy Notice:** Clearly states how customer contact details are used for service quotes.

---

## 🌐 How to Deploy to Hostinger or Any Web Host

1. **Upload Files:**
   - Log into your Hostinger hPanel (or cPanel/hosting dashboard).
   - Navigate to **File Manager** -> `public_html/`.
   - Upload all files and folders (`index.html`, `services.html`, `service-areas.html`, `about.html`, `contact.html`, `privacy-policy.html`, `robots.txt`, `sitemap.xml`, `css/`, `js/`, and `images/`).

2. **Custom Domain Setup:**
   - In Hostinger, point your domain (e.g. `barrowplumbing.com.au`) to `public_html/`.
   - Enable the free **Let's Encrypt SSL certificate** in Hostinger to ensure the site runs on `https://`.

3. **Connecting Form Notifications (Optional):**
   - The included `js/main.js` provides instant front-end validation and confirmation.
   - To receive submissions directly to your email without a backend server, you can add [Formspree](https://formspree.io) or Hostinger's built-in contact form handler by adding `action="https://formspree.io/f/YOUR_ID"` and `method="POST"` to the `<form>` elements.

---

## 🛠️ Maintaining the Website

- **Changing the Phone Number:** Search and replace `0449 081 921` and `tel:0449081921` across HTML files.
- **Updating Hours:** Edit the hours block in `index.html` and `contact.html`.
- **Adding New Suburbs:** Add suburbs to the grid in `service-areas.html` and the schema array in `index.html`.
