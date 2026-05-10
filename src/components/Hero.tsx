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
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[40rem] h-[40rem] bg-pepsi-blue-accent rounded-full blur-[120px] opacity-20" />
        <div className="absolute top-1/2 -right-48 w-[40rem] h-[40rem] bg-pepsi-blue rounded-full blur-[150px] opacity-10" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ 
                y: "-10%", 
                opacity: [0, 0.4, 0],
              }}
              transition={{ 
                duration: 10 + Math.random() * 10, 
                repeat: Infinity, 
                ease: "linear"
              }}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-20 flex flex-col lg:flex-row items-center gap-10">
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 space-y-8"
        >
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-pepsi-cyan font-bold uppercase tracking-[0.4em] text-sm mb-4 block"
            >
              Always Refreshing
            </motion.span>
            
            <h1 className="font-display font-black text-7xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter italic uppercase">
              Thirst<br /><span className="text-stroke">For</span><br />More.
            </h1>
          </div>

          <p className="max-w-md text-lg text-gray-400 font-medium leading-relaxed">
            Experience the bold, crisp taste of the next generation. Join the movement and discover the flavor that fuels your passion.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 40px rgba(255, 255, 255, 0.2)",
                backgroundColor: "var(--color-pepsi-blue-accent)",
                color: "white"
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 bg-white text-black font-black uppercase italic tracking-widest text-sm transition-all duration-300"
            >
              Explore Flavors
            </motion.button>
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                borderColor: "white",
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-5 border-2 border-white/20 text-white font-black uppercase italic tracking-widest text-sm transition-all"
            >
              The Challenge
            </motion.button>
          </div>
          
          <div className="flex space-x-12 pt-8 border-t border-white/10 mt-8">
            <div>
              <div className="text-3xl font-black italic">100+</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-black italic">ZERO</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Compromise</div>
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
