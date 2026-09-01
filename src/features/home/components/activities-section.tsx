import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Section } from '@/components/layouts';
import { upcomingEvents } from '@/features/events';

export function ActivitiesSection() {
  const nextEvents = upcomingEvents.slice(0, 3);

  return (
    <Section id="activities">
      <h2 className="mb-lg font-headline text-headline-lg text-ink">Our Activities</h2>

      <div className="divide-y divide-line border-y border-line">
        {nextEvents.map((event) => (
          <div
            key={event.id}
            className="flex flex-wrap items-center gap-sm py-md sm:flex-nowrap sm:gap-md"
          >
            <span className="w-16 shrink-0 text-sm text-ink-muted">
              {event.month} {event.day}
            </span>
            <span className="min-w-0 flex-1 font-headline text-base text-ink">{event.title}</span>
            <span className="shrink-0 font-heading-alt text-xs tracking-wide text-accent uppercase">
              {event.tag}
            </span>
          </div>
        ))}
      </div>

      <Link
        href="/events"
        className="mt-lg inline-flex items-center gap-xs font-heading-alt text-xs tracking-wide text-accent uppercase transition-opacity hover:opacity-80"
      >
        View All Activities
        <ArrowRight className="size-3.5" />
      </Link>
    </Section>
  );
}
