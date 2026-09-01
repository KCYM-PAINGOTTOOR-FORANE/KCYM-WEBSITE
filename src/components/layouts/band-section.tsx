import Link from 'next/link';

interface BandSectionProps {
  title: string;
  variant?: 'gold' | 'ink';
  cta?: { label: string; href: string };
}

const variantClasses = {
  gold: 'bg-gold text-on-gold',
  ink: 'bg-ink text-paper',
};

export function BandSection({ title, variant = 'gold', cta }: BandSectionProps) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-md px-lg py-xl text-center sm:flex-row sm:justify-between sm:px-xxl ${variantClasses[variant]}`}
    >
      <h2 className="font-headline text-headline-md sm:text-headline-lg">{title}</h2>
      {cta ? (
        <Link
          href={cta.href}
          className="shrink-0 border border-current px-lg py-sm text-sm font-medium uppercase tracking-wide transition-opacity hover:opacity-80"
        >
          {cta.label}
        </Link>
      ) : null}
    </div>
  );
}
