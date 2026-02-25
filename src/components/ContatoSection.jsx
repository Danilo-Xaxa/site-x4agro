import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, CONTACT_EMAIL } from '../constants';
import SectionTitle from './SectionTitle';
import { trackFormSubmit } from '../utils/analytics';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (formData) => {
  const errors = {};
  if (!formData.name.trim()) errors.name = 'Nome é obrigatório.';
  if (!formData.email.trim()) {
    errors.email = 'E-mail é obrigatório.';
  } else if (!EMAIL_REGEX.test(formData.email)) {
    errors.email = 'Informe um e-mail válido.';
  }
  const digits = formData.phone.replace(/\D/g, '');
  if (formData.phone && digits.length < 10) {
    errors.phone = 'Telefone incompleto (mínimo 10 dígitos).';
  }
  if (formData.message && formData.message.trim().length < 10) {
    errors.message = 'Mensagem muito curta (mínimo 10 caracteres).';
  }
  return errors;
};

const ContatoSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propriedade: '',
    message: '',
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
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
    if (fieldErrors.phone) {
      setFieldErrors((prev) => ({ ...prev, phone: undefined }));
    }
    if (feedback) setFeedback(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback(null);

    const errors = validate(formData);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsLoading(true);

    try {
      const API_URL = process.env.REACT_APP_API_URL;

      if (!API_URL) {
        setFeedback({
          type: 'error',
          message: 'Erro de configuração do servidor. Entre em contato diretamente pelo WhatsApp.',
        });
        setIsLoading(false);
        return;
      }

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      let response;
      try {
        response = await fetch(`${API_URL}/contact_x4agro`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
          signal: controller.signal,
        });
      } finally {
        clearTimeout(timeoutId);
      }

      const data = await response.json();

      if (response.ok) {
        trackFormSubmit();
        setFeedback({
          type: 'success',
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
        });
        setFormData({ name: '', email: '', phone: '', propriedade: '', message: '' });
        setFieldErrors({});
      } else if (response.status >= 500) {
        throw new Error('Erro interno no servidor. Tente novamente mais tarde.');
      } else {
        throw new Error(data.detail || 'Dados inválidos. Verifique os campos e tente novamente.');
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Erro ao enviar formulário:', error);
      }
      const isTimeout = error.name === 'AbortError';
      const isNetwork = error instanceof TypeError && error.message.includes('fetch');
      setFeedback({
        type: 'error',
        message: isTimeout
          ? 'A requisição demorou muito. Verifique sua conexão e tente novamente.'
          : isNetwork
          ? 'Sem conexão com o servidor. Verifique sua internet ou entre em contato pelo WhatsApp.'
          : error.message || 'Erro inesperado. Tente novamente ou entre em contato pelo WhatsApp.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-lg border outline-none transition-all text-escuro ${
      fieldErrors[field]
        ? 'border-vermelho focus:border-vermelho focus:ring-1 focus:ring-vermelho'
        : 'border-gray-200 focus:border-verde-escuro focus:ring-1 focus:ring-verde-escuro'
    }`;

  return (
    <section id="contato" className="relative py-20 lg:py-28 bg-verde-escuro overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzAtOS45NDEtOC4wNTktMTgtMTgtMThTMCA4LjA1OSAwIDE4czguMDU5IDE4IDE4IDE4IDE4LTguMDU5IDE4LTE4eiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          dark
          className="text-center mb-12"
          subtitle="O primeiro passo é entender suas vulnerabilidades específicas. Agende uma conversa para realizarmos um diagnóstico inicial, sem compromisso."
        >
          Vamos Proteger o Futuro do{' '}
          <span className="text-verde-claro">Seu Negócio?</span>
        </SectionTitle>

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
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white/10 rounded-xl p-5 hover:bg-white/15 transition-all border border-white/10"
            >
              <div className="w-12 h-12 bg-verde-claro rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">WhatsApp</p>
                <p className="text-white/60 text-sm">{WHATSAPP_DISPLAY}</p>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-4 bg-white/10 rounded-xl p-5 hover:bg-white/15 transition-all border border-white/10"
            >
              <div className="w-12 h-12 bg-verde-claro rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail size={22} className="text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">E-mail</p>
                <p className="text-white/60 text-sm">{CONTACT_EMAIL}</p>
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
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="contato-name" className="block text-sm font-medium text-escuro/70 mb-1">
                    Nome *
                  </label>
                  <input
                    id="contato-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass('name')}
                    placeholder="Seu nome"
                    aria-invalid={!!fieldErrors.name}
                    aria-describedby={fieldErrors.name ? 'error-name' : undefined}
                  />
                  {fieldErrors.name && (
                    <p id="error-name" className="mt-1 text-xs text-vermelho">{fieldErrors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contato-email" className="block text-sm font-medium text-escuro/70 mb-1">
                    E-mail *
                  </label>
                  <input
                    id="contato-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass('email')}
                    placeholder="seu@email.com"
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? 'error-email' : undefined}
                  />
                  {fieldErrors.email && (
                    <p id="error-email" className="mt-1 text-xs text-vermelho">{fieldErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="contato-phone" className="block text-sm font-medium text-escuro/70 mb-1">
                    Telefone
                  </label>
                  <input
                    id="contato-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    maxLength={15}
                    className={inputClass('phone')}
                    placeholder="(99) 99999-9999"
                    aria-invalid={!!fieldErrors.phone}
                    aria-describedby={fieldErrors.phone ? 'error-phone' : undefined}
                  />
                  {fieldErrors.phone && (
                    <p id="error-phone" className="mt-1 text-xs text-vermelho">{fieldErrors.phone}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="contato-propriedade" className="block text-sm font-medium text-escuro/70 mb-1">
                    Nome da Propriedade
                  </label>
                  <input
                    id="contato-propriedade"
                    type="text"
                    name="propriedade"
                    value={formData.propriedade}
                    onChange={handleChange}
                    className={inputClass('propriedade')}
                    placeholder="Fazenda..."
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="contato-message" className="block text-sm font-medium text-escuro/70 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="contato-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputClass('message')} resize-none`}
                  placeholder="Conte-nos sobre sua operação..."
                  aria-invalid={!!fieldErrors.message}
                  aria-describedby={fieldErrors.message ? 'error-message' : undefined}
                />
                {fieldErrors.message && (
                  <p id="error-message" className="mt-1 text-xs text-vermelho">{fieldErrors.message}</p>
                )}
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
                  role="alert"
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
