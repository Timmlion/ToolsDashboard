import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'pl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('pl')) {
      setLanguage('pl');
    } else {
      setLanguage('en');
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pl' ? 'en' : 'pl');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
