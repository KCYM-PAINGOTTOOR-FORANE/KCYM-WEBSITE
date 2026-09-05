export interface Parish {
  slug: string;
  name: string;
  place: string;
  badge: string;
  tagline: string;
  history: string;
  focus: string;
  cardImage: string;
  heroImage: string;
  accent: 'primary' | 'secondary';
}

export interface LeadershipMember {
  name: string;
  role: string;
  accent: 'primary' | 'secondary' | 'tertiary';
  image?: string;
}
