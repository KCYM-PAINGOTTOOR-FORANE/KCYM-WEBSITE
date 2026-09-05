import { MapPin } from 'lucide-react';
import Image from 'next/image';
import type { Parish } from '../types';

interface ParishCardProps {
  parish: Parish;
}

export function ParishCard({ parish }: ParishCardProps) {
  return (
    <div className="group flex flex-col flex-1 h-full gap-sm border border-line bg-surface overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden shrink-0">
        <Image
          src={parish.cardImage}
          alt={parish.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-lg flex flex-col gap-xs">
        <h3 className="font-headline text-xl font-bold text-ink">{parish.name}</h3>
        <div className="flex items-center text-sm text-ink-muted">
          <MapPin className="mr-1 size-4 text-accent shrink-0" />
          <span>{parish.place}</span>
        </div>
      </div>
    </div>
  );
}
