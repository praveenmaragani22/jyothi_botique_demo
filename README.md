# Jyothi Boutique — Website

Single-page demo website for **Jyothi Boutique**, Main Bazar, Addanki, Andhra Pradesh.

Built with **React + Vite + Tailwind CSS v3**. Frontend only, mock data, deploy-ready on Vercel.

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (usually http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deploy to Vercel

```bash
npx vercel
```

Or connect the GitHub repo in [vercel.com](https://vercel.com) and it auto-deploys.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky nav + language toggle
│   ├── Hero.jsx            # Asymmetric hero with saree image
│   ├── Collections.jsx     # Horizontal scroll strip
│   ├── CustomDesigns.jsx   # Collage + 3-step how-it-works
│   ├── Services.jsx        # 4 service cards
│   ├── Gallery.jsx         # Masonry gallery + lightbox
│   ├── VisitUs.jsx         # Address, map embed, payments
│   ├── InstagramStrip.jsx  # 6-post Instagram grid
│   ├── Footer.jsx          # Links, contact, Telugu tagline
│   ├── WhatsAppFAB.jsx     # Sticky WhatsApp button
│   └── PalluDivider.jsx    # SVG woven-border divider
├── hooks/
│   └── useReveal.js        # Scroll-triggered reveal hooks
├── data.js                 # Mock data & constants
├── App.jsx
├── main.jsx
└── index.css
```

## Notes
- Phone / WhatsApp: 9666973616
- Instagram: @jyothireddy8437
- Language toggle (English ↔ తెలుగు) in the Navbar
- No prices anywhere — "Visit or WhatsApp for rates"
- WhatsApp FAB has a prefilled message
