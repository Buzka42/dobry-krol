import { useContext, createContext } from 'react';

interface ChatContextType {
  openChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export const ChatProvider = ({ children, openChat }: { children: React.ReactNode; openChat: () => void }) => {
  return (
    <ChatContext.Provider value={{ openChat }}>
      {children}
    </ChatContext.Provider>
  );
};