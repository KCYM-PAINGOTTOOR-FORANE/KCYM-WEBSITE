import {
  AboutSection,
  ActivitiesSection,
  ConnectSection,
  ForaneIntroSection,
  ForaneLeadershipSection,
  HeroSection,
  ParishesSection,
} from '@/features/home';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ForaneIntroSection />
      <ForaneLeadershipSection />
      <ParishesSection />
      <ActivitiesSection />
      <ConnectSection />
    </>
  );
}
