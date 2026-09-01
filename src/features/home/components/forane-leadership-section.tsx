import { Section } from '@/components/layouts';
import { foraneLeadership, RosterList } from '@/features/parishes';

export function ForaneLeadershipSection() {
  return (
    <Section id="leadership">
      <h2 className="mb-lg font-headline text-headline-lg text-ink">Forane Leadership</h2>
      <RosterList members={foraneLeadership} />
    </Section>
  );
}
