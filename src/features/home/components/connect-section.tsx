'use client';

import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export function ConnectSection() {
  const { contact } = siteConfig;

  return (
    <motion.section
      id="connect"
      className="relative flex w-full flex-col overflow-hidden bg-paper text-ink md:flex-row"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
        <div>
          <motion.div variants={containerVariants}>
            <motion.h2
              className="font-headline text-4xl font-bold leading-tight text-ink md:text-5xl"
              variants={itemVariants}
            >
              Connect With Us
            </motion.h2>
            <motion.div className="my-6 h-1 w-20 bg-accent" variants={itemVariants} />
            <motion.p className="mb-8 text-base text-ink-muted" variants={itemVariants}>
              Have questions or want to get involved? Reach out through any of these channels.
            </motion.p>
            <motion.a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-xs font-heading-alt text-lg font-bold tracking-widest text-accent transition-colors hover:opacity-80"
              variants={itemVariants}
            >
              <Instagram className="size-5" />
              Follow Us
            </motion.a>
          </motion.div>
        </div>

        <motion.footer className="mt-12 w-full" variants={itemVariants}>
          <div className="grid grid-cols-1 gap-6 text-xs text-ink-muted sm:grid-cols-3">
            <div className="flex items-center">
              <MapPin className="mr-2 size-5 shrink-0 text-accent" />
              <span>{contact.address}</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 size-5 shrink-0 text-accent" />
              <span>{contact.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 size-5 shrink-0 text-accent" />
              <span>{contact.phone}</span>
            </div>
          </div>
        </motion.footer>
      </div>

      <motion.div
        className="min-h-[300px] w-full bg-cover bg-center md:min-h-full md:w-1/2 lg:w-2/5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1200&auto=format&fit=crop&q=80')",
        }}
        initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
        whileInView={{ clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)' }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: 'circOut' }}
      />
    </motion.section>
  );
}
