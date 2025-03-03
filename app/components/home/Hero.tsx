'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPinIcon, CalendarIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de pesquisa
    console.log('Pesquisando por:', { destination, date });
  };

  return (
    <div className="relative bg-cover bg-center h-[80vh] flex items-center" style={{ backgroundImage: 'url(/images/hero-ubatuba.jpg)' }}>
      {/* Overlay escuro para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Paraíso das Praias em Ubatuba
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            De Itamambuca a Prumirim, experiências inesquecíveis te esperam
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Explore as mais belas praias como Félix, Lazaro, Enseada e Ilha das Couves com os melhores guias locais
          </p>
          
          {/* Barra de pesquisa estilo GetYourGuide */}
          <div className="bg-white rounded-lg p-4 shadow-lg max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MapPinIcon className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  className="block w-full p-3 pl-10 text-gray-800 border border-gray-300 rounded-lg bg-white focus:ring-red-600 focus:border-red-600"
                  placeholder="Qual praia você quer conhecer?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <CalendarIcon className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  className="block w-full p-3 pl-10 text-gray-800 border border-gray-300 rounded-lg bg-white focus:ring-red-600 focus:border-red-600"
                  placeholder="Quando?"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-base font-medium flex items-center justify-center"
              >
                <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
                Buscar
              </button>
            </form>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/tours" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-base font-medium">
              Passeios Populares
            </Link>
            <Link href="/categorias" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-6 py-3 rounded-md text-base font-medium">
              Explorar Categorias
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 