export type SponsorTier = 'supporter' | 'sponsor' | 'featured-sponsor';

export interface SponsorInfo {
  active: boolean;
  tier: SponsorTier;
  since?: string;
  note?: string;
}

export interface Site {
  id: string;
  name: string;
  url: string;
  tags: string[];
  description?: string;
  sponsor?: SponsorInfo;
}

export type ViewMode = 'grid' | 'list';
export type SortMode = 'random' | 'alphabetical';
