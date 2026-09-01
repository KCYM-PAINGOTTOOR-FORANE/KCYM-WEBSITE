import { StatsSection } from '@/components/shared';
import { pastEvents, upcomingEvents } from '@/features/events';
import {
  AboutSection,
  ActivitiesSection,
  ConnectSection,
  ForaneIntroSection,
  ForaneLeadershipSection,
  HeroSection,
  ParishesSection,
} from '@/features/home';
import { foraneLeadership, parishes } from '@/features/parishes';

export default function Home() {
  const stats = [
    { value: String(parishes.length), label: 'Parishes' },
    { value: String(foraneLeadership.length), label: 'Forane Leaders' },
    { value: String(upcomingEvents.length), label: 'Upcoming Events' },
    { value: String(pastEvents.length), label: 'Past Events' },
  ];

  return (
    <>
      <HeroSection />
      <StatsSection stats={stats} />
      <AboutSection />
      <ForaneIntroSection />
      <ForaneLeadershipSection />
      <ParishesSection />
      <ActivitiesSection />
      <ConnectSection />
    </>
  );
}
