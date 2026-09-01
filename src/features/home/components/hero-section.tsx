import { ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1548509925-0e6d678d4615?q=80&w=2000&auto=format&fit=crop"
          alt="Kerala Catholic church at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
      </div>

      <div className="relative px-6 pb-16 sm:px-8 lg:px-12">
        <div className="w-full lg:w-2/3 xl:w-1/2">
          <p className="mt-6 tracking-tighter text-paper">
            <span className="font-heading-alt text-5xl font-medium sm:text-7xl">
              Empowering youth to
            </span>
            <br />
            <span className="font-headline text-6xl italic sm:text-8xl">Ignite &amp; Unite</span>
          </p>
          <p className="mt-8 max-w-xl text-body-md text-paper/70">
            KCYM Paingottoor Forane — a vibrant community of young people united in faith, service,
            and fellowship across seven parishes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="#parishes"
              className="inline-flex items-center justify-center rounded-full border-2 border-transparent bg-paper px-5 py-2 font-heading-alt text-base font-semibold text-ink transition-all hover:bg-opacity-90 sm:text-lg"
            >
              View the Parishes
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-accent bg-transparent px-5 py-2 font-heading-alt text-base font-semibold text-paper transition-all hover:bg-paper hover:text-ink sm:text-lg"
            >
              <Calendar className="size-5" />
              This Year&rsquo;s Activities
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
