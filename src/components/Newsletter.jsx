import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-8 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-[36px] bg-gradient-to-r from-[var(--color-accent)] to-[#3c5a48] dark:from-zinc-800 dark:to-zinc-900 overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop')] opacity-10 mix-blend-overlay object-cover"></div>
        
        <div className="relative z-10 p-10 md:p-20 text-center text-white">
          <p className="uppercase tracking-[3px] text-sm text-[var(--color-primary)] font-medium">Newsletter</p>
          <h2 className="text-4xl md:text-5xl font-[Playfair_Display] mt-4 mb-6">
            Join Our Crystal Community
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Get updates about exclusive collections, healing guides, and premium offers delivered to your inbox.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-3 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="flex-1 px-8 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:bg-white/20 transition backdrop-blur-sm"
            />
            <button className="px-8 py-4 rounded-2xl bg-[var(--color-primary)] hover:bg-[#d96f66] transition font-semibold flex items-center justify-center gap-2">
              Subscribe <Send size={18} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
