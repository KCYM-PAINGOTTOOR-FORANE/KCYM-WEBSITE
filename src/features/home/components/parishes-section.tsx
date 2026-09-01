import { Section } from '@/components/layouts';
import { ParishCard, parishes } from '@/features/parishes';

export function ParishesSection() {
  return (
    <Section id="parishes" variant="surface">
      <p className="mb-lg max-w-2xl text-body-md text-ink-muted">
        Seven parishes, one forane — united by faith, fellowship, and shared purpose.
      </p>
      <div className="grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-4">
        {parishes.map((parish) => (
          <ParishCard key={parish.slug} parish={parish} />
        ))}
      </div>
    </Section>
  );
}
