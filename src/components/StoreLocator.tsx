import { motion } from 'motion/react';
import { MapPin, Navigation, Coffee, ShoppingCart, Store } from 'lucide-react';
import { useState } from 'react';

export default function StoreLocator() {
  const [zip, setZip] = useState('');

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-pepsi-blue/5 rounded-l-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="glass rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-3xl border-white/5">
          {/* Form Side */}
          <div className="w-full lg:w-2/5 p-12 lg:p-20 flex flex-col justify-center">
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <div className="w-12 h-12 bg-pepsi-blue rounded-2xl flex items-center justify-center mb-8 rotate-12">
                    <MapPin size={24} color="white" />
                </div>
                <h2 className="font-display font-black text-6xl uppercase tracking-tighter mb-6 italic leading-none">
                    Find Your <br />
                    <span className="text-stroke">Spark.</span>
                </h2>
                <p className="text-gray-400 mb-10 text-lg font-medium">
                    Whether you're at the gym, the club, or on the road, your next Pepsi is just around the corner.
                </p>

                <div className="relative group mb-8">
                    <input 
                        type="text" 
                        placeholder="Enter City or Zip Code" 
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 px-8 outline-none focus:border-pepsi-cyan transition-all font-bold placeholder:text-white/20"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-pepsi-blue text-white rounded-xl flex items-center justify-center hover:bg-pepsi-cyan hover:text-black transition-colors">
                        <Navigation size={20} />
                    </button>
                </div>

                <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-3 text-white/40 group cursor-pointer hover:text-white transition-colors">
                        <Store size={18} />
                        <span className="text-xs font-bold uppercase tracking-widest">Retailers</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/40 group cursor-pointer hover:text-white transition-colors">
                        <Coffee size={18} />
                        <span className="text-xs font-bold uppercase tracking-widest">Restaurants</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/40 group cursor-pointer hover:text-white transition-colors">
                        <ShoppingCart size={18} />
                        <span className="text-xs font-bold uppercase tracking-widest">Delivery</span>
                    </div>
                </div>
            </motion.div>
          </div>

          {/* Visualization / Map Side */}
          <div className="w-full lg:w-3/5 bg-[#050505] p-6 lg:p-12">
            <div className="w-full h-[500px] lg:h-full rounded-[2rem] overflow-hidden relative border border-white/5">
                {/* Mock Map Background */}
                <div className="absolute inset-0 grayscale invert opacity-20">
                    <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074" 
                        className="w-full h-full object-cover" 
                        alt="Map"
                        referrerPolicy="no-referrer"
                    />
                </div>
                
                {/* Interactive Points */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: i * 0.2 }}
                        className="absolute w-6 h-6 z-10"
                        style={{ 
                            top: `${20 + Math.random() * 60}%`, 
                            left: `${20 + Math.random() * 60}%` 
                        }}
                    >
                        <div className="absolute inset-0 bg-pepsi-blue rounded-full animate-ping opacity-20" />
                        <div className="w-full h-full bg-pepsi-blue rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                        </div>
                    </motion.div>
                ))}

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 glass px-8 py-4 rounded-full flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">3,420 locations near you</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
