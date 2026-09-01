import type { PastEvent, UpcomingEvent } from '../types';

export const upcomingEvents: UpcomingEvent[] = [
  {
    id: 'blood-donation-drive',
    title: 'Mega Blood Donation Drive',
    tag: 'Paingottoor Parish',
    tagIcon: 'church',
    date: 'Aug 15, 2024',
    day: '15',
    month: 'Aug',
    location: 'Paingottoor Parish Hall',
    description:
      'Join us for our annual blood donation camp. Your small contribution can save a life. Open to all youth members aged 18 and above.',
    accent: 'secondary',
  },
  {
    id: 'youth-retreat',
    title: 'Youth Retreat 2024',
    tag: 'Forane',
    tagIcon: 'account_balance',
    date: 'Aug 22, 2024',
    day: '22',
    month: 'Aug',
    location: 'Kothamangalam Cathedral',
    description:
      'A three-day spiritual renewal program focused on finding purpose and strengthening faith in the modern world.',
    accent: 'primary',
  },
  {
    id: 'football-tournament',
    title: 'Inter-Parish Football Tournament',
    tag: 'Muvattupuzha Parish',
    tagIcon: 'church',
    date: 'Sep 05, 2024',
    day: '05',
    month: 'Sep',
    location: 'Muvattupuzha Stadium',
    description:
      'The biggest sporting event of the year! Gather your parish team and compete for the KCYM Ever-Rolling Trophy.',
    accent: 'tertiary',
  },
];

export function getEventById(id: string): UpcomingEvent | undefined {
  return upcomingEvents.find((event) => event.id === id);
}

export const pastEvents: PastEvent[] = [
  {
    id: 'leadership-training',
    title: 'Leadership Training Camp',
    period: 'July 2024',
    linkLabel: 'View Gallery',
    linkIcon: 'imagesmode',
  },
  {
    id: 'tree-plantation',
    title: 'Environment Day Tree Plantation',
    period: 'June 2024',
    linkLabel: 'View Gallery',
    linkIcon: 'imagesmode',
  },
  {
    id: 'career-guidance',
    title: 'Career Guidance Seminar',
    period: 'May 2024',
    linkLabel: 'Read Report',
    linkIcon: 'article',
  },
  {
    id: 'easter-charity',
    title: 'Easter Charity Visit',
    period: 'April 2024',
    linkLabel: 'View Gallery',
    linkIcon: 'imagesmode',
  },
];
