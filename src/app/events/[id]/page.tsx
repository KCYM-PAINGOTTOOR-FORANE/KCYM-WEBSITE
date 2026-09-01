import { ArrowLeft, Calendar, Church, Instagram, Landmark, MapPin } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Section } from '@/components/layouts';
import { Tag } from '@/components/ui/tag';
import { siteConfig } from '@/config/site';
import { getEventById, upcomingEvents } from '@/features/events';
import { constructMetadata } from '@/lib/metadata';

const tagIconMap = { church: Church, account_balance: Landmark } as const;

interface EventPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return upcomingEvents.map((event) => ({ id: event.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { id } = await params;
  const event = getEventById(id);
  if (!event) return constructMetadata();

  return constructMetadata({
    title: `${event.title} - Events`,
    description: event.description,
    canonical: `${siteConfig.url}/events/${event.id}`,
  });
}

export default async function EventPage({ params }: EventPageProps) {
  const { id } = await params;
  const event = getEventById(id);
  if (!event) notFound();

  const TagIcon = tagIconMap[event.tagIcon as keyof typeof tagIconMap] ?? Church;

  return (
    <Section eager>
      <div className="mx-auto max-w-2xl">
        <Link
          href="/events"
          className="mb-lg inline-flex items-center gap-sm font-heading-alt text-xs tracking-wide text-ink-muted uppercase transition-colors hover:text-accent"
        >
          <ArrowLeft className="size-3.5" />
          Back to Events
        </Link>

        <div className="mb-md flex items-center justify-between gap-sm">
          <Tag label={event.tag} icon={TagIcon} />
          <span className="flex items-center gap-xs text-sm text-ink-muted">
            <Calendar className="size-3.5" />
            {event.date}
          </span>
        </div>

        <h1 className="mb-md font-headline text-headline-lg text-ink">{event.title}</h1>

        <div className="mb-lg flex items-center gap-xs text-sm text-ink-muted">
          <MapPin className="size-4" />
          {event.location}
        </div>

        <p className="mb-xl text-body-md leading-relaxed text-ink-muted">{event.description}</p>

        <div className="flex items-center justify-between border-t border-line pt-lg">
          <span className="font-heading-alt text-xs tracking-wide text-ink uppercase">
            Share &amp; Connect
          </span>
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-xs text-sm text-accent hover:opacity-80"
          >
            <Instagram className="size-4" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </Section>
  );
}
