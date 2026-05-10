import { motion } from 'motion/react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';
import { useState } from 'react';

export default function ProductGrid() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Classic', 'Zero', 'Limited'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <section id="flavors" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-pepsi-blue-accent font-black uppercase tracking-[0.5em] text-xs mb-4 block"
            >
              The Lineup
            </motion.span>
            <h2 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter italic leading-[0.85]">
                Electric <br />
                <span className="text-stroke">Flavors.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-pepsi-blue text-white' 
                    : 'glass hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        <div className="mt-20 text-center">
            <motion.button
                whileHover={{ scale: 1.05 }}
                className="group flex flex-col items-center gap-4 transition-all"
            >
                <div className="w-16 h-16 rounded-full glass border-white/20 flex items-center justify-center group-hover:bg-pepsi-blue group-hover:border-pepsi-blue transition-all">
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-4 bg-white rounded-full"
                    />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">View All Flavors</span>
            </motion.button>
        </div>
      </div>
    </section>
  );
}
