export interface Site {
  id: string;
  name: string;
  url: string;
  tags: string[];
  description?: string;
}

export type ViewMode = 'grid' | 'list';
export type SortMode = 'random' | 'alphabetical';
