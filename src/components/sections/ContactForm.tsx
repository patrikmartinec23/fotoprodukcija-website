"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';

const ContactForm: React.FC = () => {
  const pathname = usePathname();
  
  // Function to determine background color based on current path
  const getBackgroundClass = () => {
    return pathname === '/' ? 'py-16 bg-white' : 'py-16';
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <section id="contact-form" className={getBackgroundClass()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="slideUp">
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-100 relative">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Kontaktirajte nas
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Pripravljeni smo poslušati vaše ideje in ustvariti nepozabne fotografije. 
                Kontaktirajte nas za brezplačno svetovanje.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info Section */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Naši kontaktni podatki</h3>
                  <div className="space-y-6">
                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                      <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-200">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">Telefon</h4>
                        <p className="text-gray-700 font-medium">+381 12 345 6789</p>
                        <p className="text-gray-600">+381 64 123 4567</p>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                      <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-200">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">E-naslov</h4>
                        <p className="text-gray-700 font-medium">info@fotoprodukcija.rs</p>
                        <p className="text-gray-600">booking@fotoprodukcija.rs</p>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                      <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-200">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">Naslov</h4>
                        <p className="text-gray-700 font-medium">Knez Mihailova 10</p>
                        <p className="text-gray-600">11000 Beograd, Srbija</p>
                      </div>
                    </div>

                    <div className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                      <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-200">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-2">Delovni čas</h4>
                        <p className="text-gray-700 font-medium">Pon - Pet: 9:00 - 18:00</p>
                        <p className="text-gray-600">Sob: 10:00 - 16:00</p>
                        <p className="text-gray-600">Ned: Po dogovoru</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Section */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Pošljite povpraševanje</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Ime in priimek"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Vaše ime"
                    />
                    <Input
                      label="E-naslov"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="vas@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Telefon"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+381 12 345 6789"
                    />
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Vrsta storitve
                        <span className="text-black ml-1">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-500 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all duration-200"
                      >
                        <option value="">Izberite storitev</option>
                        <option value="event">Dogodek</option>
                        <option value="portrait">Portret</option>
                        <option value="corporate">Korporativno</option>
                        <option value="other">Drugo</option>
                      </select>
                    </div>
                  </div>

                  <Input
                    label="Želeni datum"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sporočilo
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Opišite vaše potrebe, lokacijo, število gostov, posebne zahteve..."
                      className="w-full px-4 py-3 border border-gray-500 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all duration-200 resize-none"
                    />
                  </div>

                  <div className="space-y-4">
                    <Button 
                      variant="primary" 
                      size="lg" 
                      className="w-full"
                    >
                      Pošljite povpraševanje
                    </Button>

                    <p className="text-sm text-gray-600 text-center bg-gray-100 py-3 px-4 rounded-lg">
                      ✓ Odgovorili vam bomo v roku 24 ur
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gray-900 rounded-full opacity-10"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gray-600 rounded-full opacity-10"></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ContactForm;