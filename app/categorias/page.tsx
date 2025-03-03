import Link from 'next/link';

const categories = [
  {
    id: 'trilhas',
    title: 'Trilhas e Cachoeiras',
    description: 'Explore as mais belas trilhas e cachoeiras de Ubatuba, desde caminhadas leves até trilhas desafiadoras com vistas deslumbrantes.',
    image: '/images/trilhas.jpg',
    href: '/categorias/trilhas',
    count: 12,
  },
  {
    id: 'praias',
    title: 'Praias',
    description: 'Conheça as praias paradisíacas de Ubatuba, desde as mais movimentadas até as mais desertas e preservadas.',
    image: '/images/praias.jpg',
    href: '/categorias/praias',
    count: 15,
  },
  {
    id: 'passeios-barco',
    title: 'Passeios de Barco',
    description: 'Navegue pelas águas cristalinas de Ubatuba, visitando ilhas, praias isoladas e pontos de mergulho.',
    image: '/images/passeios-barco.jpg',
    href: '/categorias/passeios-de-barco',
    count: 8,
  },
  {
    id: 'cultura',
    title: 'Cultura',
    description: 'Descubra a rica cultura caiçara de Ubatuba, suas tradições, artesanato, culinária e história.',
    image: '/images/cultura.jpg',
    href: '/categorias/cultura',
    count: 6,
  },
  {
    id: 'aventura',
    title: 'Aventura',
    description: 'Viva experiências radicais em Ubatuba, como surf, stand-up paddle, caiaque, mergulho e muito mais.',
    image: '/images/aventura.jpg',
    href: '/categorias/aventura',
    count: 10,
  },
  {
    id: 'city-tour',
    title: 'City Tour',
    description: 'Conheça os principais pontos turísticos da cidade, como o centro histórico, museus, igrejas e mercados.',
    image: '/images/city-tour.jpg',
    href: '/categorias/city-tour',
    count: 4,
  },
  {
    id: 'ecoturismo',
    title: 'Ecoturismo',
    description: 'Participe de atividades de ecoturismo, como observação de aves, visitas a projetos de conservação e educação ambiental.',
    image: '/images/ecoturismo.jpg',
    href: '/categorias/ecoturismo',
    count: 7,
  },
  {
    id: 'gastronomia',
    title: 'Gastronomia',
    description: 'Experimente a deliciosa culinária caiçara e os frutos do mar frescos em restaurantes e quiosques de Ubatuba.',
    image: '/images/gastronomia.jpg',
    href: '/categorias/gastronomia',
    count: 5,
  },
];

export default function CategoriasPage() {
  return (
    <div className="py-8">
      <div className="container">
        {/* Cabeçalho da página */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[var(--primary-dark)] mb-4">Categorias de Passeios</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore Ubatuba através de nossas diversas categorias de passeios e encontre a experiência perfeita para você
          </p>
        </div>
        
        {/* Lista de categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              href={category.href}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-56 w-full">
                <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                <div 
                  className="h-full w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundImage: `url(${category.image})` }}
                ></div>
                <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full text-sm font-semibold text-[var(--primary)]">
                  {category.count} passeios
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-[var(--primary)] mb-2 group-hover:text-[var(--secondary)] transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
                <div className="mt-4 flex justify-end">
                  <span className="text-[var(--primary)] text-sm font-medium group-hover:text-[var(--secondary)] transition-colors">
                    Explorar →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 