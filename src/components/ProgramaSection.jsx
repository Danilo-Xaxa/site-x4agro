import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { containerVariantsFast, itemVariantsY } from '../utils/motionVariants';
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

const ProgramaSection = () => {
  return (
    <section id="programa" className="py-20 lg:py-28 bg-branco">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>
          Um programa completo para a sua{' '}
          <span className="text-verde-escuro">tranquilidade</span>
        </SectionTitle>

        <motion.div
          variants={containerVariantsFast}
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
                variants={itemVariantsY}
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
