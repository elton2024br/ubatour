'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope, FaClock } from 'react-icons/fa';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio de formulário
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Limpar o formulário
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: '',
      });
      
      // Resetar a mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="py-8">
      <div className="container">
        {/* Cabeçalho da página */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-[var(--primary-dark)] mb-4">Entre em Contato</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos aqui para ajudar! Envie-nos uma mensagem e responderemos o mais breve possível.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de contato */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-[var(--primary)] mb-6">Envie uma Mensagem</h2>
            
            {submitSuccess && (
              <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}
            
            {submitError && (
              <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">Nome Completo</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                    placeholder="seu.email@exemplo.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="telefone" className="block text-gray-700 font-medium mb-2">Telefone</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="assunto" className="block text-gray-700 font-medium mb-2">Assunto</label>
                <select
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                  required
                >
                  <option value="">Selecione um assunto</option>
                  <option value="Informações sobre passeios">Informações sobre passeios</option>
                  <option value="Reservas">Reservas</option>
                  <option value="Cancelamentos">Cancelamentos</option>
                  <option value="Parcerias">Parcerias</option>
                  <option value="Sugestões">Sugestões</option>
                  <option value="Reclamações">Reclamações</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="mensagem" className="block text-gray-700 font-medium mb-2">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                  placeholder="Digite sua mensagem aqui..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
          
          {/* Informações de contato */}
          <div>
            <h2 className="text-2xl font-bold text-[var(--primary)] mb-6">Informações de Contato</h2>
            
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-4 text-[var(--primary)]" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Endereço</h3>
                    <p className="text-gray-600">Av. Iperoig, 214 - Centro, Ubatuba - SP, 11680-000</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <FaPhone className="mt-1 mr-4 text-[var(--primary)]" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Telefone</h3>
                    <p className="text-gray-600">(12) 3456-7890</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <FaWhatsapp className="mt-1 mr-4 text-[var(--primary)]" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">WhatsApp</h3>
                    <p className="text-gray-600">(12) 98765-4321</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <FaEnvelope className="mt-1 mr-4 text-[var(--primary)]" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">E-mail</h3>
                    <p className="text-gray-600">contato@ubatour.com.br</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <FaClock className="mt-1 mr-4 text-[var(--primary)]" size={20} />
                  <div>
                    <h3 className="font-semibold text-gray-800">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-gray-600">Sábado: 9h às 13h</p>
                    <p className="text-gray-600">Domingo: Fechado</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Mapa */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8675092404366!2d-45.07123492376494!3d-23.43379205945388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd52a2a7b1b3f7%3A0x8e83f79d6f8da7a!2sAv.%20Iperoig%2C%20214%20-%20Centro%2C%20Ubatuba%20-%20SP%2C%2011680-000!5e0!3m2!1spt-BR!2sbr!4v1709431234567!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 