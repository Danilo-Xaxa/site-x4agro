import React from 'react';
import { motion } from 'framer-motion';
import { Search, Hammer, Rocket } from 'lucide-react';

const etapas = [
  {
    icon: Search,
    periodo: 'Dias 1-30',
    titulo: 'Diagnóstico e mapeamento de riscos',
    descricao: 'Realizamos um mergulho profundo nos seus processos atuais para identificar as principais vulnerabilidades e pontos de melhoria.',
    badge: 'ETAPA 1',
  },
  {
    icon: Hammer,
    periodo: 'Dias 31-60',
    titulo: 'Construção do programa',
    descricao: 'Desenvolvemos as políticas, controles internos e a estrutura do canal de denúncias, tudo sob medida para a sua operação.',
    badge: 'ETAPA 2',
  },
  {
    icon: Rocket,
    periodo: 'Dias 61-90',
    titulo: 'Implementação e treinamento',
    descricao: 'Colocamos os controles em prática, treinamos as equipes-chave (gestores e familiares) e iniciamos o monitoramento contínuo.',
    badge: 'ETAPA 3',
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-20 lg:py-28 bg-[#F5F0ED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-escuro">
            Nosso processo é <span className="text-verde-escuro">claro e ágil</span> do
            início ao fim.
          </h2>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-verde-escuro/20 rounded-full" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute top-24 left-0 right-0 h-1 bg-verde-escuro rounded-full origin-left"
            />

            <div className="grid grid-cols-3 gap-8">
              {etapas.map((etapa, i) => {
                const Icon = etapa.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.3 }}
                    className="text-center"
                  >
                    <span className="inline-block bg-verde-escuro text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                      {etapa.badge}
                    </span>
                    <div className="w-16 h-16 bg-verde-escuro rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Icon size={28} className="text-white" />
                    </div>
                    <p className="text-verde-medio font-bold text-sm mb-2">{etapa.periodo}</p>
                    <h3 className="text-lg font-bold text-escuro mb-3">{etapa.titulo}</h3>
                    <p className="text-escuro/60 text-sm leading-relaxed">{etapa.descricao}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {etapas.map((etapa, i) => {
            const Icon = etapa.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-verde-escuro rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-white" />
                  </div>
                  {i < etapas.length - 1 && (
                    <div className="w-0.5 flex-1 bg-verde-escuro/20 mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <span className="inline-block bg-verde-escuro text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                    {etapa.badge}
                  </span>
                  <p className="text-verde-medio font-bold text-sm mb-1">{etapa.periodo}</p>
                  <h3 className="text-lg font-bold text-escuro mb-2">{etapa.titulo}</h3>
                  <p className="text-escuro/60 text-sm leading-relaxed">{etapa.descricao}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
