'use client';

import Layout from '../../components/layout/Layout';
import { useState } from 'react';
import Image from 'next/image';
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
    // Dane kontaktowe właściciela
    name: '',
    phone: '',
    email: '',
    
    // Informacje o nieruchomości
    address: '',
    floor: '',
    area: '',
    rooms: '',
    buildingYear: '',
    condition: '',
    balcony: false,
    basement: false,
    parking: false,
    
    // Informacje o transakcji
    expectedPrice: '',
    minimumPrice: '',
    availability: '',
    isRented: false,
    rentedUntil: '',
    
    // Dokumentacja
    hasLandRegistry: false,
    hasMortgage: false,
    feesUpToDate: false,
    
    // Dodatkowe informacje
    saleReason: '',
    buyerRequirements: '',
    fullService: false,
    
    // Zgody
    contactConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
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
      subtitle: "Dostępny 24/7 dla pilnych spraw dotyczących sprzedaży mieszkań"
    },
    {
      icon: Mail,
      title: "Email", 
      content: "kontakt@dobrykrol.pl",
      subtitle: "Odpowiadamy w ciągu 24h na zapytania o sprzedaż nieruchomości"
    },
    {
      icon: MapPin,
      title: "Adres",
      content: "ul. Królewska 123, 00-001 Warszawa", 
      subtitle: "Biuro otwarte Pon-Pt 9:00-18:00 - bezpłatne konsultacje"
    }
  ];

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-20 bg-gray-50 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto px-4">
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">
              Dziękujemy za kontakt!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Twoje zgłoszenie zostało wysłane. Nasz zespół skontaktuje się z Tobą w ciągu 24 godzin z propozycją działań i wstępną wyceną mieszkania.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-4 bg-yellow-300 hover:bg-yellow-400 text-black font-bold neo-border"
            >
              Wyślij kolejne zgłoszenie
            </button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="relative overflow-hidden bg-white pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] right-[10%] w-32 h-32 rotate-12 animate-float flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image 
                src="/img/coin.png" 
                alt="Floating Coin" 
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center transform -translate-x-[5%] -translate-y-[5%]">
                <MessageCircle className="w-12 h-12 text-black" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[20%] left-[5%] w-24 h-24 -rotate-6 animate-float-reverse flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image 
                src="/img/coin.png" 
                alt="Floating Coin" 
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center transform -translate-x-[5%] -translate-y-[5%]">
                <Crown className="w-8 h-8 text-black" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="royal-title text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black mb-6">
              Skontaktuj się – zgłoś mieszkanie do sprzedaży
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10">
              Wypełnij formularz — oddzwonimy z propozycją działań i wstępną wyceną.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#formularz" className="px-8 py-4 bg-yellow-300 text-black font-bold hover:-translate-y-1 transition-all duration-300 neo-border">
                Wyceń mieszkanie
              </a>
              <button className="px-8 py-4 golden-accent text-black font-bold hover:-translate-y-1 transition-all duration-300 neo-border">
                Zadaj pytanie asystentowi
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            <div>
              <h2 className="text-3xl font-bold royal-title mb-6" id="formularz">Zgłoś mieszkanie do sprzedaży</h2>
              <p className="text-gray-600 mb-8">
                Wypełnij poniższy formularz, a nasz ekspert skontaktuje się z Tobą w ciągu 24 godzin z propozycją działań i wstępną wyceną.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Dane kontaktowe właściciela */}
                <div className="bg-gray-50 p-6 neo-border">
                  <h3 className="text-xl font-bold royal-title mb-4">Dane kontaktowe właściciela</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Imię i nazwisko *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        placeholder="Jan Kowalski"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Numer telefonu *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        placeholder="+48 123 456 789"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adres e-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        placeholder="jan@example.pl"
                      />
                    </div>
                  </div>
                </div>

                {/* Informacje o nieruchomości */}
                <div className="bg-gray-50 p-6 neo-border">
                  <h3 className="text-xl font-bold royal-title mb-4">Informacje o nieruchomości</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adres mieszkania (ulica, nr budynku, dzielnica) *
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        placeholder="ul. Marszałkowska 10, Śródmieście"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Piętro
                        </label>
                        <input
                          type="number"
                          name="floor"
                          value={formData.floor}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                          placeholder="3"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Powierzchnia (m²)
                        </label>
                        <input
                          type="number"
                          name="area"
                          value={formData.area}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                          placeholder="50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Liczba pokoi
                        </label>
                        <select
                          name="rooms"
                          value={formData.rooms}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        >
                          <option value="">Wybierz</option>
                          <option value="1">1 pokój</option>
                          <option value="2">2 pokoje</option>
                          <option value="3">3 pokoje</option>
                          <option value="4">4 pokoje</option>
                          <option value="5+">5+ pokoi</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Rok budowy / typ budynku
                        </label>
                        <input
                          type="text"
                          name="buildingYear"
                          value={formData.buildingYear}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                          placeholder="2010 / apartamentowiec"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Stan techniczny
                        </label>
                        <select
                          name="condition"
                          value={formData.condition}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        >
                          <option value="">Wybierz</option>
                          <option value="do-remontu">Do remontu</option>
                          <option value="do-odswiezenia">Do odświeżenia</option>
                          <option value="dobry-stan">W dobrym stanie</option>
                          <option value="po-remoncie">Po remoncie</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dodatki
                      </label>
                      <div className="flex flex-wrap gap-4">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="balcony"
                            checked={formData.balcony}
                            onChange={handleCheckboxChange}
                            className="mr-2 w-4 h-4"
                          />
                          Balkon
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="basement"
                            checked={formData.basement}
                            onChange={handleCheckboxChange}
                            className="mr-2 w-4 h-4"
                          />
                          Piwnica
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            name="parking"
                            checked={formData.parking}
                            onChange={handleCheckboxChange}
                            className="mr-2 w-4 h-4"
                          />
                          Miejsce postojowe
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informacje o transakcji */}
                <div className="bg-gray-50 p-6 neo-border">
                  <h3 className="text-xl font-bold royal-title mb-4">Informacje o transakcji</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Oczekiwana cena sprzedaży (PLN)
                        </label>
                        <input
                          type="number"
                          name="expectedPrice"
                          value={formData.expectedPrice}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                          placeholder="500000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Minimalna akceptowalna cena (PLN)
                        </label>
                        <input
                          type="number"
                          name="minimumPrice"
                          value={formData.minimumPrice}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                          placeholder="450000"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Planowany termin dostępności
                      </label>
                      <input
                        type="text"
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        placeholder="Styczeń 2024 lub natychmiast"
                      />
                    </div>
                    <div>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          name="isRented"
                          checked={formData.isRented}
                          onChange={handleCheckboxChange}
                          className="mr-2 w-4 h-4"
                        />
                        Czy mieszkanie jest wynajmowane?
                      </label>
                      {formData.isRented && (
                        <div className="mt-2">
                          <input
                            type="text"
                            name="rentedUntil"
                            value={formData.rentedUntil}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                            placeholder="Do kiedy wynajmowane?"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Dokumentacja */}
                <div className="bg-gray-50 p-6 neo-border">
                  <h3 className="text-xl font-bold royal-title mb-4">Dokumentacja</h3>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="hasLandRegistry"
                        checked={formData.hasLandRegistry}
                        onChange={handleCheckboxChange}
                        className="mr-2 w-4 h-4"
                      />
                      Księga wieczysta (aktualna)
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="hasMortgage"
                        checked={formData.hasMortgage}
                        onChange={handleCheckboxChange}
                        className="mr-2 w-4 h-4"
                      />
                      Obciążenia hipoteczne
                    </label>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="feesUpToDate"
                        checked={formData.feesUpToDate}
                        onChange={handleCheckboxChange}
                        className="mr-2 w-4 h-4"
                      />
                      Opłaty/czynsze uregulowane
                    </label>
                  </div>
                </div>

                {/* Dodatkowe informacje */}
                <div className="bg-gray-50 p-6 neo-border">
                  <h3 className="text-xl font-bold royal-title mb-4">Dodatkowe informacje</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Powód sprzedaży
                      </label>
                      <textarea
                        name="saleReason"
                        value={formData.saleReason}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        placeholder="Przeprowadzka, zmiana mieszkania, itp."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Szczególne oczekiwania dot. kupującego/przebiegu
                      </label>
                      <textarea
                        name="buyerRequirements"
                        value={formData.buyerRequirements}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        placeholder="Szybka transakcja, płatność gotówką, itp."
                      />
                    </div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        name="fullService"
                        checked={formData.fullService}
                        onChange={handleCheckboxChange}
                        className="mr-2 w-4 h-4"
                      />
                      Czy skorzystać z pełnej obsługi prawnej i wsparcia w negocjacjach?
                    </label>
                  </div>
                </div>

                {/* Zgody */}
                <div className="bg-yellow-50 p-6 neo-border">
                  <h3 className="text-xl font-bold royal-title mb-4">Zgody / RODO</h3>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="contactConsent"
                      checked={formData.contactConsent}
                      onChange={handleCheckboxChange}
                      required
                      className="mr-2 w-4 h-4 mt-1"
                    />
                    <span className="text-sm">
                      Wyrażam zgodę na kontakt telefoniczny i e-mail w sprawie sprzedaży mieszkania. *
                    </span>
                  </label>
                  <div className="mt-2 text-xs text-gray-600">
                    <a href="#" className="underline">Polityka prywatności</a> | 
                    <a href="#" className="underline ml-1">Klauzula RODO</a>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-yellow-300 hover:bg-yellow-400 text-black font-bold hover:-translate-y-1 transition-all duration-300 neo-border disabled:opacity-50"
                  >
                    {isSubmitting ? 'Wysyłanie...' : 'Wyślij zgłoszenie'}
                  </button>
                </div>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold royal-title mb-6">Informacje Kontaktowe</h2>
                <p className="text-gray-600 mb-8">
                  Wybierz najwygodniejszy dla Ciebie sposób kontaktu. Jesteśmy dostępni dla naszych klientów.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white neo-border neo-hover"
                  >
                    <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center neo-border-small">
                      <info.icon className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1 royal-title">
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