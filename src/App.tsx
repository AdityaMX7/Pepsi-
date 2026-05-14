import FloatingCard from './components/FloatingCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UnboxingAnimation from './components/UnboxingAnimation';
import ProductGrid from './components/ProductGrid';
import StorySection from './components/StorySection';
import StoreLocator from './components/StoreLocator';
import CampaignBanner from './components/CampaignBanner';
import PepsiMoments from './components/PepsiMoments';
import Footer from './components/Footer';

export default function App() {
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !localStorage.getItem('popupShown')) {
        setShowExitPopup(true);
        localStorage.setItem('popupShown', 'true');
      }
    };

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      setHasScrolled(currentScroll > 300);
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 🎉 SCROLL-BASED DISCO BACKGROUND
  const discoBackground = hasScrolled
    ? {
        background: `
          radial-gradient(circle at ${scrollY % 100}% ${scrollY % 80}%, rgba(255, 0, 150, 0.6), transparent),
          radial-gradient(circle at ${(scrollY * 2) % 100}% ${(scrollY * 1.5) % 100}%, rgba(0, 255, 255, 0.5), transparent),
          radial-gradient(circle at ${(scrollY * 3) % 100}% ${(scrollY * 2) % 100}%, rgba(255, 255, 0, 0.4), transparent),
          black
        `,
        transition: "background 0.2s linear",
      }
    : { background: "#000" };

  return (
    <div className="min-h-screen font-sans selection:bg-pepsi-red selection:text-white relative overflow-visible">

      {/* 🌌 BACKGROUND */}
      <div
        className="fixed inset-0 -z-10"
        style={discoBackground}
      />

      {/* CONTENT */}
      <div className="noise-overlay" />
      <Navbar />

      <main className="relative z-10 pt-20 md:pt-0">
        <Hero />
        <UnboxingAnimation />

        {/* 🔴 Marquee */}
        <div className="bg-pepsi-red py-4 relative z-10 overflow-visible border-y border-white/10">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex whitespace-nowrap gap-20"
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="font-display font-black text-2xl uppercase tracking-[0.2em] italic">
                Experience the Pulse // Net Zero by 2040 // 100% rPET Packaging by 2030 // Refresh Your Rhythm // 130 Years of Bold Taste //
              </span>
            ))}
          </motion.div>
        </div>

        <ProductGrid />
        <CampaignBanner />
        <PepsiMoments />
        <StorySection />
        <StoreLocator />
      </main>

      <Footer />

      {/* ✨ Floating Button */}
      <AnimatePresence>
        {hasScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-10 right-10 z-[60] w-16 h-16 rounded-full bg-pepsi-red text-white shadow-[0_10px_40px_rgba(227,41,57,0.5)] flex items-center justify-center"
          >
            <Sparkles size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 🚪 Exit Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowExitPopup(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-lg glass p-12 rounded-[3rem] text-center"
            >
              <button
                onClick={() => setShowExitPopup(false)}
                className="absolute top-6 right-6"
              >
                <X size={20} />
              </button>

              <h2 className="text-3xl font-bold mb-4">
                Don't Miss The Rhythm
              </h2>

              <button
                onClick={() => setShowExitPopup(false)}
                className="mt-6 text-sm underline"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 🟡 Floating Card */}
      <FloatingCard />
    </div>
  );
}
