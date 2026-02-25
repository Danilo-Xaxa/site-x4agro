import { track } from '@vercel/analytics';

export const trackFormSubmit = () => {
  track('contact_form_submit');
};

export const trackWhatsAppClick = (source = 'floating_button') => {
  track('whatsapp_click', { source });
};

export const trackAutoavaliacaoComplete = (score, total) => {
  track('autoavaliacao_complete', { score, total });
};
