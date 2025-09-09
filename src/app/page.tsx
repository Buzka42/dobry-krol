import Layout from '../components/layout/Layout';
import { Crown, Star, Shield } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
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
                <Crown className="w-12 h-12 text-black" />
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
              DOBRY KRÓL — ZAUFANY DORADCA W SPRZEDAŻY MIESZKANIA
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-6">
              WYCENIAMY / NEGOCJUJEMY / SPRZEDAJEMY MIESZKANIA W WARSZAWIE
            </h2>
            
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
              Skuteczna sprzedaż mieszkań w Warszawie – bezpiecznie, szybko, za pierwszym razem.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/kontakt#formularz" className="px-8 py-4 bg-yellow-300 text-black font-bold hover:-translate-y-1 transition-all duration-300 neo-border">
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
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="royal-title text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
              Dlaczego my?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skupiamy cały proces w jednym miejscu — od rzetelnej wyceny po bezpieczną finalizację u notariusza.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white neo-border neo-hover">
              <Crown className="w-12 h-12 text-black mx-auto mb-4" />
              <h3 className="text-lg font-bold royal-title mb-3">Realna wycena</h3>
              <p className="text-gray-600 text-sm">Opieramy się na danych transakcyjnych i trendach rynkowych, nie na życzeniach rynku.</p>
            </div>
            <div className="text-center p-6 bg-white neo-border neo-hover">
              <Crown className="w-12 h-12 text-black mx-auto mb-4" />
              <h3 className="text-lg font-bold royal-title mb-3">Pełne negocjacje</h3>
              <p className="text-gray-600 text-sm">Reprezentujemy Twój interes w rozmowach z kupującymi, rzeczowo i na podstawie faktów.</p>
            </div>
            <div className="text-center p-6 bg-white neo-border neo-hover">
              <Crown className="w-12 h-12 text-black mx-auto mb-4" />
              <h3 className="text-lg font-bold royal-title mb-3">Wyłączność = spójność</h3>
              <p className="text-gray-600 text-sm">Jedna strategia, jeden kontakt, pełna odpowiedzialność po naszej stronie.</p>
            </div>
            <div className="text-center p-6 bg-white neo-border neo-hover">
              <Crown className="w-12 h-12 text-black mx-auto mb-4" />
              <h3 className="text-lg font-bold royal-title mb-3">Bezpieczna finalizacja</h3>
              <p className="text-gray-600 text-sm">Obsługa prawna i komplet dokumentów — szybko, bezpiecznie, za pierwszym razem.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="royal-title text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
              Jak sprzedajemy krok po kroku
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sprzedaż mieszkania to proces — pokazujemy go jasno i przewidywalnie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 neo-border neo-hover">
              <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 neo-border-small">
                <span className="text-black font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold royal-title mb-3">Przygotowanie mieszkania</h3>
              <p className="text-gray-600 text-sm mb-4">Profesjonalne przygotowanie nieruchomości do prezentacji.</p>
              <a href="/jak-sprzedajemy" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">Czytaj więcej →</a>
            </div>
            <div className="text-center p-6 bg-gray-50 neo-border neo-hover">
              <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 neo-border-small">
                <span className="text-black font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold royal-title mb-3">Realna wycena</h3>
              <p className="text-gray-600 text-sm mb-4">Dokładna analiza rynku nieruchomości w Warszawie i ustalenie optymalnej ceny sprzedaży mieszkania.</p>
              <a href="/jak-sprzedajemy" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">Czytaj więcej →</a>
            </div>
            <div className="text-center p-6 bg-gray-50 neo-border neo-hover">
              <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 neo-border-small">
                <span className="text-black font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold royal-title mb-3">Strategia sprzedaży</h3>
              <p className="text-gray-600 text-sm mb-4">Opracowanie indywidualnej strategii sprzedaży nieruchomości.</p>
              <a href="/jak-sprzedajemy" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">Czytaj więcej →</a>
            </div>
            <div className="text-center p-6 bg-gray-50 neo-border neo-hover">
              <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 neo-border-small">
                <span className="text-black font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold royal-title mb-3">Negocjacje z kupującymi</h3>
              <p className="text-gray-600 text-sm mb-4">Profesjonalne prowadzenie negocjacji w Twoim imieniu.</p>
              <a href="/jak-sprzedajemy" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">Czytaj więcej →</a>
            </div>
            <div className="text-center p-6 bg-gray-50 neo-border neo-hover">
              <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 neo-border-small">
                <span className="text-black font-bold">5</span>
              </div>
              <h3 className="text-lg font-bold royal-title mb-3">Wybór kontrahenta</h3>
              <p className="text-gray-600 text-sm mb-4">Selekcja najlepszego kupującego dla Twojego mieszkania.</p>
              <a href="/jak-sprzedajemy" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">Czytaj więcej →</a>
            </div>
            <div className="text-center p-6 bg-gray-50 neo-border neo-hover">
              <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 neo-border-small">
                <span className="text-black font-bold">6</span>
              </div>
              <h3 className="text-lg font-bold royal-title mb-3">Organizacja dokumentów</h3>
              <p className="text-gray-600 text-sm mb-4">Kompletowanie wszystkich potrzebnych dokumentów.</p>
              <a href="/jak-sprzedajemy" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">Czytaj więcej →</a>
            </div>
            <div className="text-center p-6 bg-gray-50 neo-border neo-hover">
              <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 neo-border-small">
                <span className="text-black font-bold">7</span>
              </div>
              <h3 className="text-lg font-bold royal-title mb-3">Obsługa prawna</h3>
              <p className="text-gray-600 text-sm mb-4">Bezpieczna finalizacja u notariusza.</p>
              <a href="/jak-sprzedajemy" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">Czytaj więcej →</a>
            </div>
            <div className="text-center p-6 bg-gray-50 neo-border neo-hover">
              <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 neo-border-small">
                <span className="text-black font-bold">8</span>
              </div>
              <h3 className="text-lg font-bold royal-title mb-3">Finalizacja transakcji</h3>
              <p className="text-gray-600 text-sm mb-4">Podpisanie aktu notarialnego i przekazanie środków.</p>
              <a href="/jak-sprzedajemy" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">Czytaj więcej →</a>
            </div>
            <div className="text-center p-6 bg-gray-50 neo-border neo-hover">
              <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 neo-border-small">
                <span className="text-black font-bold">9</span>
              </div>
              <h3 className="text-lg font-bold royal-title mb-3">Przekazanie lokalu</h3>
              <p className="text-gray-600 text-sm mb-4">Protokół zdawczo-odbiorczy i obsługa posprzedażowa.</p>
              <a href="/jak-sprzedajemy" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">Czytaj więcej →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-yellow-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="royal-title text-3xl md:text-4xl font-bold text-black mb-6">
            Gotowy, by sprzedać bez stresu?
          </h2>
          <a href="/kontakt#formularz" className="inline-block px-8 py-4 bg-black text-yellow-300 font-bold hover:-translate-y-1 transition-all duration-300 neo-border">
            Zgłoś mieszkanie
          </a>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="royal-title text-3xl md:text-4xl font-bold tracking-tight text-black mb-6">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Odpowiedzi na kluczowe pytania dotyczące sprzedaży mieszkań w Warszawie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 neo-border">
              <h3 className="text-lg font-bold royal-title mb-3">Ile trwa sprzedaż mieszkania w Warszawie?</h3>
              <p className="text-gray-600 text-sm mb-4">Czas sprzedaży mieszkań w Warszawie zależy od lokalizacji, standardu i ceny, ale dzięki realnej wycenie i sprawdzonej strategii zazwyczaj finalizujemy transakcję w ciągu kilku tygodni, a nie miesięcy.</p>
              <a href="/faq" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">Zobacz wszystkie pytania →</a>
            </div>
            <div className="bg-white p-6 neo-border">
              <h3 className="text-lg font-bold royal-title mb-3">Jak wycenić mieszkanie na sprzedaż w Warszawie?</h3>
              <p className="text-gray-600 text-sm mb-4">Opieramy się na analizie aktualnych transakcji mieszkań w okolicy, trendach rynku nieruchomości oraz cechach nieruchomości. Dzięki temu cena jest realistyczna i atrakcyjna dla kupujących.</p>
              <a href="/faq" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">Zobacz wszystkie pytania →</a>
            </div>
            <div className="bg-white p-6 neo-border">
              <h3 className="text-lg font-bold royal-title mb-3">Dlaczego warto sprzedać mieszkanie na wyłączność?</h3>
              <p className="text-gray-600 text-sm mb-4">Umowa na wyłączność oznacza, że skupiamy wszystkie działania w jednym miejscu: promocję mieszkania, negocjacje z kupującymi i obsługę prawną sprzedaży nieruchomości.</p>
              <a href="/faq" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">Zobacz wszystkie pytania →</a>
            </div>
            <div className="bg-white p-6 neo-border">
              <h3 className="text-lg font-bold royal-title mb-3">Czy pomagacie w negocjacjach przy sprzedaży mieszkania?</h3>
              <p className="text-gray-600 text-sm mb-4">Tak. Reprezentujemy interesy sprzedającego przy sprzedaży mieszkań w Warszawie na każdym etapie rozmów, prowadząc negocjacje w sposób rzeczowy i oparty na faktach.</p>
              <a href="/faq" className="text-yellow-600 hover:text-yellow-700 font-semibold text-sm">Zobacz wszystkie pytania →</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-black text-yellow-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            <div className="p-4">
              <p className="font-bold text-sm">Sprzedaż, która działa.</p>
            </div>
            <div className="p-4">
              <p className="font-bold text-sm">Bezpieczna transakcja od A do Z.</p>
            </div>
            <div className="p-4">
              <p className="font-bold text-sm">Mieszkanie sprzedane. Skutecznie.</p>
            </div>
            <div className="p-4">
              <p className="font-bold text-sm">Twoja pewność w sprzedaży.</p>
            </div>
            <div className="p-4">
              <p className="font-bold text-sm">Szybko. Bezpiecznie. Za pierwszym razem.</p>
            </div>
            <div className="p-4">
              <p className="font-bold text-sm">Warszawa sprzedaje z nami.</p>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
}


