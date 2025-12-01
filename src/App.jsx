import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import AnnouncementBanner from './components/AnnouncementBanner';
import Hero from './components/Hero';
import HeroActionBar from './components/HeroActionBar';

// Lazy load below-the-fold components for better performance
const Features = lazy(() => import('./components/Features'));
const IndustryShowcase = lazy(() => import('./components/IndustryShowcase'));
const Highlights = lazy(() => import('./components/Highlights'));
const DeveloperSection = lazy(() => import('./components/DeveloperSection'));
const MovingHeadlines = lazy(() => import('./components/MovingHeadlines'));
const StartupPerks = lazy(() => import('./components/StartupPerks'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <div className="pt-16">
        <AnnouncementBanner />
      </div>
      <main>
        <Hero />
        <div className="container mx-auto px-4">
          <HeroActionBar />
        </div>
        <Suspense fallback={<LoadingFallback />}>
          <MovingHeadlines />
          <Features />
          <IndustryShowcase />
          <Highlights />
          <DeveloperSection />
          <StartupPerks />
        </Suspense>
      </main>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
