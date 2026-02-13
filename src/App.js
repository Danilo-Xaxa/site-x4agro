import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ComplianceSection from './components/ComplianceSection';
import PilaresSection from './components/PilaresSection';
import CasosReaisSection from './components/CasosReaisSection';
import AutoavaliacaoSection from './components/AutoavaliacaoSection';
import ComparativoSection from './components/ComparativoSection';
import ProgramaSection from './components/ProgramaSection';
import RetornoSection from './components/RetornoSection';
import TimelineSection from './components/TimelineSection';
import ContatoSection from './components/ContatoSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <ComplianceSection />
        <PilaresSection />
        <CasosReaisSection />
        <AutoavaliacaoSection />
        <ComparativoSection />
        <ProgramaSection />
        <RetornoSection />
        <TimelineSection />
        <ContatoSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
