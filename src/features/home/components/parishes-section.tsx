import { Section } from '@/components/layouts';
import { ParishCard, parishes } from '@/features/parishes';

export function ParishesSection() {
  // Duplicate the parishes array so the marquee can scroll seamlessly
  const marqueeParishes = [...parishes, ...parishes];

  return (
    <Section id="parishes" variant="surface" className="py-24 overflow-hidden">
      <div className="flex flex-col items-center text-center mb-16 px-4">
        <h2 className="font-headline text-4xl text-ink font-bold mb-6">Our Parishes</h2>
        <div className="h-1 w-20 bg-accent mb-6" />
        <p className="max-w-2xl text-lg text-ink-muted">
          Seven parishes, one forane — united by faith, fellowship, and shared purpose.
        </p>
      </div>

      {/* Infinite Scroll Marquee */}
      <div className="relative w-full max-w-[100vw] overflow-hidden -mx-4 sm:mx-auto">
        {/* Fading edges for a nice effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-surface to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-surface to-transparent z-10" />

        <div className="flex gap-6 items-stretch w-max animate-marquee hover:[animation-play-state:paused] py-8 px-4">
          {marqueeParishes.map((parish, index) => (
            <div key={`${parish.slug}-${index}`} className="w-[280px] sm:w-[350px] shrink-0 flex">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-2 w-full flex flex-col border border-line/50">
                <ParishCard parish={parish} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(calc(-50% - 12px)); } /* 12px accounts for half of the gap space */
        }
        .animate-marquee {
          animation: marquee 45s linear infinite;
        }
      `}</style>
    </Section>
  );
}
