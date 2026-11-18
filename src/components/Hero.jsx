import { useReveal } from '../hooks/useReveal';
import { PHONE, WA_NUMBER, WA_MSG } from '../data';

const HERO_IMG = 'https://images.unsplash.com/photo-1610189020956-4abb33200b66?w=1200&q=85';

const CONTENT = {
  en: {
    eyebrow: 'Main Bazar, Addanki',
    headline: 'Sarees for every\ncelebration.',
    sub: 'From everyday cottons to embellished silks, we have dressed Addanki and its neighbours for every occasion — big and small.',
    cta1: 'Call Us',
    cta2: 'WhatsApp',
    badge: 'Festive Season\nCollection In Store',
  },
  te: {
    eyebrow: 'మెయిన్ బజార్, అద్దంకి',
    headline: 'ప్రతి వేడుకకూ\nచీరలు.',
    sub: 'రోజువారీ పత్తి నుండి అలంకరించిన సిల్క్ వరకు — అద్దంకిలో మేము ప్రతి సందర్భానికి అలంకరించాము.',
    cta1: 'కాల్ చేయండి',
    cta2: 'వాట్సాప్',
    badge: 'పండుగ సీజన్\nసేకరణ వచ్చింది',
  },
};

export default function Hero({ lang }) {
  const textRef  = useReveal(0.1);
  const imgRef   = useReveal(0.1);

  const c = CONTENT[lang];

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-maroon-950 overflow-hidden flex items-center"
    >
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #d4a017 0px, #d4a017 1px,
            transparent 1px, transparent 12px
          )`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-28 lg:py-0 w-full grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen">
        {/* Text side */}
        <div ref={textRef} className="reveal order-2 lg:order-1 pb-8 lg:pb-0 lg:pr-8">
          {/* Eyebrow */}
          <p className="font-sans text-turmeric-400 text-sm tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-turmeric-400 inline-block" />
            {c.eyebrow}
          </p>

          {/* Main headline */}
          <h1
            className={`font-serif font-semibold text-cream-100 leading-[1.08] mb-6 ${
              lang === 'te' ? 'telugu text-4xl sm:text-5xl lg:text-6xl' : 'text-5xl sm:text-6xl lg:text-7xl'
            }`}
            style={{ whiteSpace: 'pre-line' }}
          >
            {c.headline}
          </h1>

          <p className={`text-cream-300 text-base sm:text-lg leading-relaxed mb-10 max-w-lg ${lang === 'te' ? 'telugu' : ''}`}>
            {c.sub}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${PHONE}`}
              id="hero-call-btn"
              className="inline-flex items-center gap-2 bg-turmeric-500 hover:bg-turmeric-400 text-maroon-900 font-semibold px-7 py-3.5 rounded transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 font-sans text-sm tracking-wide"
            >
              <PhoneIcon />
              {c.cta1}
            </a>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              id="hero-wa-btn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border border-cream-200/40 hover:border-cream-200/80 text-cream-100 font-medium px-7 py-3.5 rounded transition-all duration-200 hover:bg-white/5 font-sans text-sm"
            >
              <WAIcon />
              {c.cta2}
            </a>
          </div>

          {/* Trust note */}
          <p className="mt-8 text-cream-400/60 text-xs font-sans">
            Visit or WhatsApp for rates &bull; Cash, UPI, PhonePe & Paytm accepted
          </p>
        </div>

        {/* Image side — asymmetric offset */}
        <div ref={imgRef} className="reveal-left order-1 lg:order-2 relative flex justify-center lg:justify-end">
          <div className="relative">
            {/* Badge */}
            <div className="absolute -top-5 -left-5 z-10 bg-turmeric-500 text-maroon-900 text-xs font-semibold leading-snug px-4 py-3 rounded shadow-lg font-sans text-center rotate-[-3deg]"
              style={{ whiteSpace: 'pre-line' }}
            >
              {c.badge}
            </div>

            {/* Main hero image */}
            <div className="relative w-80 sm:w-96 lg:w-[440px] xl:w-[500px]">
              <img
                src={HERO_IMG}
                alt="Vibrant red festive saree from Jyothi Boutique Addanki"
                className="w-full h-[520px] lg:h-[640px] object-cover rounded-t-full rounded-b-2xl shadow-2xl"
                loading="eager"
              />
              {/* Warm colour overlay */}
              <div className="absolute inset-0 rounded-t-full rounded-b-2xl"
                style={{ background: 'linear-gradient(to top, rgba(74,14,14,0.45) 0%, transparent 55%)' }}
              />
            </div>

            {/* Decorative ring */}
            <div
              className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full border-2 border-turmeric-500/30 pointer-events-none"
            />
            <div
              className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full border border-turmeric-500/15 pointer-events-none"
            />
          </div>
        </div>
      </div>

      {/* Bottom fade to cream */}
      <div className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #fefdf0)' }}
      />
    </section>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
    </svg>
  );
}

function WAIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
