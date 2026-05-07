import React from 'react';
import { FadeIn } from '../lib/utils';
import { Brain, Flame, Shield, Cross } from 'lucide-react';

const pillars = [
  {
    name: 'Fortalecer sua mente',
    description: 'Construa clareza e foco para enfrentar os desafios modernos com sabedoria e resiliência.',
    icon: Brain,
  },
  {
    name: 'Despertar seu propósito',
    description: 'Descubra a sua verdadeira vocação e alinhe suas ações diárias ao que realmente importa.',
    icon: Flame,
  },
  {
    name: 'Construir disciplina emocional',
    description: 'Aprenda a liderar seus próprios sentimentos e decisões de forma inabalável.',
    icon: Shield,
  },
  {
    name: 'Integrar fé, mentalidade e ação',
    description: 'Uma abordagem holística unindo o lado espiritual à praticidade do dia a dia.',
    icon: Cross,
  },
];

export const Mission = () => {
  return (
    <section className="py-24 bg-brand-blue text-white relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-brand-gold uppercase tracking-wider mb-3">A Promessa</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight">Os 4 Pilares da Transformação</h3>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <FadeIn key={pillar.name} delay={index * 0.1}>
              <div className="group bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50 hover:bg-slate-800 hover:border-brand-gold/30 transition-all duration-300 h-full flex flex-col items-start relative overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl group-hover:bg-brand-gold/20 transition-colors"></div>
                <div className="bg-brand-blue p-3 rounded-2xl shadow-inner border border-slate-700 mb-6 group-hover:scale-110 group-hover:border-brand-gold/30 transition-all duration-300">
                  <pillar.icon className="h-6 w-6 text-brand-gold" />
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">{pillar.name}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
