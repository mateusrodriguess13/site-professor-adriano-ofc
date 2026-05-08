import React from 'react';
import { FadeIn } from '../lib/utils';
import { ArrowRight, Star } from 'lucide-react';

const products = [
  {
    title: 'Escola de Alta Performance',
    benefit: 'Domine sua produtividade e alcance o próximo nível de resultados.',
    url: 'https://pay.hotmart.com/E104288974O?bid=1777995055206',
    popular: true,
    image: 'https://hotmart.s3.amazonaws.com/product_pictures/de72351e-cdb2-4026-981b-dbe639bc014b/capaescoladealtaperformance1x1.png'
  },
  {
    title: 'Exaustão Mental: Como Vencer o Cansaço da Alma',
    benefit: 'Recupere sua energia vitale encontre paz mental no meio do caos.',
    url: 'https://pay.hotmart.com/K103974973W?bid=1777995079996',
    image: 'https://hotmart.s3.amazonaws.com/product_pictures/fb6ee88e-9ec2-40fb-91fc-8dad12509f9f/capaExaustaomental.png'
  },
  {
    title: 'Manual para Mentes Inabaláveis',
    benefit: 'Ferramentas práticas para blindar sua mente contra a ansiedade.',
    url: 'https://pay.hotmart.com/H103540485G?bid=1777995171627',
    image: 'https://hotmart.s3.amazonaws.com/product_pictures/fd30452f-ec07-4cb5-8891-730d17258ece/manualparamentesinabalaveis1x1.png'
  },
  {
    title: 'O Poder da Autoconfiança',
    benefit: 'Acorde todos os dias com a certeza de que você é capaz de vencer.',
    url: 'https://pay.hotmart.com/N103541541Y?bid=1777995211138',
    image: 'https://hotmart.s3.amazonaws.com/product_pictures/8f3a7e53-5bbc-426b-8bfc-071cb111338b/opoderdaautoconfianca1x1.png'
  },
  {
    title: 'Do Zero ao Sonho',
    benefit: 'Um mapa passo a passo para transformas suas ideias em realidade.',
    url: 'https://pay.hotmart.com/O104093531T?bid=1777995189017',
    image: 'https://hotmart.s3.amazonaws.com/product_pictures/7fba7dae-df13-4a21-93ad-3ab287f1540e/capaDoZeroaoSonho.png'
  },
  {
    title: 'A Assinatura Divina na Criação',
    benefit: 'Do Microcosmo até a Santa Trindade. Compreenda a criação de forma única.',
    url: 'https://pay.hotmart.com/A103540760S?bid=1777995125239',
    image: 'https://hotmart.s3.amazonaws.com/product_pictures/f262729e-b785-4481-81c8-c82e24a78a14/assinaturadivinanacriacao1x1.png'
  },
  {
    title: 'O Jeitinho Resiliente',
    benefit: 'Criatividade Brasileira Transforma Desafios em Oportunidades.',
    url: 'https://pay.hotmart.com/M103975108E?bid=1777995258205',
    image: 'https://hotmart.s3.amazonaws.com/product_pictures/4bf415d9-8374-4c60-acad-3bff880679f0/capaOjeitinhoresiliente.png'
  },
  {
    title: 'O Poder da Verdade',
    benefit: 'A coragem de ser real e viver uma vida autêntica.',
    url: 'https://pay.hotmart.com/V103975180N?bid=1777995245597',
    image: 'https://hotmart.s3.amazonaws.com/product_pictures/e9848608-62ed-4d36-9a72-94a034876932/capaOpoderdaverdade.png'
  },
  {
    title: 'Os 3 D\'s da Riqueza',
    benefit: 'Disciplina, Decisão e Direção para a Liberdade Financeira.',
    url: 'https://pay.hotmart.com/M103975294N?bid=1777995225186',
    image: 'https://hotmart.s3.amazonaws.com/product_pictures/09860b25-8e46-495f-9ce7-a49419adbf38/capaOstresDsdariqueza.png'
  },
  {
    title: 'O Maior Líder da História',
    benefit: 'Lições valiosas de liderança inspiradas em Jesus Cristo.',
    url: 'https://pay.hotmart.com/M103540635M?bid=1777995149418',
    image: 'https://hotmart.s3.amazonaws.com/product_pictures/6bda91c0-c135-41f9-b172-ab68b2a3558d/omaiorliderdahistoria1x1.png'
  },
  {
    title: 'O Tempo de Cada Sentimento',
    benefit: 'Entenda os ciclos das emoções e como lidar com cada fase.',
    url: 'https://pay.hotmart.com/R103540682X?bid=1777995096827',
    image: 'https://hotmart.s3.amazonaws.com/product_pictures/aa7f283b-4646-432f-a0e4-e72838256e11/otempodecadasentimento1x1.png'
  }
];

export const Products = () => {
  return (
    <section id="produtos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-base font-semibold leading-7 text-brand-gold uppercase tracking-wider">Metodologia</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-brand-blue sm:text-4xl">
            Escolha o caminho para a sua transformação
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {products.map((product, index) => (
            <FadeIn 
              key={product.title} 
              delay={Math.min(index * 0.1, 0.4)}
              className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col ${
                product.popular ? 'col-span-2 sm:flex-row sm:items-center sm:gap-6 bg-gradient-to-br from-white to-slate-50 ring-1 ring-brand-gold/20' : ''
              }`}
            >
              {/* Product Image */}
              <div className={`mb-4 sm:mb-5 ${product.popular ? 'sm:mb-0 sm:w-1/3 flex-shrink-0' : 'w-full'} flex justify-center`}>
                <div className={`relative w-full aspect-[2/3] max-w-[100px] sm:max-w-[120px] ${product.popular ? 'max-w-[120px] sm:max-w-[150px]' : ''} rounded-md overflow-hidden shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                  <img 
                    src={product.image} 
                    alt={`Capa do livro ${product.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 flex flex-col h-full">
                {product.popular && (
                  <span className="inline-flex w-fit items-center gap-1 md:gap-1.5 px-2 md:px-2.5 py-0.5 md:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-yellow-100 text-yellow-800 mb-2 sm:mb-4">
                    <Star className="h-2.5 w-2.5 md:h-3 md:w-3 fill-yellow-500 text-yellow-500" />
                    Mais Recomendado
                  </span>
                )}
                <h3 className={`font-bold text-brand-blue mb-1 sm:mb-2 leading-tight ${product.popular ? 'text-base sm:text-lg md:text-xl' : 'text-sm sm:text-base'}`}>
                  {product.title}
                </h3>
                <p className={`text-slate-600 mb-4 sm:mb-5 leading-snug sm:leading-relaxed ${product.popular ? 'text-sm' : 'text-[11px] sm:text-xs'}`}>
                  {product.benefit}
                </p>
              
                <div className={product.popular ? 'mt-3' : 'mt-auto'}>
                  <a 
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group inline-flex w-full items-center justify-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl px-3 py-2 sm:px-5 sm:py-2.5 text-[12px] sm:text-[13px] font-semibold transition-all duration-300 ${
                      product.popular 
                        ? 'bg-brand-gold text-white hover:bg-yellow-600 shadow-md hover:shadow-lg w-auto' 
                        : 'bg-brand-blue text-white hover:bg-slate-800'
                    }`}
                  >
                    Comprar agora
                    <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
