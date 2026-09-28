# Kavya Gupta — Personal Engineering Portfolio 🚀

Personal portfolio website for **Kavya Gupta (`JustKay1029`)**, built with **React 19**, **Vite**, **Tailwind CSS v4**, **Motion Primitives**, and **Realtime Colors**.

🔗 **Live GitHub:** [https://github.com/JustKay1029](https://github.com/JustKay1029)  
🔗 **Repository:** [https://github.com/JustKay1029/portfolio](https://github.com/JustKay1029/portfolio)

---

## ✨ Design & Architecture Highlights

- 🎨 **Realtime Colors Palette:**
  - Dark Primary: `#010104` (deep midnight background)
  - Dark Surface: `#020024` (navy midnight cards)
  - Primary Brand: `#3a31d8` (electric violet)
  - Accent: `#0600c2` (indigo glow)
  - Light mode: `#ebe9fc`
  - Font: Inter
- 💎 **Aero Shards Canvas:** High-performance geometric crystal shard backdrop inspired by React Bits.
- 🌊 **Motion Primitives Integration:**
  - `ScrollProgress`: Spring-animated reading/page scroll progress bar (`stiffness: 280, damping: 18, mass: 0.3`).
  - `SpotlightBorder`: Interactive mouse-tracking spotlight gradient around project cards.
  - `AnimatedBackground`: Smooth sliding pill layout transition for About tabs.
  - `AnimatedNumber`: Spring-physics counter for live GitHub stats and repositories.
  - `Dock`: Apple macOS-style floating dock with distance magnification for quick navigation.
  - `MorphingPopover`: Spring-animated popover to quickly send a note or connect (with EmailJS support & mailto fallback).
- 📡 **100% Authentic Live Data:**
  - Fetches live profile and metrics directly from the GitHub API (`api.github.com/users/JustKay1029`).
  - Showcases real work: `neetcode-gpt`, `pr-pulse`, `CORUS`, `gurgaon_rent_price_predictor`, `earguard`, and `Toolkit-for-communications`.
  - Zero fabricated metrics or corporate filler.

---

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Animation:** `motion` (Motion Primitives v2)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Messaging:** `@emailjs/browser` (optional) / direct mailto
- **Icons:** Lucide React & Standalone SVG Icons

---

## 🚀 Quickstart

```bash
# Install dependencies
bun install
# or
npm install

# Start development server
bun dev
# or
npm run dev
```

Visit `http://localhost:5173` to see your portfolio live.

---

## 📬 Connecting EmailJS (Optional)

To enable direct in-browser note delivery to your email inbox without opening the user's mail client:
1. Create a free account on [emailjs.com](https://www.emailjs.com/).
2. Create an `.env` file in the project root:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
3. If no keys are provided, the popover automatically uses a structured `mailto:` link as fallback.

---

## 🚢 Production Build

```bash
bun run build
# or
npm run build
```
