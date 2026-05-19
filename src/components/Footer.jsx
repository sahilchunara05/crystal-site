import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-gray-200/60 dark:border-white/10 pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-12 gap-10 pb-16">
        <div className="md:col-span-4">
          <h3 className="text-3xl font-[Playfair_Display] text-[var(--color-accent)] dark:text-white mb-6">
            CrystalAura
          </h3>
          <p className="text-[var(--color-text-muted)] dark:text-[var(--color-text-dark-muted)] leading-relaxed mb-8 pr-4">
            Luxury healing stones and premium crystal collections designed for modern lifestyles. Elevate your space with our ethically sourced natural wonders.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-[var(--color-bg-light)] dark:bg-zinc-900 flex items-center justify-center text-[var(--color-text-main)] dark:text-white hover:bg-[var(--color-primary)] hover:text-white transition duration-300">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-semibold text-lg mb-6 dark:text-white">Shop</h4>
          <ul className="space-y-4 text-[var(--color-text-muted)] dark:text-[var(--color-text-dark-muted)]">
            {['All Crystals', 'Healing Sets', 'Jewelry', 'Home Decor', 'New Arrivals'].map((item, i) => (
              <li key={i}><a href="#" className="hover:text-[var(--color-primary)] transition">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-semibold text-lg mb-6 dark:text-white">Support</h4>
          <ul className="space-y-4 text-[var(--color-text-muted)] dark:text-[var(--color-text-dark-muted)]">
            {['FAQ', 'Shipping Policy', 'Returns', 'Track Order', 'Contact Us'].map((item, i) => (
              <li key={i}><a href="#" className="hover:text-[var(--color-primary)] transition">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-semibold text-lg mb-6 dark:text-white">Contact Info</h4>
          <ul className="space-y-4 text-[var(--color-text-muted)] dark:text-[var(--color-text-dark-muted)]">
            <li className="flex items-start gap-3">
              <MapPin className="text-[var(--color-primary)] shrink-0 mt-1" size={18} />
              <span>123 Crystal Avenue, Wellness District<br/>Ahmedabad, Gujarat, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-[var(--color-primary)] shrink-0" size={18} />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-[var(--color-primary)] shrink-0" size={18} />
              <span>support@crystalaura.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100 dark:border-white/5 py-8 text-center text-[var(--color-text-muted)] dark:text-[var(--color-text-dark-muted)] text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 CrystalAura. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--color-primary)]">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--color-primary)]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
