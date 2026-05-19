import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Eye } from 'lucide-react';

export default function TrendingProducts() {
  const products = [
    {
      name: 'Rose Quartz Energy Stone',
      price: '$39',
      old: '$59',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
      tag: 'Sale'
    },
    {
      name: 'Amethyst Healing Cluster',
      price: '$54',
      old: '$79',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
      tag: 'Popular'
    },
    {
      name: 'Luxury Crystal Bracelet',
      price: '$42',
      old: '$67',
      image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
      tag: 'New'
    },
    {
      name: 'Natural Geode Stone',
      price: '$61',
      old: '$88',
      image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=800&auto=format&fit=crop'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16" id="healing">
      <div className="mb-12 text-center md:text-left">
        <p className="text-[var(--color-primary)] uppercase tracking-[3px] text-sm font-medium">Trending</p>
        <h2 className="text-4xl font-[Playfair_Display] mt-2 dark:text-white">Popular Products</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-[30px] glass-card overflow-hidden hover:-translate-y-3 transition duration-500"
          >
            {/* Tags */}
            {product.tag && (
              <div className="absolute top-4 left-4 z-10 bg-[var(--color-primary)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {product.tag}
              </div>
            )}
            
            {/* Wishlist Button */}
            <div className="absolute top-4 right-4 z-10 bg-white/70 dark:bg-zinc-800/70 backdrop-blur-md rounded-full p-2.5 shadow-md cursor-pointer hover:bg-white hover:text-red-500 transition duration-300 dark:hover:bg-zinc-700">
              <Heart size={18} />
            </div>

            {/* Image Container */}
            <div className="overflow-hidden h-72 relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              {/* Quick Preview Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <button className="bg-white text-[var(--color-text-main)] px-5 py-2.5 rounded-full flex items-center gap-2 font-medium hover:bg-[var(--color-primary)] hover:text-white transition transform translate-y-4 group-hover:translate-y-0 duration-300">
                  <Eye size={16} /> Quick View
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-6 bg-white dark:bg-zinc-900">
              <h3 className="font-semibold text-lg leading-7 dark:text-white truncate">{product.name}</h3>

              <div className="flex items-center gap-3 mt-3">
                <span className="text-[var(--color-primary)] text-xl font-bold">{product.price}</span>
                <span className="line-through text-[var(--color-text-muted)] text-sm">{product.old}</span>
              </div>

              <button className="w-full mt-6 py-3.5 rounded-2xl bg-gradient-to-r from-[var(--color-accent)] to-[#3f5e4b] dark:from-zinc-800 dark:to-zinc-700 text-white hover:shadow-lg hover:-translate-y-1 transition duration-300 flex items-center justify-center gap-2 font-medium">
                <ShoppingBag size={18} /> Add To Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
