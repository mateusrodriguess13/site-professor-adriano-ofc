import React from 'react';
import { FadeIn } from '../lib/utils';
import { Quote, ChevronDown } from 'lucide-react';

export const About = () => {
  return (
    <section id="sobre" className="pt-12 pb-24 lg:pt-16 bg-white relative">
      <div className="absolute inset-0 bg-slate-50/50 skew-y-[-2deg] -z-10 origin-bottom-right"></div>
      
      <div className="w-full flex justify-center mb-20 lg:mb-28">
        <FadeIn delay={0.2} className="flex flex-col items-center gap-3 text-slate-800 animate-bounce cursor-pointer group" onClick={() => {
          const yOffset = -50;
          const element = document.getElementById('historia-content');
          const y = element ? element.getBoundingClientRect().top + window.pageYOffset + yOffset : 0;
          window.scrollTo({top: y, behavior: 'smooth'});
        }}>
          <span className="text-sm md:text-base uppercase tracking-[0.2em] font-bold text-slate-800 group-hover:text-brand-gold transition-colors">Descubra mais</span>
          <ChevronDown className="h-6 w-6 group-hover:text-brand-gold transition-colors" />
        </FadeIn>
      </div>

      <div id="historia-content" className="max-w-4xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
            <FadeIn>
              <h2 className="text-base font-semibold leading-7 text-brand-gold uppercase tracking-wider">A História</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
                Muito além da motivação, um caminho para a transformação real.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.1} className="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed max-w-3xl">
              <p>
                <b>Adriano Santos</b> é um professor e mentor dedicado a ajudar pessoas a desenvolverem uma mente forte, resiliente e alinhada com propósito.
              </p>
              <p>
                Sua missão é transformar vidas por meio de ensinamentos práticos, espirituais e emocionais — ajudando pessoas comuns a superarem o cansaço mental, encontrarem direção e viverem com significado.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-12 w-full max-w-2xl">
               <div className="relative z-10 p-8 bg-white/50 backdrop-blur-sm rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center">
                  <Quote className="h-8 w-8 text-brand-gold mb-6 opacity-60" />
                  <p className="text-xl sm:text-2xl font-medium text-brand-blue italic leading-relaxed font-[Playfair_Display,serif]">
                    "O primeiro passo para a grande transformação acontece no silêncio da sua mente."
                  </p>
                  <div className="mt-8 pt-8 w-full border-t border-slate-100 flex flex-col items-center">
                    <div className="font-[Playfair_Display,serif] text-2xl font-medium text-slate-800 opacity-90">
                      Adriano Santos
                    </div>
                    <div className="text-sm text-slate-500 mt-2 uppercase tracking-widest font-medium">Mentor & Professor</div>
                  </div>
               </div>
            </FadeIn>

      </div>
    </section>
  );
};
