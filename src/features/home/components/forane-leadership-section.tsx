import { User } from 'lucide-react';
import Image from 'next/image';
import { Section } from '@/components/layouts';
import { foraneLeadership } from '@/features/parishes';
import type { LeadershipMember } from '@/features/parishes/types';

const PORTRAITS = [
  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop',
];

function LeadershipCard({
  member,
  portraitIndex,
}: {
  member: LeadershipMember;
  portraitIndex: number;
}) {
  const isNamed = member.name !== 'To Be Announced';

  // Prefer the specific image if provided, otherwise fallback to unsplash if named
  const portrait = member.image
    ? member.image
    : isNamed
      ? PORTRAITS[portraitIndex % PORTRAITS.length]
      : null;

  return (
    <div className="overflow-hidden rounded-2xl bg-ink text-paper shadow-lg hover:shadow-xl transition-shadow w-full">
      <div className="relative h-[200px] w-full overflow-hidden bg-white/5 sm:h-[240px]">
        {portrait ? (
          <>
            <Image
              src={portrait}
              alt=""
              fill
              sizes="240px"
              className="object-cover object-top transition-transform duration-300 hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent" />
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <User className="size-10 text-paper/30" strokeWidth={1.5} />
          </div>
        )}
      </div>
      <div className="px-3 pb-5 pt-3 text-center">
        <p className={isNamed ? 'text-base font-semibold' : 'text-sm text-paper/60 italic'}>
          {member.name}
        </p>
        <p className="text-xs font-bold text-accent uppercase tracking-wide mt-1">{member.role}</p>
      </div>
    </div>
  );
}

export function ForaneLeadershipSection() {
  const filteredLeadership = foraneLeadership.filter(
    (member) => !member.role.toLowerCase().includes('animator'),
  );

  const getMember = (role: string) =>
    filteredLeadership.find((m) => m.role.toLowerCase().includes(role.toLowerCase()));
  const getMembers = (role: string) =>
    filteredLeadership.filter((m) => m.role.toLowerCase().includes(role.toLowerCase()));

  const row1 = (
    [getMember('director'), getMember('asst director'), getMember('president')].filter(
      Boolean,
    ) as LeadershipMember[]
  ).map((m) => ({ ...m, _id: `r1-${m.role}` }));
  const row2 = [
    getMember('vice president'),
    getMember('secretary'),
    getMember('joint secretary'),
    getMember('treasurer'),
  ]
    .filter(Boolean)
    .map((m) => ({ ...(m as LeadershipMember), _id: `r2-${(m as LeadershipMember).role}` }));
  const row3 = getMembers('executive member').map((m, i) => ({ ...m, _id: `r3-${m.name}-${i}` }));

  let portraitCounter = 0;

  return (
    <Section id="leadership" className="py-24 bg-surface">
      <h2 className="mb-lg font-headline text-5xl font-bold text-ink text-center">
        Forane Leadership
      </h2>
      <div className="h-1 w-20 bg-accent mx-auto mb-16" />

      <div className="flex flex-col gap-10 items-center max-w-6xl mx-auto">
        {/* Row 1: 3 items */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 w-full md:w-4/5 lg:w-3/4">
          {row1.map((member) => (
            <LeadershipCard
              key={member._id}
              member={member as LeadershipMember}
              portraitIndex={
                (member as LeadershipMember).name !== 'To Be Announced' ? portraitCounter++ : 0
              }
            />
          ))}
        </div>

        {/* Row 2: 4 items */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full">
          {row2.map((member) => (
            <LeadershipCard
              key={member._id}
              member={member as LeadershipMember}
              portraitIndex={
                (member as LeadershipMember).name !== 'To Be Announced' ? portraitCounter++ : 0
              }
            />
          ))}
        </div>

        {/* Row 3: 4 items (Executives) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 w-full">
          {row3.map((member) => (
            <LeadershipCard
              key={member._id}
              member={member as LeadershipMember}
              portraitIndex={member.name !== 'To Be Announced' ? portraitCounter++ : 0}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
