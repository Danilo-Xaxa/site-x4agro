import React from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>X4AGRO — Compliance e Governança para o Agronegócio</title>
        <meta
          name="description"
          content="Proteja seu negócio rural com programas de compliance sob medida. Diagnóstico de riscos, controles internos, auditorias e treinamentos para produtores rurais."
        />
        <meta
          name="keywords"
          content="compliance agronegócio, governança rural, gestão fazenda, controles internos agro, auditoria rural, X4AGRO"
        />
      </Helmet>

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
