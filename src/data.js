// Shared mock data for Jyothi Boutique

export const PHONE = '9666973616';
export const WA_NUMBER = '919666973616';
export const WA_MSG = encodeURIComponent('Hi Jyothi Boutique, I saw your website and want to know about sarees.');
export const INSTAGRAM = 'jyothireddy8437';

export const NAV_LINKS = [
  { label: 'Collections', labelTe: 'సేకరణలు', href: '#collections' },
  { label: 'Custom Designs', labelTe: 'కస్టమ్ డిజైన్లు', href: '#custom' },
  { label: 'Services', labelTe: 'సేవలు', href: '#services' },
  { label: 'Gallery', labelTe: 'గ్యాలరీ', href: '#gallery' },
  { label: 'Visit Us', labelTe: 'సందర్శించండి', href: '#visit' },
];

export const COLLECTIONS = [
  {
    id: 'festive',
    title: 'Festive Sarees',
    titleTe: 'పండుగ చీరలు',
    desc: 'Brilliant silks and zaris for Dasara, Ugadi, and wedding seasons.',
    img: 'https://images.unsplash.com/photo-1610189020956-4abb33200b66?w=600&q=80',
    color: '#6b1414',
  },
  {
    id: 'net-sequin',
    title: 'Net & Sequin',
    titleTe: 'నెట్ & సీక్విన్',
    desc: 'Glittery net and sequinned drapes that catch every light in the room.',
    img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80',
    color: '#1b4332',
  },
  {
    id: 'frilly',
    title: 'Frilly Borders',
    titleTe: 'ఫ్రిల్లీ అంచులు',
    desc: 'Trendy layered-frill borders — the look everyone is asking for right now.',
    img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80',
    color: '#7a5208',
  },
  {
    id: 'daily',
    title: 'Daily Wear',
    titleTe: 'రోజువారీ చీరలు',
    desc: 'Comfortable cottons and soft georgettes for every day, every mood.',
    img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80',
    color: '#b22222',
  },
  {
    id: 'mens',
    title: "Men's Wear",
    titleTe: 'పురుషుల దుస్తులు',
    desc: 'Custom shirts with margin work and tailored ethnic fits for all occasions.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    color: '#1b4332',
  },
];

export const SERVICES = [
  {
    icon: 'needle',
    title: 'Custom Saree Designs',
    titleTe: 'కస్టమ్ చీర డిజైన్లు',
    desc: 'Bring your vision — we turn it into a one-of-a-kind saree crafted just for you.',
  },
  {
    icon: 'shirt',
    title: "Men's Wear",
    titleTe: 'పురుషుల దుస్తులు',
    desc: 'Custom kurtas, sherwanis and casual shirts stitched to your exact measurements.',
  },
  {
    icon: 'margin',
    title: 'Shirt Margin Work',
    titleTe: 'షర్ట్ మార్జిన్ వర్క్',
    desc: 'Decorative margin stitching on collars and cuffs for a refined ethnic finish.',
  },
  {
    icon: 'finish',
    title: 'Saree Finishing & Netting',
    titleTe: 'చీర ఫినిషింగ్ & నెట్టింగ్',
    desc: 'Internal netting for embroidered and beaded sarees — keeps the fabric safe and shape-perfect.',
  },
];

export const CUSTOM_STEPS = [
  {
    num: '01',
    title: 'Share Your Idea',
    titleTe: 'మీ ఆలోచన చెప్పండి',
    desc: 'Walk in or WhatsApp us a photo, sketch, or just a description of what you have in mind.',
  },
  {
    num: '02',
    title: 'Choose Your Fabric',
    titleTe: 'వస్త్రం ఎంచుకోండి',
    desc: 'Pick from our in-store fabric collection. We guide you to the right weave and colour.',
  },
  {
    num: '03',
    title: 'Collect & Celebrate',
    titleTe: 'అందుకోండి & సంతోషపడండి',
    desc: 'Your finished piece is ready. Try it on, make sure it feels perfect, then take it home.',
  },
];

export const GALLERY_IMGS = [
  { src: 'https://images.unsplash.com/photo-1610189020956-4abb33200b66?w=800&q=80', alt: 'Red festive silk saree' },
  { src: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80', alt: 'Embellished saree close up' },
  { src: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80', alt: 'Colourful saree drape' },
  { src: 'https://images.unsplash.com/photo-1620912189868-4b4b0ba91a28?w=800&q=80', alt: 'Gold zari work saree' },
  { src: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80', alt: 'Folded silk sarees stack' },
  { src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=80', alt: 'Fabric texture close-up' },
  { src: 'https://images.unsplash.com/photo-1562158074-4b5bfa2a0f47?w=800&q=80', alt: 'Traditional weave pattern' },
  { src: 'https://images.unsplash.com/photo-1620912189981-00f88e1bb0d1?w=800&q=80', alt: 'Saree border embroidery' },
  { src: 'https://images.unsplash.com/photo-1627481483060-98f2e9c2e9e3?w=800&q=80', alt: 'Blue georgette saree' },
];

export const PAYMENT_ICONS = [
  { label: 'Cash', icon: '💵' },
  { label: 'UPI', icon: '📱' },
  { label: 'PhonePe', icon: '📲' },
  { label: 'Paytm', icon: '💳' },
];

export const INSTAGRAM_POSTS = [
  'https://images.unsplash.com/photo-1610189020956-4abb33200b66?w=400&q=80',
  'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80',
  'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&q=80',
  'https://images.unsplash.com/photo-1620912189868-4b4b0ba91a28?w=400&q=80',
  'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400&q=80',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&q=80',
];
