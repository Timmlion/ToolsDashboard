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
  },
  {
    id: 'screenframer',
    title: 'ScreenFramer',
    description: {
      pl: 'Narzędzie do estetycznego kadrowania zrzutów ekranu i zdjęć, idealne do tworzenia makiet i prezentacji.',
      en: 'A tool for aesthetically framing screenshots and images, ideal for creating mockups and presentations.'
    },
    url: 'https://screenframer.adamsiwek.pl',
    repo: 'https://github.com/Timmlion/ScreenFramer',
    tags: ['Design', 'Utility', 'Web'],
    icon: 'Frame', // Using 'Frame' icon from Lucide React
    status: 'Live'
  }
];
