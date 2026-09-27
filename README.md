# Kavya's AI & Machine Learning Portfolio 🚀

A modern, high-performance personal portfolio tailored for an **AI & Machine Learning Engineer**, built with **React 19**, **Vite**, and **Tailwind CSS v4**.

🔗 **GitHub Repository:** [https://github.com/JustKay1029/portfolio](https://github.com/JustKay1029/portfolio)

---

## ✨ Features

- ⚡ **Ultra Fast**: Powered by Vite and Tailwind CSS v4 with instantaneous HMR.
- 🎨 **Sleek AI/ML Aesthetic**: Dark mode theme with glowing gradient accents, glassmorphic cards, and custom scrollbar.
- 🧠 **Interactive AI Simulator**: Live browser-side NLP tensor/token inference demonstration for visitors.
- 💼 **Categorized Project Showcase**: Filter projects by Machine Learning, GenAI & LLMs, Computer Vision, and NLP.
- 🛠️ **Skills Matrix**: Organized badges for Deep Learning, Data Science, MLOps, and Web Development.
- 📜 **Experience & Journey Timeline**: Visual career and education milestones.
- 📬 **Direct Contact Section**: Interactive mailto form and quick links (Email, GitHub, LinkedIn).
- 🧩 **Centralized Content Config**: Update all info, links, and projects in a single file: `src/data/portfolioData.js`.

---

## 🛠️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** Lucide React & Custom SVG Brand Icons
- **Runtime:** Bun / Node.js

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
# Using Bun (Recommended)
bun install

# Or using npm
npm install
```

### 2. Run local development server
```bash
# Using Bun
bun dev

# Or using npm
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for production
```bash
# Using Bun
bun run build

# Or using npm
npm run build
```

---

## 📝 Customization

All personal details, skills, projects, and social links are kept in:
👉 [`src/data/portfolioData.js`](src/data/portfolioData.js)

To update your information:
1. Open [`src/data/portfolioData.js`](src/data/portfolioData.js)
2. Edit `personalInfo` (name, email, github, linkedin, bio, etc.)
3. Add or update items in `projectsData` and `skillsData`
4. Save and the changes will reflect instantly!

---

## 🚢 Deployment

### Deploy to Vercel (Easiest)
1. Push this repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: initial portfolio setup"
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Import `JustKay1029/portfolio`.
4. Framework Preset will auto-detect as **Vite**.
5. Click **Deploy**.

### Deploy to GitHub Pages
Add `"base": "/portfolio/"` to `vite.config.js` and use GitHub Actions for Vite deployment.
