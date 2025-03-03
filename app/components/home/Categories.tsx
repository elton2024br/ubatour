import Link from 'next/link';
import Image from 'next/image';

const categories = [
  {
    id: 'trilhas',
    title: 'Trilhas e Cachoeiras',
    description: 'Explore as mais belas trilhas e cachoeiras de Ubatuba',
    image: '/images/trilhas.jpg',
    href: '/categorias/trilhas',
    count: '12 atividades',
    popular: true,
  },
  {
    id: 'praias',
    title: 'Praias Paradisíacas',
    description: 'Visite Itamambuca, Félix, Prumirim e outras praias deslumbrantes',
    image: '/images/praias.jpg',
    href: '/categorias/praias',
    count: '18 atividades',
    popular: true,
  },
  {
    id: 'passeios-barco',
    title: 'Passeios de Barco',
    description: 'Navegue pelas águas cristalinas de Ubatuba e Ilha Anchieta',
    image: '/images/passeios-barco.jpg',
    href: '/categorias/passeios-de-barco',
    count: '8 atividades',
    popular: true,
  },
  {
    id: 'cultura',
    title: 'Cultura',
    description: 'Descubra a rica cultura caiçara de Ubatuba',
    image: '/images/cultura.jpg',
    href: '/categorias/cultura',
    count: '6 atividades',
    popular: false,
  },
  {
    id: 'aventura',
    title: 'Aventura',
    description: 'Viva experiências radicais nas praias e florestas de Ubatuba',
    image: '/images/aventura.jpg',
    href: '/categorias/aventura',
    count: '10 atividades',
    popular: true,
  },
  {
    id: 'city-tour',
    title: 'City Tour',
    description: 'Conheça os principais pontos turísticos da cidade',
    image: '/images/city-tour.jpg',
    href: '/categorias/city-tour',
    count: '5 atividades',
    popular: false,
  },
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Explore Ubatuba por Categoria</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubra as melhores experiências nas praias e natureza de Ubatuba
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              href={category.href}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all border border-gray-200 flex flex-col"
            >
              <div className="relative h-52 w-full">
                <div 
                  className="h-full w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  {category.popular && (
                    <div className="absolute top-3 left-3 bg-yellow-400 py-1 px-2 rounded text-xs font-medium text-gray-800">
                      Popular
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.title}
                  </h3>
                  <span className="text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">
                  {category.description}
                </p>
                
                <div className="mt-auto">
                  <span className="text-sm text-red-600 font-medium group-hover:underline flex items-center">
                    Ver atividades
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/categorias" 
            className="inline-flex items-center justify-center bg-white border border-gray-300 text-red-600 hover:bg-gray-50 px-8 py-3 rounded-md text-base font-medium transition-colors"
          >
            Ver todas as categorias
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
} 