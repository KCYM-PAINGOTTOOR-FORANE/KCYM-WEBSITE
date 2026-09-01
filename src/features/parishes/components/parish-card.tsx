import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Tag } from '@/components/ui/tag';
import type { Parish } from '../types';

interface ParishCardProps {
  parish: Parish;
}

export function ParishCard({ parish }: ParishCardProps) {
  return (
    <Link
      href={`/parish/${parish.slug}`}
      className="group flex flex-col gap-sm border border-line p-lg transition-colors hover:border-accent"
    >
      <Tag
        label={parish.badge}
        variant={parish.badge === 'Forane' ? 'accent' : 'muted'}
        className="self-start"
      />
      <h3 className="font-headline text-xl font-bold text-ink">{parish.name}</h3>
      <p className="text-sm text-ink-muted">{parish.place}</p>
      <span className="mt-auto flex items-center gap-xs pt-sm font-heading-alt text-xs tracking-wide text-accent uppercase">
        View Parish
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
