import { useState } from 'react';
import { GALLERY_IMGS } from '../data';
import { useReveal } from '../hooks/useReveal';
import PalluDivider from './PalluDivider';

const LABELS = {
  en: {
    eyebrow: 'Fabrics & Finishes',
    heading: 'Gallery',
    sub: 'A glimpse of the colours, weaves and styles we bring to Addanki.',
  },
  te: {
    eyebrow: 'వస్త్రాలు & ముగింపు',
    heading: 'గ్యాలరీ',
    sub: 'మేము అద్దంకికి తీసుకొచ్చే రంగులు, నేత శైలులు ఒక క్షణం చూడండి.',
  },
};

export default function Gallery({ lang }) {
  const headRef = useReveal(0.1);
  const [lightbox, setLightbox] = useState(null);

  const { eyebrow, heading, sub } = LABELS[lang];

  return (
    <section id="gallery" className="bg-cream-100 py-20">
      <PalluDivider className="mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div ref={headRef} className="reveal mb-10">
          <p className="font-sans text-turmeric-600 text-xs tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
            <span className="w-6 h-px bg-turmeric-600 inline-block" />
            {eyebrow}
          </p>
          <h2 className={`font-serif font-semibold text-maroon-800 leading-tight ${lang === 'te' ? 'telugu text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl'}`}>
            {heading}
          </h2>
          <p className={`text-maroon-500 text-sm mt-3 ${lang === 'te' ? 'telugu' : ''}`}>{sub}</p>
        </div>

        {/* Masonry grid */}
        <div className="masonry">
          {GALLERY_IMGS.map((img, i) => (
            <div
              key={i}
              className="masonry-item group relative overflow-hidden rounded-xl cursor-zoom-in"
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-maroon-900/0 group-hover:bg-maroon-900/20 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white bg-maroon-900/60 rounded-full px-3 py-1 text-xs font-sans">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-maroon-950/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-cream-200 hover:text-white w-10 h-10 flex items-center justify-center rounded-full border border-cream-200/30"
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={lightbox.src.replace('w=800', 'w=1200')}
            alt={lightbox.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
