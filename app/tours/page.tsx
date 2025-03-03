'use client';

import { useState } from 'react';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

// Dados de exemplo para os passeios
const tours = [
  {
    id: 1,
    title: 'Trilha das Sete Praias',
    description: 'Uma incrível trilha que passa por sete praias paradisíacas de Ubatuba.',
    image: '/images/trilha-sete-praias.jpg',
    price: 120,
    rating: 4.8,
    reviews: 124,
    duration: '6 horas',
    difficulty: 'Moderada',
    category: 'trilhas',
    href: '/tours/trilha-sete-praias',
  },
  {
    id: 2,
    title: 'Passeio de Barco Ilha Anchieta',
    description: 'Navegue até a Ilha Anchieta e conheça suas praias e trilhas preservadas.',
    image: '/images/ilha-anchieta.jpg',
    price: 150,
    rating: 4.9,
    reviews: 89,
    duration: '8 horas',
    difficulty: 'Fácil',
    category: 'passeios-de-barco',
    href: '/tours/ilha-anchieta',
  },
  {
    id: 3,
    title: 'Cachoeira do Prumirim',
    description: 'Visite uma das mais belas cachoeiras de Ubatuba com guia especializado.',
    image: '/images/cachoeira-prumirim.jpg',
    price: 80,
    rating: 4.7,
    reviews: 56,
    duration: '4 horas',
    difficulty: 'Fácil',
    category: 'cachoeiras',
    href: '/tours/cachoeira-prumirim',
  },
  {
    id: 4,
    title: 'Tour de SUP na Praia da Enseada',
    description: 'Aprenda ou aprimore suas habilidades no stand-up paddle nas águas calmas da Enseada.',
    image: '/images/sup-enseada.jpg',
    price: 90,
    rating: 4.6,
    reviews: 42,
    duration: '3 horas',
    difficulty: 'Fácil',
    category: 'praias',
    href: '/tours/sup-enseada',
  },
  {
    id: 5,
    title: 'Trilha da Praia do Bonete',
    description: 'Trilha desafiadora até uma das praias mais preservadas e isoladas de Ubatuba.',
    image: '/images/trilha-bonete.jpg',
    price: 140,
    rating: 4.9,
    reviews: 78,
    duration: '7 horas',
    difficulty: 'Difícil',
    category: 'trilhas',
    href: '/tours/trilha-bonete',
  },
  {
    id: 6,
    title: 'City Tour Histórico',
    description: 'Conheça o centro histórico de Ubatuba e sua rica história e cultura caiçara.',
    image: '/images/city-tour-ubatuba.jpg',
    price: 70,
    rating: 4.5,
    reviews: 35,
    duration: '3 horas',
    difficulty: 'Fácil',
    category: 'city-tour',
    href: '/tours/city-tour-historico',
  },
  {
    id: 7,
    title: 'Mergulho nas Ilhas de Ubatuba',
    description: 'Explore o mundo subaquático nas ilhas de Ubatuba com instrutores experientes.',
    image: '/images/mergulho-ubatuba.jpg',
    price: 180,
    rating: 4.8,
    reviews: 62,
    duration: '5 horas',
    difficulty: 'Moderada',
    category: 'aventura',
    href: '/tours/mergulho-ubatuba',
  },
  {
    id: 8,
    title: 'Observação de Aves na Mata Atlântica',
    description: 'Observe diversas espécies de aves em seu habitat natural na Mata Atlântica.',
    image: '/images/observacao-aves.jpg',
    price: 95,
    rating: 4.7,
    reviews: 28,
    duration: '4 horas',
    difficulty: 'Fácil',
    category: 'ecoturismo',
    href: '/tours/observacao-aves',
  },
  {
    id: 9,
    title: 'Passeio de Caiaque no Saco da Ribeira',
    description: 'Explore as águas calmas do Saco da Ribeira em um passeio de caiaque guiado.',
    image: '/images/caiaque-saco-ribeira.jpg',
    price: 85,
    rating: 4.6,
    reviews: 45,
    duration: '3 horas',
    difficulty: 'Fácil',
    category: 'aventura',
    href: '/tours/caiaque-saco-ribeira',
  },
];

// Categorias para filtro
const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'trilhas', name: 'Trilhas' },
  { id: 'praias', name: 'Praias' },
  { id: 'cachoeiras', name: 'Cachoeiras' },
  { id: 'passeios-de-barco', name: 'Passeios de Barco' },
  { id: 'aventura', name: 'Aventura' },
  { id: 'city-tour', name: 'City Tour' },
  { id: 'ecoturismo', name: 'Ecoturismo' },
  { id: 'cultura', name: 'Cultura' },
];

// Opções de dificuldade para filtro
const difficulties = [
  { id: 'all', name: 'Todas' },
  { id: 'Fácil', name: 'Fácil' },
  { id: 'Moderada', name: 'Moderada' },
  { id: 'Difícil', name: 'Difícil' },
];

export default function ToursPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filtrar passeios com base nos critérios selecionados
  const filteredTours = tours.filter((tour) => {
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         tour.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || tour.category === selectedCategory;
    
    const matchesDifficulty = selectedDifficulty === 'all' || tour.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // A pesquisa já está sendo aplicada em tempo real
  };
  
  return (
    <div className="py-8">
      <div className="container">
        {/* Cabeçalho da página */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[var(--primary-dark)] mb-2">Passeios em Ubatuba</h1>
          <p className="text-lg text-gray-600">
            Descubra as melhores experiências e aventuras em Ubatuba
          </p>
        </div>
        
        {/* Barra de pesquisa e filtros */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
              </div>
              <input
                type="search"
                className="block w-full p-3 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                placeholder="Buscar passeios..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <button
              type="button"
              className="md:hidden flex items-center justify-center gap-2 p-3 text-sm font-medium text-[var(--primary)] border border-[var(--primary)] rounded-lg hover:bg-[var(--primary)] hover:text-white"
              onClick={() => setShowFilters(!showFilters)}
            >
              <AdjustmentsHorizontalIcon className="w-5 h-5" />
              Filtros
            </button>
            
            <div className={`md:flex gap-4 ${showFilters ? 'block' : 'hidden'}`}>
              <select
                className="p-3 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              
              <select
                className="p-3 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty.id} value={difficulty.id}>
                    {difficulty.name}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
        
        {/* Resultados da pesquisa */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTours.length > 0 ? (
            filteredTours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-56 w-full">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                  <div 
                    className="h-full w-full bg-cover bg-center hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${tour.image})` }}
                  ></div>
                  <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-sm font-semibold text-[var(--primary)]">
                    R$ {tour.price.toFixed(2)}
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <div className="flex items-center text-yellow-500">
                      <StarIcon className="h-5 w-5" />
                      <span className="ml-1 text-sm font-semibold">{tour.rating}</span>
                    </div>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{tour.reviews} avaliações</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">
                    {tour.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {tour.description}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>Duração: {tour.duration}</span>
                    <span>Dificuldade: {tour.difficulty}</span>
                  </div>
                  
                  <Link 
                    href={tour.href}
                    className="btn-primary w-full text-center block"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-600">
                Nenhum passeio encontrado com os critérios selecionados.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedDifficulty('all');
                }}
                className="mt-4 btn-outline"
              >
                Limpar Filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 