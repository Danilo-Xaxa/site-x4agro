import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Leaf, Shield, TrendingUp } from 'lucide-react';

const floatingElements = [
  { icon: Leaf, size: 80, top: '15%', left: '85%', delay: 0, duration: 7 },
  { icon: Shield, size: 50, top: '70%', left: '90%', delay: 1.5, duration: 8 },
  { icon: TrendingUp, size: 40, top: '25%', left: '75%', delay: 3, duration: 6 },
  { icon: Leaf, size: 60, top: '60%', left: '80%', delay: 2, duration: 9 },
];

const stats = [
  { value: 'R$ 34.8 MM', label: 'em fraudes nos casos analisados' },
  { value: '90 dias', label: 'para implementar o programa' },
  { value: '100%', label: 'personalizado para sua operação' },
];

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-escuro via-verde-escuro to-verde-medio" />
      <div className="absolute inset-0 bg-gradient-to-t from-escuro/50 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzAtOS45NDEtOC4wNTktMTgtMTgtMThTMCA4LjA1OSAwIDE4czguMDU5IDE4IDE4IDE4IDE4LTguMDU5IDE4LTE4eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      {/* Glow effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-verde-claro/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-verde-medio/10 rounded-full blur-3xl" />

      {/* Floating decorative elements */}
      {floatingElements.map((el, i) => {
        const Icon = el.icon;
        return (
          <motion.div
            key={i}
            className="absolute text-white/5 hidden lg:block"
            style={{ top: el.top, left: el.left }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: el.delay,
            }}
          >
            <Icon size={el.size} />
          </motion.div>
        );
      })}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-verde-claro/20 border border-verde-claro/30 text-verde-claro text-sm font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm">
              <Shield size={14} />
              Compliance e Governança
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1]"
          >
            O Agronegócio
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-verde-claro to-amarelo">
              Evoluiu.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-2xl sm:text-3xl font-display italic text-white/70"
          >
            A sua gestão também precisa!
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl"
          >
            O sucesso no campo hoje vai além da safra. Envolve navegar um cenário
            complexo de regulamentações, mercado e riscos internos. Esta é a nova
            fronteira da gestão rural.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contato"
              className="group inline-flex items-center gap-2 bg-verde-claro hover:bg-white hover:text-verde-escuro text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 text-lg shadow-lg shadow-verde-claro/25 hover:shadow-xl hover:shadow-white/20"
            >
              Agende seu Diagnóstico Gratuito
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#compliance"
              className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-lg hover:bg-white/5"
            >
              Saiba Mais
              <ChevronDown size={20} />
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex flex-wrap gap-8 lg:gap-12"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-white">
                  {stat.value}
                </span>
                <span className="text-sm text-white/40 mt-1">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-white/30" size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
