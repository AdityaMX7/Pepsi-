import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ChevronRight } from 'lucide-react';

export default function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="stories" ref={containerRef} className="py-24 bg-pepsi-blue relative overflow-hidden">
      {/* Decorative Text Tracks */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap font-display font-black text-[20vw] leading-none uppercase select-none">
            PEPSI CULTURE PEPSI CULTURE PEPSI CULTURE
        </motion.div>
        <motion.div style={{ x: x2 }} className="whitespace-nowrap font-display font-black text-[20vw] leading-none uppercase select-none mt-20">
            MUSIC SPORTS FASHION MUSIC SPORTS FASHION
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-20">
        <div className="w-full lg:w-1/2">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
            >
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-pepsi-red rounded-full blur-[100px] opacity-40" />
                <img 
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070" 
                    alt="Pepsi Culture" 
                    className="rounded-[3rem] w-full h-[600px] object-cover shadow-2xl"
                    referrerPolicy="no-referrer"
                />
                <div className="absolute top-10 right-10 glass p-8 rounded-[2rem] max-w-[240px]">
                    <h4 className="font-display font-black text-4xl mb-2">1893</h4>
                    <p className="text-sm font-medium text-white/70">Redefining refreshing for over a century.</p>
                </div>
            </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
            <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-white/40 font-black uppercase tracking-[0.4em] text-xs mb-6 block"
            >
                Our Legacy
            </motion.span>
            <h2 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter mb-8 italic leading-[0.85]">
                More Than <br /> 
                <span className="text-stroke">A Drink.</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed max-w-xl mb-12 font-medium">
                Established as "Brad's Drink" in 1893 by Caleb Bradham in New Bern, North Carolina, Pepsi has evolved into a global icon of refreshment. We don’t just follow the beat—we set it, standing at the crossroads of music, sports, and culture for over 130 years.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h5 className="font-display font-black text-xl mb-2 uppercase italic text-pepsi-cyan">Sustainability</h5>
                    <p className="text-white/40 text-xs font-medium">With <span className="text-white">pep+ (PepsiCo Positive)</span>, we aim for net-zero emissions by 2040 and 100% rPET packaging by 2030.</p>
                </div>
                <div>
                    <h5 className="font-display font-black text-xl mb-2 uppercase italic text-pepsi-red">Innovation</h5>
                    <p className="text-white/40 text-xs font-medium">From the first widget-tech Nitro Pepsi to cutting-edge flavor infusions, we redefine what a cola can be.</p>
                </div>
            </div>

            <motion.button
                whileHover={{ scale: 1.05, x: 10 }}
                className="mt-12 flex items-center gap-4 group"
            >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-pepsi-blue transition-all">
                    <ChevronRight size={20} />
                </div>
                <span className="font-black uppercase tracking-widest text-xs">Read Executive Story</span>
            </motion.button>
        </div>
      </div>
    </section>
  );
}
