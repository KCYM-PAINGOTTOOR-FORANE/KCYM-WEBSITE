export interface UpcomingEvent {
  id: string;
  title: string;
  tag: string;
  tagIcon: string;
  date: string;
  isoDate: string;
  day: string;
  month: string;
  location: string;
  description: string;
  accent: 'primary' | 'secondary' | 'tertiary';
}

export interface PastEvent {
  id: string;
  title: string;
  period: string;
  linkLabel: string;
  linkIcon: string;
}

export interface Announcement {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
}
