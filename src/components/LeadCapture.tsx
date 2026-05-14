import React, { useState } from 'react';
import { FadeIn } from '../lib/utils';
import { Download, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const allowedDomains = [
  "gmail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "yahoo.com",
  "yahoo.com.br",
  "proton.me",
  "protonmail.com",
  "aol.com",
  "zoho.com"
];

const blockedDomains = [
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com",
  "mailinator.com",
  "fakeinbox.com",
  "trashmail.com",
  "yopmail.com",
  "sharklasers.com",
  "getnada.com",
  "dispostable.com"
];

const schema = z.object({
  name: z.string()
    .min(1, { message: 'Digite seu nome completo corretamente.' })
    .regex(/^[a-zA-ZÀ-ÿ]+\s+[a-zA-ZÀ-ÿ\s]+$/, { message: 'Digite seu nome completo corretamente.' }),
  email: z.string()
    .min(1, { message: 'Digite um e-mail válido.' })
    .email({ message: 'Digite um e-mail válido.' })
    .refine((email) => {
      const domain = email.split('@')[1];
      return domain && allowedDomains.includes(domain.toLowerCase()) && !blockedDomains.includes(domain.toLowerCase());
    }, { message: 'Use um e-mail válido como Gmail, Outlook, Hotmail, iCloud ou Yahoo.' }),
  phone: z.string()
    .min(1, { message: 'Digite um telefone válido com DDD.' })
    .refine((val) => {
      const digits = val.replace(/\D/g, '');
      return digits.length >= 10 && digits.length <= 11;
    }, { message: 'Digite um telefone válido com DDD.' }),
  honeypot: z.string().max(0).optional(),
});

type FormData = z.infer<typeof schema>;

export const LeadCapture = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);

    // Honeypot check (bot protection)
    if (data.honeypot) {
      return; 
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbw6ZA3oyx6paxIj-L52PZ2UYKda7yIZ1Q1iaipK0SHOQ8cQjK48AT8BxEgRF3TOCxjo/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            nome: data.name,
            telefone: data.phone,
            email: data.email
          })
        }
      );
      
      console.log('Lead salvo com sucesso');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Erro ao salvar lead:', error);
      setSubmitError('Não foi possível salvar seus dados. Tente novamente.');
    }
  };

  return (
    <section id="captura" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-medium text-sm mb-6">
            <span role="img" aria-label="presente">🎁</span> EBOOK GRATUITO
          </div>
          
          <h2 className="text-3xl md:text-5xl font-[Playfair_Display,serif] text-slate-900 mb-6 max-w-2xl mx-auto leading-tight">
            Baixe gratuitamente o e-book "Propósito"
          </h2>
          
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            Preencha seus dados abaixo para receber acesso ao e-book gratuito e dar o primeiro passo para construir uma mente mais forte, encontrar direção e viver com mais significado.
          </p>

          <div className="max-w-md mx-auto bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
                {/* Honeypot field - visually hidden */}
                <div className="absolute opacity-0 -z-50 h-0 w-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="honeypot">Deixar vazio se humano</label>
                  <input type="text" id="honeypot" tabIndex={-1} autoComplete="off" {...register('honeypot')} />
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Nome completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    placeholder="Seu nome completo"
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all ${
                      errors.name ? 'border-red-500/50 focus:ring-red-500/50' : 'border-slate-200'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Telefone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    placeholder="(00) 00000-0000"
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all ${
                      errors.phone ? 'border-red-500/50 focus:ring-red-500/50' : 'border-slate-200'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    placeholder="Seu melhor e-mail"
                    className={`w-full px-4 py-3 rounded-xl border bg-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all ${
                      errors.email ? 'border-red-500/50 focus:ring-red-500/50' : 'border-slate-200'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>
                  )}
                </div>

                {Object.keys(errors).length > 0 && (
                  <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium text-center border border-red-100">
                    Preencha todos os campos corretamente para liberar o download.
                  </div>
                )}

                {submitError && (
                  <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium text-center border border-red-100">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 text-white rounded-xl px-6 py-4 font-semibold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Liberando...' : 'Liberar meu e-book gratuito'}
                </button>
              </form>
            ) : (
              <FadeIn className="text-center py-6">
                <div className="mx-auto w-16 h-16 bg-brand-gold/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-brand-gold" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Tudo pronto!
                </h3>
                <p className="text-slate-600 mb-8">
                  Agora você pode baixar seu e-book.
                </p>
                
                <a
                  href="https://drive.google.com/uc?export=download&id=1HGPGnWslY2e2oDf-DJEn8As1qG_MThyj"
                  download="ebook-proposito.pdf"
                  className="inline-flex justify-center items-center gap-2 bg-slate-900 text-white rounded-xl w-full px-6 py-4 font-semibold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl group"
                >
                  <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                  Baixar e-book gratuito
                </a>
              </FadeIn>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
