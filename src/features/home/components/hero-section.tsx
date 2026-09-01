import { Calendar, Instagram, Mail, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/layouts';
import { siteConfig } from '@/config/site';

const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCVZYTvIplMtqBvP05EgQDQsEi0Dl-pK7c8FjyP9lzlc5l1pJBITDckMwSQ_o0imt7v8e_MSohMq4qJLg6AmnyamF7j3AayYZOCNSldTdZdFKda0G338DaTrM_zlXxKpKZqoGk1mbPBAzBWry64VPa_1-gfXSMIOcJRTOZuhWd87Vq5TGORZ8eZp-XRJ1tPIWIZ_wEIldY_wVIYgyLDKwUAl1qsbRb8xpDMyegYqbiaFcO1oJGODtoDgs48xFgWP7B6YDE';
const PATRON_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCAuI_yMMyUnt5ijgu078xRIHA9xc4iBOJIggeZdHu9Tw92Pz0oHswNRjFVa6xix01TeoE_1K_n3rh8yTEgmuik_dUXpDbiy_GA06HbL0IRtuQgP922XIcDAgfwGpn-P3J_H0K1ONSAYkh0vipQSg-U72nRevmYt1DXZHTVjkDK_jJPzdRB0jejUc3PoZ9TtMhI8InHNBWlXd7CT_CDGCu2b0H8fXVE34UGrizaWLyDm7tSQr1jUGCk7tc7zbA-LbFwjIQ';

const quickLinks = [
  { label: 'View the Parishes', href: '#parishes', icon: Users },
  { label: "This Year's Activities", href: '/events', icon: Calendar },
  { label: 'Contact Us', href: '#connect', icon: Mail },
  {
    label: 'Follow on Instagram',
    href: siteConfig.links.instagram,
    icon: Instagram,
    external: true,
  },
];

export function HeroSection() {
  return (
    <Section className="border-b-2 border-gold/40 bg-surface-raised">
      <div className="flex flex-col items-center gap-lg text-center">
        <div className="flex items-center justify-center gap-lg">
          <Image
            src={LOGO_URL}
            alt="KCYM Logo"
            width={88}
            height={88}
            className="h-20 w-auto object-contain sm:h-24"
          />
          <div className="h-16 w-px bg-line-strong" />
          <Image
            src={PATRON_URL}
            alt="St. Thomas More, patron of the forane"
            width={88}
            height={88}
            className="h-20 w-20 rounded-full border-2 border-gold object-cover sm:h-24 sm:w-24"
          />
        </div>

        <h1 className="font-headline text-headline-lg-mobile text-ink md:text-headline-xl">
          KCYM Paingottoor Forane
        </h1>
        <p className="max-w-2xl text-body-lg text-ink-muted">
          Empowering the youth of Kerala through faith, service, and community fellowship — seven
          parishes, united in the movement&rsquo;s call to Ignite &amp; Unite.
        </p>

        <div className="mt-md flex flex-wrap items-center justify-center gap-sm">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-xs border border-line-strong bg-surface px-md py-sm text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="size-4" />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
