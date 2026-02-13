import React from 'react';
import { Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-verde-escuro text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-black tracking-tight">
                <span className="text-marrom">X4</span>
                <span className="text-white">AGRO</span>
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              X4AGRO — Compliance e Governança para o Agronegócio
              <br />
              Uma vertical X4PAY Assessoria
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
                href="mailto:contato@x4payassessoria.com"
                className="flex items-center gap-3 text-white/70 hover:text-verde-claro transition-colors text-sm"
              >
                <Mail size={16} />
                contato@x4payassessoria.com
              </a>
              <a
                href="https://www.x4payassessoria.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-verde-claro transition-colors text-sm"
              >
                <Globe size={16} />
                www.x4payassessoria.com
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
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
            &copy; 2026 X4PAY Assessoria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
