import Link from 'next/link';
import { CalendarIcon, ShieldCheckIcon, PhoneIcon, CreditCardIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function CallToAction() {
  return (
    <section className="py-16 bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/cta-background.jpg)' }}>
      {/* Overlay escuro para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Descubra as praias paradisíacas de Ubatuba
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            De Itamambuca a Prumirim, reserve com antecedência e garanta sua vaga nas melhores atividades nas praias mais bonitas do litoral norte
          </p>
          
          <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-red-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <ShieldCheckIcon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">Reserva Segura</h3>
                <p className="text-gray-600 text-sm">Confirmação imediata e cancelamento gratuito</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <UserGroupIcon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">Guias Locais</h3>
                <p className="text-gray-600 text-sm">Experiências autênticas com especialistas locais</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <CreditCardIcon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">Melhor Preço</h3>
                <p className="text-gray-600 text-sm">Garantimos o melhor valor para sua experiência</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/tours" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md text-base font-medium transition-colors flex items-center justify-center"
            >
              <CalendarIcon className="h-5 w-5 mr-2" />
              Reservar agora
            </Link>
            <Link 
              href="/contato" 
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-md text-base font-medium transition-colors flex items-center justify-center"
            >
              <PhoneIcon className="h-5 w-5 mr-2" />
              Fale conosco
            </Link>
          </div>
          
          <div className="mt-10 pt-8 border-t border-white border-opacity-20">
            <p className="text-lg font-medium mb-4">Por que escolher UbaTour?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <div className="bg-white bg-opacity-10 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm">Cancelamento gratuito até 24h antes</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white bg-opacity-10 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm">Suporte 24/7 em português</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white bg-opacity-10 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="text-sm">(12) 98765-4321</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 