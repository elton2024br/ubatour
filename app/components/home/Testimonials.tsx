'use client';

import { useState } from 'react';
import { StarIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const testimonials = [
  {
    id: 1,
    name: 'Ana Silva',
    location: 'São Paulo, SP',
    rating: 5,
    text: 'A trilha das Sete Praias foi uma experiência incrível! O guia era muito conhecedor da região e nos mostrou lugares que jamais encontraríamos sozinhos. Recomendo muito!',
    image: '/images/testimonial-1.jpg',
    tour: 'Trilha das Sete Praias',
    date: 'Março 2023',
    verified: true,
    tourLink: '/tours/trilha-sete-praias',
  },
  {
    id: 2,
    name: 'Carlos Oliveira',
    location: 'Rio de Janeiro, RJ',
    rating: 5,
    text: 'O passeio de barco para a Ilha Anchieta superou todas as minhas expectativas. Águas cristalinas, praias desertas e um serviço impecável. Voltarei com certeza!',
    image: '/images/testimonial-2.jpg',
    tour: 'Passeio de Barco Ilha Anchieta',
    date: 'Janeiro 2023',
    verified: true,
    tourLink: '/tours/ilha-anchieta',
  },
  {
    id: 3,
    name: 'Mariana Costa',
    location: 'Belo Horizonte, MG',
    rating: 4,
    text: 'A Cachoeira do Prumirim é um lugar mágico! O passeio foi muito bem organizado e o guia muito atencioso. Só achei o tempo um pouco curto, queria ter ficado mais.',
    image: '/images/testimonial-3.jpg',
    tour: 'Cachoeira do Prumirim',
    date: 'Fevereiro 2023',
    verified: true,
    tourLink: '/tours/cachoeira-prumirim',
  },
  {
    id: 4,
    name: 'Pedro Santos',
    location: 'Brasília, DF',
    rating: 5,
    text: 'Fiz o tour de SUP na Praia da Enseada e foi fantástico! O instrutor foi muito paciente e em pouco tempo eu já estava remando com confiança. Uma experiência única!',
    image: '/images/testimonial-1.jpg',
    tour: 'Tour de SUP na Praia da Enseada',
    date: 'Abril 2023',
    verified: true,
    tourLink: '/tours/sup-enseada',
  },
  {
    id: 5,
    name: 'Juliana Lima',
    location: 'Curitiba, PR',
    rating: 5,
    text: 'O passeio de caiaque no mangue foi uma das melhores experiências da minha vida! Ver os animais de perto e navegar por aquele ecossistema tão rico é indescritível.',
    image: '/images/testimonial-2.jpg',
    tour: 'Caiaque no Mangue',
    date: 'Maio 2023',
    verified: true,
    tourLink: '/tours/caiaque-mangue',
  },
  {
    id: 6,
    name: 'Roberto Almeida',
    location: 'Porto Alegre, RS',
    rating: 4,
    text: 'O city tour por Ubatuba foi excelente para conhecer a história da cidade. O guia sabe muito sobre a região e conta histórias fascinantes. Recomendo para o primeiro dia.',
    image: '/images/testimonial-3.jpg',
    tour: 'City Tour Ubatuba',
    date: 'Junho 2023',
    verified: true,
    tourLink: '/tours/city-tour',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">O que nossos clientes dizem</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mais de 10.000 avaliações verificadas de viajantes reais
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-200 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border border-gray-200">
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${testimonial.image})` }}
                    ></div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      {testimonial.verified && (
                        <CheckBadgeIcon className="h-4 w-4 text-green-500 ml-1" title="Avaliação verificada" />
                      )}
                    </div>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  {testimonial.date}
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-gray-700">{testimonial.rating}.0</span>
              </div>
              
              <p className="text-gray-700 mb-4 flex-grow">{testimonial.text}</p>
              
              <div className="mt-auto">
                <Link 
                  href={testimonial.tourLink}
                  className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center"
                >
                  Sobre: {testimonial.tour}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center">
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
              ))}
            </div>
            <p className="text-lg font-bold text-gray-900 mb-1">Avaliação média de 4.8/5</p>
            <p className="text-sm text-gray-600 mb-6">Baseada em mais de 10.000 avaliações</p>
            
            <Link 
              href="/reviews" 
              className="inline-flex items-center justify-center bg-white border border-gray-300 text-red-600 hover:bg-gray-50 px-8 py-3 rounded-md text-base font-medium transition-colors"
            >
              Ver todas as avaliações
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 