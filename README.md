# 🛠️ Adam's MicroTools Dashboard

> **Open Source. Privacy First. No fluff.**

A central hub for all micro-tools created by [Adam Siwek (Timmlion)](https://github.com/Timmlion). This dashboard serves as a minimalist entry point to various utilities, prioritizing privacy, speed, and clean UX.

🌐 **Live Demo:** [tools.adamsiwek.pl](https://tools.adamsiwek.pl)

## 🎯 Purpose

The goal of this project is to aggregate independent micro-applications into a unified interface, making it easier for users to discover and access useful developer tools without tracking or bloat.

## 🚀 Featured Tools

Currently aggregated tools:
- **[LivePreview](https://livepreview.adamsiwek.pl)** ([Repo](https://github.com/Timmlion/LivePreview)) - Real-time HTML/CSS/JS code previewer.

## 🏗️ Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (Dark Mode)
- **Language:** TypeScript
- **Icons:** Lucide React
- **Analytics:** Umami (Privacy-friendly)

## 🏃‍♂️ Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/Timmlion/ToolsDashboard.git
   cd ToolsDashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

## ➕ Adding a New Tool

Tools are managed via a static configuration file. To add a new tool:

1. Open `src/data/tools.ts`.
2. Add a new object to the `tools` array:
   ```typescript
   {
     id: 'new-tool',
     title: 'New Tool Name',
     description: {
       pl: 'Krótki opis po polsku.',
       en: 'Short description in English.'
     },
     url: 'https://tool.adamsiwek.pl',
     repo: 'https://github.com/Timmlion/tool-repo',
     tags: ['Dev', 'Utility'],
     icon: 'Zap', // Any icon name from Lucide React
     status: 'Live' // 'Live' | 'Beta' | 'Building'
   }
   ```

## 🤝 Support

If you find these tools useful, consider supporting the work:
[☕ Buy me a coffee](https://ko-fi.com/adamsiwek)