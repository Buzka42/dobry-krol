"use client";

import { 
  Crown, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Home,
  FileText,
  Calculator,
  Users,
  Camera,
  Handshake,
  Award,
  Clock,
  Target,
  Lightbulb,
  MapPin,
  TrendingUp,
  ClipboardCheck,
  Scale,
  MessageCircle,
  UserCheck,
  Key
} from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { openChat } from '../../components/ui/ChatBot';

export default function JakSprzedajemyPage() {
  const steps = [
    {
      number: "01",
      icon: Home,
      title: "Przygotowanie mieszkania",
      description: "Pierwsze wrażenie ma ogromne znaczenie. Dlatego mieszkanie przed sprzedażą warto uporządkować, odświeżyć i zadbać o jego neutralny charakter. Często stosuje się tzw. home staging – czyli przygotowanie wnętrza tak, aby wyglądało atrakcyjnie dla jak największej liczby potencjalnych kupujących."
    },
    {
      number: "02", 
      icon: Calculator,
      title: "Realna wycena",
      description: "Właściwe ustalenie ceny jest kluczowe. Zbyt wysoka cena może odstraszyć zainteresowanych, a zbyt niska sprawi, że sprzedający straci potencjalny zysk. Rzetelna wycena opiera się na analizie aktualnych transakcji w okolicy, trendów rynkowych oraz unikalnych cech nieruchomości."
    },
    {
      number: "03",
      icon: Target,
      title: "Ustalenie optymalnej strategii sprzedażowej", 
      description: "Każde mieszkanie wymaga indywidualnego podejścia. Strategia sprzedaży obejmuje wybór kanałów promocji, określenie grupy docelowej oraz sposób prezentacji oferty. Dobre ogłoszenie, profesjonalne zdjęcia i spójna komunikacja zwiększają szanse na szybkie znalezienie kupca."
    },
    {
      number: "04",
      icon: MessageCircle,
      title: "Negocjacje z potencjalnymi kupującymi",
      description: "Rozmowy o cenie i warunkach transakcji często bywają trudne. Profesjonalny pośrednik dba o to, aby negocjacje były prowadzone w sposób rzeczowy i oparty na faktach, jednocześnie reprezentując interesy sprzedającego. Umiejętne negocjacje pozwalają uzyskać najlepsze możliwe warunki sprzedaży."
    },
    {
      number: "05", 
      icon: UserCheck,
      title: "Wybór kontrahenta",
      description: "Spośród zainteresowanych kupujących należy wybrać tego, który nie tylko proponuje atrakcyjną cenę, ale także posiada możliwości finansowe i odpowiednią motywację. Sprawdzenie wiarygodności nabywcy pozwala uniknąć problemów w dalszych etapach transakcji."
    },
    {
      number: "06",
      icon: FileText, 
      title: "Organizacja dokumentów",
      description: "Sprzedaż mieszkania wymaga zebrania kompletu dokumentów, takich jak odpis z księgi wieczystej, zaświadczenia o braku zaległości czy wypisy z rejestru gruntów. Ich prawidłowe przygotowanie przyspiesza cały proces i zapobiega komplikacjom podczas podpisywania umowy."
    },
    {
      number: "07",
      icon: Scale,
      title: "Obsługa prawna", 
      description: "Każda transakcja sprzedaży mieszkania musi być potwierdzona aktem notarialnym. Obsługa prawna zapewnia bezpieczeństwo obu stronom, wyjaśnia zapisy umowy i dba o zgodność dokumentów z obowiązującymi przepisami."
    },
    {
      number: "08",
      icon: Handshake,
      title: "Finalizacja transakcji",
      description: "Moment podpisania aktu notarialnego to oficjalne zakończenie procesu sprzedaży. W tym momencie nabywca przelewa środki na konto sprzedającego, a własność nieruchomości zostaje przeniesiona na nowego właściciela."
    },
    {
      number: "09", 
      icon: Key,
      title: "Przekazanie lokalu i obsługa posprzedażowa",
      description: "Ostatnim etapem jest przekazanie mieszkania – wraz z kluczami i protokołem zdawczo-odbiorczym. Często wiąże się to także z rozliczeniem mediów. Profesjonalny pośrednik może dodatkowo zapewnić obsługę posprzedażową, dbając o to, aby obie strony były w pełni zadowolone z przebiegu całego procesu."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] right-[2%] w-12 h-12 md:w-32 md:h-32 rotate-12 animate-float flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image 
                src="/img/coin.png" 
                alt="Floating Coin" 
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center transform -translate-x-[5%] -translate-y-[5%]">
                <Home className="w-6 h-6 md:w-12 md:h-12 text-black" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[30%] left-[2%] w-10 h-10 md:w-24 md:h-24 -rotate-6 animate-float-reverse flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image 
                src="/img/coin.png" 
                alt="Floating Coin" 
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center transform -translate-x-[5%] -translate-y-[5%]">
                <Crown className="w-4 h-4 md:w-8 md:h-8 text-black" />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="royal-title text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6">
              Jak wygląda proces sprzedaży mieszkania krok po kroku?
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10">
              Sprzedaż mieszkania to złożony proces, który wymaga odpowiedniego przygotowania, wiedzy rynkowej oraz wsparcia profesjonalistów. Aby transakcja przebiegła sprawnie, bezpiecznie i z korzyścią dla obu stron, warto przejść przez kolejne etapy w uporządkowany sposób.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/kontakt#formularz" className="px-8 py-4 bg-yellow-300 text-black font-bold hover:-translate-y-1 transition-all duration-300 neo-border">
                Zgłoś mieszkanie
              </a>
              <button 
                onClick={openChat}
                className="px-8 py-4 golden-accent text-black font-bold hover:-translate-y-1 transition-all duration-300 neo-border"
              >
                Bezpłatna wycena
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold royal-title medieval-decoration mb-6">
              9 Kroków Skutecznej Sprzedaży
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sprawdzony proces sprzedaży mieszkań w Warszawie, który gwarantuje bezpieczeństwo i najlepszą cenę.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-8 neo-border hover:-translate-y-2 transition-all duration-300 group"
              >
                {/* Number and Icon */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center neo-border-small">
                    <span className="text-black font-bold text-xl">{step.number}</span>
                  </div>
                  <div className="w-12 h-12 golden-accent rounded-full flex items-center justify-center neo-border-small">
                    <step.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold royal-title mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-300">
        <div className="container mx-auto px-4 text-center">
          <h2 className="royal-title text-3xl md:text-4xl font-bold text-black mb-6">
            Gotowy na sprzedaż mieszkania w Warszawie?
          </h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Skorzystaj z naszego doświadczenia w sprzedaży nieruchomości. Skuteczna sprzedaż mieszkania bez stresu.
          </p>
          <a href="/kontakt#formularz" className="inline-block px-8 py-4 bg-black text-yellow-300 font-bold hover:-translate-y-1 transition-all duration-300 neo-border">
            Rozpocznij sprzedaż
          </a>
        </div>
      </section>
    </Layout>
  );
}