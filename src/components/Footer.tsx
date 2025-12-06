import { Github, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  return (
    <footer className="border-t border-zinc-800 py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 text-sm">
          &copy; {new Date().getFullYear()} {t.copyright}
        </p>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/Timmlion" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <span 
            className="text-zinc-700 cursor-not-allowed"
            aria-label="YouTube (Coming Soon)"
            title="Coming Soon"
          >
            <Youtube size={20} />
          </span>
        </div>
      </div>
    </footer>
  );
};