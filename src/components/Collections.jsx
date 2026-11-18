import { useRef } from 'react';
import { COLLECTIONS } from '../data';
import { useReveal } from '../hooks/useReveal';
import PalluDivider from './PalluDivider';

const LABELS = {
  en: { eyebrow: 'What We Carry', heading: 'Our Collections', sub: 'Scroll to explore — Visit or WhatsApp for rates.' },
  te: { eyebrow: 'మా వద్ద ఉన్నవి', heading: 'మా సేకరణలు', sub: 'స్క్రోల్ చేయండి — ధరలకు వాట్సాప్ చేయండి.' },
};

export default function Collections({ lang }) {
  const headRef  = useReveal(0.1);
  const stripRef = useRef(null);

  const { eyebrow, heading, sub } = LABELS[lang];

  const scrollBy = (dir) => {
    if (stripRef.current) {
      stripRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="collections" className="bg-cream-100 pb-16">
      <PalluDivider className="mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headRef} className="reveal mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="font-sans text-turmeric-600 text-xs tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
              <span className="w-6 h-px bg-turmeric-600 inline-block" />
              {eyebrow}
            </p>
            <h2 className={`font-serif font-semibold text-maroon-800 leading-tight ${lang === 'te' ? 'telugu text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl'}`}>
              {heading}
            </h2>
          </div>
          <p className={`text-maroon-500 text-sm max-w-xs ${lang === 'te' ? 'telugu' : ''}`}>{sub}</p>
        </div>

        {/* Scroll controls */}
        <div className="flex justify-end gap-2 mb-5">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="w-9 h-9 rounded-full border border-maroon-200 hover:border-maroon-400 flex items-center justify-center text-maroon-600 hover:text-maroon-800 transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="w-9 h-9 rounded-full border border-maroon-200 hover:border-maroon-400 flex items-center justify-center text-maroon-600 hover:text-maroon-800 transition-colors"
          >
            →
          </button>
        </div>

        {/* Horizontal scroll strip */}
        <div ref={stripRef} className="collections-scroll pb-4">
          {COLLECTIONS.map((col) => (
            <CollectionCard key={col.id} col={col} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionCard({ col, lang }) {
  return (
    <div
      className="shrink-0 w-72 sm:w-80 scroll-snap-align-start group cursor-default"
      style={{ scrollSnapAlign: 'start' }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-md h-96 sm:h-[420px]">
        <img
          src={col.img}
          alt={col.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${col.color}ee 0%, ${col.color}44 45%, transparent 70%)`,
          }}
        />
        {/* Text */}
        <div className="absolute bottom-0 inset-x-0 p-6">
          <h3 className={`font-serif text-white text-2xl font-semibold mb-1 ${lang === 'te' ? 'telugu' : ''}`}>
            {lang === 'te' ? col.titleTe : col.title}
          </h3>
          <p className="text-white/80 text-sm font-sans leading-snug">{col.desc}</p>
          <p className="mt-3 text-white/60 text-xs font-sans">Visit or WhatsApp for rates</p>
        </div>
      </div>
    </div>
  );
}
