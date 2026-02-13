import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, GraduationCap, Megaphone } from 'lucide-react';

const cards = [
  {
    icon: Shield,
    title: 'Políticas Claras',
    description: 'Cria regras claras para todos os processos financeiros e operacionais.',
  },
  {
    icon: Eye,
    title: 'Controles Internos',
    description: 'Garante que as políticas sejam seguidas.',
  },
  {
    icon: GraduationCap,
    title: 'Treinamentos',
    description: 'Capacita gestores para entender os riscos e saber como agir.',
  },
  {
    icon: Megaphone,
    title: 'Monitoramento e Canal de Denúncias',
    description: 'Verifica se o sistema funciona e oferece um caminho seguro para relatar irregularidades.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ComplianceSection = () => {
  return (
    <section id="compliance" className="py-20 lg:py-28 bg-branco">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-escuro">
            O que é um Programa de{' '}
            <span className="text-verde-escuro">Compliance</span> na prática?
          </h2>
          <p className="mt-6 text-lg text-escuro/70 max-w-3xl mx-auto leading-relaxed">
            É um sistema de gestão inteligente desenhado para proteger seu negócio de
            dentro para fora. É a arquitetura da sua{' '}
            <span className="font-semibold text-marrom">fortaleza!</span>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-white rounded-2xl p-8 border border-verde-escuro/10 hover:border-verde-escuro/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-verde-escuro/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-verde-escuro group-hover:text-white transition-all duration-300">
                  <Icon size={28} className="text-verde-escuro group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-escuro mb-3">{card.title}</h3>
                <p className="text-escuro/60 text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ComplianceSection;
