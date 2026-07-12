export interface Feature {
  t: string;
  d: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  desc: string;
  cardDesc: string;
  thumb: string;
  features: Feature[];
}

export interface GalleryTile {
  c: string;
  t: string;
  label: string;
  h: number;
}

export type Page = 'home' | 'about' | 'projects' | 'project-detail' | 'gallery' | 'contact';

export type NavigateFn = (page: Page, projectId?: string) => void;
