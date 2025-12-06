export interface Tool {
  id: string;
  title: string;
  description: {
    pl: string;
    en: string;
  };
  url: string;
  repo: string;
  tags: string[];
  icon: string;
  status?: 'Live' | 'Beta' | 'Building';
}