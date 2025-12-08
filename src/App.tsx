import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ToolCard } from './components/ToolCard';
import { tools } from './data/tools';
import { Github, Youtube } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';
import { translations } from './data/translations';

// Separate component for Provider wrapping
import { LanguageProvider } from './contexts/LanguageContext';
import { ToastProvider, useToast } from './contexts/ToastContext';

function AppContent() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white font-sans selection:bg-primary/30">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12 md:py-20">

        {/* Hero Section */}
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {t.titlePrefix} <span className="text-primary">{t.titleSuffix}</span>
          </h1>
          <p className="text-xl text-zinc-300 font-medium mb-4">
            {t.subtitle}
          </p>
          <p className="text-zinc-400 mb-8 leading-relaxed max-w-lg mx-auto">
            {t.description}
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/Timmlion"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-zinc-900 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all ring-1 ring-zinc-800 hover:ring-primary/50"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <span
              className="p-3 bg-zinc-900 rounded-full text-zinc-600 cursor-not-allowed transition-all ring-1 ring-zinc-800"
              aria-label="YouTube Channel (Coming Soon)"
              title="Coming Soon"
            >
              <Youtube size={24} />
            </span>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </LanguageProvider>
  )
}

export default App
