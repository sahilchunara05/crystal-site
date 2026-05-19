import { motion } from 'framer-motion';

export default function Categories() {
  const categories = [
    { name: 'Bracelet', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=500&auto=format&fit=crop' },
    { name: 'Rough Stone', img: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?q=80&w=500&auto=format&fit=crop' },
    { name: 'Crystal Chips', img: 'https://images.unsplash.com/photo-1567360425618-1594206637d2?q=80&w=500&auto=format&fit=crop' },
    { name: 'Trees', img: 'https://images.unsplash.com/photo-1596328346141-949176f571e4?q=80&w=500&auto=format&fit=crop' },
    { name: 'Spheres', img: 'https://images.unsplash.com/photo-1606822350761-9c3dbcd51199?q=80&w=500&auto=format&fit=crop' },
    { name: 'Towers', img: 'https://images.unsplash.com/photo-1617462002164-9447e174b105?q=80&w=500&auto=format&fit=crop' },
    { name: 'Evil Eye', img: 'https://images.unsplash.com/photo-1601121853354-e6e866bd2ac0?q=80&w=500&auto=format&fit=crop' },
    { name: 'Geodes', img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=500&auto=format&fit=crop' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16" id="categories">
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-12 gap-4">
        <div>
          <p className="text-[var(--color-primary)] uppercase tracking-[3px] text-sm font-medium">Top Categories</p>
          <h2 className="text-4xl font-[Playfair_Display] mt-2 dark:text-white">Browse Collections</h2>
        </div>

        <button className="hidden md:block px-6 py-3 rounded-2xl border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition duration-300 font-medium">
          View All Categories
        </button>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group glass-card rounded-[28px] overflow-hidden hover:-translate-y-2 transition duration-500 cursor-pointer"
          >
            <div className="overflow-hidden h-48 md:h-56">
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
              />
            </div>

            <div className="p-5 text-center bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
              <h3 className="font-semibold text-lg dark:text-white">{category.name}</h3>
              <p className="text-[var(--color-text-muted)] dark:text-[var(--color-text-dark-muted)] text-sm mt-1">{20 + index} Items</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
