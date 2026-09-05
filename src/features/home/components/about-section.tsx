import Image from 'next/image';
import { Section } from '@/components/layouts';

const ABOUT_IMAGES = [
  '/state_kcym_photo_1.jpg',
  '/state_kcym_photo_2.png',
  '/state_kcym_photo_3.jpg',
];

export function AboutSection() {
  return (
    <Section id="about" className="py-24 overflow-hidden md:overflow-visible">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left side: Fun Quirky Images */}
        <div className="relative h-[450px] sm:h-[500px] w-full max-w-md mx-auto my-8 md:my-0">
          {/* Photo 3: Top Center (Now at top) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-56 h-56 sm:w-72 sm:h-72 border-[12px] border-white shadow-2xl -rotate-2 z-30 hover:rotate-2 hover:z-40 hover:scale-105 transition-all duration-300">
            <div className="relative w-full h-full">
              <Image src={ABOUT_IMAGES[2]} alt="KCYM Activity 3" fill className="object-cover" />
            </div>
          </div>

          {/* Photo 1: Bottom Left */}
          <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 border-[10px] border-white shadow-lg -rotate-6 z-10 hover:rotate-0 hover:z-40 hover:scale-105 transition-all duration-300">
            <div className="relative w-full h-full">
              <Image src={ABOUT_IMAGES[0]} alt="KCYM Activity 1" fill className="object-cover" />
            </div>
          </div>

          {/* Photo 2: Bottom Right */}
          <div className="absolute bottom-16 right-0 w-40 h-40 sm:w-56 sm:h-56 border-[10px] border-white shadow-xl rotate-6 z-20 hover:rotate-0 hover:z-40 hover:scale-105 transition-all duration-300">
            <div className="relative w-full h-full">
              <Image
                src={ABOUT_IMAGES[1]}
                alt="KCYM Activity 2"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Right side: Text */}
        <div className="flex flex-col gap-6">
          <h2 className="font-headline text-5xl text-ink font-bold">About KCYM</h2>
          <div className="h-1 w-20 bg-accent" />
          <div className="flex flex-col gap-4">
            <p className="text-lg text-ink-muted leading-relaxed">
              The Kerala Catholic Youth Movement (KCYM) is the official state and regional
              organization under the KCBC. It is a vibrant community of young people dedicated to
              spiritual growth, social action, and community building.
            </p>
            <p className="text-lg text-ink-muted leading-relaxed">
              Founded on the principles of Christ&rsquo;s teachings, we strive to be the salt of the
              earth and the light of the world, engaging in activities that promote justice, peace,
              and love.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
