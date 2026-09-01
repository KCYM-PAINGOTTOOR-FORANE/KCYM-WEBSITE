import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TagProps {
  label: string;
  icon?: LucideIcon;
  variant?: 'accent' | 'muted';
  className?: string;
}

export function Tag({ label, icon: Icon, variant = 'muted', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 font-heading-alt text-xs tracking-wide uppercase',
        variant === 'accent'
          ? 'border-accent/30 bg-accent/10 text-accent'
          : 'border-line-strong text-ink-muted',
        className,
      )}
    >
      {Icon ? <Icon className="size-3" /> : null}
      {label}
    </span>
  );
}
