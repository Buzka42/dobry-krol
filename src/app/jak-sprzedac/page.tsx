"use client";

import { motion } from 'framer-motion';
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
  TrendingUp
} from 'lucide-react';
import Layout from '../../components/layout/Layout';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HowToSellPage() {
  const steps = [
    {
      number: "01",
      icon: Home,
      title: "Przygotowanie Nieruchomosci",
      description: "Pierwszym krokiem jest odpowiednie przygotowanie nieruchomosci do sprzedazy.",
      details: [
        "Wykonanie drobnych napraw i renowacji",
        "Profesjonalne sprzatanie",
        "Usuniecie zbednych przedmiotow",
        "Neutralizacja kolorow i wystroju",
        "Optymalizacja oswietlenia"
      ],
      tips: "Dobrze przygotowana nieruchomosc moze zwiekszyc swoja wartosc nawet o 15%!"
    },
    {
      number: "02",
      icon: Calculator,
      title: "Profesjonalna Wycena",
      description: "Ustalenie odpowiedniej ceny to klucz do szybkiej i oplacalnej sprzedazy.",
      details: [
        "Analiza porownawcza podobnych nieruchomosci",
        "Ocena stanu technicznego",
        "Uwzglednienie unikalnych cech",
        "Analiza trendow rynkowych",
        "Strategia cenowa dostosowana do celow"
      ],
      tips: "Wlasciwa wycena skraca czas sprzedazy srednio o 40%."
    },
    {
      number: "03",
      icon: FileText,
      title: "Przygotowanie Dokumentow",
      description: "Kompletna dokumentacja przyspiesza proces i buduje zaufanie kupujacych.",
      details: [
        "Ksiega wieczysta (aktualna)",
        "Akt notarialny nabycia",
        "Mapa do celow projektowych",
        "Dokumenty techniczne budynku",
        "Rachunki za media i oplaty",
        "Ewentualne pozwolenia i zgody"
      ],
      tips: "Kompletna dokumentacja moze skrocic proces transakcji o 2-3 tygodnie."
    }
  ];

  const benefits = [
    {
      icon: Crown,
      title: "Krolewska Obsluga",
      description: "Pelne wsparcie na kazdym etapie procesu sprzedazy."
    },
    {
      icon: Shield,
      title: "Bezpieczenstwo",
      description: "Kazda transakcja jest zabezpieczona i ubezpieczona."
    },
    {
      icon: TrendingUp,
      title: "Maksymalna Cena",
      description: "Wykorzystujemy wszystkie mozliwosci dla najlepszej ceny."
    },
    {
      icon: Clock,
      title: "Szybkosc",
      description: "Sredni czas sprzedazy to zaledwie 30-45 dni."
    }
  ];

  const tips = [
    {
      icon: Lightbulb,
      title: "Optymalizacja Oswietlenia",
      description: "Jasne, naturalne swiatlo sprawia, ze przestrzenie wydaja sie wieksze i bardziej atrakcyjne."
    },
    {
      icon: MapPin,
      title: "Podkreslenie Lokalizacji",
      description: "Zawsze prezentuj korzysci lokalizacji: bliskosc komunikacji, szkol, sklepow."
    },
    {
      icon: Target,
      title: "Znaj Swoja Grupe Docelowa",
      description: "Rozne typy nieruchomosci przyciagaja roznych kupujacych - dostosuj prezentacje."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[var(--background)] via-[var(--cream)] to-[var(--parchment)] overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 text-4xl text-[var(--gold-primary)]">🏠</div>
          <div className="absolute top-40 right-20 text-3xl text-[var(--gold-muted)]">📋</div>
          <div className="absolute bottom-40 left-20 text-5xl text-[var(--gold-primary)]">💰</div>
          <div className="absolute bottom-20 right-10 text-3xl text-[var(--gold-muted)]">🤝</div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Crown className="w-16 h-16 text-[var(--gold-primary)] mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold royal-title mb-6 medieval-decoration">
              Jak Sprzedać Nieruchomość
            </h1>
            <p className="text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto leading-relaxed mb-8">
              Kompletny przewodnik po procesie sprzedaży nieruchomości. 
              Poznaj sprawdzone metody, które zapewnią Ci najlepszą cenę i najkrótszy czas sprzedaży.
            </p>
            <motion.button
              className="px-8 py-4 bg-[var(--gold-primary)] hover:bg-[var(--gold-dark)] text-white rounded-lg font-semibold text-lg golden-glow transition-all duration-300 flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Shield className="w-5 h-5" />
              <span>Rozpocznij Sprzedaż Teraz</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold royal-title medieval-decoration mb-6">
              6 Kroków do Udanej Sprzedaży
            </h2>
            <p className="text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
              Sprawdzony proces, który przeprowadził setki zadowolonych klientów przez cały proces sprzedaży.
            </p>
          </motion.div>

          <div className="space-y-16">{steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-lg">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-[var(--gold-primary)] rounded-full flex items-center justify-center golden-glow">
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                    <div className="w-12 h-12 bg-[var(--gold-light)] rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-[var(--gold-dark)]" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold royal-title mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-[var(--foreground)]/70 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[var(--gold-primary)] mt-0.5 flex-shrink-0" />
                        <span className="text-[var(--foreground)]/80">{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-[var(--gold-light)] p-4 rounded-lg border-l-4 border-[var(--gold-primary)]">
                    <p className="text-[var(--gold-dark)] font-medium text-sm">
                      💡 <strong>Wskazowka:</strong> {step.tips}
                    </p>
                  </div>
                </div>

                <div className="flex-1 lg:max-w-md">
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-[var(--gold-light)] to-[var(--cream)] rounded-xl golden-border flex items-center justify-center">
                      <step.icon className="w-24 h-24 text-[var(--gold-primary)] opacity-80" />
                    </div>
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-[var(--gold-primary)] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[var(--parchment)]">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold royal-title medieval-decoration mb-6">
              Dlaczego Warto Wybrac Dobrego Krola?
            </h2>
            <p className="text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
              Nasze uslugi gwarantuja nie tylko udana sprzedaz, ale takze komfort i bezpieczenstwo calego procesu.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 rounded-xl golden-border bg-white hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-[var(--gold-primary)] rounded-full flex items-center justify-center mx-auto mb-4 golden-glow">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold royal-title mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[var(--foreground)]/70 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold royal-title medieval-decoration mb-6">
              Profesjonalne Wskazowki
            </h2>
            <p className="text-xl text-[var(--foreground)]/70 max-w-3xl mx-auto">
              Sekrety profesjonalistow, ktore moga znaczaco zwiekszyc atrakcyjnosc Twojej nieruchomosci.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl golden-border bg-[var(--cream)] hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <tip.icon className="w-12 h-12 text-[var(--gold-primary)] mb-4" />
                <h3 className="text-lg font-semibold royal-title mb-3">
                  {tip.title}
                </h3>
                <p className="text-[var(--foreground)]/70 leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[var(--gold-primary)] to-[var(--gold-dark)]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Award className="w-12 h-12 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Gotowy Sprzedac Swoja Nieruchomosc?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rozpocznij rozmowe z naszym wirtualnym doradca i otrzymaj spersonalizowany plan sprzedazy 
              dostosowany do Twojej nieruchomosci i potrzeb.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                className="px-8 py-4 bg-white hover:bg-gray-100 text-[var(--gold-dark)] rounded-lg font-semibold text-lg transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Crown className="w-5 h-5" />
                <span>Rozpocznij Teraz</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <Link href="/kontakt">
                <motion.button
                  className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[var(--gold-dark)] rounded-lg font-semibold text-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Skontaktuj Sie
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}