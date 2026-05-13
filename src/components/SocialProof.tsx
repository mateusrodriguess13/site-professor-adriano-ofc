import React from 'react';
import { FadeIn } from '../lib/utils';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Eu tava num momento muito perdido, sem saber qual rumo tomar na carreira e na vida. A mentoria do Adriano foi um divisor de águas. Ele não passa a mão na cabeça, ele te mostra o que você precisa ver. Hoje me sinto com clareza e coragem.",
    author: "Marcelo S.",
    role: "Empreendedor",
  },
  {
    content: "Sempre fui muito ansiosa e deixava o medo dominar minhas decisões. O conteúdo e a mentoria funcionaram como uma bússola. Aprendi a silenciar o ruído interno e focar no que realmente importa. Minha mentalidade é outra.",
    author: "Juliana Mendes",
    role: "Professora",
  },
  {
    content: "O que mais me chamou a atenção foi a humanidade. Não é aquele papo de coach genérico, sabe? É profundo, pé no chão e dói às vezes, mas é aquela dor que faz a gente crescer. Sou muito grato por essa transformação.",
    author: "Rodrigo Farias",
    role: "Gerente de Projetos",
  }
];

export const SocialProof = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
            Vidas transformadas
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            O que as pessoas dizem após aplicarem as ferramentas para construir uma mente inabalável.
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 relative text-center">
            <Quote className="h-12 w-12 text-brand-gold/20 absolute top-8 left-1/2 -translate-x-1/2" />
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-[Playfair_Display,serif] italic mb-8 relative z-10 pt-8">
              "Professor Adriano foi meu mentor desde cedo. Tive a oportunidade de trabalhar com ele, onde ele me ensinou a viver uma vida com mais propósito e coerência. Seus livros me ajudaram e me ajudam até hoje."
            </p>
            <div>
              <div className="font-bold text-lg text-slate-900">Darlan Rocha</div>
              <div className="text-sm font-medium text-brand-gold mt-1">Coach em Desenvolvimento Humano</div>
            </div>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <FadeIn key={i} delay={0.2 + (0.1 * i)} className="flex">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col h-full relative">
                <Quote className="h-8 w-8 text-brand-gold/30 absolute top-8 left-8" />
                <p className="text-slate-600 leading-relaxed relative z-10 pt-8 flex-grow">
                  "{testimonial.content}"
                </p>
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <div className="font-semibold text-brand-blue">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
