import { motion, AnimatePresence } from 'motion/react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';
import { useState } from 'react';
import { X, Trophy, History, Zap } from 'lucide-react';
import { Product } from '../types';

export default function ProductGrid() {
  const [filter, setFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const categories = ['All', 'Classic', 'Zero', 'Limited'];

  const filteredProducts = filter === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  return (
    <section id="products" className="py-24 bg-black relative overflow-hidden">
      {/* Premium Energy Background */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-pepsi-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pepsi-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 relative z-10">
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
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={(p) => setSelectedProduct(p)}
            />
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
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40">Scroll for more</span>
            </motion.button>
        </div>
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              className="relative w-full max-w-6xl glass rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-8 right-8 z-50 w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <X size={20} />
              </button>

              {/* Image Side */}
              <div className="w-full lg:w-1/2 p-12 flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent">
                <div 
                   className="absolute inset-0 opacity-20 blur-[100px]" 
                   style={{ backgroundColor: selectedProduct.color }}
                />
                <div className="w-full h-full max-h-[500px] aspect-square overflow-hidden flex items-center justify-center relative z-10 drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                  <motion.img 
                    layoutId={`img-${selectedProduct.id}`}
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full"
                    style={{ 
                      objectFit: selectedProduct.gridPosition ? 'cover' : 'contain',
                      objectPosition: selectedProduct.gridPosition === 'left' ? '0% center' : 
                                     selectedProduct.gridPosition === 'center' ? '50% center' : 
                                     selectedProduct.gridPosition === 'right' ? '100% center' : 'center',
                      transform: selectedProduct.gridPosition ? 'scale(3)' : 'scale(1)'
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Info Side */}
              <div className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center gap-10">
                <div>
                  <span className="text-pepsi-cyan font-black uppercase tracking-[0.4em] text-xs mb-4 block">
                    {selectedProduct.category} Edition
                  </span>
                  <h2 className="font-display font-black text-5xl md:text-7xl uppercase italic tracking-tighter leading-none mb-6">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-white/60 text-lg leading-relaxed max-w-md">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {selectedProduct.history && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-pepsi-cyan font-black uppercase tracking-widest text-[10px]">
                        <History size={14} /> Origin Story
                      </div>
                      <p className="text-white/40 text-sm leading-relaxed">
                        {selectedProduct.history}
                      </p>
                    </div>
                  )}

                  {selectedProduct.usp && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-pepsi-red font-black uppercase tracking-widest text-[10px]">
                        <Zap size={14} /> Key Highlights
                      </div>
                      <ul className="grid grid-cols-1 gap-2">
                        {selectedProduct.usp.map((u, i) => (
                           <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                              <Trophy size={12} className="text-pepsi-cyan" /> {u}
                           </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-8">
                  <button className="px-10 py-5 bg-pepsi-blue-accent text-white font-black uppercase italic tracking-widest text-xs rounded-full shadow-lg shadow-pepsi-blue-accent/20 hover:scale-105 transition-all">
                    Buy Now
                  </button>
                  <button className="px-10 py-5 border border-white/10 text-white font-black uppercase italic tracking-widest text-xs rounded-full hover:bg-white/5 transition-all">
                    Find Store
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
