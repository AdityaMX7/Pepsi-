import { motion, AnimatePresence } from 'motion/react';
import { Camera, Instagram, Upload, MapPin, X, Heart, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { MOMENTS } from '../constants';

export default function PepsiMoments() {
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);

  return (
    <section id="moments" className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-pepsi-blue-accent font-black uppercase tracking-[0.5em] text-xs mb-4 block"
            >
              The Community
            </motion.span>
            <h2 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter italic leading-[0.85] mb-6">
              Pepsi <br />
              <span className="text-stroke">Moments.</span>
            </h2>
            <p className="text-lg text-white/50 font-medium">
              A pulse check on the generation. Dive into the world of Pepsi through the eyes of our community. Share your rhythm using <span className="text-pepsi-cyan font-bold italic">#PepsiMoments</span> for a chance to be featured.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsSubmitOpen(true)}
            className="px-10 py-5 bg-white text-black font-black uppercase italic tracking-widest text-sm flex items-center justify-center gap-3 self-start md:self-auto shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:bg-pepsi-cyan transition-colors"
          >
            <Upload size={18} /> Submit Yours
          </motion.button>
        </div>

        {/* Moments Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {MOMENTS.map((moment, i) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] aspect-square ${
                i % 3 === 0 ? 'md:col-span-1 md:row-span-1' : ''
              }`}
            >
              <img 
                src={moment.url} 
                alt={`Moment by ${moment.user}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                 <div className="flex items-center justify-between mb-2">
                    <span className="font-display font-black text-sm uppercase italic tracking-wider">{moment.user}</span>
                    <Heart size={16} className="text-pepsi-red fill-current" />
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-bold text-white/60 uppercase tracking-widest leading-none">
                    <MapPin size={10} /> {moment.location}
                 </div>
              </div>
            </motion.div>
          ))}
          
          {/* Social Callout Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="col-span-2 md:col-span-1 bg-pepsi-blue-accent rounded-[2rem] p-8 flex flex-col justify-between group cursor-pointer"
          >
            <div className="flex items-center justify-between">
                <Instagram size={32} />
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-pepsi-blue-accent transition-all">
                    <Camera size={18} />
                </div>
            </div>
            <div>
                <h4 className="font-display font-black text-2xl uppercase italic leading-none mb-4">
                    Tag us on <br />Social
                </h4>
                <p className="text-white/70 text-sm font-medium mb-6">Join 10M+ fans sharing their boldest moments.</p>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] bg-white/20 px-3 py-1.5 rounded-full">#PEPSIMOMENTS</span>
            </div>
          </motion.div>
        </div>

        {/* Moderated Workflow Note */}
        <div className="mt-16 glass rounded-[2rem] p-8 border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-pepsi-cyan shrink-0">
                    <ShieldCheck size={24} />
                </div>
                <div>
                    <h5 className="font-display font-black text-lg uppercase italic mb-1">Safety & Authenticity</h5>
                    <p className="text-xs text-white/40 font-medium max-w-xl">
                        Our moderation team reviews every submission to ensure it aligns with our community standards. Approved content reflects real stories and authentic Pepsi experiences that define our vibrant youth culture.
                    </p>
                </div>
            </div>
            <div className="flex -space-x-4">
                {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-[#222]" />
                ))}
            </div>
        </div>
      </div>

      {/* Submission Modal */}
      <AnimatePresence>
        {isSubmitOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
             <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSubmitOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-xl glass p-10 md:p-14 rounded-[3rem] border-white/10 shadow-5xl"
            >
              <button 
                onClick={() => setIsSubmitOpen(false)}
                className="absolute top-8 right-8 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <h3 className="font-display font-black text-4xl uppercase tracking-tighter italic mb-4 leading-none">
                Submit Your <br />
                <span className="text-stroke">Moment.</span>
              </h3>
              <p className="text-white/40 text-sm font-medium mb-10">
                Upload your photo or video showing how you refresh your rhythm with Pepsi.
              </p>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsSubmitOpen(false); }}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Handle</label>
                        <input type="text" placeholder="@your_handle" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm font-bold outline-none focus:border-pepsi-cyan transition-all" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-white/30 ml-2">Location</label>
                        <input type="text" placeholder="City, Country" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm font-bold outline-none focus:border-pepsi-cyan transition-all" />
                    </div>
                </div>

                <div className="border-2 border-dashed border-white/10 rounded-3xl p-12 text-center group hover:border-pepsi-cyan transition-colors cursor-pointer">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <Upload size={24} className="text-white/40" />
                    </div>
                    <p className="text-xs font-black uppercase tracking-widest text-white/60 mb-2">Drag & Drop Files</p>
                    <p className="text-[10px] font-medium text-white/20 uppercase tracking-widest">or click to browse media</p>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-2xl">
                    <input type="checkbox" className="mt-1 accent-pepsi-cyan" id="terms" required />
                    <label htmlFor="terms" className="text-[10px] font-medium text-white/40 uppercase leading-relaxed">
                        I agree to the <a href="#" className="text-white underline underline-offset-2">Terms of Submission</a> and give PepsiCo permission to use my content in future campaigns.
                    </label>
                </div>

                <button type="submit" className="w-full py-5 bg-pepsi-blue-accent text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-white hover:text-black transition-all">
                    Upload & Submit
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
