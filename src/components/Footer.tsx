import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Youtube, Globe, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-black border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pepsi-blue via-white to-pepsi-red relative overflow-hidden flex items-center justify-center p-1">
                 <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                    <span className="text-[10px] font-black text-pepsi-blue tracking-tighter">PEPSI</span>
                 </div>
              </div>
              <span className="font-display font-black text-2xl tracking-tighter">PEPSI</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Always bold. Always refreshing. Join the movement and experience the pulse of the generation.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#00E0FF' }}
                  className="w-10 h-10 rounded-full glass border-white/10 flex items-center justify-center text-white/40 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-display font-black text-xs uppercase tracking-[0.4em] mb-10 text-white/20">Products</h5>
            <ul className="flex flex-col gap-4">
              {[
                { name: 'Pepsi Original', link: '#products' },
                { name: 'Pepsi Zero Sugar', link: '#products' },
                { name: 'Nitro Pepsi', link: '#products' },
                { name: 'Store Locator', link: '#locator' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white flex items-center justify-between group transition-colors">
                    {item.name} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-display font-black text-xs uppercase tracking-[0.4em] mb-10 text-white/20">Corporate</h5>
            <ul className="flex flex-col gap-4">
              {[
                { name: 'Pepsi Culture', link: '#stories' },
                { name: 'Moments Hub', link: '#moments' },
                { name: 'Campaigns', link: '#culture' },
                { name: 'pep+ Impact', link: '#stories' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white flex items-center justify-between group transition-colors">
                    {item.name} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass p-10 rounded-[2rem] border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-pepsi-blue opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
            <h5 className="font-display font-black text-xs uppercase tracking-[0.4em] mb-6 text-white/20">Newsletter</h5>
            <p className="text-sm text-white/60 font-bold mb-8">Get early access to exclusive drops and flavor news.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-xs font-black tracking-widest outline-none focus:border-white transition-all placeholder:text-white/20"
              />
              <button className="mt-4 w-full py-4 bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-pepsi-cyan transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
          
          <div className="flex items-center gap-4 py-2 px-6 glass rounded-full">
            <Globe size={14} className="text-white/40" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">United States / English</span>
          </div>
        </div>

        <div className="mt-12 text-center text-[10px] font-black uppercase tracking-[1em] text-white/10">
          © 2024 PEPSICO INC.
        </div>
      </div>
    </footer>
  );
}
