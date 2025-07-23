"use client";

import React, { useState } from 'react';
import Card from '../ui/Card';
import Input from '../ui/Input';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';

const ContactForm: React.FC = () => {
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
    <section id="contact-form" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedSection animation="slideRight" className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Rezervirajte termin
              </h2>
              <p className="text-xl text-gray-600">
                Pripravljeni smo poslušati vaše ideje in ustvariti nepozabne fotografije. 
                Kontaktirajte nas za brezplačno svetovanje.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 text-gray-600 mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Telefon</h3>
                  <p className="text-gray-600">+381 12 345 6789</p>
                  <p className="text-gray-600">+381 64 123 4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 text-gray-600 mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">E-naslov</h3>
                  <p className="text-gray-600">info@fotoprodukcija.rs</p>
                  <p className="text-gray-600">booking@fotoprodukcija.rs</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 text-gray-600 mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Naslov</h3>
                  <p className="text-gray-600">Knez Mihailova 10</p>
                  <p className="text-gray-600">11000 Beograd, Srbija</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 text-gray-600 mt-1">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Delovni čas</h3>
                  <p className="text-gray-600">Pon - Pet: 9:00 - 18:00</p>
                  <p className="text-gray-600">Sob: 10:00 - 16:00</p>
                  <p className="text-gray-600">Ned: Po dogovoru</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="slideLeft" delay={200}>
            <Card padding="lg">
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Telefon"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+381 12 345 6789"
                />
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vrsta storitve *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Izberite storitev</option>
                    <option value="wedding">Poroka</option>
                    <option value="portrait">Portret</option>
                    <option value="event">Dogodek</option>
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

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sporočilo
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Opišite vaše potrebe, lokacijo, število gostov, posebne zahteve..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <Button variant="primary" size="lg" className="w-full">
                Pošljite povpraševanje
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Odgovorili vam bomo v roku 24 ur
              </p>
            </form>
          </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
