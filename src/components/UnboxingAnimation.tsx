import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Package, Sparkles, Smile, Gift } from 'lucide-react';

const FLAVORS = [
  { name: 'Pepsi Blue', color: '#004B93', text: 'Classic' },
  { name: 'Pepsi Zero Sugar', color: '#0A0A0A', text: 'Black' },
  { name: 'Diet Pepsi', color: '#8E949E', text: 'Silver' },
  { name: 'Pepsi Wild Cherry', color: '#B22222', text: 'Red' },
  { name: 'Zero Wild Cherry', color: '#4A0404', text: 'Dark Red' },
  { name: 'Diet Wild Cherry', color: '#8B008B', text: 'Purple' },
  { name: 'Caffeine Free', color: '#EDBB00', text: 'Gold' },
  { name: 'Diet Caffeine Free', color: '#E5E5E5', text: 'White' },
  { name: 'Real Sugar', color: '#004B93', text: 'Original' },
];

export default function UnboxingAnimation() {
  const [step, setStep] = useState(0); // 0: initial, 1: unboxing, 2: revealing, 3: happy
  const [flavorIndex, setFlavorIndex] = useState(0);

  useEffect(() => {
    if (step === 2) {
      const timer = setInterval(() => {
        setFlavorIndex((prev) => {
          if (prev >= FLAVORS.length - 1) {
            clearInterval(timer);
            setTimeout(() => setStep(3), 1000);
            return prev;
          }
          return prev + 1;
        });
      }, 400);
      return () => clearInterval(timer);
    }
  }, [step]);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="max-w-4xl mx-auto glass rounded-[3rem] p-12 md:p-20 relative"
        >
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="space-y-8"
              >
                <div className="w-24 h-24 bg-pepsi-blue-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Gift size={40} className="text-pepsi-cyan animate-bounce" />
                </div>
                <h2 className="font-display font-black text-4xl md:text-6xl uppercase italic tracking-tighter">
                  The Ultimate <br />
                  <span className="text-stroke">Unboxing.</span>
                </h2>
                <p className="text-white/40 font-medium max-w-sm mx-auto uppercase tracking-widest text-[10px]">
                  Experience the pulse through the eyes of the generation.
                </p>
                <button
                  onClick={() => setStep(1)}
                  className="px-12 py-6 bg-pepsi-blue-accent text-white font-black uppercase italic tracking-[0.2em] text-xs rounded-full hover:scale-105 transition-transform"
                >
                  Start Unboxing
                </button>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="box"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -100 }}
                className="relative"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, -2, 2, -2, 2, 0],
                    scale: [1, 1.05, 1, 1.05, 1]
                  }}
                  transition={{ duration: 0.5, repeat: 3 }}
                  onAnimationComplete={() => setStep(2)}
                  className="cursor-pointer"
                >
                  <Package size={160} className="mx-auto text-pepsi-cyan" />
                </motion.div>
                <motion.p 
                  animate={{ 
                    opacity: [0.4, 1, 0.4],
                    scale: [0.98, 1, 0.98],
                    textShadow: [
                      "0 0 0px rgba(0, 243, 255, 0)",
                      "0 0 15px rgba(0, 243, 255, 0.6)",
                      "0 0 0px rgba(0, 243, 255, 0)"
                    ]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mt-8 text-pepsi-cyan font-black uppercase tracking-[0.3em] text-xs"
                >
                  Opening Special Delivery...
                </motion.p>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="reveal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-3 md:grid-cols-5 gap-4"
              >
                {FLAVORS.slice(0, flavorIndex + 1).map((flavor, index) => (
                  <motion.div
                    key={flavor.name}
                    initial={{ scale: 0, y: 50, rotate: -45 }}
                    animate={{ scale: 1, y: 0, rotate: 0 }}
                    className="aspect-[2/3] rounded-2xl flex flex-col items-center justify-center p-4 relative group"
                    style={{ backgroundColor: flavor.color }}
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                    <div className="w-10 h-20 bg-white/20 rounded-lg mb-2 flex flex-col justify-between p-1">
                        <div className="w-full h-1 bg-white/30 rounded" />
                        <div className="w-full h-4 bg-white/10 rounded" />
                    </div>
                    <span className="text-[8px] font-black uppercase text-center text-white/90 leading-tight">
                      {flavor.name}
                    </span>
                    {index === flavorIndex && (
                        <motion.div 
                            className="absolute -inset-2 border-2 border-pepsi-cyan rounded-3xl"
                            layoutId="ring"
                        />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="happy"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-10"
              >
                <div className="relative inline-block">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                            opacity: 1, 
                            scale: [1, 1.2, 1],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-[120px] filter drop-shadow-2xl"
                    >
                        🤩
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ scale: [1, 1.5, 1], opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <div className="w-40 h-40 bg-pepsi-cyan/20 rounded-full blur-3xl animate-pulse" />
                    </motion.div>
                </div>
                
                <div className="space-y-4">
                    <h3 className="font-display font-black text-5xl uppercase italic tracking-tighter">
                        Complete <span className="text-pepsi-cyan">Euphoria.</span>
                    </h3>
                    <p className="text-white/40 text-sm font-medium max-w-md mx-auto">
                        A flavor for every story. From classic legacy to the bold future of zero sugar.
                    </p>
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={() => setStep(0)}
                        className="px-8 py-4 border border-white/10 text-white font-black uppercase italic tracking-widest text-[10px] rounded-full hover:bg-white/5"
                    >
                        Re-discover
                    </button>
                    <a
                        href="#products"
                        className="px-8 py-4 bg-white text-black font-black uppercase italic tracking-widest text-[10px] rounded-full hover:bg-pepsi-cyan"
                    >
                        Shop The Lineup
                    </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Energy Particles during Reveal */}
          {step === 2 && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: "50%", y: "50%" }}
                        animate={{ 
                            opacity: [0, 1, 0],
                            x: `${Math.random() * 100}%`,
                            y: `${Math.random() * 100}%`,
                            scale: [0, 1.5, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="absolute w-2 h-2 bg-pepsi-cyan rounded-full blur-sm"
                    />
                ))}
            </div>
          )}
        </motion.div>

        {/* Brand Connection Label */}
        <div className="mt-12 flex items-center justify-center gap-10">
            <div className="flex flex-col items-center">
                <span className="text-4xl font-black italic">ULTIMATE</span>
                <span className="text-[8px] font-bold text-white/20 uppercase tracking-[0.4em]">Lineup</span>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div className="flex flex-col items-center">
                <span className="text-4xl font-black italic">9 Flavors</span>
                <span className="text-[8px] font-bold text-white/20 uppercase tracking-[0.4em]">Zero Compromise</span>
            </div>
        </div>
      </div>
    </section>
  );
}
