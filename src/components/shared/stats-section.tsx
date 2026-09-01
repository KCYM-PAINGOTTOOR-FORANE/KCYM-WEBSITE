import { Section } from '@/components/layouts';

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
  title?: string;
}

export function StatsSection({ stats, title = 'At a Glance' }: StatsSectionProps) {
  return (
    <Section variant="surface">
      <h2 className="mb-lg text-center font-headline text-headline-lg text-ink sm:text-left">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-md sm:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex aspect-square flex-col items-center justify-center gap-xs px-md text-center ${
              index % 2 === 0 ? 'bg-accent text-on-accent' : 'bg-ink text-paper'
            }`}
          >
            <p className="font-headline text-3xl font-bold sm:text-4xl">{stat.value}</p>
            <p className="text-xs tracking-wide uppercase opacity-80">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
