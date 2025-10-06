"use client";

import { motion } from 'framer-motion';
import { Crown, Shield } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[var(--parchment)] border-t border-[var(--gold-light)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <Crown className="h-6 w-6 text-[var(--gold-primary)]" />
              <h3 className="royal-title text-xl">Dobry Król</h3>
            </div>
            <p className="text-[var(--foreground)]/80 text-sm leading-relaxed">
              Twój zaufany doradca w sprzedaży nieruchomości. 
              Z królewską troską dbamy o każdy szczegół Twojej transakcji.
            </p>
            <div className="flex items-center space-x-2 text-[var(--gold-muted)]">
              <Shield className="h-4 w-4" />
              <span className="text-sm">Licencjonowany pośrednik</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="royal-title text-lg medieval-decoration">Nawigacja</h4>
            <nav className="space-y-2">
              {[
                { href: '/', label: 'Strona Główna' },
                { href: '/jak-sprzedajemy', label: 'Jak Sprzedajemy' },
                { href: '/faq', label: 'FAQ' },
                { href: '/kontakt', label: 'Kontakt' },
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="block text-[var(--foreground)]/70 hover:text-[var(--gold-dark)] transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="royal-title text-lg medieval-decoration">Usługi</h4>
            <ul className="space-y-2">
              {[
                'Wycena nieruchomości',
                'Przygotowanie dokumentów',
                'Marketing nieruchomości',
                'Negocjacje z kupującymi',
                'Wsparcie prawne',
                'Obsługa transakcji'
              ].map((service) => (
                <li key={service} className="text-[var(--foreground)]/70 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="mt-12 pt-8 border-t border-[var(--gold-light)] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-sm text-[var(--foreground)]/60">
            © 2024 Dobry Król. Wszystkie prawa zastrzeżone.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-[var(--foreground)]/60 hover:text-[var(--gold-dark)] transition-colors">
              Polityka Prywatności
            </Link>
            <Link href="/terms" className="text-[var(--foreground)]/60 hover:text-[var(--gold-dark)] transition-colors">
              Regulamin
            </Link>
            <Link href="/cookies" className="text-[var(--foreground)]/60 hover:text-[var(--gold-dark)] transition-colors">
              Pliki Cookie
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;