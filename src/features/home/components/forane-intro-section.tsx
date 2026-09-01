import Image from 'next/image';
import { Section } from '@/components/layouts';

const IMAGES = [
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1593113580327-024523d4e7d4?q=80&w=1200&auto=format&fit=crop',
];

export function ForaneIntroSection() {
  return (
    <Section variant="surface">
      <div className="grid grid-cols-1 items-center gap-xl lg:grid-cols-2">
        <div className="flex flex-col items-start">
          <h2 className="font-headline text-headline-lg text-ink">Our Forane</h2>
          <p className="mt-md text-body-md text-ink-muted">
            Paingottoor Forane is a vibrant community of young people united in faith, fellowship,
            and purpose — growing spiritually, leading with conviction, and serving our community
            across seven parishes. Carrying forward the spirit and vision of KCYM, we strive to be a
            generation rooted in faith and rising for change.
          </p>
        </div>

        <div className="relative h-[340px] w-full sm:h-[420px]">
          <div className="absolute top-0 left-1/2 h-40 w-40 -translate-x-1/2 border border-line bg-surface p-2 sm:h-56 sm:w-56">
            <div className="relative h-full w-full">
              <Image
                src={IMAGES[0]}
                alt="KCYM youth gathering"
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute top-1/3 right-0 h-32 w-32 border border-line bg-surface p-2 sm:h-48 sm:w-48">
            <div className="relative h-full w-full">
              <Image
                src={IMAGES[1]}
                alt="Forane youth meet"
                fill
                sizes="192px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-28 w-28 border border-line bg-surface p-2 sm:h-40 sm:w-40">
            <div className="relative h-full w-full">
              <Image
                src={IMAGES[2]}
                alt="Community service activity"
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
