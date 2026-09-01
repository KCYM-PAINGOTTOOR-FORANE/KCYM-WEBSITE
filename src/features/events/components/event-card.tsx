import { Church, Landmark, MapPin } from 'lucide-react';
import Link from 'next/link';
import { Tag } from '@/components/ui/tag';
import type { UpcomingEvent } from '../types';

const tagIconMap = { church: Church, account_balance: Landmark } as const;

interface EventCardProps {
  event: UpcomingEvent;
}

export function EventCard({ event }: EventCardProps) {
  const TagIcon = tagIconMap[event.tagIcon as keyof typeof tagIconMap] ?? Church;

  return (
    <Link
      href={`/events/${event.id}`}
      className="group flex h-full flex-col border border-line p-lg transition-colors hover:border-accent"
    >
      <div className="mb-md flex items-start justify-between gap-sm">
        <Tag label={event.tag} icon={TagIcon} />
        <span className="text-right font-heading-alt text-ink-muted">
          <span className="block text-xl leading-none font-bold text-accent">{event.day}</span>
          <span className="text-xs tracking-wide uppercase">{event.month}</span>
        </span>
      </div>

      <h3 className="mb-sm font-headline text-lg font-bold text-ink">{event.title}</h3>
      <div className="mb-md flex items-center gap-xs text-sm text-ink-muted">
        <MapPin className="size-3.5" />
        {event.location}
      </div>
      <p className="mb-lg line-clamp-3 text-sm text-ink-muted">{event.description}</p>

      <span className="mt-auto font-heading-alt text-xs tracking-wide text-accent uppercase">
        View Details
      </span>
    </Link>
  );
}
