import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, MapPin, Wheat, DollarSign } from 'lucide-react';

const cases = [
  {
    local: 'Sorriso, MT',
    propriedade: '12.000 hectares',
    producao: 'Soja e Milho',
    faturamento: 'R$ 90 milhões',
    autor: 'Gerente Financeiro',
    metodo: 'Falsificação de notas fiscais de insumos e desvio de pagamentos para contas de "laranjas"',
    prejuizo: 'R$ 4.2 MM',
  },
  {
    local: 'Rio Verde, GO',
    propriedade: '8.500 hectares',
    producao: 'Pecuária de corte (confinamento)',
    faturamento: 'R$ 150 milhões',
    autor: 'Coordenador de Logística',
    metodo: 'Criação de "fretes fantasmas" e conluio com transportadoras para inflar custos e dividir a diferença',
    prejuizo: 'R$ 7.8 MM',
  },
  {
    local: 'Luis Eduardo Magalhães, BA',
    propriedade: '25.000 hectares',
    producao: 'Algodão e Soja',
    faturamento: 'R$ 220 milhões',
    autor: 'Comprador Sênior',
    metodo: 'Falsificação de notas fiscais de insumos e desvio de pagamentos para contas de "laranjas"',
    prejuizo: 'R$ 11 MM',
  },
  {
    local: 'Uberaba, MG',
    propriedade: '4.000 hectares',
    producao: 'Cana-de-açúcar e pecuária de elite',
    faturamento: 'R$ 65 milhões',
    autor: 'Funcionário do Departamento Pessoal',
    metodo: 'Inclusão de "funcionários fantasmas" na folha de pagamento e desvio dos salários ao longo de 5 anos',
    prejuizo: 'R$ 2.5 MM',
  },
  {
    local: 'Cascavel, PR',
    propriedade: '2.800 hectares',
    producao: 'Avicultura e Grãos',
    faturamento: 'R$ 110 milhões',
    autor: 'Parente encarregado das vendas',
    metodo: 'Venda de parte da produção de grãos "por fora" com desvio dos recebíveis para conta pessoal, sem registro contábil',
    prejuizo: 'R$ 9.3 MM',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CaseCard = ({ c }) => (
  <div className="bg-verde-escuro rounded-2xl p-6 text-white hover:shadow-xl hover:shadow-verde-claro/10 transition-all duration-300 h-full flex flex-col">
    <div className="flex items-center gap-2 mb-4">
      <MapPin size={16} className="text-verde-claro" />
      <span className="text-verde-claro font-semibold text-sm">{c.local}</span>
    </div>

    <div className="space-y-2 mb-4">
      <div className="flex items-center gap-2 text-white/70 text-xs">
        <Wheat size={14} className="flex-shrink-0" />
        <span>{c.propriedade} | {c.producao}</span>
      </div>
      <div className="flex items-center gap-2 text-white/70 text-xs">
        <DollarSign size={14} className="flex-shrink-0" />
        <span>Faturamento: {c.faturamento}</span>
      </div>
    </div>

    <div className="mb-4 flex-1">
      <p className="text-xs text-white/50 mb-1">Autor: <span className="text-white/80">{c.autor}</span></p>
      <p className="text-sm text-white/80 leading-relaxed">{c.metodo}</p>
    </div>

    <div className="bg-vermelho/10 border border-vermelho/20 rounded-xl px-4 py-3 text-center">
      <p className="text-xs text-vermelho/70 font-medium">PREJUÍZO</p>
      <p className="text-2xl font-black text-vermelho">{c.prejuizo}</p>
    </div>
  </div>
);

const CasosReaisSection = () => {
  return (
    <section id="casos" className="py-20 lg:py-28 bg-escuro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4">
            <AlertTriangle className="text-vermelho" size={36} />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              O maior risco pode estar{' '}
              <span className="text-vermelho">dentro de casa!</span>
            </h2>
          </div>
          <p className="text-white/50 text-lg mt-4 max-w-2xl mx-auto">
            Casos reais de fraudes no agronegócio brasileiro
          </p>
        </motion.div>

        {/* Cases Grid - first 3 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cases.slice(0, 3).map((c, i) => (
            <motion.div key={i} variants={cardVariants}>
              <CaseCard c={c} />
            </motion.div>
          ))}
        </motion.div>

        {/* Last 2 cards - centered */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto lg:max-w-none lg:grid-cols-2 lg:px-[calc(100%/6)]"
        >
          {cases.slice(3).map((c, i) => (
            <motion.div key={i + 3} variants={cardVariants}>
              <CaseCard c={c} />
            </motion.div>
          ))}
        </motion.div>

        {/* Total */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-vermelho/10 border border-vermelho/20 rounded-2xl px-8 py-4">
            <span className="text-white/60 text-lg">Total dos casos:</span>
            <span className="text-3xl sm:text-4xl font-black text-vermelho">R$ 34.8 MM</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CasosReaisSection;
