import React from 'react';
import { FadeIn } from '../lib/utils';
import { Download, CheckCircle2, AlertCircle, MessageCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, { message: 'Por favor, digite seu nome' }),
  honeypot: z.string().max(0),
});

type FormData = z.infer<typeof schema>;

export const LeadCapture = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    // Substitua pelo número de WhatsApp real do Professor Adriano
    // Exemplo: 55 seguido do DDD e número (ex: 5511999999999)
    const phoneNumber = "5511999999999"; 
    const message = `Olá professor Adriano! Meu nome é ${data.name} e eu gostaria de receber o e-book gratuito 'Propósito'.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="captura" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-[#25D366]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-brand-blue/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        <FadeIn className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 to-slate-900"></div>
          
          <div className="relative z-10">
            <div className="mx-auto w-16 h-16 bg-[#25D366]/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-[#25D366]/30">
              <Download className="h-8 w-8 text-[#25D366]" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Baixe gratuitamente o e-book 'Propósito'
            </h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
              Receba o e-book diretamente no seu WhatsApp e dê o seu primeiro passo para construir uma mente inabalável.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto relative">
              {/* Honeypot field for bot protection */}
              <input type="text" {...register('honeypot')} className="hidden" aria-hidden="true" tabIndex={-1} />
              
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Qual o seu nome?"
                    className={`w-full px-5 py-4 rounded-xl bg-white/5 border text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#25D366] transition-all ${
                      errors.name ? 'border-red-500/50 focus:ring-red-500' : 'border-white/10'
                    }`}
                    {...register('name')}
                  />
                  {errors.name && (
                    <span className="absolute -bottom-6 left-2 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name.message}
                    </span>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#25D366] text-white rounded-xl px-5 py-4 font-semibold text-base hover:bg-[#20b858] transition-all shadow-lg hover:shadow-[#25D366]/20 flex justify-center items-center gap-2 mt-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Receber via WhatsApp
                </button>
              </div>
              
              <p className="mt-6 text-xs text-slate-400 flex items-center justify-center gap-1.5 opacity-80">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Atendimento direto e humanizado. Conecte-se com o professor.
              </p>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
