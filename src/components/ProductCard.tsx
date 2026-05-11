import { motion } from 'motion/react';
import { Product } from '../types';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onClick?: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative cursor-pointer"
      onClick={() => onClick?.(product)}
    >
      <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#111] p-8 flex flex-col items-center justify-center transition-all duration-700 group-hover:bg-[#1a1a1a]">
        {/* Background Accent */}
        <div 
          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700" 
          style={{ background: `radial-gradient(circle at center, ${product.color}, transparent 70%)` }} 
        />
        
        {/* Product Image */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: -5 }}
          className="relative z-10 w-full aspect-square overflow-hidden flex items-center justify-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <motion.img 
  layoutId={`img-${product.id}`}
  src={product.image} 
  alt={product.name}
  className="w-full h-full"
  style={{ 
    objectFit: 'contain',   // 🔥 always show full image
    objectPosition: 'center',
  }}
  animate={{ 
    y: [0, -12, 0],         // 🍎 Apple-style floating
  }}
  transition={{ 
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut"
  }}
  whileHover={{ 
    scale: 1.08,
    rotate: -2
  }}
  referrerPolicy="no-referrer"
/>
        </motion.div>

        {/* Content Overlay */}
        <div className="absolute bottom-10 left-8 right-8 z-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-end justify-between"
          >
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-pepsi-cyan mb-1 block">
                {product.category}
              </span>
              <h3 className="font-display font-black text-2xl uppercase leading-none">
                {product.name}
              </h3>
            </div>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full glass border-white/20 flex items-center justify-center hover:bg-pepsi-cyan hover:text-black transition-colors"
            >
              <Plus size={20} />
            </motion.button>
          </motion.div>
        </div>

        {/* Hover info */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-10 text-center">
            <h3 className="font-display font-black text-3xl uppercase mb-4">{product.name}</h3>
            <p className="text-white/70 text-sm mb-8 leading-relaxed">
                {product.description}
            </p>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-full"
            >
                Learn More
            </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
