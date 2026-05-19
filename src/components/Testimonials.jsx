import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="bg-[var(--color-secondary)] dark:bg-zinc-900 py-24 px-4 md:px-8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[var(--color-primary)] uppercase tracking-[3px] text-sm font-medium">Testimonials</p>
        <h2 className="text-4xl font-[Playfair_Display] mt-2 dark:text-white">What Customers Say</h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 relative bg-white dark:bg-zinc-800 rounded-[32px] p-10 md:p-14 shadow-xl border border-white/40 dark:border-white/5"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white shadow-lg">
            <Quote size={20} fill="currentColor" />
          </div>

          <div className="flex justify-center gap-1 mb-6 text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>

          <p className="text-xl md:text-2xl leading-relaxed text-[var(--color-text-main)] dark:text-white font-[Playfair_Display] italic">
            “Absolutely stunning crystals and amazing premium packaging. The quality feels luxurious and authentic. The energy in my home has completely shifted since placing the amethyst cluster.”
          </p>

          <div className="mt-8 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-[var(--color-primary)]">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="Customer" className="w-full h-full object-cover" />
            </div>
            <h4 className="font-semibold text-lg dark:text-white">Sophia Anderson</h4>
            <p className="text-[var(--color-primary)] text-sm font-medium">Verified Buyer</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
