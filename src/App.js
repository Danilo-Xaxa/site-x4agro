import React, { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ErrorBoundary from './components/ErrorBoundary';

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
      <Navbar />

      <main>
        <HeroSection />
        <Suspense fallback={<div className="min-h-screen" />}>
          <ComplianceSection />
          <PilaresSection />
          <CasosReaisSection />
          <AutoavaliacaoSection />
          <ComparativoSection />
          <ProgramaSection />
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
