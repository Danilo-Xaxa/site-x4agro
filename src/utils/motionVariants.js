// Container variants (stagger de filhos)
export const makeContainerVariants = (stagger = 0.15) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger } },
});

export const containerVariants = makeContainerVariants(0.15);
export const containerVariantsMedium = makeContainerVariants(0.12);
export const containerVariantsFast = makeContainerVariants(0.1);

// Card: fade + sobe y:40 (padrão para cards)
export const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Card rápido: y:40, duration menor
export const cardVariantsFast = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Card médio: y:30 (sobe menos)
export const cardVariantsMedium = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Item: desliza da esquerda (x: -30)
export const itemVariantsX = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

// Item: sobe (y: 30)
export const itemVariantsY = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
