export interface Commandment {
  id: number;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  type: 'image' | 'text' | 'symbol';
  content?: string;
  imageUrl?: string;
  className?: string;
}

export interface Client {
  name: string;
  logo: string; // URL placeholder
}