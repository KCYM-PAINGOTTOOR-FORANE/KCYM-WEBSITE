import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function ConnectSection() {
  const { contact } = siteConfig;

  return (
    <section
      id="connect"
      className="relative flex w-full flex-col overflow-hidden bg-paper text-ink md:flex-row"
    >
      <div className="flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16">
        <div>
          <h2 className="font-headline text-4xl font-bold leading-tight text-ink md:text-5xl">
            Connect With Us
          </h2>
          <div className="my-6 h-1 w-20 bg-accent" />
          <p className="mb-8 text-base text-ink-muted">
            Have questions or want to get involved? Reach out through any of these channels.
          </p>
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-xs font-heading-alt text-lg font-bold tracking-widest text-accent transition-colors hover:opacity-80"
          >
            <Instagram className="size-5" />
            Follow Us
          </a>
        </div>

        <footer className="mt-12 w-full">
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
        </footer>
      </div>

      <div
        className="min-h-[300px] w-full bg-cover bg-center md:min-h-full md:w-1/2 lg:w-2/5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1438032005730-c779502df39b?w=1200&auto=format&fit=crop&q=80')",
        }}
      />
    </section>
  );
}
