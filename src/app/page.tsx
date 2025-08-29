import Layout from '../components/layout/Layout';
import { Crown } from 'lucide-react';

export default function HomePage() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-white pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] right-[10%] w-32 h-32 bg-yellow-300 rotate-12 rounded-full neo-border animate-float flex items-center justify-center">
            <Crown className="w-16 h-16 text-black" />
          </div>
          <div className="absolute bottom-[20%] left-[5%] w-24 h-24 golden-accent -rotate-6 rounded-full neo-border animate-float-reverse flex items-center justify-center">
            <Crown className="w-12 h-12 text-black" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="royal-title text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black mb-6">
              Ekspert Sprzedazy Nieruchomosci
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10">
              Pomagamy sprzedac nieruchomosci szybko, bezpiecznie i za najlepsza cene.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-yellow-300 text-black font-bold hover:-translate-y-1 transition-all duration-300 neo-border">
                Rozpocznij z AI Doradca
              </button>
              <button className="px-8 py-4 golden-accent text-black font-bold hover:-translate-y-1 transition-all duration-300 neo-border">
                Poznaj Proces
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white neo-border neo-hover">
              <div className="text-3xl font-bold royal-title mb-2">500+</div>
              <div className="text-sm font-medium text-gray-600">Sprzedanych Nieruchomosci</div>
            </div>
            <div className="text-center p-6 bg-white neo-border neo-hover">
              <div className="text-3xl font-bold royal-title mb-2">98%</div>
              <div className="text-sm font-medium text-gray-600">Zadowolonych Klientow</div>
            </div>
            <div className="text-center p-6 bg-white neo-border neo-hover">
              <div className="text-3xl font-bold royal-title mb-2">30</div>
              <div className="text-sm font-medium text-gray-600">Dni Sredni Czas</div>
            </div>
            <div className="text-center p-6 bg-white neo-border neo-hover">
              <div className="text-3xl font-bold royal-title mb-2">24/7</div>
              <div className="text-sm font-medium text-gray-600">Dostepnosc AI</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}


