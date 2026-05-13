import React from 'react';
import { FadeIn } from '../lib/utils';
import { Download } from 'lucide-react';

export const LeadCapture = () => {
  return (
    <section id="captura" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-medium text-sm mb-6">
            <span role="img" aria-label="presente">🎁</span> EBOOK GRATUITO
          </div>
          
          <h2 className="text-3xl md:text-5xl font-[Playfair_Display,serif] text-slate-900 mb-6 max-w-2xl mx-auto leading-tight">
            Baixe gratuitamente o e-book "Propósito" e comece sua transformação hoje.
          </h2>
          
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Dê o primeiro passo para construir uma mente mais forte, encontrar direção e viver com mais significado.
          </p>

          <a
            href="https://drive.google.com/uc?export=download&id=1HGPGnWslY2e2oDf-DJEn8As1qG_MThyj"
            download
            className="inline-flex justify-center items-center gap-2 bg-slate-900 text-white rounded-xl px-8 py-4 font-semibold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
          >
            <Download className="w-5 h-5" />
            Baixar e-book gratuito
          </a>
        </FadeIn>
      </div>
    </section>
  );
};
