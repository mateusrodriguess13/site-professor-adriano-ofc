import React from 'react';
import { FadeIn } from '../lib/utils';
import { Users } from 'lucide-react';

export const Community = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="mx-auto w-16 h-16 bg-brand-gold/10 rounded-2xl flex items-center justify-center mb-8">
            <Users className="h-8 w-8 text-brand-gold" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl mb-6">
            Você não está sozinho.
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            Faça parte de uma comunidade exclusiva de pessoas que decidiram não aceitar a mediocridade e viver com verdadeiro propósito e direção.
          </p>
          <button className="inline-flex items-center justify-center bg-brand-blue text-white rounded-xl px-10 py-4 font-semibold text-base hover:bg-slate-800 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5">
            Entrar na comunidade
          </button>
        </FadeIn>
      </div>
    </section>
  );
};
