import { Section } from '@/components/layouts';

interface Stat {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <Section className="border-y border-line">
      <div className="grid grid-cols-2 gap-lg sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="font-headline text-4xl font-bold text-accent sm:text-5xl">{stat.value}</p>
            <p className="mt-xs font-heading-alt text-xs tracking-wide text-ink-muted uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
