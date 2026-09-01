import { ArrowLeft, ArrowRight, Instagram, Users } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BandSection, Section } from '@/components/layouts';
import { StatsSection } from '@/components/shared';
import { Tag } from '@/components/ui/tag';
import { siteConfig } from '@/config/site';
import { pastEvents, upcomingEvents } from '@/features/events';
import { defaultUnitLeadership, getParishBySlug, parishes, RosterList } from '@/features/parishes';
import { constructMetadata } from '@/lib/metadata';

interface ParishPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return parishes.map((parish) => ({ slug: parish.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ParishPageProps): Promise<Metadata> {
  const { slug } = await params;
  const parish = getParishBySlug(slug);
  if (!parish) return constructMetadata();

  return constructMetadata({
    title: `${parish.name} - KCYM`,
    description: `${parish.name}, ${parish.place}. ${parish.tagline}`,
    canonical: `${siteConfig.url}/parish/${parish.slug}`,
  });
}

export default async function ParishPage({ params }: ParishPageProps) {
  const { slug } = await params;
  const parish = getParishBySlug(slug);
  if (!parish) notFound();

  return (
    <>
      <Section className="border-b border-line">
        <Link
          href="/#parishes"
          className="mb-lg inline-flex items-center gap-sm font-heading-alt text-xs tracking-wide text-ink-muted uppercase transition-colors hover:text-accent"
        >
          <ArrowLeft className="size-3.5" />
          Back to Parishes
        </Link>

        <div className="flex flex-col gap-lg md:flex-row md:items-end md:justify-between">
          <div>
            <Tag label={parish.badge} variant={parish.badge === 'Forane' ? 'accent' : 'muted'} />
            <h1 className="mt-md font-headline text-headline-lg-mobile text-ink md:text-headline-xl">
              {parish.name}
            </h1>
            <p className="mt-sm max-w-[36rem] text-body-lg text-ink-muted">{parish.tagline}</p>
          </div>
          <Image
            src={parish.heroImage}
            alt={parish.name}
            width={400}
            height={300}
            className="h-32 w-full shrink-0 border border-line object-cover md:h-28 md:w-48"
          />
        </div>
      </Section>

      <StatsSection
        title={`${parish.name} at a Glance`}
        stats={[
          { value: String(defaultUnitLeadership.length), label: 'Unit Leaders' },
          { value: String(upcomingEvents.length), label: 'Upcoming Events' },
          { value: String(pastEvents.length), label: 'Past Events' },
          { value: String(parishes.length), label: 'Forane Parishes' },
        ]}
      />

      <Section>
        <div className="grid grid-cols-1 gap-xl md:grid-cols-2">
          <div>
            <h2 className="mb-md font-headline text-headline-md text-ink">Our History</h2>
            <p className="text-body-md leading-relaxed text-ink-muted">{parish.history}</p>
          </div>
          <div>
            <h2 className="mb-md font-headline text-headline-md text-ink">Current Focus</h2>
            <p className="text-body-md leading-relaxed text-ink-muted">{parish.focus}</p>
          </div>
        </div>
      </Section>

      <BandSection title="Unit Leadership" variant={parish.accent === 'primary' ? 'ink' : 'gold'} />

      <Section variant="surface">
        <div className="mb-lg flex items-center gap-sm">
          <Users className="size-5 text-accent" />
          <p className="text-body-md text-ink-muted">The team guiding this parish&rsquo;s youth.</p>
        </div>
        <RosterList members={defaultUnitLeadership} />
      </Section>

      <Section>
        <div className="flex flex-col items-start gap-lg md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-headline text-headline-md text-ink">Activities &amp; Events</h2>
            <p className="mt-xs text-body-md text-ink-muted">
              Stay updated with this parish&rsquo;s latest initiatives and gatherings.
            </p>
          </div>
          <div className="flex w-full flex-col gap-md sm:w-auto sm:flex-row">
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-sm border border-accent bg-accent px-xl py-sm font-heading-alt text-xs tracking-wide text-on-accent uppercase transition-opacity hover:opacity-90"
            >
              View All Activities
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-sm border border-line-strong px-xl py-sm font-heading-alt text-xs tracking-wide text-ink uppercase transition-colors hover:border-accent hover:text-accent"
            >
              <Instagram className="size-4" />
              Follow on Instagram
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
