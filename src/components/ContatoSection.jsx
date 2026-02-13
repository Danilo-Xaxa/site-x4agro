import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail } from 'lucide-react';

const ContatoSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propriedade: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (feedback) setFeedback(null);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    let formatted = value;

    if (value.length > 0) {
      if (value.length <= 2) {
        formatted = `(${value}`;
      } else if (value.length <= 7) {
        formatted = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else {
        formatted = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
      }
    }

    setFormData((prev) => ({ ...prev, phone: formatted }));
    if (feedback) setFeedback(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedback(null);

    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

      const response = await fetch(`${API_URL}/api/contato`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFeedback({
          type: 'success',
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        });
        setFormData({ name: '', email: '', phone: '', propriedade: '', message: '' });
      } else {
        throw new Error(data.detail || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setFeedback({
        type: 'error',
        message: 'Erro ao enviar. Tente novamente ou entre em contato por WhatsApp.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contato" className="relative py-20 lg:py-28 bg-verde-escuro overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzAtOS45NDEtOC4wNTktMTgtMTgtMThTMCA4LjA1OSAwIDE4czguMDU5IDE4IDE4IDE4IDE4LTguMDU5IDE4LTE4eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Vamos Proteger o Futuro do{' '}
            <span className="text-verde-claro">Seu Negócio?</span>
          </h2>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            O primeiro passo é entender suas vulnerabilidades específicas. Agende uma
            conversa para realizarmos um diagnóstico inicial, sem compromisso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <a
              href="https://wa.me/5581988143087"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 rounded-xl p-5 hover:bg-white/15 transition-all border border-white/10"
            >
              <div className="w-12 h-12 bg-verde-claro rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">WhatsApp</p>
                <p className="text-white/60 text-sm">(81) 9 8814-3087</p>
              </div>
            </a>

            <a
              href="mailto:contato@x4payassessoria.com"
              className="flex items-center gap-4 bg-white/10 rounded-xl p-5 hover:bg-white/15 transition-all border border-white/10"
            >
              <div className="w-12 h-12 bg-verde-claro rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">E-mail</p>
                <p className="text-white/60 text-sm">contato@x4payassessoria.com</p>
              </div>
            </a>

          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-escuro/70 mb-1">Nome *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-verde-escuro focus:ring-1 focus:ring-verde-escuro outline-none transition-all text-escuro"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-escuro/70 mb-1">E-mail *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-verde-escuro focus:ring-1 focus:ring-verde-escuro outline-none transition-all text-escuro"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-escuro/70 mb-1">Telefone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    maxLength={15}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-verde-escuro focus:ring-1 focus:ring-verde-escuro outline-none transition-all text-escuro"
                    placeholder="(99) 99999-9999"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-escuro/70 mb-1">Nome da Propriedade</label>
                  <input
                    type="text"
                    name="propriedade"
                    value={formData.propriedade}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-verde-escuro focus:ring-1 focus:ring-verde-escuro outline-none transition-all text-escuro"
                    placeholder="Fazenda..."
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-escuro/70 mb-1">Mensagem</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-verde-escuro focus:ring-1 focus:ring-verde-escuro outline-none transition-all text-escuro resize-none"
                  placeholder="Conte-nos sobre sua operação..."
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-verde-escuro hover:bg-verde-medio text-white font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  'Enviando...'
                ) : (
                  <>
                    Agendar Diagnóstico
                    <Send size={18} />
                  </>
                )}
              </button>

              {feedback && (
                <div
                  className={`mt-4 p-4 rounded-lg text-center text-sm font-medium ${
                    feedback.type === 'success'
                      ? 'bg-verde-claro/10 text-verde-escuro'
                      : 'bg-vermelho/10 text-vermelho'
                  }`}
                >
                  {feedback.message}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
