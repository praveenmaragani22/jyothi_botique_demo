import { PHONE, WA_NUMBER, WA_MSG, NAV_LINKS, INSTAGRAM } from '../data';
import PalluDivider from './PalluDivider';

export default function Footer({ lang }) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-maroon-950 pt-16 pb-8">
      <PalluDivider inverted className="mb-14" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-full bg-turmeric-400 flex items-center justify-center">
                <span className="font-serif text-maroon-800 font-bold text-xl leading-none">J</span>
              </span>
              <div>
                <span className="font-serif font-semibold text-cream-100 text-lg block">Jyothi Boutique</span>
                <span className="text-cream-400 text-xs">Main Bazar, Addanki</span>
              </div>
            </div>
            <p className="text-cream-400 text-sm leading-relaxed max-w-xs mb-5">
              Your neighbourhood saree destination in the heart of Addanki. Trendy styles, custom work, and genuine care — since the beginning.
            </p>
            <div className="flex gap-3">
              <a
                href={`tel:${PHONE}`}
                className="text-cream-300 hover:text-turmeric-400 transition-colors"
                aria-label="Call us"
              >
                <PhoneIcon />
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-300 hover:text-turmeric-400 transition-colors"
                aria-label="WhatsApp"
              >
                <WAIcon />
              </a>
              <a
                href={`https://instagram.com/${INSTAGRAM}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-300 hover:text-turmeric-400 transition-colors"
                aria-label="Instagram"
              >
                <IGIcon />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-serif text-cream-200 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream-400 hover:text-turmeric-400 text-sm transition-colors font-sans"
                  >
                    {lang === 'te' ? link.labelTe : link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-cream-200 font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-cream-400 font-sans">
              <li>
                <span className="block text-cream-500 text-xs uppercase tracking-wider mb-0.5">Phone / WhatsApp</span>
                <a href={`tel:${PHONE}`} className="hover:text-turmeric-400 transition-colors">{PHONE}</a>
              </li>
              <li>
                <span className="block text-cream-500 text-xs uppercase tracking-wider mb-0.5">Instagram</span>
                <a href={`https://instagram.com/${INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="hover:text-turmeric-400 transition-colors">@{INSTAGRAM}</a>
              </li>
              <li>
                <span className="block text-cream-500 text-xs uppercase tracking-wider mb-0.5">Address</span>
                <span>Main Bazar, Addanki<br/>Prakasam District, AP</span>
              </li>
              <li>
                <span className="block text-cream-500 text-xs uppercase tracking-wider mb-0.5">Hours</span>
                <span>Daily 9 AM – 8 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-maroon-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-cream-500 text-xs font-sans">
          <p>© {year} Jyothi Boutique, Addanki. All rights reserved.</p>
          <p className="telugu text-cream-500">జ్యోతి బొటీక్ · అద్దంకి</p>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>
  );
}

function WAIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function IGIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
