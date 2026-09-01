import type { Metadata, Viewport } from 'next';
import { Oswald, Playfair_Display, Roboto_Slab } from 'next/font/google';
import { Footer, Header } from '@/components/layouts';
import { constructMetadata } from '@/lib/metadata';
import '@/app/globals.css';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-playfair-display',
});

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-oswald',
});

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-roboto-slab',
});

export const metadata: Metadata = constructMetadata();

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#faf8f4',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${oswald.variable} ${robotoSlab.variable}`}
    >
      <body className="flex min-h-screen flex-col bg-paper font-body text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
