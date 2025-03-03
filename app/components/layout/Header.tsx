'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

const navigation = [
  { name: 'Início', href: '/', current: true },
  { name: 'Passeios', href: '/tours', current: false },
  { name: 'Categorias', href: '/categorias', current: false },
  { name: 'Ofertas', href: '/ofertas', current: false },
  { name: 'Sobre Nós', href: '/sobre', current: false },
  { name: 'Contato', href: '/contato', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de pesquisa
    console.log('Pesquisando por:', { destination, date });
  };

  return (
    <Disclosure as="nav" className="bg-white shadow-md sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="container mx-auto px-4">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Botão de menu mobile */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Abrir menu principal</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              
              {/* Logo */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/" className="flex items-center">
                    <span className="text-2xl font-bold text-red-600">Uba</span>
                    <span className="text-2xl font-bold text-gray-800">Tour</span>
                  </Link>
                </div>
                
                {/* Links de navegação desktop */}
                <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'text-red-600 border-b-2 border-red-600'
                          : 'text-gray-700 hover:text-red-600 hover:border-b-2 hover:border-red-600',
                        'px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Ações do usuário */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Botão de reserva */}
                <Link
                  href="/tours"
                  className="hidden sm:block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium ml-4"
                >
                  Reserve Agora
                </Link>
              </div>
            </div>
            
            {/* Barra de pesquisa estilo GetYourGuide */}
            <div className="hidden sm:block bg-gray-100 rounded-lg p-3 mb-4 shadow-sm">
              <form onSubmit={handleSearch} className="flex flex-wrap items-center">
                <div className="relative flex-grow mr-2 mb-2 sm:mb-0">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MapPinIcon className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-white focus:ring-red-600 focus:border-red-600"
                    placeholder="Para onde você vai?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="relative flex-grow mr-2 mb-2 sm:mb-0">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <CalendarIcon className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-white focus:ring-red-600 focus:border-red-600"
                    placeholder="Quando?"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Buscar
                </button>
              </form>
            </div>
          </div>

          {/* Menu mobile */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-100 text-red-600'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-red-600',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              
              {/* Barra de pesquisa mobile */}
              <form onSubmit={handleSearch} className="mt-3 px-2 space-y-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <MapPinIcon className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-white focus:ring-red-600 focus:border-red-600"
                    placeholder="Para onde você vai?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <CalendarIcon className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-white focus:ring-red-600 focus:border-red-600"
                    placeholder="Quando?"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Buscar
                </button>
              </form>
              
              {/* Botão de reserva mobile */}
              <div className="mt-3 px-2">
                <Link
                  href="/tours"
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium text-center block"
                >
                  Reserve Agora
                </Link>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
} 