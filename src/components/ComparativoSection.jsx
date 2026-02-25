import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, Star } from 'lucide-react';
import SectionTitle from './SectionTitle';

const reativo = [
  'Custos inesperados com multas e litígios.',
  'Crises de reputação e perda de contratos.',
  'Perdas financeiras por falta de controle.',
  'Incerteza e vulnerabilidade constante.',
];

const estrategico = [
  'Previsibilidade e proteção patrimonial.',
  'Credibilidade com bancos e investidores.',
  'Controle e transparência total sobre a operação.',
  'Crescimento sustentável e valorização do negócio.',
];

const ComparativoSection = () => {
  return (
    <section id="comparativo" className="py-20 lg:py-28 bg-branco">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          Sua gestão é <span className="text-vermelho">reativa</span> ou{' '}
          <span className="text-verde-escuro">estratégica?</span>
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Reativo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="bg-escuro rounded-2xl p-8 lg:p-10 border-2 border-transparent"
          >
            <h3 className="text-xl font-bold text-white mb-2">Modelo Reativo</h3>
            <p className="text-white/40 text-sm mb-8 font-medium">Apagar Incêndios</p>
            <div className="space-y-5">
              {reativo.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-vermelho/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={14} className="text-vermelho" />
                  </div>
                  <p className="text-white/80 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Estratégico */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative bg-verde-escuro rounded-2xl p-8 lg:p-10 border-2 border-verde-claro/40 shadow-lg shadow-verde-claro/10"
          >
            {/* Badge Recomendado */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 bg-verde-claro text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                <Star size={12} fill="currentColor" />
                RECOMENDADO
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">Modelo Estratégico</h3>
            <p className="text-verde-claro/70 text-sm mb-8 font-medium">Construir a Fortaleza</p>
            <div className="space-y-5">
              {estrategico.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-verde-claro/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-verde-claro" />
                  </div>
                  <p className="text-white/80 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparativoSection;
