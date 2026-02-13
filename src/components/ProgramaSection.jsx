import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  FileText,
  BarChart3,
  Settings,
  ClipboardList,
  Megaphone,
  GraduationCap,
} from 'lucide-react';

const itens = [
  {
    icon: Search,
    title: 'Diagnóstico Inicial',
    description: 'Análise detalhada de riscos e processos existentes.',
  },
  {
    icon: FileText,
    title: 'Criação de Políticas',
    description: 'Desenvolvimento de manuais e políticas de conformidade personalizadas.',
  },
  {
    icon: BarChart3,
    title: 'Relatórios de Conformidade',
    description: 'Reports claros e objetivos sobre a saúde do seu sistema de governança.',
  },
  {
    icon: Settings,
    title: 'Controles Internos',
    description: 'Implementação de mecanismos de verificação e aprovação.',
  },
  {
    icon: ClipboardList,
    title: 'Auditorias Periódicas',
    description: 'Verificações regulares para garantir a eficácia e a aderência ao programa.',
  },
  {
    icon: Megaphone,
    title: 'Canal de Denúncias',
    description: 'Estruturação de um canal seguro e confidencial para relatos.',
  },
  {
    icon: GraduationCap,
    title: 'Treinamentos Especializados',
    description: 'Capacitação para gestores e familiares sobre as novas políticas e riscos.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProgramaSection = () => {
  return (
    <section id="programa" className="py-20 lg:py-28 bg-branco">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-escuro">
            Um programa completo para a sua{' '}
            <span className="text-verde-escuro">tranquilidade</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          {itens.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-5 bg-white rounded-xl p-6 border border-verde-escuro/5 hover:border-verde-escuro/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-verde-escuro rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-escuro mb-1">{item.title}</h3>
                  <p className="text-escuro/60 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramaSection;
