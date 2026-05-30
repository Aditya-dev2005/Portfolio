<div align="center">

# ⚡ Aditya Chaturvedi — Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-aditya--chaturvedi--portfolio.vercel.app-4FFFB0?style=for-the-badge&logo=vercel&logoColor=black)](https://aditya-chaturvedi-portfolio.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-A78BFA?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

**A modern, premium developer portfolio built for cracking 12+ LPA roles**

[🌐 Live Site](https://aditya-chaturvedi-portfolio.vercel.app/) · [📄 Resume](https://aditya-chaturvedi-portfolio.vercel.app/api/resume) · [💼 LinkedIn](https://linkedin.com/in/aditya-chaturvedi05) · [🐙 GitHub](https://github.com/Aditya-dev2005)

</div>

---

## ✨ Features

- 🎨 **Premium dark theme** — Glassmorphism, gradient accents, subtle animations
- 🤖 **AI Chatbot** — Powered by GPT-4o-mini, knows everything about Aditya
- ⚡ **Typewriter hero** — Animated role switcher with particle background
- 📊 **Skills with progress bars** — Categorized tech stack visualization
- 🏢 **Experience timeline** — Company logos, bullet points, status badges
- 🗂️ **Project cards** — Tech badges, GitHub links, highlight bullets
- 🏆 **Achievements section** — LeetCode stats, research papers, open source
- 🔥 **GitHub heatmap** — Contribution activity visualization
- 📥 **Resume download** — API route, always works
- 📱 **Fully responsive** — Mobile, tablet, desktop
- 🔍 **SEO optimized** — Metadata, Open Graph tags
- 🚀 **Deployed on Vercel** — Zero-config deployment

---

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| AI Chatbot | OpenAI GPT-4o-mini |
| Fonts | Syne · DM Sans · JetBrains Mono |
| Deployment | Vercel |

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── api/
│   │   ├── chat/
│   │   │   └── route.ts        ← AI chatbot backend (OpenAI)
│   │   └── resume/
│   │       └── route.ts        ← Resume download API
│   ├── components/
│   │   ├── Navbar.tsx           ← Sticky navbar with mobile menu
│   │   ├── Hero.tsx             ← Landing + typewriter + stats grid
│   │   ├── About.tsx            ← Bio + quick facts card
│   │   ├── Experience.tsx       ← Timeline with company logos
│   │   ├── Projects.tsx         ← Animated project cards
│   │   ├── Skills.tsx           ← Skill bars by category
│   │   ├── Achievements.tsx     ← Stats, research, open source
│   │   ├── GitHub.tsx           ← Contribution heatmap + repos
│   │   ├── Contact.tsx          ← Contact links + footer
│   │   └── AIChatbot.tsx        ← Floating AI assistant
│   ├── globals.css              ← CSS variables + global styles
│   ├── layout.tsx               ← Root layout + SEO metadata
│   └── page.tsx                 ← Main page (assembles sections)
├── public/
│   ├── resume.pdf               ← Your resume (already included)
│   └── logos/                   ← Company logos
│       ├── gssoc.jpg
│       ├── jpmorgan.jpg
│       ├── deloitte.jpg
│       ├── coforge.webp
│       └── bnpai.webp
├── .env.local                   ← API keys (not committed to git)
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## 🚀 Run Locally

### Prerequisites
- Node.js v18+ → [nodejs.org](https://nodejs.org)
- npm v9+

### Steps

```bash
# 1. Clone or unzip the project
cd portfolio

# 2. Install dependencies
npm install

# 3. Add your OpenAI API key
# Open .env.local and replace the placeholder:
# OPENAI_API_KEY=your_key_here
# Get free key at: platform.openai.com

# 4. Start dev server
npm run dev

# 5. Open browser
# http://localhost:3000
```

### Build for production
```bash
npm run build
npm start
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the root of the `portfolio/` folder:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

Get your free API key at **[platform.openai.com](https://platform.openai.com)** → API Keys → Create new secret key.

> **Note:** Never commit `.env.local` to GitHub. It's already in `.gitignore`.

---

## ☁️ Deploy to Vercel

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B — GitHub Import
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. Add environment variable: `OPENAI_API_KEY` = your key
5. Click **Deploy**

Your site will be live at `https://your-project.vercel.app`

---

## 🎨 Customization

### Change accent colors
Edit `app/globals.css`:
```css
:root {
  --accent: #4FFFB0;        /* primary green */
  --accent-blue: #38BDF8;   /* blue */
  --accent-purple: #A78BFA; /* purple */
}
```

### Update content
All content is inside `app/components/`. Each file is self-contained:
- Personal info → `Hero.tsx`, `About.tsx`
- Work experience → `Experience.tsx`
- Projects → `Projects.tsx`
- Skills → `Skills.tsx`

### Update resume
Replace `public/resume.pdf` with your new PDF. Keep the filename the same.

### Update company logos
Place logo images in `public/logos/` and update the path in `Experience.tsx`.

---

## 🤖 AI Chatbot

The floating chat button (bottom-right) is powered by OpenAI GPT-4o-mini. It knows everything about Aditya from a detailed system prompt in `app/api/chat/route.ts`.

To update what the chatbot knows, edit the `SYSTEM_PROMPT` constant in that file.

---

## 📬 Contact

**Aditya Chaturvedi**

[![Email](https://img.shields.io/badge/Email-adichat571@gmail.com-4FFFB0?style=flat-square&logo=gmail&logoColor=white)](mailto:adichat571@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-aditya--chaturvedi05-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/aditya-chaturvedi05)
[![GitHub](https://img.shields.io/badge/GitHub-Aditya--dev2005-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Aditya-dev2005)
[![LeetCode](https://img.shields.io/badge/LeetCode-1720%2B%20Rating-FFA116?style=flat-square&logo=leetcode&logoColor=white)](https://leetcode.com/u/Aditya_232715/)

---

<div align="center">

Built with ❤️ by **Aditya Chaturvedi** · JIIT Noida · 2026

</div>
