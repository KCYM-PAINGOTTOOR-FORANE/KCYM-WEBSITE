'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Section } from '@/components/layouts';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

const IMAGES = [
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1593113580327-024523d4e7d4?q=80&w=1200&auto=format&fit=crop',
];

export function ForaneIntroSection() {
  return (
    <Section variant="surface">
      <div className="grid grid-cols-1 items-center gap-xl lg:grid-cols-2">
        <motion.div
          className="flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="font-headline text-headline-lg text-ink" variants={itemVariants}>
            Our Forane
          </motion.h2>
          <motion.p className="mt-md text-body-md text-ink-muted" variants={itemVariants}>
            Paingottoor Forane is a vibrant community of young people united in faith, fellowship,
            and purpose — growing spiritually, leading with conviction, and serving our community
            across seven parishes. Carrying forward the spirit and vision of KCYM, we strive to be a
            generation rooted in faith and rising for change.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative h-[340px] w-full sm:h-[420px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="absolute top-0 left-1/2 h-40 w-40 -translate-x-1/2 border border-line bg-surface p-2 sm:h-56 sm:w-56"
            variants={imageVariants}
          >
            <div className="relative h-full w-full">
              <Image
                src={IMAGES[0]}
                alt="KCYM youth gathering"
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            className="absolute top-1/3 right-0 h-32 w-32 border border-line bg-surface p-2 sm:h-48 sm:w-48"
            variants={imageVariants}
          >
            <div className="relative h-full w-full">
              <Image
                src={IMAGES[1]}
                alt="Forane youth meet"
                fill
                sizes="192px"
                className="object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-0 left-0 h-28 w-28 border border-line bg-surface p-2 sm:h-40 sm:w-40"
            variants={imageVariants}
          >
            <div className="relative h-full w-full">
              <Image
                src={IMAGES[2]}
                alt="Community service activity"
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
