import React from 'react';
import { motion } from 'framer-motion';
import { TreePine, FileCheck, Scan, HardHat, ClipboardCheck } from 'lucide-react';

const pilares = [
  {
    icon: TreePine,
    sigla: 'CAR',
    title: 'Cadastro Ambiental Rural',
    description: 'Registro eletrônico nacional, essencial para a regularização ambiental e cumprimento do Código Florestal.',
  },
  {
    icon: FileCheck,
    sigla: null,
    title: 'Licenciamento Ambiental',
    description: 'Exigência legal para atividades agroindustriais específicas, emitida por órgãos estaduais ou municipais.',
  },
  {
    icon: Scan,
    sigla: 'SISBOV',
    title: 'Rastreabilidade',
    description: 'Sistema de identificação que, embora muitas vezes voluntário, torna-se obrigatório para acesso a mercados específicos.',
  },
  {
    icon: HardHat,
    sigla: 'NRs',
    title: 'Normas Trabalhistas',
    description: 'Cumprimento integral da legislação, incluindo Normas Regulamentadoras de segurança e saúde no trabalho rural.',
  },
  {
    icon: ClipboardCheck,
    sigla: 'MAPA/SIF',
    title: 'Inspeção Sanitária',
    description: 'Registros e inspeções obrigatórias para a produção e comercialização de produtos de origem animal e vegetal, garantindo a segurança alimentar.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PilaresSection = () => {
  return (
    <section id="pilares" className="py-20 lg:py-28 bg-bege-claro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-escuro">
            Pilares <span className="text-verde-escuro">Obrigatórios</span> da Sua Operação
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {pilares.map((pilar, i) => {
            const Icon = pilar.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className={`bg-white rounded-2xl p-8 border-t-4 border-verde-escuro hover:shadow-lg transition-all duration-300 ${
                  i >= 3 ? 'lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-verde-escuro/10 rounded-xl flex items-center justify-center">
                    <Icon size={24} className="text-verde-escuro" />
                  </div>
                  {pilar.sigla && (
                    <span className="text-xs font-bold bg-verde-escuro text-white px-3 py-1 rounded-full">
                      {pilar.sigla}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-escuro mb-3">{pilar.title}</h3>
                <p className="text-escuro/60 text-sm leading-relaxed">{pilar.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PilaresSection;
