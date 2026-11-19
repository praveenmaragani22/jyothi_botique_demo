import { CUSTOM_STEPS, WA_NUMBER, WA_MSG } from '../data';
import { useReveal, useStaggerReveal } from '../hooks/useReveal';
import PalluDivider from './PalluDivider';

const COLLAGE_IMGS = [
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZbeOGZkqqsvJ12Lm_XrLb1950bZ0Buz-tSiy4o2Ccg&s=10', alt: 'Gold zari saree fabric', cls: 'col-span-2 row-span-2 h-72 sm:h-80' },
  { src: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&q=80', alt: 'Stacked folded sarees', cls: 'h-36 sm:h-40' },
  { src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&q=80', alt: 'Fabric texture close up', cls: 'h-36 sm:h-40' },
];

const LABELS = {
  en: {
    eyebrow: 'Made for You',
    heading: 'Your design,\nour craft.',
    sub: 'Have a style in mind? Walk in with a photo, a sketch, or just describe it — we will figure it out together at our Main Bazar store.',
    cta: 'WhatsApp Your Idea',
    stepsHead: 'How it works',
  },
  te: {
    eyebrow: 'మీకోసం తయారు',
    heading: 'మీ డిజైన్,\nమా నైపుణ్యం.',
    sub: 'మీకు నచ్చిన స్టైల్ ఉందా? ఫోటో, స్కెచ్ లేదా వివరణతో మా షాప్‌కి రండి — మేము కలిసి రూపొందిద్దాం.',
    cta: 'మీ ఆలోచన పంపండి',
    stepsHead: 'ఎలా పనిచేస్తుంది',
  },
};

export default function CustomDesigns({ lang }) {
  const headRef  = useReveal(0.1);
  const stepsRef = useStaggerReveal(CUSTOM_STEPS.length);

  const { eyebrow, heading, sub, cta, stepsHead } = LABELS[lang];

  return (
    <section id="custom" className="bg-maroon-900 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Collage left */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-3 grid-rows-3 gap-3 max-w-sm mx-auto lg:mx-0">
              {COLLAGE_IMGS.map((img, i) => (
                <div key={i} className={`overflow-hidden rounded-xl ${img.cls}`}>
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Decorative dot grid */}
            <div
              className="absolute -bottom-8 -left-8 w-40 h-40 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(circle, #d4a017 1.5px, transparent 1.5px)',
                backgroundSize: '12px 12px',
              }}
            />
          </div>

          {/* Text right */}
          <div ref={headRef} className="reveal order-1 lg:order-2">
            <p className="font-sans text-turmeric-400 text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-turmeric-400 inline-block" />
              {eyebrow}
            </p>
            <h2
              className={`font-serif font-semibold text-cream-100 leading-[1.1] mb-5 ${lang === 'te' ? 'telugu text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl'}`}
              style={{ whiteSpace: 'pre-line' }}
            >
              {heading}
            </h2>
            <p className={`text-cream-300 text-base leading-relaxed mb-8 ${lang === 'te' ? 'telugu' : ''}`}>{sub}</p>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              id="custom-wa-btn"
              className={`inline-flex items-center gap-2 bg-turmeric-500 hover:bg-turmeric-400 text-maroon-900 font-semibold px-6 py-3 rounded transition-all hover:shadow-lg hover:-translate-y-0.5 font-sans text-sm mb-12 ${lang === 'te' ? 'telugu' : ''}`}
            >
              <WAIcon />
              {cta}
            </a>

            {/* Steps */}
            <p className={`text-turmeric-300 text-sm font-semibold uppercase tracking-widest mb-5 font-sans ${lang === 'te' ? 'telugu' : ''}`}>
              {stepsHead}
            </p>
            <div ref={stepsRef} className="flex flex-col gap-6">
              {CUSTOM_STEPS.map((step) => (
                <div key={step.num} className="reveal flex gap-5 items-start">
                  <span className="font-serif text-turmeric-500 text-3xl font-bold leading-none shrink-0 w-10">
                    {step.num}
                  </span>
                  <div>
                    <h4 className={`font-serif text-cream-100 text-lg font-semibold mb-1 ${lang === 'te' ? 'telugu' : ''}`}>
                      {lang === 'te' ? step.titleTe : step.title}
                    </h4>
                    <p className="text-cream-400 text-sm leading-relaxed font-sans">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WAIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
