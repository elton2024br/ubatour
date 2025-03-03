'use client';

import { useState } from 'react';
import Link from 'next/link';
import { StarIcon, ClockIcon, UserGroupIcon, CalendarIcon, CheckCircleIcon, HeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';

// Dados de exemplo para os passeios em destaque
const featuredTours = [
  {
    id: 1,
    title: 'Trilha das Sete Praias',
    description: 'Uma incrível trilha que passa por sete praias paradisíacas de Ubatuba, incluindo Praia do Cedro e Praia Vermelha.',
    image: '/images/trilha-sete-praias.jpg',
    price: 120,
    oldPrice: 150,
    rating: 4.8,
    reviews: 124,
    duration: '6 horas',
    difficulty: 'Moderada',
    href: '/tours/trilha-sete-praias',
    cancellation: 'Cancelamento gratuito',
    smallGroup: true,
    availability: 'Disponível amanhã',
    bestseller: true,
    languages: ['Português', 'Inglês'],
    groupSize: 'Até 10 pessoas',
    included: ['Guia local', 'Água mineral', 'Seguro'],
  },
  {
    id: 2,
    title: 'Passeio de Barco Ilha Anchieta',
    description: 'Navegue até a Ilha Anchieta e conheça suas praias e trilhas preservadas, como a Praia do Presídio e Praia do Sul.',
    image: '/images/ilha-anchieta.jpg',
    price: 150,
    oldPrice: 180,
    rating: 4.9,
    reviews: 89,
    duration: '8 horas',
    difficulty: 'Fácil',
    href: '/tours/ilha-anchieta',
    cancellation: 'Cancelamento gratuito',
    smallGroup: true,
    availability: 'Disponível hoje',
    bestseller: true,
    languages: ['Português', 'Inglês', 'Espanhol'],
    groupSize: 'Até 15 pessoas',
    included: ['Guia local', 'Lanche', 'Equipamentos'],
  },
  {
    id: 3,
    title: 'Cachoeira do Prumirim',
    description: 'Visite uma das mais belas cachoeiras de Ubatuba que desemboca na paradisíaca Praia do Prumirim.',
    image: '/images/cachoeira-prumirim.jpg',
    price: 80,
    oldPrice: 100,
    rating: 4.7,
    reviews: 56,
    duration: '4 horas',
    difficulty: 'Fácil',
    href: '/tours/cachoeira-prumirim',
    cancellation: 'Cancelamento gratuito',
    smallGroup: false,
    availability: 'Disponível amanhã',
    bestseller: false,
    languages: ['Português'],
    groupSize: 'Até 12 pessoas',
    included: ['Guia local', 'Água mineral'],
  },
  {
    id: 4,
    title: 'Tour de SUP na Praia da Enseada',
    description: 'Aprenda ou aprimore suas habilidades no stand-up paddle nas águas calmas da Praia da Enseada.',
    image: '/images/passeios-barco.jpg',
    price: 90,
    oldPrice: 110,
    rating: 4.6,
    reviews: 42,
    duration: '3 horas',
    difficulty: 'Moderada',
    href: '/tours/sup-enseada',
    cancellation: 'Cancelamento gratuito',
    smallGroup: true,
    availability: 'Disponível hoje',
    bestseller: false,
    languages: ['Português', 'Inglês'],
    groupSize: 'Até 8 pessoas',
    included: ['Instrutor', 'Equipamentos', 'Seguro'],
  },
  {
    id: 5,
    title: 'Praia de Itamambuca',
    description: 'Conheça uma das praias mais famosas para a prática do surf em Ubatuba, com areias brancas e ondas perfeitas.',
    image: '/images/praias.jpg',
    price: 70,
    oldPrice: 90,
    rating: 4.9,
    reviews: 78,
    duration: '5 horas',
    difficulty: 'Fácil',
    href: '/tours/praia-itamambuca',
    cancellation: 'Cancelamento gratuito',
    smallGroup: true,
    availability: 'Disponível hoje',
    bestseller: true,
    languages: ['Português', 'Inglês'],
    groupSize: 'Até 15 pessoas',
    included: ['Transporte', 'Guia local', 'Cadeira de praia'],
  },
  {
    id: 6,
    title: 'Praia do Félix e Praia do Prumirim',
    description: 'Visite duas das mais belas praias de Ubatuba em um único passeio, com tempo para banho de mar e relaxamento.',
    image: '/images/trilhas.jpg',
    price: 95,
    oldPrice: 120,
    rating: 4.7,
    reviews: 63,
    duration: '6 horas',
    difficulty: 'Fácil',
    href: '/tours/felix-prumirim',
    cancellation: 'Cancelamento gratuito',
    smallGroup: true,
    availability: 'Disponível amanhã',
    bestseller: false,
    languages: ['Português'],
    groupSize: 'Até 12 pessoas',
    included: ['Transporte', 'Guia local', 'Água mineral'],
  },
];

export default function FeaturedTours() {
  const [visibleTours, setVisibleTours] = useState(3);
  const [favorites, setFavorites] = useState<number[]>([]);
  
  const handleShowMore = () => {
    setVisibleTours(featuredTours.length);
  };
  
  const toggleFavorite = (id: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Experiências mais populares em Ubatuba</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Atividades com melhor avaliação selecionadas por viajantes como você
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTours.slice(0, visibleTours).map((tour) => (
            <Link 
              key={tour.id} 
              href={tour.href}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all flex flex-col h-full border border-gray-200"
            >
              <div className="relative h-52 w-full">
                <div 
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${tour.image})` }}
                ></div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <div className="bg-white py-1 px-2 rounded text-xs font-medium text-gray-800">
                    {tour.availability}
                  </div>
                  {tour.bestseller && (
                    <div className="bg-yellow-400 py-1 px-2 rounded text-xs font-medium text-gray-800">
                      Mais vendido
                    </div>
                  )}
                </div>
                
                {/* Favorite button */}
                <button 
                  onClick={(e) => toggleFavorite(tour.id, e)}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm hover:shadow-md transition-all"
                >
                  {favorites.includes(tour.id) ? (
                    <HeartIcon className="h-5 w-5 text-red-500" />
                  ) : (
                    <HeartOutlineIcon className="h-5 w-5 text-gray-600" />
                  )}
                </button>
              </div>
              
              <div className="p-4 flex-grow flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="flex items-center text-yellow-500">
                    <StarIcon className="h-4 w-4" />
                    <span className="ml-1 text-sm font-medium">{tour.rating}</span>
                  </div>
                  <span className="mx-1 text-gray-400">•</span>
                  <span className="text-xs text-gray-500">{tour.reviews} avaliações</span>
                </div>
                
                <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2">
                  {tour.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{tour.description}</p>
                
                <div className="mt-auto space-y-3">
                  <div className="flex flex-wrap gap-y-2 gap-x-3">
                    <div className="flex items-center text-xs text-gray-600">
                      <ClockIcon className="h-3 w-3 mr-1 flex-shrink-0" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <UserGroupIcon className="h-3 w-3 mr-1 flex-shrink-0" />
                      <span>{tour.groupSize}</span>
                    </div>
                    <div className="flex items-center text-xs text-green-600">
                      <CheckCircleIcon className="h-3 w-3 mr-1 flex-shrink-0" />
                      <span>{tour.cancellation}</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-600">
                    <span className="font-medium">Idiomas:</span> {tour.languages.join(', ')}
                  </div>
                  
                  <div className="text-xs text-gray-600">
                    <span className="font-medium">Inclui:</span> {tour.included.join(', ')}
                  </div>
                  
                  <div className="flex justify-between items-end mt-3 pt-3 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500">A partir de</p>
                      <div className="flex items-center gap-2">
                        {tour.oldPrice && (
                          <p className="text-sm text-gray-500 line-through">R$ {tour.oldPrice.toFixed(2)}</p>
                        )}
                        <p className="text-lg font-bold text-gray-900">R$ {tour.price.toFixed(2)}</p>
                      </div>
                      <p className="text-xs text-gray-500">por pessoa</p>
                    </div>
                    <div className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded transition-colors">
                      Reservar
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {visibleTours < featuredTours.length && (
          <div className="mt-10 text-center">
            <button 
              onClick={handleShowMore}
              className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-md text-sm font-medium transition-colors"
            >
              Mostrar mais experiências
            </button>
          </div>
        )}
        
        <div className="mt-10 text-center">
          <Link 
            href="/tours" 
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors"
          >
            Ver todas as experiências em Ubatuba
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}