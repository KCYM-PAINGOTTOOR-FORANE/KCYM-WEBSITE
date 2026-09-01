import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'transparent' | 'surface' | 'accent';
}

const bgClasses = {
  transparent: 'bg-transparent',
  surface: 'bg-surface-raised',
  accent: 'bg-accent text-on-accent',
};

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { children, className, variant = 'transparent', id, ...props },
  forwardedRef,
) {
  return (
    <section
      ref={forwardedRef}
      id={id}
      className={cn(
        'relative w-full overflow-hidden px-4 py-15 md:px-12 xl:px-16',
        bgClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
});
