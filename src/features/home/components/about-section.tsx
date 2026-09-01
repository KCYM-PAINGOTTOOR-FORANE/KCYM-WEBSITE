import { Section } from '@/components/layouts';

export function AboutSection() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 gap-xl md:grid-cols-2">
        <h2 className="font-headline text-headline-lg text-ink">About KCYM</h2>
        <div className="flex flex-col gap-md">
          <p className="text-body-md text-ink-muted">
            The Kerala Catholic Youth Movement (KCYM) is the official state and regional
            organization under the KCBC. It is a vibrant community of young people dedicated to
            spiritual growth, social action, and community building.
          </p>
          <p className="text-body-md text-ink-muted">
            Founded on the principles of Christ&rsquo;s teachings, we strive to be the salt of the
            earth and the light of the world, engaging in activities that promote justice, peace,
            and love.
          </p>
        </div>
      </div>
    </Section>
  );
}
