import { useState, useEffect } from 'react';
import { NAV_LINKS, PHONE, WA_NUMBER, WA_MSG } from '../data';

export default function Navbar({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-maroon-900/97 shadow-lg backdrop-blur-sm py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group" aria-label="Jyothi Boutique home">
          <span className="w-9 h-9 rounded-full bg-turmeric-400 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
            <span className="font-serif text-maroon-800 font-bold text-xl leading-none">J</span>
          </span>
          <div className="leading-tight">
            <span className="font-serif font-semibold text-cream-100 text-lg tracking-wide block">Jyothi Boutique</span>
            <span className="text-turmeric-300 text-xs tracking-widest uppercase hidden sm:block">Main Bazar, Addanki</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cream-200 hover:text-turmeric-300 text-sm font-medium tracking-wide transition-colors duration-200 font-sans"
            >
              {lang === 'te' ? link.labelTe : link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language toggle */}
          <button
            onClick={() => setLang(l => l === 'en' ? 'te' : 'en')}
            className="text-xs font-medium border border-turmeric-400/60 text-turmeric-300 hover:bg-turmeric-400/10 px-2.5 py-1 rounded transition-colors hidden sm:block"
            aria-label="Toggle language"
          >
            {lang === 'en' ? 'తెలుగు' : 'English'}
          </button>

          <a
            href={`tel:${PHONE}`}
            className="hidden sm:flex items-center gap-1.5 bg-maroon-700 hover:bg-maroon-600 text-cream-100 text-sm px-3.5 py-1.5 rounded transition-colors"
          >
            <PhoneIcon />
            <span>Call</span>
          </a>

          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-forest-500 hover:bg-forest-600 text-white text-sm px-3.5 py-1.5 rounded transition-colors"
          >
            <WAIcon />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden text-cream-100 p-1"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-maroon-900/98 border-t border-maroon-700 px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-cream-200 hover:text-turmeric-300 font-medium text-base transition-colors"
            >
              {lang === 'te' ? link.labelTe : link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-2 border-t border-maroon-700">
            <button
              onClick={() => { setLang(l => l === 'en' ? 'te' : 'en'); setMenuOpen(false); }}
              className="text-xs font-medium border border-turmeric-400/60 text-turmeric-300 px-3 py-1.5 rounded"
            >
              {lang === 'en' ? 'తెలుగు' : 'English'}
            </button>
            <a href={`tel:${PHONE}`} className="bg-maroon-700 text-cream-100 text-sm px-4 py-1.5 rounded">
              Call
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>
  );
}

function WAIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}
