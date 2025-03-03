import Link from 'next/link';

export default function SobrePage() {
  return (
    <div className="py-8">
      <div className="container">
        {/* Cabeçalho da página */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[var(--primary-dark)] mb-4">Sobre a UbaTour</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conheça nossa história, missão e valores
          </p>
        </div>
        
        {/* Seção de história */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-bold text-[var(--primary)] mb-4">Nossa História</h2>
            <p className="text-gray-700 mb-4">
              A UbaTour nasceu em 2020, da paixão de um grupo de amigos por Ubatuba e suas belezas naturais. Percebemos que muitos turistas não conseguiam aproveitar ao máximo tudo o que a região tem a oferecer por falta de informação e organização.
            </p>
            <p className="text-gray-700 mb-4">
              Decidimos então criar uma plataforma que reunisse os melhores passeios e experiências em Ubatuba, com informações detalhadas, avaliações reais e um sistema de reservas simples e seguro.
            </p>
            <p className="text-gray-700">
              Hoje, a UbaTour é referência em turismo na região, conectando visitantes a experiências autênticas e inesquecíveis, sempre com respeito à natureza e às comunidades locais.
            </p>
          </div>
          <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
            <div 
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: 'url(/images/sobre-historia.jpg)' }}
            ></div>
          </div>
        </div>
        
        {/* Seção de missão e valores */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div className="order-2 md:order-1 relative h-80 bg-gray-200 rounded-lg overflow-hidden">
            <div 
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: 'url(/images/sobre-missao.jpg)' }}
            ></div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-bold text-[var(--primary)] mb-4">Missão e Valores</h2>
            <p className="text-gray-700 mb-4">
              <strong>Nossa Missão:</strong> Proporcionar experiências turísticas autênticas e memoráveis em Ubatuba, conectando visitantes à natureza e à cultura local de forma sustentável e responsável.
            </p>
            <h3 className="text-xl font-semibold text-[var(--secondary)] mt-6 mb-3">Nossos Valores</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li><strong>Sustentabilidade:</strong> Promovemos o turismo responsável, com respeito ao meio ambiente e às comunidades locais.</li>
              <li><strong>Autenticidade:</strong> Valorizamos experiências genuínas que representam a verdadeira essência de Ubatuba.</li>
              <li><strong>Excelência:</strong> Buscamos a qualidade em todos os aspectos, desde a seleção dos passeios até o atendimento ao cliente.</li>
              <li><strong>Inclusão:</strong> Trabalhamos para tornar o turismo em Ubatuba acessível a todos.</li>
              <li><strong>Inovação:</strong> Estamos sempre em busca de novas formas de melhorar a experiência dos nossos clientes.</li>
            </ul>
          </div>
        </div>
        
        {/* Seção de equipe */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-8 text-center">Nossa Equipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Membro 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4">
                <div 
                  className="w-full h-full rounded-full bg-cover bg-center"
                  style={{ backgroundImage: 'url(/images/team-1.jpg)' }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-1">Carlos Silva</h3>
              <p className="text-[var(--secondary)] mb-3">Fundador e CEO</p>
              <p className="text-gray-600 text-sm">
                Nascido e criado em Ubatuba, Carlos conhece cada canto da região e é apaixonado por ecoturismo.
              </p>
            </div>
            
            {/* Membro 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4">
                <div 
                  className="w-full h-full rounded-full bg-cover bg-center"
                  style={{ backgroundImage: 'url(/images/team-2.jpg)' }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-1">Mariana Costa</h3>
              <p className="text-[var(--secondary)] mb-3">Diretora de Operações</p>
              <p className="text-gray-600 text-sm">
                Com vasta experiência em turismo, Mariana garante que todos os passeios sejam realizados com excelência.
              </p>
            </div>
            
            {/* Membro 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4">
                <div 
                  className="w-full h-full rounded-full bg-cover bg-center"
                  style={{ backgroundImage: 'url(/images/team-3.jpg)' }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-1">Pedro Santos</h3>
              <p className="text-[var(--secondary)] mb-3">Gerente de Parcerias</p>
              <p className="text-gray-600 text-sm">
                Pedro trabalha diretamente com os guias e operadores locais, garantindo parcerias de qualidade.
              </p>
            </div>
            
            {/* Membro 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 text-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4">
                <div 
                  className="w-full h-full rounded-full bg-cover bg-center"
                  style={{ backgroundImage: 'url(/images/team-4.jpg)' }}
                ></div>
              </div>
              <h3 className="text-xl font-semibold text-[var(--primary)] mb-1">Ana Oliveira</h3>
              <p className="text-[var(--secondary)] mb-3">Atendimento ao Cliente</p>
              <p className="text-gray-600 text-sm">
                Ana está sempre pronta para ajudar os clientes a encontrarem o passeio perfeito e resolver qualquer dúvida.
              </p>
            </div>
          </div>
        </div>
        
        {/* Chamada para ação */}
        <div className="bg-[var(--primary)] text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Pronto para Explorar Ubatuba Conosco?</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Junte-se a milhares de viajantes que já descobriram as maravilhas de Ubatuba com a UbaTour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tours" className="btn-secondary bg-white text-[var(--primary)] hover:bg-[var(--accent-light)] text-center px-8 py-3">
              Ver Passeios
            </Link>
            <Link href="/contato" className="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-[var(--primary)] text-center px-8 py-3">
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 