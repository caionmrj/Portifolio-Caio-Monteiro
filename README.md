# Portfolio

A modern, responsive portfolio website built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**. Designed with smooth animations, clean code architecture, and full accessibility support.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) - App Router
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev)
- **Fonts:** [Geist](https://vercel.com/font) by Vercel
- **TypeScript:** Strict mode enabled

## 📁 Project Structure (Clean Architecture)

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Landing page with sections
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── button.tsx
│   │   └── container.tsx
│   ├── sections/           # Page sections
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── projects-section.tsx
│   │   └── contact-section.tsx
│   └── shared/             # Shared components
│       ├── header.tsx
│       └── footer.tsx
├── hooks/                  # Custom React hooks
│   ├── use-scroll.ts
│   └── use-reduced-motion.ts
├── lib/
│   ├── utils/              # Utility functions
│   │   └── cn.ts           # Tailwind class merger
│   └── constants/          # Site constants
│       └── site.ts
├── styles/                 # Additional styles
│   ├── animations.css
│   └── variables.css
└── types/                  # TypeScript types
    └── index.ts
```

## 🎨 Features

- **Smooth Animations:** Framer Motion with reduced motion support
- **Responsive Design:** Mobile-first approach
- **Dark Mode:** Automatic via `prefers-color-scheme`
- **Accessibility:** ARIA labels, keyboard navigation, semantic HTML
- **Clean Code:** ESLint, consistent patterns, JSDoc comments
- **Static Export:** Ready for deployment on any static host

## 🛠️ Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📦 Build & Deploy

```bash
# Create production build (static export)
npm run build

# Output will be in /dist folder
```

The project is configured for static export via `next.config.ts`:
- `output: "export"` - Static HTML export
- `distDir: "dist"` - Output directory
- Images are unoptimized for static hosting

## 🎭 Customization

### 1. Site Configuration
Edit `src/lib/constants/site.ts`:
```typescript
export const SITE_CONFIG = {
  name: "Your Name",
  description: "Your description",
  links: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    email: "mailto:you@email.com",
  },
};
```

### 2. Projects
Edit `src/components/sections/projects-section.tsx` and update the `projects` array.

### 3. Colors & Theme
Modify `src/styles/variables.css` for custom design tokens.

## 📝 Code Standards

- **Single Responsibility:** Each component does one thing
- **Type Safety:** Full TypeScript coverage
- **Documentation:** JSDoc comments on all utilities
- **Accessibility:** WCAG 2.1 AA compliance
- **Performance:** Optimized animations with `will-change`

## 📄 License

MIT - feel free to use this template for your portfolio!
