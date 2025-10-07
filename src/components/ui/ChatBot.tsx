"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Crown, 
  X, 
  Send, 
  Sparkles,
  Home,
  FileText,
  Mail,
  Star
} from 'lucide-react';
import Image from 'next/image';

let openChatFunction: (() => void) | null = null;

export const openChat = () => {
  if (openChatFunction) {
    openChatFunction();
  }
};

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatBotProps {
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

const ChatBot = ({ isOpen: externalIsOpen, setIsOpen: externalSetIsOpen }: ChatBotProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = externalSetIsOpen !== undefined ? externalSetIsOpen : setInternalIsOpen;
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    text: 'Witam w moich królewskich progach! 👑 Jestem Dobry Król, władca tych cyfrowych ziem i ekspert od sprzedaży nieruchomości. Mogę nie mieć zamku (sprzedałem go bardzo korzystnie!), ale za to znam się na nieruchomościach jak mało kto. Czym mogę służyć memu szlachetnemu poddanemu?',
    isBot: true,
    timestamp: new Date(),
  }]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Register the openChat function
  useEffect(() => {
    openChatFunction = () => setIsOpen(true);
    return () => {
      openChatFunction = null;
    };
  }, [setIsOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response with the Good King's personality
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getGoodKingResponse(inputText),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getGoodKingResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('dom') || input.includes('mieszkanie')) {
      return '🏰 Aha! Posiadasz nieruchomość mieszkalną! Jako król, który kiedyś miał własny zamek (aż do tej niefortunnej sprawy z smokiem...), mogę powiedzieć, że każdy dom to czyjeś królestwo. Opowiedz mi o swojej twierdzy - ile ma metrów, gdzie stoi, i czy wszystkie dokumenty są w porządku? Pamiętaj, nawet król musi mieć papierki! 📜';
    }
    
    if (input.includes('dokument') || input.includes('papier')) {
      return '📋 Ah, papierkowa robota! Nawet jako król muszę się z tym zmagać. Potrzebujemy: księgę wieczystą (to jak rodowód dla domu), akt notarialny (żeby wszyscy wiedzieli, że to twoje), dokumenty techniczne (żeby nie zawaliło się na głowę) i pozwolenia (urzędnicy lubią pieczątki). Masz wszystko? Jeśli nie, nie martw się - pomagałem już wielu poddanym uporać się z tą biurokratyczną hydra! 🐉';
    }
    
    if (input.includes('cena') || input.includes('wycena')) {
      return '💰 Cena to serce sprawy! Jako król z doświadczeniem w transakcjach (sprzedałem już 3 zamki i 1 ziemię obiecaną), wiem że wycena to sztuka. Sprawdzę aktualne ceny w twojej okolicy, porównam z podobnymi nieruchomościami i wyczaruję cenę, która sprawi, że kupujący będą stać w kolejce! Chcesz umówić oględziny? Osobiście przybędę na białym koniu... czyli samochodem służbowym. 🐎';
    }
    
    if (input.includes('sprzeda') || input.includes('sprzedać')) {
      return '🤝 Sprzedaż to moja specjalność! Przez lata nauczyłem się, że każda nieruchomość ma swoją historię, a każdy sprzedający - swoje potrzeby. Czy to pilna sprzedaż (zadłużenie u smoka), czy spokojne poszukiwanie najlepszej oferty - mam strategię na każdą sytuację. Powiedz mi więcej o swoich planach, a opracuję plan kampanii godny królewskiego dworu!';
    }
    
    if (input.includes('hej') || input.includes('cześć') || input.includes('dzień dobry')) {
      return '👋 Witaj, szlachetny poddany! Miło mi cię poznać w tych cyfrowych komnatach. Jestem znany z tego, że traktuję każdego klienta jak członka królewskiej rodziny (bez obowiązku oddawania pokłonów). Czym mogę służyć? Mam nadzieję, że nie przyszedłeś tu tylko po autograf! 😄';
    }
    
    return `🤔 Hmm, interesujące pytanie! Jako Dobry Król, zawsze staram się zrozumieć potrzeby moich poddanych. Pozwól, że wyjaśnię to w sposób dostępny nawet dla prostego ludu (bez obrazy!). Opowiedz mi więcej o swojej sytuacji, a postaram się służyć radą godną tronu. W końcu nie bez powodu mówią na mnie "Dobry" - i to nie tylko dlatego, że jestem skromny! 😉`;
  };

  const quickActions = [
    { icon: Home, text: 'Chcę sprzedać nieruchomość', color: 'text-blue-600' },
    { icon: FileText, text: 'Pomoc z dokumentami', color: 'text-green-600' },
    { icon: Mail, text: 'Bezpłatna wycena', color: 'text-purple-600' },
  ];

  return (
    <>
      {/* Floating King Image Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="fixed bottom-6 right-6 z-50 w-24 h-24 md:w-40 md:h-40 overflow-visible group"
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0, rotate: 180 }}
            animate={{ 
              scale: 1, 
              rotate: [0, -3, 3, 0],
              y: [0, -2, 0]
            }}
            exit={{ scale: 0, rotate: 180, opacity: 0 }}
            transition={{ 
              scale: { type: "spring", damping: 15, stiffness: 300 },
              rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {/* King Image */}
            <div className="relative w-full h-full">
              <Image 
                src="/img/krol.png" 
                alt="Dobry Król Chatbot" 
                fill
                className="object-contain"
                priority
              />
              
              {/* Notification Badge */}
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-white text-xs font-bold">!</span>
              </motion.div>
              
              {/* Sparkles */}
              <Sparkles className="absolute -top-1 -left-1 w-3 h-3 text-yellow-300 animate-pulse" />
              <Star className="absolute -bottom-1 -right-1 w-3 h-3 text-yellow-300 animate-bounce" />
            </div>
            
            {/* Hover Text */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Kliknij i porozmawiaj z królem!
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Gemini-Style Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Chat Container - Gemini Style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              transition={{ type: "spring", damping: 25, stiffness: 400 }}
              className="fixed inset-4 md:inset-8 lg:left-1/4 lg:right-8 lg:top-16 lg:bottom-8 z-50 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header - Clean Gemini Style */}
              <div className="bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[var(--gold-primary)] to-[var(--gold-dark)] rounded-full flex items-center justify-center">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Dobry Król</h2>
                    <p className="text-sm text-gray-500">Ekspert Nieruchomości</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Messages Area - Gemini Style */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    {message.isBot && (
                      <div className="w-8 h-8 bg-gradient-to-br from-[var(--gold-primary)] to-[var(--gold-dark)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Crown className="w-4 h-4 text-white" />
                      </div>
                    )}
                    {!message.isBot && (
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          {message.isBot ? 'Dobry Król' : 'Ty'}
                        </span>
                        <span className="text-xs text-gray-500">
                          {message.timestamp.toLocaleTimeString('pl-PL', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                      </div>
                      <div className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                        {message.text}
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[var(--gold-primary)] to-[var(--gold-dark)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Crown className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm font-medium text-gray-900">Dobry Król</span>
                        <span className="text-xs text-gray-500">pisze...</span>
                      </div>
                      <div className="flex space-x-1">
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Actions - Clean Style */}
              {messages.length === 1 && (
                <div className="border-t border-gray-200 p-4">
                  <p className="text-sm text-gray-600 mb-3">Popularne pytania:</p>
                  <div className="grid grid-cols-1 gap-2">
                    {quickActions.map((action, index) => (
                      <button
                        key={index}
                        onClick={() => setInputText(action.text)}
                        className="text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors flex items-center space-x-3"
                      >
                        <action.icon className={`w-4 h-4 ${action.color}`} />
                        <span className="text-sm text-gray-700">{action.text}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input Area - Gemini Style */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Napisz wiadomość do Dobrego Króla..."
                    className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--gold-primary)] focus:border-transparent resize-none"
                    disabled={isTyping}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isTyping}
                    className="w-12 h-12 bg-[var(--gold-primary)] hover:bg-[var(--gold-dark)] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full transition-colors flex items-center justify-center"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;