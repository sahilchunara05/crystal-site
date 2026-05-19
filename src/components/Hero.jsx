import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32" id="shop">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Banner */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[32px] bg-gradient-to-br from-[var(--color-secondary)] to-[#ffffff] dark:from-zinc-900 dark:to-zinc-800 p-8 md:p-12 shadow-lg overflow-hidden group border border-white/40 dark:border-white/5"
        >
          <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-md"></div>
          <div className="relative z-10">
            <p className="uppercase text-sm tracking-[4px] text-[var(--color-primary)] mb-3 font-medium">Luxury Collection</p>
            <h1 className="text-4xl md:text-6xl font-[Playfair_Display] leading-tight text-[var(--color-accent)] dark:text-white">
              Healing Energy Crystals
            </h1>
            <p className="mt-5 text-[var(--color-text-muted)] dark:text-[var(--color-text-dark-muted)] max-w-md leading-relaxed">
              Discover premium natural crystals crafted for harmony, wellness, and elegant living. Enhance your aura with our exclusive selection.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--color-primary)] to-[#d86a62] text-white font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Shop Collection
            </motion.button>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/30 dark:bg-white/5 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Right Banner */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative rounded-[32px] overflow-hidden shadow-xl group min-h-[450px]"
        >
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop"
            className="w-full h-full object-cover group-hover:scale-110 transition duration-1000 ease-in-out"
            alt="Crystal"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-10 left-8 right-8 text-white z-10">
            <p className="uppercase tracking-[3px] text-sm text-[var(--color-secondary)]">Premium Stones</p>
            <h2 className="text-4xl font-[Playfair_Display] mt-2 mb-6">Exclusive Crystal Sets</h2>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 rounded-2xl glass text-white font-semibold hover:bg-[var(--color-primary)] hover:border-transparent transition-all duration-300"
            >
              Explore Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
