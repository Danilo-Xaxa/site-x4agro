import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({
  children,
  subtitle,
  className = 'text-center mb-16',
  titleClassName = '',
  subtitleClassName = '',
  dark = false,
}) => {
  const defaultTitleColor = dark ? 'text-white' : 'text-escuro';
  const defaultSubtitleColor = dark ? 'text-white/70' : 'text-escuro/70';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${defaultTitleColor} ${titleClassName}`}>
        {children}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl mx-auto leading-relaxed ${defaultSubtitleColor} ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
