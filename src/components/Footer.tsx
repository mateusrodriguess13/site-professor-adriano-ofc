import React from 'react';
import { Mail, MessageCircle, Instagram, Youtube } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.34 2.88 2.88 0 0 1 2.31-4.53 2.66 2.66 0 0 1 1.68.53v-3.62a6.37 6.37 0 0 0-1.67-.22A6.33 6.33 0 0 0 3 15.5a6.33 6.33 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1l1.96-4.26Z"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 border-b border-slate-800 pb-12">
          <div className="text-center md:text-left">
            <h3 className="font-[Playfair_Display,serif] text-2xl text-white mb-2">Adriano Santos</h3>
            <p className="text-sm">Mentoria & Desenvolvimento Pessoal</p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.instagram.com/adriano.proposito" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-brand-gold hover:text-white transition-colors" title="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.tiktok.com/@adriano.proposito?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-brand-gold hover:text-white transition-colors" title="TikTok">
              <TikTokIcon className="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/@adriano.proposito" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-brand-gold hover:text-white transition-colors" title="YouTube">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} Adriano Santos. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
