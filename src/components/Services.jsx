import { SERVICES } from '../data';
import { useReveal, useStaggerReveal } from '../hooks/useReveal';
import PalluDivider from './PalluDivider';

const LABELS = {
  en: {
    eyebrow: 'What We Do',
    heading: 'Our Services',
    sub: 'From stitching to finishing — everything under one roof at Main Bazar, Addanki.',
  },
  te: {
    eyebrow: 'మేము చేసేవి',
    heading: 'మా సేవలు',
    sub: 'కుట్టు నుండి ఫినిషింగ్ వరకు — అద్దంకి మెయిన్ బజార్‌లో అన్నీ ఒకే చోట.',
  },
};

const SERVICE_ICONS = {
  needle: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 20l8-4 8 4-8-18z"/>
      <path d="M12 6v8"/>
    </svg>
  ),
  shirt: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z"/>
    </svg>
  ),
  margin: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16M4 10h16M4 14h10M4 18h8"/>
      <path d="M18 14l2 2-2 2"/>
    </svg>
  ),
  finish: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
};

export default function Services({ lang }) {
  const headRef  = useReveal(0.1);
  const cardsRef = useStaggerReveal(SERVICES.length);

  const { eyebrow, heading, sub } = LABELS[lang];

  return (
    <section id="services" className="bg-cream-200 py-20">
      <PalluDivider className="mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headRef} className="reveal max-w-2xl mb-14">
          <p className="font-sans text-turmeric-600 text-xs tracking-[0.2em] uppercase mb-3 flex items-center gap-2">
            <span className="w-6 h-px bg-turmeric-600 inline-block" />
            {eyebrow}
          </p>
          <h2 className={`font-serif font-semibold text-maroon-800 leading-tight mb-4 ${lang === 'te' ? 'telugu text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl'}`}>
            {heading}
          </h2>
          <p className={`text-maroon-500 text-base ${lang === 'te' ? 'telugu' : ''}`}>{sub}</p>
        </div>

        {/* Service cards — varied layout: not all same size */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc, i) => (
            <div
              key={svc.icon}
              className={`reveal bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-cream-300 group ${
                i === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              <div className="w-12 h-12 bg-maroon-50 rounded-xl flex items-center justify-center text-maroon-700 mb-5 group-hover:bg-maroon-100 transition-colors">
                {SERVICE_ICONS[svc.icon]}
              </div>
              <h3 className={`font-serif text-maroon-800 font-semibold mb-2 ${lang === 'te' ? 'telugu text-xl' : 'text-xl'}`}>
                {lang === 'te' ? svc.titleTe : svc.title}
              </h3>
              <p className="text-maroon-500 text-sm leading-relaxed font-sans">{svc.desc}</p>
              <p className="mt-4 text-turmeric-600 text-xs font-semibold font-sans tracking-wide">
                Visit or WhatsApp for rates →
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
