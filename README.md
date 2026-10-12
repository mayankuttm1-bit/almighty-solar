# Almighty Solar Energy - High-Yield Solar EPC Web Platform (Indore, MP)

Institutional clean-technology website platform designed and built for **Almighty Solar Energy** (अल्माइटी सोलर एनर्जी), an empaneled solar EPC contractor headquartered in **Indore, Madhya Pradesh**.

Designed to mirror the comprehensive depth, interactive features, responsive polish, and institutional rigor of the benchmark Vidya Vahini Solar platform, but 100% customized for Almighty Solar Energy and calibrated for the regulatory, tariff, and solar insolation environment of Central Madhya Pradesh.

---

## ☀️ Regional Energy & Business Profile

- **Business Identity:** Almighty Solar Energy (अल्माइटी सोलर एनर्जी)
- **Primary Operational Base:** Indore, Madhya Pradesh - 452010
- **Operational Radius:** Indore City, Vijay Nagar, Super Corridor, Rau, Palasia, Pithampur SEZ (Sectors 1, 2, 3), Sanwer Road Industrial Area, Dewas, Mhow, Depalpur, Ujjain, and Dhar.
- **Direct Engineer Helplines:** 
  - `+91 77730 00775` (Primary WhatsApp & Call)
  - `+91 98263 76841` (Secondary Technical Helpline)
- **Official Inquiries:** `almightysolarenergy@gmail.com`
- **Social Media:** Meta Facebook (`facebook.com/61588195346957`) & Instagram (`@almightysolarenergy`)
- **Nodal Power DISCOM:** **MPPKVVCL** (Madhya Pradesh Paschim Kshetra Vidyut Vitaran Co. Ltd. / West Discom Indore)
- **State Renewable Energy Agency:** **MPUVNL** (Madhya Pradesh Urja Vikas Nigam Limited)
- **Central Flagship Scheme:** **PM Surya Ghar: Muft Bijli Yojana** (Up to ₹78,000 Central DBT subsidy + up to ₹30,000 promotional installer discount)
- **Solar Yield Environment:** Malwa Plateau elevation (~553m) with 5.2 – 5.6 Peak Sun Hours/day (1,450 – 1,600 kWh/kWp/year yield).

---

## 🚀 Platform Architecture & Directory Structure

```
almighty-solar/
├── index.html                           # Flagship 15-section landing page with interactive calculator
├── services.html                        # Technical engineering BoQ & solutions deep-dive
├── projects.html                        # Filterable portfolio of 120+ commissioned sites across MP
├── about.html                           # Heritage, milestones, executive leadership & quality standards
├── contact.html                         # Dual-hub contact desk, interactive Google map & site survey form
├── blogs.html                           # Knowledge hub overview & featured policy guide
├── blog-pm-surya-ghar.html              # PM Surya Ghar ₹78,000 Subsidy roadmap for Indore
├── blog-mppkvvcl-net-metering.html      # Step-by-step MPPKVVCL West Discom Net-Metering process
├── blog-commercial-industrial-solar.html# C&I Solar EPC in Pithampur SEZ & Sanwer Road (40% Deprec.)
├── blog-topcon-vs-mono-perc.html        # N-Type TOPCon vs Mono PERC in 44°C+ Central MP summer heat
├── blog-solar-water-pumps.html          # Agricultural deep borewell solar pumping in Malwa (PM KUSUM)
├── blog-on-grid-vs-hybrid.html          # On-Grid vs Hybrid BESS with Lithium LiFePO4 battery storage
├── blog-solar-maintenance.html          # Solar panel cleaning, soiling loss & preventive O&M in Indore
├── assets/
│   ├── logo.svg                         # Custom vector emblem (solar matrix, sunburst, clean tech leaf)
│   └── images/                          # 13 high-resolution photovoltaic project and equipment assets
├── css/
│   └── styles.css                       # Modern glassmorphism, hardware animations, slider styling
└── js/
    ├── calculator.js                    # Solar savings & MPPKVVCL subsidy calculation engine
    ├── projects-filter.js               # Interactive multi-category portfolio filtering
    └── main.js                          # Mobile menu drawer, modal triggers, counters, form dispatch
```

---

## ⚡ Core Interactive Features

### 1. Interactive Solar Sizing & MPPKVVCL Subsidy Engine (`js/calculator.js`)
- Dynamically calculates:
  - Recommended array size (kW) based on monthly electricity bill (₹1,500 to ₹35,000+) or units consumed.
  - Required rooftop surface area in sq. ft.
  - Estimated monthly and annual solar power generation (kWh).
  - Monthly and 25-year cumulative financial savings based on MPPKVVCL domestic tariff slabs (~₹7.20/kWh).
  - Exact Central PM Surya Ghar Direct Benefit Transfer (DBT) subsidy:
    - 1 kW: ₹30,000
    - 2 kW: ₹60,000
    - 3 kW+: ₹78,000 (Maximum Direct Subsidy)
  - Promotional package discount (up to ₹30,000).
  - One-click **"Send Proposal on WhatsApp"** button generating a pre-formatted technical dossier dispatched directly to `+91 77730 00775`.

### 2. Multi-Category Project Portfolio Filter (`js/projects-filter.js`)
- Instant category switching without page reloads:
  - `All Projects` (120+ commissioned sites)
  - `PM Surya Ghar Rooftops` (Vijay Nagar, Super Corridor, Rau)
  - `Commercial & Institutional` (Sanwer Road, Old Palasia)
  - `Industrial Turnkey EPC` (150 kW auto ancillary at Pithampur SEZ)
  - `Agricultural Solar Pumps` (7.5 HP deep borewell irrigation in Mhow/Malwa)
  - `Hybrid Energy Storage BESS` (Lithium LiFePO4 backup for diagnostic clinics)

### 3. High-Conversion Lead Capture Modals (`js/main.js`)
- Accessible from every header, drawer, and CTA banner across all 12 pages.
- Direct lead verification capturing full name, mobile number, and Indore area.
- Instant feedback modal confirmation and WhatsApp integration.

### 4. Technical Knowledge Hub (7 Specialized Field Guides)
- Fully written, deep-dive technical and regulatory resources with comparison tables, mathematical models, and checklists specifically tailored for homeowners, factory heads, and farmers in Central Madhya Pradesh.

---

## 🛠️ Technology Stack

- **HTML5:** Semantic, accessible, SEO-optimized markup with complete OpenGraph metadata.
- **Tailwind CSS (CDN):** Responsive utility-first styling with custom solar design tokens (`solarDark`, `solarNavy`, `solarAmber`, `solarEmerald`).
- **Vanilla JavaScript (ES6+):** Lightweight, zero build dependencies, ultra-fast time-to-interactive (< 0.8s).
- **Lucide Icons:** Crisp SVG iconography dynamically hydrated via `lucide.createIcons()`.
- **Zero Server Dependencies:** Pure static architecture compatible with instant free hosting on GitHub Pages, Netlify, Vercel, or AWS S3/CloudFront.

---

## 🌐 Instant Local Testing

To preview the website locally on any modern browser:
1. Double-click `almighty-solar/index.html` to open directly in Chrome, Edge, or Firefox.
2. Alternatively, run a lightweight static web server in PowerShell:
   ```powershell
   cd c:\Users\mayan\OneDrive\Desktop\AntiGravity\Solar_installation_EPC\almighty-solar
   python -m http.server 8080
   ```
3. Open `http://localhost:8080` in your web browser.

---

© 2026 Almighty Solar Energy. Developed with institutional solar engineering standards.
