import { motion } from 'motion/react';
import { CAMPAIGNS } from '../constants';

export default function CampaignBanner() {
  return (
    <section className="py-24 bg-black overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {CAMPAIGNS.map((campaign, i) => (
                    <motion.div
                        key={campaign.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.2 }}
                        className="group relative h-[600px] rounded-[3rem] overflow-hidden cursor-pointer"
                    >
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500" />
                        <motion.img 
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.8 }}
                            src={campaign.image} 
                            alt={campaign.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                        />
                        
                        <div className="absolute bottom-12 left-12 right-12 z-20">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pepsi-cyan mb-4 block">
                                Trending Now
                            </span>
                            <h3 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tighter mb-4 leading-none">
                                {campaign.title}
                            </h3>
                            <p className="text-white/60 text-lg mb-8 max-w-sm">
                                {campaign.subtitle}
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-4 bg-white text-black rounded-full font-black uppercase tracking-widest text-xs"
                            >
                                {campaign.ctaText}
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}
