import { INSTAGRAM, INSTAGRAM_POSTS } from '../data';
import { useReveal } from '../hooks/useReveal';

const LABELS = {
  en: {
    eyebrow: 'Follow Along',
    heading: 'On Instagram',
    sub: `See our latest arrivals and styled looks on Instagram. DM us @${INSTAGRAM} to ask about anything you spot.`,
    cta: `Follow @${INSTAGRAM}`,
  },
  te: {
    eyebrow: 'ఇన్స్టాగ్రామ్‌లో',
    heading: 'మా పేజీ చూడండి',
    sub: `ఇన్స్టాగ్రామ్‌లో కొత్త రాకలు చూడండి. @${INSTAGRAM} కి డిఎం చేయండి.`,
    cta: `@${INSTAGRAM} అనుసరించండి`,
  },
};

export default function InstagramStrip({ lang }) {
  const headRef = useReveal(0.1);
  const c = LABELS[lang];

  return (
    <section id="instagram" className="bg-cream-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={headRef} className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="font-sans text-turmeric-600 text-xs tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
              <InstagramIcon size={14} />
              {c.eyebrow}
            </p>
            <h2 className={`font-serif font-semibold text-maroon-800 leading-tight ${lang === 'te' ? 'telugu text-3xl' : 'text-3xl sm:text-4xl'}`}>
              {c.heading}
            </h2>
          </div>
          <a
            href={`https://instagram.com/${INSTAGRAM}`}
            target="_blank"
            rel="noopener noreferrer"
            id="instagram-follow-btn"
            className="inline-flex items-center gap-2 bg-maroon-800 hover:bg-maroon-700 text-cream-100 font-medium px-5 py-2.5 rounded-full text-sm font-sans transition-colors shrink-0"
          >
            <InstagramIcon size={15} />
            {c.cta}
          </a>
        </div>

        <p className={`text-maroon-500 text-sm mb-8 max-w-lg ${lang === 'te' ? 'telugu' : ''}`}>{c.sub}</p>

        {/* Post grid */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
          {INSTAGRAM_POSTS.map((src, i) => (
            <a
              key={i}
              href={`https://instagram.com/${INSTAGRAM}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={src}
                alt={`Jyothi Boutique Instagram post ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-maroon-900/0 group-hover:bg-maroon-900/40 transition-colors flex items-center justify-center">
                <InstagramIcon size={24} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramIcon({ size = 20, className = 'text-maroon-700' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
