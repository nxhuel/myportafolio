export interface MediumArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  canonicalUrl: string;
  pubDate: string;
  author: string;
  authorImage?: string;
  categories: string[];
  thumbnail?: string;
  slug: string;
}

export interface MediumConfig {
  username: string;
  enable: boolean;
}
