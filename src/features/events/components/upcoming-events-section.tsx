import { upcomingEvents } from '../data';
import { EventCard } from './event-card';

export function UpcomingEventsSection() {
  return (
    <div className="grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-3">
      {upcomingEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
