import { Cross, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCVZYTvIplMtqBvP05EgQDQsEi0Dl-pK7c8FjyP9lzlc5l1pJBITDckMwSQ_o0imt7v8e_MSohMq4qJLg6AmnyamF7j3AayYZOCNSldTdZdFKda0G338DaTrM_zlXxKpKZqoGk1mbPBAzBWry64VPa_1-gfXSMIOcJRTOZuhWd87Vq5TGORZ8eZp-XRJ1tPIWIZ_wEIldY_wVIYgyLDKwUAl1qsbRb8xpDMyegYqbiaFcO1oJGODtoDgs48xFgWP7B6YDE';

export function Footer() {
  const { contact } = siteConfig;

  return (
    <footer className="mt-auto w-full border-t border-line bg-surface-raised px-lg pt-xxl sm:px-xxl">
      <div className="mx-auto">
        <div className="flex flex-col gap-xl pb-xl lg:flex-row">
          <div className="max-w-full flex-1 lg:max-w-[400px]">
            <Image
              src={LOGO_URL}
              alt="KCYM Logo"
              width={40}
              height={40}
              className="mb-md h-10 w-auto"
            />
            <p className="mb-lg max-w-80 text-sm leading-7 text-ink-muted">
              KCYM Paingottoor Forane — Ignite &amp; Unite. Empowering the youth of Kerala for a
              brighter tomorrow through faith and action.
            </p>
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-line bg-surface transition-colors hover:border-accent"
            >
              <Instagram className="size-4 text-ink-muted" />
            </a>
          </div>

          <div className="flex w-full max-w-3xl flex-1 flex-wrap justify-between gap-xl sm:flex-nowrap">
            <div>
              <h3 className="mb-md font-heading-alt text-xs tracking-wide text-ink uppercase">
                Quick Links
              </h3>
              <ul className="flex list-none flex-col gap-sm">
                <li>
                  <Link
                    href="/#about"
                    className="text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#parishes"
                    className="text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    Parishes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events"
                    className="text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    Activities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#connect"
                    className="text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-md font-heading-alt text-xs tracking-wide text-ink uppercase">
                Resources
              </h3>
              <ul className="flex list-none flex-col gap-sm">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex max-w-6xl flex-col gap-lg border-t border-line py-lg md:flex-row md:gap-xl">
          <div className="flex flex-1 items-start gap-sm">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-line bg-surface">
              <MapPin className="size-4 text-ink-muted" />
            </div>
            <div>
              <h4 className="mb-0.5 text-sm font-medium text-ink">Address</h4>
              <p className="text-sm leading-relaxed text-ink-muted">{contact.address}</p>
            </div>
          </div>
          <div className="flex flex-1 items-start gap-sm">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-line bg-surface">
              <Phone className="size-4 text-ink-muted" />
            </div>
            <div>
              <h4 className="mb-0.5 text-sm font-medium text-ink">Phone</h4>
              <p className="text-sm leading-relaxed text-ink-muted">{contact.phone}</p>
            </div>
          </div>
          <div className="flex flex-1 items-start gap-sm">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-line bg-surface">
              <Mail className="size-4 text-ink-muted" />
            </div>
            <div>
              <h4 className="mb-0.5 text-sm font-medium text-ink">Email</h4>
              <p className="text-sm leading-relaxed text-ink-muted">{contact.email}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-md border-t border-line py-lg md:flex-row">
          <p className="flex items-center gap-xs text-sm text-ink-muted">
            <Cross className="size-3.5" />© {new Date().getFullYear()} Kerala Catholic Youth
            Movement — Paingottoor Forane. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-lg">
            <Link href="#" className="text-sm text-ink-muted transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-ink-muted transition-colors hover:text-accent">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
