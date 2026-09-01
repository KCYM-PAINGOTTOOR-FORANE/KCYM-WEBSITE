import { Megaphone } from 'lucide-react';
import { announcements } from '../data';

export function AnnouncementsSection() {
  return (
    <div className="grid grid-cols-1 gap-lg md:grid-cols-3">
      {announcements.map((announcement) => (
        <article key={announcement.id} className="flex flex-col border border-line p-lg">
          <div className="mb-md flex size-10 items-center justify-center bg-gold/15 text-gold">
            <Megaphone className="size-5" />
          </div>
          <span className="mb-xs font-heading-alt text-xs tracking-wide text-accent uppercase">
            {announcement.tag} &middot; {announcement.date}
          </span>
          <h3 className="mb-sm font-headline text-lg font-bold text-ink">{announcement.title}</h3>
          <p className="text-sm text-ink-muted">{announcement.excerpt}</p>
        </article>
      ))}
    </div>
  );
}
