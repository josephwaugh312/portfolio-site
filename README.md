# Portfolio Website

A modern, performant, and accessible portfolio website built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber.

## Features

### Core Features
- **Responsive Design**: Mobile-first approach with full responsiveness across all devices
- **Dark/Light Mode**: System-aware theme switching with smooth transitions
- **Accessibility**: WCAG 2.1 AA compliant with full keyboard navigation and screen reader support
- **Performance Optimized**: Lighthouse score 95+ with optimized bundle splitting and lazy loading
- **SEO Ready**: Full meta tags, Open Graph, structured data, and sitemap generation
- **3D Graphics**: Interactive 3D scenes with WebGL fallbacks for unsupported devices

### Technical Highlights
- **Next.js 15 App Router**: Latest React Server Components and streaming
- **TypeScript**: Full type safety across the entire codebase
- **Tailwind CSS**: Utility-first styling with custom design tokens
- **Framer Motion**: Smooth, performant animations with reduced motion support
- **React Three Fiber**: Optimized 3D scenes with instancing and LOD
- **Component Architecture**: Reusable, composable components following atomic design

### Pages & Sections
- **Home**: Hero with 3D animation, featured projects, skills showcase
- **About**: Timeline, tech stack, professional journey
- **Projects**: Filterable portfolio with category and technology filters
- **Contact**: Accessible contact form with validation

### Performance Features
- Optimized image loading with Next.js Image
- Code splitting and dynamic imports
- Font optimization with variable fonts
- Aggressive caching strategies
- Bundle size optimization for Three.js

### Accessibility Features
- Skip navigation links
- Focus management and trapping
- ARIA labels and live regions
- Keyboard-only navigation
- Reduced motion alternatives
- High contrast mode support

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-site.git
cd portfolio-site
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your values:
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
# ... other variables
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
```

## Project Structure

```
portfolio-site/
├── app/                  # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── about/           # About page
│   ├── projects/        # Projects page
│   ├── contact/         # Contact page
│   ├── error.tsx        # Error boundary
│   ├── not-found.tsx    # 404 page
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── ui/              # UI components
│   ├── navigation.tsx   # Navigation component
│   ├── footer.tsx       # Footer component
│   ├── hero-3d.tsx      # 3D hero scene
│   ├── project-card.tsx # Project card component
│   ├── contact-form.tsx # Contact form
│   └── ...              # Other components
├── hooks/               # Custom React hooks
│   └── use-animations.ts
├── lib/                 # Utility functions
│   ├── animations.ts    # Animation variants
│   ├── data.ts          # Static data
│   ├── types.ts         # TypeScript types
│   └── utils.ts         # Helper functions
├── public/              # Static assets
│   ├── favicon.svg      # Site favicon
│   ├── manifest.json    # PWA manifest
│   └── robots.txt       # Robots file
├── .env.example         # Environment template
├── next.config.ts       # Next.js config
├── tailwind.config.ts   # Tailwind config
├── vercel.json          # Vercel deployment
└── package.json         # Dependencies
```

## Customization

### Updating Content

1. **Personal Information**: Edit `/lib/data.ts`
2. **Projects**: Update the `projects` array in `/lib/data.ts`
3. **Skills**: Modify the `skills` object in `/lib/data.ts`
4. **Timeline**: Update the `timeline` array in `/lib/data.ts`

### Styling

1. **Colors**: Edit the theme in `tailwind.config.ts` and CSS variables in `app/globals.css`
2. **Fonts**: Update font imports in `app/layout.tsx`
3. **Animations**: Modify variants in `/lib/animations.ts`

### Components

All components are fully typed and documented. Key components:

- `ProjectCard`: Display project information with hover effects
- `SkillsSection`: Animated skills display with progress bars
- `Timeline`: Professional journey visualization
- `ContactForm`: Accessible form with validation
- `Hero3D`: Interactive 3D scene with React Three Fiber
- `Navigation`: Responsive navigation with mobile menu
- `ThemeProvider`: Dark/light mode management

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

The site includes a `vercel.json` configuration with optimized settings.

### Other Platforms

Build the project:
```bash
npm run build
```

The output will be in `.next` directory. Follow your platform's Next.js deployment guide.

### Environment Variables

Required for production:
- `NEXT_PUBLIC_SITE_URL`: Your production URL
- `NEXT_PUBLIC_SITE_NAME`: Site name for meta tags

Optional:
- Email service credentials (if using contact form)
- Analytics IDs (GA, Hotjar, etc.)
- Social media URLs

## Performance

### Lighthouse Scores (Target)
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Optimization Techniques
- Image optimization with AVIF/WebP formats
- Aggressive code splitting for Three.js
- Font subsetting and preloading
- Critical CSS inlining
- Resource hints (preconnect, dns-prefetch)
- Proper cache headers for static assets

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

WebGL features gracefully degrade on unsupported devices.

## Security

- Content Security Policy (CSP) headers configured
- XSS protection headers
- Secure referrer policy
- No vulnerable dependencies
- Environment variables for sensitive data

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Add appropriate TypeScript types
- Ensure accessibility standards are met
- Test on multiple devices and browsers

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- Three.js community for 3D graphics support
- Radix UI for accessible components
- All open-source contributors

## Support

For questions or feedback:
- Create an issue on GitHub
- Contact through the website's contact form
- Connect on social media (links in footer)

---

Built with passion using modern web technologies. Continuously improved and maintained.