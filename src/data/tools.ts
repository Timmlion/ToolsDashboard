import type { Tool } from '../types';

export const tools: Tool[] = [
  {
    id: 'live-preview',
    title: 'LivePreview',
    description: {
      pl: 'Podgląd kodu HTML/CSS/JS w czasie rzeczywistym.',
      en: 'Real-time HTML/CSS/JS code previewer.'
    },
    url: 'https://livepreview.adamsiwek.pl',
    repo: 'https://github.com/Timmlion/LivePreview',
    tags: ['DevTools', 'Web'],
    icon: 'Code2',
    status: 'Live'
  }
];