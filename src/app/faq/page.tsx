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
import Image from 'next/image';
import { openChat } from '../../components/ui/ChatBot';

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      category: "Podstawowe Informacje",
      icon: Info,
      questions: [
        {
          question: "Ile trwa sprzedaż mieszkania w Warszawie?",
          answer: "Czas sprzedaży zależy od lokalizacji, standardu i ceny, ale dzięki realnej wycenie i sprawdzonej strategii zazwyczaj finalizujemy transakcję w ciągu kilku tygodni, a nie miesięcy."
        },
        {
          question: "Czy muszę przygotować mieszkanie przed sprzedażą?",
          answer: "Tak, estetyczne przygotowanie (tzw. home staging) zwiększa atrakcyjność oferty. Wystarczy kilka prostych kroków – uporządkowanie, odświeżenie i neutralna aranżacja wnętrza. Doradzimy, co zrobić, aby mieszkanie prezentowało się najlepiej."
        },
        {
          question: "Jak ustalana jest cena mieszkania?",
          answer: "Opieramy się na analizie aktualnych transakcji w okolicy, trendach rynkowych oraz cechach nieruchomości. Dzięki temu cena jest realistyczna i atrakcyjna dla kupujących, a jednocześnie zapewnia maksymalny zysk właściciela."
        },
        {
          question: "Dlaczego warto powierzyć sprzedaż na wyłączność?",
          answer: "Umowa na wyłączność oznacza, że skupiamy wszystkie działania w jednym miejscu: promocję, negocjacje, kontakt z kupującymi i obsługę prawną. Dzięki temu proces jest spójny, szybki i bezpieczny, a Klient ma pełną kontrolę nad ofertą."
        }
      ]
    },
    {
      category: "Proces Sprzedaży",
      icon: FileText,
      questions: [
        {
          question: "Czy pomagacie w negocjacjach z kupującymi?",
          answer: "Tak. Reprezentujemy interesy sprzedającego na każdym etapie rozmów, prowadząc negocjacje w sposób rzeczowy i oparty na faktach. Dzięki temu uzyskujemy najlepsze możliwe warunki sprzedaży."
        },
        {
          question: "Jak sprawdzacie wiarygodność kupującego?",
          answer: "Weryfikujemy sytuację finansową kontrahenta i jego zdolność kredytową. Dzięki temu minimalizujemy ryzyko przerwania transakcji na późniejszym etapie."
        },
        {
          question: "Czy zapewniacie obsługę prawną transakcji?",
          answer: "Tak. Współpracujemy z notariuszami i prawnikami, którzy dbają o zgodność dokumentów z przepisami i bezpieczeństwo całego procesu."
        },
        {
          question: "Jakie dokumenty są potrzebne do sprzedaży mieszkania?",
          answer: "Najczęściej wymagane są: odpis z księgi wieczystej, dokumenty potwierdzające własność, zaświadczenie o braku zadłużeń, czasem dokumentacja techniczna. Pomagamy w skompletowaniu wszystkich niezbędnych zaświadczeń."
        }
      ]
    },
    {
      category: "Transakcja i Płatności",
      icon: Calculator,
      questions: [
        {
          question: "Kiedy otrzymam pieniądze za mieszkanie?",
          answer: "Wypłata następuje najczęściej bezpośrednio po podpisaniu aktu notarialnego, w formie przelewu bankowego. Dzięki temu masz pewność, że środki trafiają na konto w sposób bezpieczny i zgodny z prawem."
        },
        {
          question: "Czy oferujecie pomoc po zakończeniu transakcji?",
          answer: "Tak. Wspieramy naszych klientów także po sprzedaży – pomagamy w przekazaniu lokalu, rozliczeniu mediów czy wyjaśnieniu ewentualnych formalności."
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section - Updated with neobrutalism style */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[2%] w-16 h-16 rotate-12 animate-float flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image 
                src="/img/coin.png" 
                alt="Floating Coin" 
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center transform -translate-x-[5%] -translate-y-[5%]">
                <HelpCircle className="w-8 h-8 text-black" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-20 left-[2%] w-14 h-14 -rotate-6 animate-float-reverse flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image 
                src="/img/coin.png" 
                alt="Floating Coin" 
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center transform -translate-x-[5%] -translate-y-[5%]">
                <CheckCircle className="w-6 h-6 text-black" />
              </div>
            </div>
          </div>
          <div className="absolute top-40 left-[5%] w-12 h-12 rotate-45 animate-float flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image 
                src="/img/coin.png" 
                alt="Floating Coin" 
                fill
                className="object-contain"
              />
              <div className="absolute inset-0 flex items-center justify-center transform -translate-x-[5%] -translate-y-[5%]">
                <Info className="w-6 h-6 text-black" />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <Crown className="w-16 h-16 text-[var(--gold-primary)] mx-auto mb-6" />
          <h1 className="royal-title text-4xl md:text-6xl font-bold mb-6 medieval-decoration">
            Najczęściej zadawane pytania (FAQ)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące sprzedaży mieszkań w Warszawie. 
            Jeśli nie znajdziesz tutaj odpowiedzi na swoje pytanie, skontaktuj się z nami!
          </p>
        </div>
      </section>

      {/* FAQ Content - Updated with neobrutalism styling */}
      <section className="py-20 bg-gray-50">
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
                  <div className="w-12 h-12 bg-[var(--gold-primary)] rounded-full neo-border-small flex items-center justify-center">
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
                        className="bg-white neo-border overflow-hidden"
                        layout
                      >
                        <button
                          onClick={() => setOpenFAQ(isOpen ? null : faqIndex)}
                          className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                        >
                          <span className="font-semibold text-black pr-4">
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
                          <div className="px-6 py-4 bg-gray-50 border-t-4 border-black">
                            <p className="text-gray-700 leading-relaxed">
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

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-white neo-border p-8 max-w-2xl mx-auto">
              <div className="flex justify-center mb-4">
                <MessageCircle className="w-12 h-12 text-[var(--gold-primary)]" />
              </div>
              <h3 className="royal-title text-2xl font-bold mb-4">
                Nie znalazłeś odpowiedzi?
              </h3>
              <p className="text-gray-600 mb-6">
                Nasz wirtualny doradca jest dostępny 24/7 i z checią odpowie na wszystkie Twoje pytania!
              </p>
              <button 
                onClick={openChat}
                className="neo-button-primary"
              >
                Porozmawiaj z Doradca
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}