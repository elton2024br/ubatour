import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[var(--primary-dark)] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1: Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">Uba<span className="text-[var(--accent-light)]">Tour</span></h3>
            <p className="text-sm mb-4">
              Descubra as belezas naturais de Ubatuba com a UbaTour, sua plataforma de reservas de passeios e experiências turísticas exclusivas.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-light)]">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-light)]">
                <FaInstagram size={20} />
              </a>
              <a href="https://wa.me/5512000000000" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent-light)]">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
          
          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-[var(--accent-light)]">Início</Link>
              </li>
              <li>
                <Link href="/tours" className="text-sm hover:text-[var(--accent-light)]">Passeios</Link>
              </li>
              <li>
                <Link href="/categorias" className="text-sm hover:text-[var(--accent-light)]">Categorias</Link>
              </li>
              <li>
                <Link href="/ofertas" className="text-sm hover:text-[var(--accent-light)]">Ofertas</Link>
              </li>
              <li>
                <Link href="/sobre" className="text-sm hover:text-[var(--accent-light)]">Sobre Nós</Link>
              </li>
              <li>
                <Link href="/contato" className="text-sm hover:text-[var(--accent-light)]">Contato</Link>
              </li>
            </ul>
          </div>
          
          {/* Coluna 3: Categorias */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categorias/trilhas" className="text-sm hover:text-[var(--accent-light)]">Trilhas</Link>
              </li>
              <li>
                <Link href="/categorias/praias" className="text-sm hover:text-[var(--accent-light)]">Praias</Link>
              </li>
              <li>
                <Link href="/categorias/cachoeiras" className="text-sm hover:text-[var(--accent-light)]">Cachoeiras</Link>
              </li>
              <li>
                <Link href="/categorias/passeios-de-barco" className="text-sm hover:text-[var(--accent-light)]">Passeios de Barco</Link>
              </li>
              <li>
                <Link href="/categorias/cultura" className="text-sm hover:text-[var(--accent-light)]">Cultura</Link>
              </li>
              <li>
                <Link href="/categorias/aventura" className="text-sm hover:text-[var(--accent-light)]">Aventura</Link>
              </li>
            </ul>
          </div>
          
          {/* Coluna 4: Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-2 text-[var(--accent-light)]" />
                <span className="text-sm">Av. Iperoig, 214 - Centro, Ubatuba - SP, 11680-000</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-[var(--accent-light)]" />
                <span className="text-sm">(12) 3456-7890</span>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-2 text-[var(--accent-light)]" />
                <span className="text-sm">(12) 98765-4321</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-[var(--accent-light)]" />
                <span className="text-sm">contato@ubatour.com.br</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Rodapé inferior */}
      <div className="bg-[var(--primary-dark)] border-t border-[var(--primary)] py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left">
              &copy; {currentYear} UbaTour. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/termos" className="text-xs hover:text-[var(--accent-light)]">
                Termos de Uso
              </Link>
              <Link href="/privacidade" className="text-xs hover:text-[var(--accent-light)]">
                Política de Privacidade
              </Link>
              <Link href="/cancelamento" className="text-xs hover:text-[var(--accent-light)]">
                Política de Cancelamento
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 