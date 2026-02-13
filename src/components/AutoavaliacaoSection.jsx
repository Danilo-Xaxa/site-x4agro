import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CircleCheck, Circle, ArrowRight, AlertTriangle } from 'lucide-react';

const perguntas = [
  'Quantas pessoas têm acesso às contas correntes da empresa hoje?',
  'A empresa tem níveis de hierarquia para aprovar as movimentações bancárias?',
  'Quem assina os relatórios das conferências diárias dos movimentos bancários da empresa?',
  'Sua empresa tem todos os contratos com os fornecedores?',
  'A empresa está em conformidade com leis trabalhistas e ambientais?',
  'Sua empresa tem as devidas políticas de Compliance?',
  'A empresa hoje atende às certificações para a conformidade legal no agronegócio brasileiro?',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const AutoavaliacaoSection = () => {
  const [checked, setChecked] = useState(new Set());

  const toggle = (i) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        next.add(i);
      }
      return next;
    });
  };

  const hesitou = checked.size > 0 && checked.size < perguntas.length;
  const nenhum = checked.size === 0;

  return (
    <section id="autoavaliacao" className="py-20 lg:py-28 bg-verde-escuro">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Sua operação está realmente{' '}
            <span className="text-verde-claro">protegida?</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            Marque as perguntas que você consegue responder com segurança
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-white/50 text-sm">Sua pontuação</span>
            <span className="text-verde-claro font-bold text-sm">
              {checked.size}/{perguntas.length}
            </span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className={`h-full rounded-full transition-colors duration-300 ${
                checked.size === perguntas.length ? 'bg-verde-claro' : checked.size > 0 ? 'bg-amarelo' : 'bg-white/20'
              }`}
              animate={{ width: `${(checked.size / perguntas.length) * 100}%` }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-3"
        >
          {perguntas.map((pergunta, i) => {
            const isChecked = checked.has(i);
            return (
              <motion.button
                key={i}
                variants={itemVariants}
                onClick={() => toggle(i)}
                className={`w-full flex items-start gap-4 rounded-xl p-5 border text-left transition-all duration-300 ${
                  isChecked
                    ? 'bg-verde-claro/10 border-verde-claro/40'
                    : 'bg-white/5 border-white/10 hover:border-amarelo/40 hover:bg-white/10'
                }`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  {isChecked ? (
                    <CircleCheck size={24} className="text-verde-claro" />
                  ) : (
                    <Circle size={24} className="text-white/30" />
                  )}
                </div>
                <p className={`text-lg leading-relaxed transition-colors ${
                  isChecked ? 'text-white' : 'text-white/70'
                }`}>
                  {pergunta}
                </p>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          {(hesitou || nenhum) && (
            <div className="inline-flex items-center gap-2 bg-amarelo/10 border border-amarelo/20 text-amarelo rounded-xl px-6 py-3 mb-6">
              <AlertTriangle size={18} />
              <span className="font-medium">
                {nenhum
                  ? 'Você ainda não marcou nenhuma,sua operação pode estar em risco.'
                  : `Você marcou apenas ${checked.size} de ${perguntas.length}. Há vulnerabilidades a corrigir.`}
              </span>
            </div>
          )}
          {checked.size === perguntas.length && (
            <div className="inline-flex items-center gap-2 bg-verde-claro/10 border border-verde-claro/20 text-verde-claro rounded-xl px-6 py-3 mb-6">
              <CircleCheck size={18} />
              <span className="font-medium">
                Excelente! Mas será que as respostas passariam numa auditoria?
              </span>
            </div>
          )}
          <div>
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 bg-verde-claro hover:bg-white hover:text-verde-escuro text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-lg"
            >
              Fale com um especialista
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AutoavaliacaoSection;
