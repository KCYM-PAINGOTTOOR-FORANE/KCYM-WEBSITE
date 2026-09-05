import { ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/layouts';
import { upcomingEvents } from '@/features/events';

const ACTIVITY_IMAGES = [
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop',
];

export function ActivitiesSection() {
  // Only get the single latest event
  const latestEvent = upcomingEvents[0];

  return (
    <Section id="activities" className="py-24 bg-surface-raised">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 max-w-5xl mx-auto">
        <div>
          <h2 className="font-headline text-4xl text-ink font-bold mb-6">Latest Activity</h2>
          <div className="h-1 w-20 bg-accent" />
        </div>
        <Link
          href="/events"
          className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-on-accent font-heading-alt text-sm uppercase tracking-wider font-bold transition-transform hover:-translate-y-1 hover:shadow-lg"
        >
          View All Activities
          <ArrowRight className="size-4" />
        </Link>
      </div>

      <div className="max-w-5xl mx-auto">
        {latestEvent && (
          <div className="flex flex-col md:flex-row border border-line bg-surface group overflow-hidden hover:shadow-2xl transition-all duration-300 rounded-xl">
            {/* Image Section */}
            <div className="relative h-64 md:h-auto md:w-3/5 overflow-hidden">
              <Image
                src={ACTIVITY_IMAGES[0]}
                alt={latestEvent.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 bg-accent text-on-accent px-4 py-2 font-heading-alt text-sm font-bold uppercase tracking-wide rounded-md shadow-lg">
                {latestEvent.tag}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12 flex flex-col justify-center md:w-2/5">
              <div className="flex items-center gap-2 text-accent mb-4 font-bold text-sm">
                <Calendar className="size-5" />
                <span>
                  {latestEvent.month} {latestEvent.day}
                </span>
              </div>

              <h3 className="font-headline text-2xl md:text-3xl text-ink font-bold mb-4 leading-snug">
                {latestEvent.title}
              </h3>

              <p className="text-ink-muted mb-8 line-clamp-3">
                Join us for our upcoming activity. It will be a time of fellowship, learning, and
                community service. Don't miss out on this wonderful opportunity to connect.
              </p>

              <Link
                href="/events"
                className="inline-flex items-center gap-2 font-heading-alt text-sm tracking-wide text-ink hover:text-accent font-bold uppercase transition-colors"
              >
                Read More
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
