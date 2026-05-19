import { useState, useEffect } from 'react';
import { MessageCircle, HeadphonesIcon, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingButtons() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50">
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center hover:shadow-green-500/30 transition-shadow"
          title="WhatsApp Support"
        >
          <MessageCircle size={24} />
        </motion.button>
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        <AnimatePresence>
          {showTopBtn && (
            <motion.button 
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white shadow-lg flex items-center justify-center hover:shadow-[var(--color-primary)]/30 transition-shadow"
              title="Scroll to Top"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-[var(--color-accent)] dark:bg-white dark:text-[var(--color-accent)] text-white shadow-lg flex items-center justify-center transition-shadow"
          title="Chat Support"
        >
          <HeadphonesIcon size={24} />
        </motion.button>
      </div>
    </>
  );
}
