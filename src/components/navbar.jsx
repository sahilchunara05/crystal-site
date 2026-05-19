import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Menu, X, Moon, Sun } from 'lucide-react';

export default function Navbar({ toggleDarkMode, isDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Shop', 'Categories', 'Healing', 'Crystals', 'Jewelry', 'Home Decor', 'Gifts', 'Exclusive'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide font-[Playfair_Display] text-[var(--color-accent)] dark:text-[var(--color-secondary)]">
          CrystalAura
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-[var(--color-text-main)] dark:text-[var(--color-text-dark-main)] hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] transition duration-300 group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3 md:gap-4">
          <button 
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-2xl bg-white dark:bg-zinc-800 shadow-md hover:scale-105 transition flex items-center justify-center text-[var(--color-text-main)] dark:text-[var(--color-text-dark-main)]"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="w-10 h-10 rounded-2xl bg-white dark:bg-zinc-800 shadow-md hover:scale-105 transition flex items-center justify-center text-[var(--color-text-main)] dark:text-[var(--color-text-dark-main)]">
            <Search size={18} />
          </button>
          <button className="relative w-10 h-10 rounded-2xl bg-white dark:bg-zinc-800 shadow-md hover:scale-105 transition flex items-center justify-center text-[var(--color-text-main)] dark:text-[var(--color-text-dark-main)]">
            <ShoppingCart size={18} />
            <span className="absolute -top-1 -right-1 bg-[var(--color-primary)] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </button>
          <button 
            className="lg:hidden w-10 h-10 rounded-2xl bg-white dark:bg-zinc-800 shadow-md flex items-center justify-center text-[var(--color-text-main)] dark:text-[var(--color-text-dark-main)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/20 mt-3"
          >
            <div className="flex flex-col py-4 px-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-[var(--color-text-main)] dark:text-[var(--color-text-dark-main)] hover:text-[var(--color-primary)] transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
