'use client';

import { Instagram, Mail, Menu, Phone, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/config/site';

const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCVZYTvIplMtqBvP05EgQDQsEi0Dl-pK7c8FjyP9lzlc5l1pJBITDckMwSQ_o0imt7v8e_MSohMq4qJLg6AmnyamF7j3AayYZOCNSldTdZdFKda0G338DaTrM_zlXxKpKZqoGk1mbPBAzBWry64VPa_1-gfXSMIOcJRTOZuhWd87Vq5TGORZ8eZp-XRJ1tPIWIZ_wEIldY_wVIYgyLDKwUAl1qsbRb8xpDMyegYqbiaFcO1oJGODtoDgs48xFgWP7B6YDE';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { contact, links } = siteConfig;

  return (
    <header className="sticky top-0 z-50 w-full bg-paper">
      <div className="hidden border-b border-line bg-ink text-paper/80 md:block">
        <div className="mx-auto flex h-9 w-full max-w-container-max items-center justify-between px-xxl text-xs">
          <div className="flex items-center gap-lg">
            <a href={`tel:${contact.phone}`} className="flex items-center gap-xs hover:text-gold">
              <Phone className="size-3" />
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-xs hover:text-gold"
            >
              <Mail className="size-3" />
              {contact.email}
            </a>
          </div>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow on Instagram"
            className="hover:text-gold"
          >
            <Instagram className="size-3.5" />
          </a>
        </div>
      </div>

      <div className="border-b border-line bg-paper">
        <div className="mx-auto flex h-18 w-full max-w-container-max items-center justify-between px-lg md:px-xxl">
          <Link href="/" className="flex items-center gap-sm" onClick={() => setIsMenuOpen(false)}>
            <Image
              src={LOGO_URL}
              alt="KCYM Logo"
              width={44}
              height={44}
              className="h-11 w-auto object-contain"
            />
            <span className="hidden font-headline text-lg font-bold text-ink sm:block">
              KCYM Paingottoor
            </span>
          </Link>
          <nav className="hidden h-full items-center gap-xl md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-heading-alt text-sm tracking-wide text-ink-muted uppercase transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-sm">
            <button
              type="button"
              className="flex items-center p-sm text-ink md:hidden"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
        {isMenuOpen ? (
          <nav className="flex flex-col gap-md border-t border-line bg-paper px-lg py-md md:hidden">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-heading-alt text-sm tracking-wide text-ink-muted uppercase transition-colors hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-xs text-sm text-ink-muted"
            >
              <Phone className="size-3.5" />
              {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-xs text-sm text-ink-muted"
            >
              <Mail className="size-3.5" />
              {contact.email}
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
