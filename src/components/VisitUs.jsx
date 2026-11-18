import { PHONE, WA_NUMBER, WA_MSG } from '../data';
import { useReveal } from '../hooks/useReveal';
import PalluDivider from './PalluDivider';

const LABELS = {
  en: {
    eyebrow: 'Find Us',
    heading: 'Come visit us\nin Addanki.',
    sub: 'We are right on Main Bazar — easy to find, and we love walk-ins.',
    address: 'Main Bazar, Addanki\nPrakasam District, Andhra Pradesh',
    timings: 'Open daily · 9 AM – 8 PM',
    payments: 'Payments accepted',
    getDir: 'Get Directions',
    callUs: 'Call Us',
    whatsapp: 'WhatsApp',
  },
  te: {
    eyebrow: 'మాను కనుగొనండి',
    heading: 'అద్దంకిలో\nమాను సందర్శించండి.',
    sub: 'మేము మెయిన్ బజార్‌లోనే ఉన్నాం — వెతకడం సులభం, నేరుగా రావచ్చు.',
    address: 'మెయిన్ బజార్, అద్దంకి\nప్రకాశం జిల్లా, ఆంధ్రప్రదేశ్',
    timings: 'రోజూ తెరిచి ఉంటుంది · ఉ.9 – సా.8',
    payments: 'చెల్లింపు విధానాలు',
    getDir: 'దిశలు పొందండి',
    callUs: 'కాల్ చేయండి',
    whatsapp: 'వాట్సాప్',
  },
};

const PAYMENT_METHODS = [
  { label: 'Cash', bg: '#2d6a4f', text: '#fff' },
  { label: 'UPI', bg: '#6b1414', text: '#fefdf0' },
  { label: 'PhonePe', bg: '#5a0a8a', text: '#fff' },
  { label: 'Paytm', bg: '#004c97', text: '#fff' },
];

export default function VisitUs({ lang }) {
  const headRef = useReveal(0.1);
  const mapRef  = useReveal(0.1);

  const c = LABELS[lang];

  return (
    <section id="visit" className="bg-maroon-950 py-20">
      <PalluDivider inverted className="mb-16" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div ref={headRef} className="reveal">
            <p className="font-sans text-turmeric-400 text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
              <span className="w-6 h-px bg-turmeric-400 inline-block" />
              {c.eyebrow}
            </p>
            <h2
              className={`font-serif font-semibold text-cream-100 leading-[1.1] mb-6 ${lang === 'te' ? 'telugu text-3xl sm:text-4xl' : 'text-4xl sm:text-5xl'}`}
              style={{ whiteSpace: 'pre-line' }}
            >
              {c.heading}
            </h2>
            <p className={`text-cream-300 text-base mb-10 ${lang === 'te' ? 'telugu' : ''}`}>{c.sub}</p>

            {/* Address card */}
            <div className="bg-maroon-800/60 border border-maroon-700 rounded-2xl p-6 mb-6">
              <div className="flex gap-4 items-start mb-4">
                <div className="w-10 h-10 bg-turmeric-500 rounded-xl flex items-center justify-center shrink-0">
                  <PinIcon />
                </div>
                <div>
                  <p className={`text-cream-100 font-semibold mb-1 ${lang === 'te' ? 'telugu' : 'font-sans'}`}
                    style={{ whiteSpace: 'pre-line' }}>
                    {c.address}
                  </p>
                  <p className={`text-cream-400 text-sm ${lang === 'te' ? 'telugu' : ''}`}>{c.timings}</p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Addanki+Main+Bazar+Prakasam+Andhra+Pradesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-turmeric-400 hover:text-turmeric-300 text-sm font-semibold font-sans flex items-center gap-1 transition-colors"
              >
                {c.getDir} →
              </a>
            </div>

            {/* Payments */}
            <div className="mb-8">
              <p className={`text-cream-400 text-xs uppercase tracking-widest font-sans mb-3 ${lang === 'te' ? 'telugu' : ''}`}>
                {c.payments}
              </p>
              <div className="flex flex-wrap gap-2">
                {PAYMENT_METHODS.map((p) => (
                  <span
                    key={p.label}
                    style={{ background: p.bg, color: p.text }}
                    className="px-4 py-1.5 rounded-full text-xs font-semibold font-sans"
                  >
                    {p.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 bg-turmeric-500 hover:bg-turmeric-400 text-maroon-900 font-semibold px-6 py-3 rounded transition-all hover:shadow-md font-sans text-sm"
              >
                <PhoneIcon />
                {c.callUs}
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-forest-500 hover:bg-forest-600 text-white font-medium px-6 py-3 rounded transition-all font-sans text-sm"
              >
                <WAIcon />
                {c.whatsapp}
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div ref={mapRef} className="reveal-left">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-maroon-700 h-80 sm:h-96 lg:h-[480px]">
              <iframe
                title="Jyothi Boutique location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30579.21!2d79.9631!3d15.8148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a9b0000000000%3A0x0!2sAddanki%2C+Andhra+Pradesh!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6b1414" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
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
