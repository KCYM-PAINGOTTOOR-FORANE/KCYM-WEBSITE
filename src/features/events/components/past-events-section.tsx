import { FileText, Images } from 'lucide-react';
import { pastEvents } from '../data';

export function PastEventsSection() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {pastEvents.map((event) => {
        const LinkIcon = event.linkIcon === 'article' ? FileText : Images;
        return (
          <div
            key={event.id}
            className="group flex flex-wrap items-center gap-sm py-md sm:flex-nowrap sm:gap-md"
          >
            <span className="w-24 shrink-0 text-sm text-ink-muted">{event.period}</span>
            <span className="min-w-0 flex-1 font-headline text-base text-ink">{event.title}</span>
            <span className="flex shrink-0 cursor-pointer items-center gap-xs font-heading-alt text-xs tracking-wide text-ink-muted uppercase transition-colors hover:text-accent">
              <LinkIcon className="size-3.5" />
              {event.linkLabel}
            </span>
          </div>
        );
      })}
    </div>
  );
}
