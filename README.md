# Yash Tiwari - Portfolio

A modern, responsive portfolio website showcasing my journey as a Full Stack Developer. Built with cutting-edge technologies and featuring smooth animations, dark mode support, and an intuitive user experience.

## 🎯 Overview

This portfolio highlights my expertise in full-stack development, with a focus on building scalable backend systems and AI-driven applications. The site features:

- **Hero Section** with profile introduction and quick access to projects and resume
- **About Me** section highlighting my journey and competitive programming achievements
- **Skills** showcase organized by categories (Frontend, Backend, Databases, Tools)
- **Professional Experience** timeline with detailed work history
- **Projects** gallery featuring notable projects with live demos and source code
- **Achievements** section highlighting awards and recognitions
- **Contact** form for easy communication

## ✨ Features

- 🌓 **Dark/Light Mode** - Seamless theme switching with persistent preference
- 📱 **Fully Responsive** - Optimized for all screen sizes from mobile to desktop
- 🎨 **Smooth Animations** - Framer Motion powered animations and transitions
- 🎯 **Interactive UI** - Engaging user interactions with hover effects and micro-animations
- 🚀 **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 🎭 **Easter Eggs** - Hidden surprises for curious visitors (try clicking on things!)
- ♿ **Accessible** - Built with semantic HTML and accessibility best practices

## 🛠️ Tech Stack

### Core Technologies
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development experience
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework

### UI Components & Libraries
- **shadcn/ui** - High-quality, accessible component library built on Radix UI
- **Framer Motion** - Production-ready animation library
- **Lucide React** - Beautiful, customizable icon library
- **React Hook Form** - Performant form validation
- **Zod** - TypeScript-first schema validation

### Development Tools
- **ESLint** - Code quality and consistency
- **Vitest** - Unit testing framework
- **PostCSS & Autoprefixer** - CSS processing

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yshhh17/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the portfolio

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build with development mode
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm test             # Run tests
npm run test:watch   # Run tests in watch mode
```

## 📁 Project Structure

```
portfolio/
├── public/              # Static assets
│   ├── Profile.jpg      # Profile picture
│   ├── geodermal.png    # Project images
│   ├── Givehub.png
│   └── bucketlst.png
├── src/
│   ├── components/      # React components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   ├── Contact.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ui/          # shadcn/ui components
│   ├── lib/             # Utility functions
│   ├── hooks/           # Custom React hooks
│   ├── App.tsx          # Main app component
│   └── main.tsx         # App entry point
├── index.html           # HTML entry point
├── tailwind.config.ts   # Tailwind configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Customization

### Updating Personal Information

1. **Profile & Contact Info** - Edit `src/components/Hero.tsx` and `src/components/Contact.tsx`
2. **Projects** - Update the projects array in `src/components/Projects.tsx`
3. **Skills** - Modify skill categories in `src/components/Skills.tsx`
4. **Experience** - Edit work history in `src/components/Experience.tsx`
5. **Achievements** - Update awards in `src/components/Achievements.tsx`

### Theme Customization

Theme colors can be customized in `tailwind.config.ts`. The portfolio uses CSS variables for theme switching, defined in `src/index.css`.

## 📦 Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory, ready for deployment.

## 🌐 Deployment

This portfolio can be deployed to various platforms:

- **Vercel** (Recommended) - Zero configuration deployment
- **Netlify** - Automatic deployment from Git
- **GitHub Pages** - Free hosting for static sites
- **Any static hosting service**

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

**Yash Tiwari**
- GitHub: [@yshhh17](https://github.com/yshhh17)
- LeetCode: [yshhh](https://leetcode.com/u/yshhh/)
- Codeforces: [q_](https://codeforces.com/profile/q_)

---

⭐ If you like this portfolio template, consider giving it a star!
