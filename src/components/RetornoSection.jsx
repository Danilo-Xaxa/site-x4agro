import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Eye, Award } from 'lucide-react';

const beneficios = [
  {
    icon: ShieldCheck,
    title: 'Redução de riscos financeiros',
    description: 'Blindagem contra fraudes, desvios e má gestão, protegendo seu caixa e seu patrimônio.',
  },
  {
    icon: TrendingUp,
    title: 'Aumento da credibilidade',
    description: 'Demonstra solidez e governança, facilitando o acesso a crédito com melhores condições.',
  },
  {
    icon: Eye,
    title: 'Maior controle e transparência',
    description: 'Visibilidade total sobre contratos, pagamentos e recebimento de subsídios.',
  },
  {
    icon: Award,
    title: 'Valorização da propriedade',
    description: 'Uma fazenda com governança robusta tem maior valor de mercado e uma reputação sólida, tornando-se um legado mais seguro.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const RetornoSection = () => {
  return (
    <section id="retorno" className="py-20 lg:py-28 bg-verde-escuro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            O Retorno Sobre a <span className="text-verde-claro">Proteção</span>
          </h2>
          <p className="mt-4 text-xl text-white/70">
            Um programa de compliance bem implementado se paga!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12"
        >
          {beneficios.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-verde-claro/30 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-verde-claro/20 rounded-xl flex items-center justify-center mb-6">
                  <Icon size={28} className="text-verde-claro" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{b.title}</h3>
                <p className="text-white/70 leading-relaxed">{b.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default RetornoSection;
