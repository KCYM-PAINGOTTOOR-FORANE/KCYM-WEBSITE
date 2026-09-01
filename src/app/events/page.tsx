import { Calendar } from 'lucide-react';
import type { Metadata } from 'next';
import { Section } from '@/components/layouts';
import { siteConfig } from '@/config/site';
import { PastEventsSection, UpcomingEventsSection } from '@/features/events';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Events & Activities',
  description:
    'Explore the dynamic life of KCYM. From spiritual gatherings to social impact drives, join our community across all parishes in action and faith.',
  canonical: `${siteConfig.url}/events`,
});

export default function EventsPage() {
  return (
    <>
      <Section eager className="border-b border-line">
        <h1 className="mb-md font-headline text-headline-xl text-ink">Events &amp; Activities</h1>
        <p className="max-w-2xl text-body-lg text-ink-muted">
          The forane&rsquo;s calendar — spiritual gatherings and social impact drives across all
          seven parishes.
        </p>
      </Section>

      <Section>
        <h2 className="mb-lg flex items-center gap-sm font-headline text-headline-lg text-ink">
          <Calendar className="size-6 text-accent" />
          Upcoming Events
        </h2>
        <UpcomingEventsSection />
      </Section>

      <Section variant="surface">
        <h2 className="mb-lg font-headline text-headline-lg text-ink">Past Events</h2>
        <PastEventsSection />
      </Section>
    </>
  );
}
