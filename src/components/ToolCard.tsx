import type { Tool } from '../types';
import { IconMapper } from './IconMapper';
import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard = ({ tool }: ToolCardProps) => {
  const { language } = useLanguage();
  const t = translations[language].card;

  return (
    <div className="group relative flex flex-col bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-primary/50 transition-colors duration-300 h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-zinc-800 rounded-lg text-primary group-hover:text-primary-hover transition-colors">
          <IconMapper name={tool.icon} size={24} />
        </div>
        {tool.status && (
          <span className={`text-xs px-2 py-1 rounded-full border ${
            tool.status === 'Live' ? 'border-green-500/30 text-green-400 bg-green-500/10' :
            tool.status === 'Beta' ? 'border-yellow-500/30 text-yellow-400 bg-yellow-500/10' :
            'border-zinc-500/30 text-zinc-400 bg-zinc-500/10'
          }`}>
            {tool.status}
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-zinc-100 mb-2">{tool.title}</h3>
      <p className="text-zinc-400 text-sm mb-4 flex-grow">{tool.description[language]}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tool.tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-3 mt-auto">
        <a 
          href={tool.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-zinc-100 text-zinc-900 hover:bg-white py-2 px-4 rounded-lg font-medium transition-colors text-sm"
        >
          {t.open} <ExternalLink size={16} />
        </a>
        <a 
          href={tool.repo} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 text-zinc-400 hover:text-white transition-colors border border-zinc-700 hover:border-zinc-500 rounded-lg"
          aria-label={t.repoLabel}
        >
          <Github size={20} />
        </a>
      </div>
    </div>
  );
};