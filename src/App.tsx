import FloatingCard from "./FloatingCard";
import { motion, AnimatePresence } from 'motion/react';
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
        setHasScrolled(window.scrollY > 300);
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-pepsi-red selection:text-white relative overflow-hidden">
      <div className="noise-overlay" />
      <Navbar />
      
      <main className="relative z-10 pt-20 md:pt-0">
        <Hero />
        <UnboxingAnimation />
        
        {/* Marquee Accent */}
        <div className="bg-pepsi-red py-4 relative z-10 overflow-hidden border-y border-white/10">
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

      {/* Floating Action Button */}
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
            <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
            <div className="absolute right-20 bg-black glass px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <span className="text-[10px] font-black uppercase tracking-widest">Join the Wave</span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Exit Intent Popup */}
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
              className="relative w-full max-w-lg glass p-12 rounded-[3rem] border-white/10 shadow-4xl text-center"
            >
              <button 
                onClick={() => setShowExitPopup(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
                id="close-popup"
              >
                <X size={20} />
              </button>

              <div className="w-20 h-20 bg-gradient-to-br from-pepsi-blue via-pepsi-cyan to-pepsi-red rounded-full mx-auto mb-8 flex items-center justify-center p-1">
                <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                    <Sparkles size={32} className="text-pepsi-cyan" />
                </div>
              </div>

              <h2 className="font-display font-black text-4xl uppercase tracking-tighter mb-4">
                Don't Miss <br />
                <span className="text-gradient">The Rhythm.</span>
              </h2>
              <p className="text-white/60 mb-10">
                Sign up for exclusive drops, early event access, and limited edition flavor news before anybody else.
              </p>

              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="ENTER EMAIL ADDRESS" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 text-xs font-black tracking-widest outline-none focus:border-pepsi-cyan transition-all"
                />
                <button className="w-full py-5 bg-pepsi-blue text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-pepsi-cyan hover:text-black transition-colors">
                  Claim Your Access
                </button>
              </div>

              <button 
                onClick={() => setShowExitPopup(false)}
                className="mt-6 text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors underline underline-offset-4"
              >
                Maybe Next Time
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
