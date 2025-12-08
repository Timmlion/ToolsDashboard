import { Coffee, Layers, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].header;

  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="text-primary" size={24} />
          <span className="text-lg font-bold text-white tracking-tight">Adam's <span className="text-primary">MicroTools</span></span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle language"
          >
            <div className="flex items-center gap-1 text-sm font-medium">
              <Globe size={18} />
              <span className="uppercase">{language}</span>
            </div>
          </button>

          <a
            href="https://ko-fi.com/adamsiwek"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <Coffee size={16} className="text-yellow-400" />
            <span className="hidden sm:inline">{t.support}</span>
            <span className="sm:hidden">Support</span>
          </a>
        </div>
      </div>
    </header>
  );
};