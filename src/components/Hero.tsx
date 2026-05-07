import React from 'react';
import { motion } from 'motion/react';
import { FadeIn, cn } from '../lib/utils';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToLead = () => {
    document.getElementById('captura')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-white overflow-hidden pt-8 pb-0 lg:pt-16 lg:pb-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-white to-white opacity-60"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          
          <div className="flex flex-col items-start text-left lg:pr-8 pt-0 lg:pt-0">
            <FadeIn>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[1px] w-8 bg-brand-gold"></div>
                  <h2 className="font-[Playfair_Display,serif] text-xl md:text-2xl text-slate-600 italic tracking-wide">
                    Adriano Santos
                  </h2>
                </div>
                <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium text-brand-gold bg-yellow-50/50 ring-1 ring-inset ring-yellow-500/20 tracking-wide">
                  Mentoria & Desenvolvimento
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-brand-blue leading-[1.1]">
                Construa uma <span className="text-brand-gold relative whitespace-nowrap">
                  mente inabalável
                  <span className="absolute bottom-0 md:-bottom-1 left-0 w-full h-[0.1em] bg-yellow-200/40 -z-10 rounded-sm"></span>
                </span><br />
                e viva com propósito
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                Te ajudo a construir uma mente inabalável com ferramentas práticas para uma vida com mais significado. Comece sua jornada aqui.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={scrollToLead}
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-10 py-4 text-base font-semibold text-white shadow-sm hover:bg-slate-800 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
              >
                Começar agora
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={scrollToProducts}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-10 py-4 text-base font-semibold text-brand-blue ring-1 ring-inset ring-slate-200 hover:bg-slate-50 transition-all duration-300"
              >
                Ver conteúdos
              </button>
            </FadeIn>
          </div>

          <FadeIn delay={0.4} className="relative mx-auto w-full max-w-lg lg:max-w-none lg:h-full flex items-end justify-center lg:justify-end">
            <div className="relative flex items-end justify-center w-full h-[400px] sm:h-[500px] lg:h-[700px]">
               <img
                src="/adriano.png?v=1"
                alt="Adriano Santos"
                className="absolute bottom-0 w-auto h-full max-h-full object-contain object-bottom drop-shadow-2xl z-10"
                loading="eager"
               />
              {/* Decorative element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 lg:w-80 lg:h-80 bg-brand-yellow/30 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-slate-50 to-transparent z-20 pointer-events-none"></div>
            </div>
          </FadeIn>
          
        </div>
      </div>
    </section>
  );
};
