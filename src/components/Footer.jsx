import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-verde-escuro text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="mb-4">
              <img
                src="/logos/x4agro-logo.svg"
                alt="X4AGRO"
                className="h-11"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              X4AGRO - Compliance e Governança para o Agronegócio.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5581988143087"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-verde-claro transition-colors text-sm"
              >
                <Phone size={16} />
                (81) 9 8814-3087
              </a>
              <a
                href="mailto:contato@x4agrocompliance.com"
                className="flex items-center gap-3 text-white/70 hover:text-verde-claro transition-colors text-sm"
              >
                <Mail size={16} />
                contato@x4agrocompliance.com
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Saiba mais</h4>
            <div className="space-y-2">
              {[
                { label: 'Compliance', href: '#compliance' },
                { label: 'Riscos', href: '#casos' },
                { label: 'Programa', href: '#programa' },
                { label: 'Processo', href: '#timeline' },
                { label: 'Contato', href: '#contato' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-white/70 hover:text-verde-claro transition-colors text-sm"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-white/50 text-xs">
            &copy; 2026 X4PAY Assessoria LTDA | CNPJ: 59.088.251/0001-12 | Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
