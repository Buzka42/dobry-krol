'use client';

import Layout from '../../components/layout/Layout';
import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Crown,
  Users,
  Star,
  Award,
  Shield,
  Clock,
  CheckCircle,
  Send
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "+48 123 456 789",
      subtitle: "Dostepny 24/7 dla pilnych spraw"
    },
    {
      icon: Mail,
      title: "Email", 
      content: "kontakt@dobrykrol.pl",
      subtitle: "Odpowiadamy w ciagu 24h"
    },
    {
      icon: MapPin,
      title: "Adres",
      content: "ul. Krolewska 123, 00-001 Warszawa", 
      subtitle: "Biuro otwarte Pon-Pt 9:00-18:00"
    }
  ];

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-20 bg-gray-50 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto px-4">
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">
              Dziekujemy za Kontakt!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Twoja wiadomosc zostala wyslana. Nasz zespol skontaktuje sie z Toba w ciagu 24 godzin.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-4 bg-yellow-300 hover:bg-yellow-400 text-black rounded-lg font-semibold"
            >
              Wyslij Kolejna Wiadomosc
            </button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <Crown className="w-16 h-16 text-yellow-600 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Skontaktuj Sie z Nami
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jestesmy tu, aby pomoc Ci w kazdym aspekcie sprzedazy nieruchomosci.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Napisz do Nas</h2>
              <p className="text-gray-600 mb-8">
                Wypelnij formularz, a nasz ekspert skontaktuje sie z Toba w ciagu 24 godzin.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Imie i nazwisko *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      placeholder="jan@przyklad.pl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="+48 123 456 789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Temat *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Wycena mieszkania w Warszawie"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Wiadomosc *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
                    placeholder="Opisz swoja nieruchomosc..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-yellow-300 hover:bg-yellow-400 text-black rounded-lg font-semibold flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Wysylanie...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Wyslij Wiadomosc</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Informacje Kontaktowe</h2>
                <p className="text-gray-600 mb-8">
                  Wybierz najwygodniejszy dla Ciebie sposob kontaktu.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg border bg-gray-50"
                  >
                    <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {info.title}
                      </h3>
                      <p className="text-gray-800 font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}