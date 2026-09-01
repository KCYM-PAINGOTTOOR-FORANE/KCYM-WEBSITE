'use client';

import { forwardRef, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'transparent' | 'surface' | 'accent';
  eager?: boolean;
}

const bgClasses = {
  transparent: 'bg-transparent',
  surface: 'bg-surface-raised',
  accent: 'bg-accent text-on-accent',
};

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { children, className, variant = 'transparent', eager, id, ...props },
  forwardedRef,
) {
  const innerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    if (eager) {
      const timeout = setTimeout(() => el.classList.add('is-visible'), 150);
      return () => clearTimeout(timeout);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px 50px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [eager]);

  return (
    <section
      ref={(node) => {
        innerRef.current = node;
        if (typeof forwardedRef === 'function') forwardedRef(node);
        else if (forwardedRef) forwardedRef.current = node;
      }}
      id={id}
      className={cn(
        'animate-float-up relative w-full overflow-hidden px-4 py-15 md:px-12 xl:px-16',
        bgClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
});
