import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-lg text-center">
      <h1 className="mb-md font-headline text-headline-xl text-accent">404</h1>
      <h2 className="mb-md font-headline text-headline-md text-ink">Page not found</h2>
      <p className="mb-xl max-w-[28rem] text-body-md text-ink-muted">
        This page doesn&rsquo;t exist or may have moved.
      </p>
      <Button asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
