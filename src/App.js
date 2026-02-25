import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ErrorBoundary from './components/ErrorBoundary';
import SectionSkeleton from './components/SectionSkeleton';

const ComplianceSection = lazy(() => import('./components/ComplianceSection'));
const PilaresSection = lazy(() => import('./components/PilaresSection'));
const CasosReaisSection = lazy(() => import('./components/CasosReaisSection'));
const AutoavaliacaoSection = lazy(() => import('./components/AutoavaliacaoSection'));
const ComparativoSection = lazy(() => import('./components/ComparativoSection'));
const ProgramaSection = lazy(() => import('./components/ProgramaSection'));
const RetornoSection = lazy(() => import('./components/RetornoSection'));
const TimelineSection = lazy(() => import('./components/TimelineSection'));
const ContatoSection = lazy(() => import('./components/ContatoSection'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));

function App() {
  return (
    <ErrorBoundary>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-verde-escuro focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
        Pular para o conteúdo
      </a>
      <Navbar />

      <main id="main-content">
        <HeroSection />
        <Suspense fallback={<SectionSkeleton />}>
          <ComplianceSection />
          <PilaresSection />
          <CasosReaisSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <AutoavaliacaoSection />
          <ComparativoSection />
          <ProgramaSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <RetornoSection />
          <TimelineSection />
          <ContatoSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
