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
      setHasScrolled(window.scrollY > 50); // 🔥 earlier trigger
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-pepsi-red selection:text-white relative overflow-visible">

      {/* 🔥 DISCO BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        {/* 🌈 Animated Gradient */}
        <motion.div
          animate={{
            background: hasScrolled
              ? [
                  "radial-gradient(circle at 20% 20%, #ff0000, #000)",
                  "radial-gradient(circle at 80% 30%, #00ffcc, #000)",
                  "radial-gradient(circle at 50% 80%, #ffcc00, #000)",
                  "radial-gradient(circle at 30% 60%, #ff00ff, #000)",
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

        {/* 💡 Moving Light Blobs */}
        {hasScrolled && (
          <>
            <motion.div
              animate={{ x: [0, 300, -200, 0], y: [0, -200, 200, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute w-[400px] h-[400px] bg-pink-500/50 rounded-full blur-[120px] top-10 left-10"
            />
            <motion.div
              animate={{ x: [0, -300, 200, 0], y: [0, 200, -200, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute w-[400px] h-[400px] bg-blue-500/50 rounded-full blur-[120px] bottom-10 right-10"
            />
            <motion.div
              animate={{ x: [0, 200, -200, 0], y: [0, -250, 250, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
              className="absolute w-[400px] h-[400px] bg-yellow-400/50 rounded-full blur-[120px] top-1/2 left-1/2"
            />
          </>
        )}
      </div>

      {/* ⚠️ Noise overlay reduced so it doesn't hide disco */}
      <div className="noise-overlay opacity-30 pointer-events-none" />

      <Navbar />
      
      <main className="relative z-10 pt-20 md:pt-0">
        <Hero />
        <UnboxingAnimation />
        
        {/* Marquee */}
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

      {/* Floating Button */}
      <AnimatePresence>
        {hasScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-10 right-10 z-[60] w-16 h-16 rounded-full bg-pepsi-red text-white shadow-[0_10px_40px_rgba(227,41,57,0.5)] flex items-center justify-center group"
          >
            <Sparkles size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Popup */}
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
            <motion.div className="relative w-full max-w-lg glass p-12 rounded-[3rem] text-center">
              <button onClick={() => setShowExitPopup(false)} className="absolute top-6 right-6">
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

      <FloatingCard />
    </div>
  );
}
