import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden flex items-center pt-40 lg:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] bg-pepsi-blue-accent rounded-full blur-[160px] opacity-20" />
        <div className="absolute top-1/2 -right-48 w-[40rem] h-[40rem] bg-pepsi-blue rounded-full blur-[200px] opacity-10" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ 
                y: "-10%", 
                opacity: [0, 0.4, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{ 
                duration: 8 + Math.random() * 8, 
                repeat: Infinity, 
                ease: "linear"
              }}
              className="absolute w-[2px] h-[2px] bg-white rounded-full blur-[1px]"
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-20 flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-3/5 space-y-10"
        >
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-4 mb-8"
            >
              <div className="h-[2px] w-12 bg-pepsi-cyan" />
              <span className="text-pepsi-cyan font-black uppercase tracking-[0.6em] text-xs">
                Premium Refreshment
              </span>
            </motion.div>
            
            <h1 className="font-display font-black text-7xl md:text-9xl lg:text-[11rem] leading-[0.8] tracking-tighter italic uppercase drop-shadow-3xl">
              <span className="block">Thirst</span>
              <span className="block text-stroke text-white/10 opacity-80">For</span>
              <span className="block">More.</span>
            </h1>
          </div>

          <p className="max-w-xl text-lg md:text-xl text-gray-400 font-medium leading-relaxed">
            Pioneering the cultural pulse since 1893. Dive into the world's most innovative cola experience, where bold flavor meets the vanguard of youth lifestyle and sustainable impact.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.a
              href="#products"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 50px rgba(59, 130, 246, 0.4)",
                backgroundColor: "var(--color-pepsi-blue-accent)",
                color: "white"
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-6 bg-white text-black font-black uppercase italic tracking-[0.2em] text-xs transition-all duration-300 flex items-center justify-center"
            >
              Explore the Lineup
            </motion.a>
            <motion.a
              href="#stories"
              whileHover={{ 
                scale: 1.05, 
                borderColor: "white",
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-6 border-2 border-white/10 text-white font-black uppercase italic tracking-[0.2em] text-xs transition-all flex items-center justify-center"
            >
              Our Heritage
            </motion.a>
          </div>
          
          <div className="flex space-x-16 pt-12 border-t border-white/5 mt-10">
            <div>
              <div className="text-4xl font-black italic tracking-tighter">200+</div>
              <div className="text-[9px] text-pepsi-cyan uppercase tracking-[0.4em] font-black mt-2">Global Markets</div>
            </div>
            <div>
              <div className="text-4xl font-black italic tracking-tighter">NET ZERO</div>
              <div className="text-[9px] text-pepsi-red uppercase tracking-[0.4em] font-black mt-2">2040 Commitment</div>
            </div>
            <div>
              <div className="text-4xl font-black italic tracking-tighter">GEN BOLD</div>
              <div className="text-[9px] text-white/40 uppercase tracking-[0.4em] font-black mt-2">Community Led</div>
            </div>
          </div>
        </motion.div>

        {/* Can Visual from Design */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
        >
            <div className="relative w-[300px] h-[550px] group">
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-8 bg-black/60 rounded-full blur-xl" />
                <div className="relative w-full h-full rounded-[40px] bg-gradient-to-br from-pepsi-blue via-pepsi-blue to-pepsi-blue-accent border-[3px] border-white/20 shadow-2xl overflow-hidden flex flex-col">
                    <div className="w-full h-12 bg-gradient-to-b from-gray-300 to-gray-500 border-b border-black/20 shrink-0" />
                    <div className="flex-1 relative flex flex-col items-center justify-center p-8">
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <span className="text-white/10 text-[160px] font-black italic rotate-[-90deg] whitespace-nowrap">PEPSI</span>
                        </div>
                        <div className="w-32 h-32 bg-white rounded-full flex flex-col overflow-hidden shadow-2xl relative z-10 border-4 border-white animate-spin-slow">
                            <div className="flex-1 bg-pepsi-red" />
                            <div className="h-4 bg-white" />
                            <div className="flex-1 bg-pepsi-blue" />
                        </div>
                        <div className="mt-8 text-center relative z-10">
                            <div className="text-2xl font-black italic">ZERO SUGAR</div>
                            <div className="text-[10px] font-bold tracking-[0.2em] opacity-60">BOLD TASTE</div>
                        </div>
                    </div>
                </div>
                <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute top-1/4 -right-12 glass p-4 rounded-2xl border border-white/20 shadow-2xl rotate-12"
                >
                    <div className="text-[10px] font-bold uppercase mb-1">New Release</div>
                    <div className="text-lg font-black italic">ELECTRIC BLUE</div>
                </motion.div>
            </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
