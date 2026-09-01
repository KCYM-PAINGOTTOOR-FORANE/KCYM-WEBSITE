import { User } from 'lucide-react';
import Image from 'next/image';
import type { LeadershipMember } from '../types';

const PORTRAITS = [
  'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop',
];

interface RosterListProps {
  members: LeadershipMember[];
}

export function RosterList({ members }: RosterListProps) {
  let namedIndex = 0;

  return (
    <div className="grid grid-cols-2 gap-lg sm:grid-cols-3 lg:grid-cols-4">
      {members.map((member, index) => {
        const isNamed = member.name !== 'To Be Announced';
        const portrait = isNamed ? PORTRAITS[namedIndex++ % PORTRAITS.length] : null;

        return (
          <div
            key={`${member.role}-${index}`}
            className="overflow-hidden rounded-2xl bg-ink text-paper"
          >
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
              <p className={isNamed ? 'text-base' : 'text-sm text-paper/60 italic'}>
                {member.name}
              </p>
              <p className="text-xs font-medium text-accent">{member.role}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
