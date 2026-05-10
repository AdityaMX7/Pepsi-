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
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group relative"
          whileHover="hover"
        >
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Energy Flames (Purple and Green) */}
            <motion.div 
              className="energy-flame absolute inset-[-15px] rounded-full opacity-40 group-hover:opacity-100 transition-opacity duration-700"
              variants={{
                hover: { 
                  scale: 1.8, 
                  rotate: 360,
                  transition: { duration: 2, repeat: Infinity, ease: "linear" }
                }
              }}
            />
            
            <motion.div 
              className="relative z-10 w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden premium-shadow border border-white/20"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              variants={{
                hover: { 
                  rotate: 360,
                  transition: { duration: 1.2, ease: "backOut" }
                }
              }}
            >
              <motion.div 
                className="w-full h-full relative"
                variants={{
                  hover: {
                    background: [
                      "linear-gradient(0deg, #004B93 50%, #E32221 50%)",
                      "linear-gradient(180deg, #004B93 50%, #E32221 50%)",
                    ],
                    transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
                  }
                }}
              >
                <div className="absolute inset-x-0 top-0 h-1/2 bg-[#E32221] group-hover:bg-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#004B93] group-hover:bg-transparent" />
                <div className="absolute top-1/2 left-1/2 w-[110%] h-[15%] bg-white -translate-x-1/2 -translate-y-1/2 -rotate-[15deg] z-20" />
              </motion.div>
            </motion.div>
          </div>
          <motion.span 
            className="font-display font-black text-3xl tracking-tighter italic hidden sm:block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40"
            variants={{
                hover: {
                    backgroundImage: [
                        "linear-gradient(90deg, #FFFFFF, #3b82f6, #ef4444, #FFFFFF)",
                        "linear-gradient(90deg, #ef4444, #FFFFFF, #3b82f6, #ef4444)",
                        "linear-gradient(90deg, #3b82f6, #ef4444, #FFFFFF, #3b82f6)"
                    ],
                    transition: { duration: 2, repeat: Infinity, ease: "linear" }
                }
            }}
          >
            PEPSI
          </motion.span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {['Products', 'Stories', 'Moments', 'Culture'].map((item, i) => (
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
          <motion.a 
            href="#locator"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.1)" }}
            className="px-6 py-2 border border-white/30 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all hidden sm:block"
          >
            Find Near You
          </motion.a>
          <motion.a 
            href="#products"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(37, 99, 235, 0.6)",
              backgroundColor: "#3b82f6" 
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-pepsi-blue-accent text-white font-bold uppercase text-[10px] tracking-widest rounded-full shadow-lg shadow-pepsi-blue-accent/30 transition-all flex items-center justify-center text-center"
          >
            Shop Now
          </motion.a>
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
          {['Products', 'Stories', 'Moments', 'Culture'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
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
