import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, Search, ShoppingBag, MapPin, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 glass' : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full flex flex-col overflow-hidden outline outline-2 outline-white">
            <div className="flex-1 bg-pepsi-red"></div>
            <div className="h-1 bg-white"></div>
            <div className="flex-1 bg-pepsi-blue"></div>
          </div>
          <span className="font-display font-black text-2xl tracking-tighter italic hidden sm:block">PEPSI.</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {['Products', 'Stories', 'Moments', 'Music', 'Sports'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                color: "var(--color-pepsi-cyan)",
                textShadow: "0 0 15px rgba(59, 130, 246, 0.6)"
              }}
              className="text-xs font-bold uppercase tracking-[0.2em] relative group transition-all"
            >
              <span className="relative z-10">{item}</span>
              <motion.div 
                className="absolute -inset-x-4 -inset-y-2 bg-pepsi-cyan/0 rounded-full blur-md -z-10 group-hover:bg-pepsi-cyan/10 transition-colors"
                layoutId={`nav-glow-${item}`}
              />
            </motion.a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
            className="px-6 py-2 border border-white/30 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all hidden sm:block"
          >
            Find Near You
          </motion.button>
          <motion.button 
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(37, 99, 235, 0.6)",
              backgroundColor: "#3b82f6" 
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-pepsi-blue-accent text-white font-bold uppercase text-[10px] tracking-widest rounded-full shadow-lg shadow-pepsi-blue-accent/30 transition-all"
          >
            Shop Now
          </motion.button>
          <button 
            className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass border-t border-white/10 py-10 px-6 md:hidden flex flex-col gap-6"
        >
          {['Flavors', 'Story', 'Sustainability', 'Promos'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-2xl font-display font-black uppercase tracking-tight"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
