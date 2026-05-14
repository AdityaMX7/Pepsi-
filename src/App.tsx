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

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !localStorage.getItem('popupShown')) {
        setShowExitPopup(true);
        localStorage.setItem('popupShown', 'true');
      }
    };

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 200);
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans relative overflow-visible bg-black">

      {/* 🔥 DISCO BACKGROUND (FORCED VISIBLE) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

        {/* Base animated gradient */}
        <motion.div
          animate={{
            background: hasScrolled
              ? [
                  "radial-gradient(circle at 20% 20%, #ff00cc, transparent 60%)",
                  "radial-gradient(circle at 80% 30%, #00ffff, transparent 60%)",
                  "radial-gradient(circle at 50% 80%, #ffff00, transparent 60%)",
                  "radial-gradient(circle at 30% 70%, #ff0000, transparent 60%)",
                ]
              : "#000000",
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        />

        {/* Glow blobs */}
        {hasScrolled && (
          <>
            <motion.div
              animate={{ x: [0, 300, -200, 0], y: [0, -200, 200, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
              className="absolute w-[400px] h-[400px] bg-pink-500/30 rounded-full blur-3xl top-10 left-10"
            />
            <motion.div
              animate={{ x: [0, -300, 200, 0], y: [0, 200, -200, 0] }}
              transition={{ duration: 14, repeat: Infinity }}
              className="absolute w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl bottom-10 right-10"
            />
            <motion.div
              animate={{ x: [0, 200, -200, 0], y: [0, -150, 150, 0] }}
              transition={{ duration: 16, repeat: Infinity }}
              className="absolute w-[400px] h-[400px] bg-yellow-400/30 rounded-full blur-3xl top-1/2 left-1/2"
            />
          </>
        )}
      </div>

      {/* 🔥 CONTENT (ABOVE LIGHTS) */}
      <div className="relative z-10">
        <Navbar />

        <main className="pt-20 md:pt-0">
          <Hero />
          <UnboxingAnimation />

          {/* Marquee */}
          <div className="bg-pepsi-red py-4 border-y border-white/10">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex whitespace-nowrap gap-20"
            >
              {[...Array(10)].map((_, i) => (
                <span key={i} className="font-display font-black text-2xl uppercase tracking-[0.2em] italic">
                  Experience the Pulse // Net Zero by 2040 // Refresh Your Rhythm //
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
      </div>

      {/* Floating Button */}
      <AnimatePresence>
        {hasScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            className="fixed bottom-10 right-10 z-[60] w-16 h-16 rounded-full bg-pepsi-red text-white flex items-center justify-center"
          >
            <Sparkles size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Popup */}
      <AnimatePresence>
        {showExitPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowExitPopup(false)}
              className="absolute inset-0 bg-black/80"
            />
            <div className="relative bg-black p-10 rounded-2xl text-center">
              <button onClick={() => setShowExitPopup(false)}>
                <X />
              </button>
              <h2 className="text-2xl mt-4">Don't Miss The Rhythm</h2>
            </div>
          </div>
        )}
      </AnimatePresence>

      <FloatingCard />
    </div>
  );
}
