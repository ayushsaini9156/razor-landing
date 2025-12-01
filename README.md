# Razorpay Landing Page

A modern, production-ready landing page inspired by Razorpay's design, built with React 18, Vite, and Tailwind CSS. Features a fully responsive design with dark mode support, smooth animations, and optimized performance.

## ✨ Features

- 🎨 **Modern UI/UX** - Clean design with blue-indigo-purple gradient theme
- 🌓 **Dark Mode** - Seamless light/dark theme switching with localStorage persistence
- 📱 **Fully Responsive** - Mobile-first design optimized for all screen sizes
- ⚡ **Performance Optimized** - Lazy loading, code splitting, and production builds
- 🎭 **Smooth Animations** - Custom keyframe animations and transitions
- ♿ **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
- 🔧 **Developer Friendly** - Clean code structure, component-based architecture

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and Suspense
- **Vite 4** - Lightning-fast build tool and dev server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **PostCSS** - CSS transformations and optimizations
- **ESLint** - Code quality and consistency
- **Google Fonts** - Inter font family for typography

## 📦 Components

- Hero section with carousel and POS mockup
- Announcement banner
- Action bar with multiple CTAs
- Company logos marquee
- Product features showcase
- Industry-specific solutions
- Product highlights grid
- Developer documentation section
- Startup perks banner
- Comprehensive footer with newsletter

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/ayushsaini9156/razor-landing.git
cd razor-landing
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Start development server**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```
The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🌐 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ayushsaini9156/razor-landing)

Or manually:
```bash
npm i -g vercel
vercel
```

### Netlify

1. Push your code to GitHub
2. Connect repository to Netlify
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Deploy!

### GitHub Pages

```bash
npm run build
# Deploy dist folder to gh-pages branch
```

## 📁 Project Structure

```
razor-landing/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── IndustryShowcase.jsx
│   │   ├── Highlights.jsx
│   │   ├── DeveloperSection.jsx
│   │   ├── MovingHeadlines.jsx
│   │   ├── StartupPerks.jsx
│   │   └── Footer.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies
```

## ⚡ Performance Optimizations

- **Code Splitting** - Lazy loading for below-the-fold components
- **Tree Shaking** - Removes unused code in production
- **Minification** - Terser for JavaScript, CSS minification
- **Chunk Optimization** - Vendor chunks for better caching
- **Image Optimization** - Modern formats and lazy loading
- **Font Optimization** - Preloaded Inter font family

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'razor-primary': '#2563EB',
      'razor-accent': '#818CF8',
    }
  }
}
```

### Dark Mode

Theme is managed via `localStorage` with system preference detection. Toggle implementation in `Navbar.jsx`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ayush Saini**
- GitHub: [@ayushsaini9156](https://github.com/ayushsaini9156)

## 🙏 Acknowledgments

- Design inspiration from [Razorpay](https://razorpay.com)
- Icons and imagery from [Unsplash](https://unsplash.com)
- Built with ❤️ using React and Tailwind CSS
