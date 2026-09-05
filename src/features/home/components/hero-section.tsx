import Image from 'next/image';
import { Section } from '@/components/layouts';

export function HeroSection() {
  return (
    <Section className="border-b-2 border-gold/40 bg-surface-raised p-0 md:p-0 xl:p-0">
      <div className="flex flex-col md:flex-row min-h-[80vh]">
        {/* Left Side: St. Thomas More Full Length Picture */}
        <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-full">
          <Image
            src="https://drive.google.com/uc?export=view&id=1x5n6J3WKckyDpbpuBMqCekBiAgDarCPJ"
            alt="St. Thomas More"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Right Side: Blank space, Logo, and Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-12 md:p-24 bg-paper">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 max-w-2xl">
            <Image
              src="/kcym%20logo.png"
              alt="KCYM Logo"
              width={140}
              height={140}
              className="object-contain shrink-0 drop-shadow-xl"
            />

            <div className="space-y-2 text-center md:text-left flex flex-col justify-end">
              <h1 className="font-headline text-6xl md:text-7xl lg:text-[80px] font-bold leading-tight flex flex-col uppercase">
                <span className="text-red-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">KCYM</span>
                <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Paingottoor
                </span>
                <span className="text-yellow-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  Forane
                </span>
              </h1>
              <p className="text-2xl text-ink-muted font-body mt-4 drop-shadow-sm font-semibold">
                Ignite & Unite
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
