import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Gem, Award, HeadphonesIcon } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <Truck size={32} strokeWidth={1.5} />, title: 'Free Shipping', desc: 'On orders over $100' },
    { icon: <ShieldCheck size={32} strokeWidth={1.5} />, title: 'Secure Payment', desc: '100% safe checkout' },
    { icon: <Gem size={32} strokeWidth={1.5} />, title: 'Natural Stones', desc: 'Ethically sourced' },
    { icon: <Award size={32} strokeWidth={1.5} />, title: 'Certified', desc: 'Premium quality' },
    { icon: <HeadphonesIcon size={32} strokeWidth={1.5} />, title: '24/7 Support', desc: 'Dedicated help' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 border-y border-gray-200/50 dark:border-white/5 my-10">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col items-center text-center group cursor-pointer"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-secondary)] dark:bg-zinc-800 flex items-center justify-center text-[var(--color-accent)] dark:text-[var(--color-primary)] mb-4 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white transition duration-300 shadow-sm">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-[var(--color-text-main)] dark:text-white">{feature.title}</h3>
            <p className="text-xs text-[var(--color-text-muted)] dark:text-[var(--color-text-dark-muted)] mt-1">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
