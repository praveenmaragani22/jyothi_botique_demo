import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import CustomDesigns from './components/CustomDesigns';
import Services from './components/Services';
import Gallery from './components/Gallery';
import VisitUs from './components/VisitUs';
import InstagramStrip from './components/InstagramStrip';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

export default function App() {
  const [lang, setLang] = useState('en');

  return (
    <>
      <Navbar lang={lang} setLang={setLang} />

      <main>
        <Hero lang={lang} />
        <Collections lang={lang} />
        <CustomDesigns lang={lang} />
        <Services lang={lang} />
        <Gallery lang={lang} />
        <VisitUs lang={lang} />
        <InstagramStrip lang={lang} />
      </main>

      <Footer lang={lang} />
      <WhatsAppFAB />
    </>
  );
}
