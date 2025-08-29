"use client";

import { motion } from 'framer-motion';
import { 
  Crown, 
  Shield, 
  HelpCircle,
  ChevronDown,
  CheckCircle,
  Info,
  MessageCircle,
  FileText,
  Clock,
  Calculator
} from 'lucide-react';
import { useState } from 'react';
import Layout from '../../components/layout/Layout';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      category: "Podstawowe Informacje",
      icon: Info,
      questions: [
        {
          question: "Jak długo trwa proces sprzedaży nieruchomości?",
          answer: "Średni czas sprzedaży z naszymi usługami to 30-45 dni. Oczywiście wszystko zależy od lokalizacji, stanu nieruchomości i warunków rynkowych. Nasz wirtualny doradca pomoże Ci zoptymalizować proces, aby osiągnąć najszybszy możliwy rezultat."
        },
        {
          question: "Jakie są koszty skorzystania z usług Dobrego Króla?",
          answer: "Nasze usługi są oparte na prowizji od udanej transakcji - nie płacisz nic z góry! Szczegółowe informacje o kosztach otrzymasz podczas pierwszej konsultacji z naszym wirtualnym doradcą. Gwarantujemy transparentność i konkurencyjne stawki."
        },
        {
          question: "W jakich miastach działacie?",
          answer: "Działamy w całej Polsce, ze szczególnym naciskiem na największe miasta: Warszawa, Kraków, Gdańsk, Wrocław, Poznań. Nasz wirtualny doradca jest dostępny 24/7 niezależnie od lokalizacji, a nasi lokalni eksperci zapewnią wsparcie na miejscu."
        }
      ]
    },
    {
      category: "Proces Sprzedaży",
      icon: FileText,
      questions: [
        {
          question: "Jakie dokumenty potrzebuję do sprzedaży?",
          answer: "Podstawowe dokumenty to: księga wieczysta, akt notarialny nabycia, mapa nieruchomości, dokumenty techniczne (pozwolenie na budowę, odbiory), aktualne rachunki za media. Nasz wirtualny doradca przeprowadzi Cię przez pełną listę i pomoże przygotować wszystkie niezbędne dokumenty."
        },
        {
          question: "Czy muszę robić remont przed sprzedażą?",
          answer: "Nie zawsze! Nasi eksperci dokonają profesjonalnej oceny i doradzą, które inwestycje rzeczywiście zwiększą wartość nieruchomości. Czasem drobne poprawki mogą znacznie zwiększyć atrakcyjność, a czasem lepiej sprzedać 'jak jest' i obniżyć cenę."
        },
        {
          question: "Jak przygotować mieszkanie do pokazów?",
          answer: "Nasz doradca przekaże Ci profesjonalne wskazówki dotyczące home stagingu. Podstawy to: porządek, neutralne kolory, dobre oświetlenie, usunięcie zbędnych przedmiotów. Zapewniamy również profesjonalne sesje fotograficzne."
        }
      ]
    },
    {
      category: "Wycena i Cena",
      icon: Calculator,
      questions: [
        {
          question: "Jak wyceniacie nieruchomości?",
          answer: "Używamy profesjonalnych metod wyceny: analiza porównawcza (podobne nieruchomości w okolicy), metoda dochodowa (dla nieruchomości inwestycyjnych), metoda kosztowa. Uwzględniamy aktualne trendy rynkowe, lokalizację, stan techniczny i unikalne cechy nieruchomości."
        },
        {
          question: "Czy mogę negocjować cenę z kupującym?",
          answer: "Oczywiście! Negocjacje to nasza specjalność. Naši eksperci poprowadzą negocjacje w Twoim imieniu, dbając o osiągnięcie najlepszej możliwej ceny. Zanim podejmiemy jakiekolwiek decyzje, zawsze skonsultujemy się z Tobą."
        },
        {
          question: "Co jeśli cena rynkowa jest niższa niż oczekiwana?",
          answer: "Przedstawimy Ci rzetelną analizę rynku i możliwe opcje: dostosowanie ceny do realiów rynkowych, inwestycje zwiększające wartość, poczekanie na lepsze warunki rynkowe. Zawsze szukamy rozwiązań, które będą dla Ciebie najkorzystniejsze."
        }
      ]
    },
    {
      category: "Bezpieczeństwo",
      icon: Shield,
      questions: [
        {
          question: "Jak zabezpieczacie transakcję?",
          answer: "Współpracujemy z zaufanymi kancelariami notarialnymi, sprawdzamy wiarygodność kupujących, zabezpieczamy zadatek, prowadzimy pełną dokumentację. Każda transakcja jest ubezpieczona, a Ty masz pełną transparentność procesu."
        },
        {
          question: "Co jeśli kupujący się wycofa?",
          answer: "Dzięki odpowiednim zabezpieczeniom prawnym (zadatek, umowa przedwstępna) jesteś chroniony przed skutkami wycofania się kupującego. W większości przypadków zadatek pozostaje u sprzedającego jako rekompensata."
        },
        {
          question: "Czy moje dane osobowe są bezpieczne?",
          answer: "Absolutnie! Przestrzegamy najwyższych standardów RODO. Twoje dane są szyfrowane, przechowywane bezpiecznie i nigdy nie są udostępniane osobom trzecim bez Twojej wyraźnej zgody. Masz pełną kontrolę nad swoimi danymi osobowymi."
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--background)] via-[var(--cream)] to-[var(--parchment)] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-4xl text-[var(--gold-primary)]">❓</div>
          <div className="absolute top-40 right-20 text-3xl text-[var(--gold-muted)]">❔</div>
          <div className="absolute bottom-40 left-20 text-5xl text-[var(--gold-primary)]">💡</div>
          <div className="absolute bottom-20 right-10 text-3xl text-[var(--gold-muted)]">📋</div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <HelpCircle className="w-16 h-16 text-[var(--gold-primary)] mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold royal-title mb-6 medieval-decoration">
              Często Zadawane Pytania
            </h1>
            <p className="text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto leading-relaxed">
              Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące sprzedaży nieruchomości. 
              Jeśli nie znajdziesz tutaj odpowiedzi na swoje pytanie, skorzystaj z naszego wirtualnego doradcy!
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-[var(--gold-primary)] rounded-full flex items-center justify-center golden-glow">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold royal-title">
                    {category.category}
                  </h2>
                </div>

                {/* Questions */}
                <div className="space-y-4">
                  {category.questions.map((faq, index) => {
                    const faqIndex = categoryIndex * 10 + index;
                    const isOpen = openFAQ === faqIndex;
                    
                    return (
                      <motion.div
                        key={index}
                        className="golden-border rounded-lg overflow-hidden"
                        layout
                      >
                        <button
                          onClick={() => setOpenFAQ(isOpen ? null : faqIndex)}
                          className="w-full px-6 py-4 text-left bg-[var(--cream)] hover:bg-[var(--gold-light)] transition-colors flex items-center justify-between"
                        >
                          <span className="font-semibold text-[var(--foreground)] pr-4">
                            {faq.question}
                          </span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-5 h-5 text-[var(--gold-dark)] flex-shrink-0" />
                          </motion.div>
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{ height: isOpen ? 'auto' : 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-4 bg-white border-t border-[var(--gold-light)]">
                            <p className="text-[var(--foreground)]/80 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[var(--parchment)]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <MessageCircle className="w-12 h-12 text-[var(--gold-primary)] mx-auto mb-6" />
            <h2 className="text-3xl font-bold royal-title mb-6 medieval-decoration">
              Nie Znalazłeś Odpowiedzi?
            </h2>
            <p className="text-xl text-[var(--foreground)]/70 mb-8 max-w-2xl mx-auto">
              Nasz wirtualny doradca jest dostępny 24/7 i chętnie odpowie na wszystkie Twoje pytania. 
              Rozpocznij rozmowę już teraz!
            </p>
            <motion.button
              className="px-8 py-4 bg-[var(--gold-primary)] hover:bg-[var(--gold-dark)] text-white rounded-lg font-semibold text-lg golden-glow transition-all duration-300 flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Crown className="w-5 h-5" />
              <span>Porozmawiaj z Doradcą</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}