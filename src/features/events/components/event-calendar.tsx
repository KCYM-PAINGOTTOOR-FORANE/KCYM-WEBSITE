'use client';

import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { upcomingEvents } from '../data';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function toKey(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

export function EventCalendar() {
  const eventsByDate = useMemo(() => {
    const map = new Map<string, typeof upcomingEvents>();
    for (const event of upcomingEvents) {
      const list = map.get(event.isoDate) ?? [];
      list.push(event);
      map.set(event.isoDate, list);
    }
    return map;
  }, []);

  const firstEventDate = upcomingEvents[0]
    ? new Date(`${upcomingEvents[0].isoDate}T00:00:00`)
    : new Date();
  const [viewYear, setViewYear] = useState(firstEventDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(firstEventDate.getMonth());
  const [selectedKey, setSelectedKey] = useState<string | null>(upcomingEvents[0]?.isoDate ?? null);

  const firstOfMonth = new Date(viewYear, viewMonth, 1);
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const startWeekday = firstOfMonth.getDay();
  const cells: (number | null)[] = [
    ...Array.from({ length: startWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const selectedEvents = selectedKey ? (eventsByDate.get(selectedKey) ?? []) : [];

  function goToMonth(delta: number) {
    const next = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(next.getFullYear());
    setViewMonth(next.getMonth());
    setSelectedKey(null);
  }

  return (
    <div className="grid grid-cols-1 gap-xl lg:grid-cols-[1.3fr_1fr]">
      <div className="border border-line">
        <div className="flex items-center justify-between border-b border-line p-md">
          <h3 className="font-headline text-lg font-bold text-ink">
            {MONTH_NAMES[viewMonth]} {viewYear}
          </h3>
          <div className="flex items-center gap-xs">
            <button
              type="button"
              onClick={() => goToMonth(-1)}
              aria-label="Previous month"
              className="flex size-8 items-center justify-center border border-line-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => goToMonth(1)}
              aria-label="Next month"
              className="flex size-8 items-center justify-center border border-line-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 border-b border-line">
          {WEEKDAYS.map((day) => (
            <div
              key={day}
              className="border-r border-line p-sm text-center font-heading-alt text-xs text-ink-muted uppercase last:border-r-0"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7">
          {cells.map((day, index) => {
            if (day === null) {
              return (
                <div
                  key={`empty-${index}`}
                  className="aspect-square border-r border-b border-line"
                />
              );
            }
            const key = toKey(viewYear, viewMonth, day);
            const dayEvents = eventsByDate.get(key) ?? [];
            const isSelected = selectedKey === key;

            return (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedKey(dayEvents.length > 0 ? key : null)}
                disabled={dayEvents.length === 0}
                className={`relative flex aspect-square flex-col items-center justify-center gap-xs border-r border-b border-line text-sm transition-colors last:border-r-0 ${
                  isSelected
                    ? 'bg-accent text-on-accent'
                    : dayEvents.length > 0
                      ? 'cursor-pointer text-ink hover:bg-surface-raised'
                      : 'cursor-default text-ink-muted'
                }`}
              >
                <span>{day}</span>
                {dayEvents.length > 0 ? (
                  <span
                    className={`size-1.5 rounded-full ${isSelected ? 'bg-on-accent' : 'bg-accent'}`}
                    aria-hidden="true"
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      <div className="border border-line p-lg">
        <h3 className="mb-md font-headline text-lg font-bold text-ink">
          {selectedKey
            ? new Date(`${selectedKey}T00:00:00`).toLocaleDateString('en-US', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })
            : 'Select a highlighted date'}
        </h3>
        {selectedEvents.length > 0 ? (
          <ul className="flex flex-col gap-md">
            {selectedEvents.map((event) => (
              <li key={event.id}>
                <Link
                  href={`/events/${event.id}`}
                  className="group block border-l-2 border-accent pl-md"
                >
                  <p className="font-headline font-bold text-ink transition-colors group-hover:text-accent">
                    {event.title}
                  </p>
                  <p className="mt-xs flex items-center gap-xs text-xs text-ink-muted">
                    <MapPin className="size-3" />
                    {event.location}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-ink-muted">
            No events on this date. Pick a highlighted day on the calendar.
          </p>
        )}
      </div>
    </div>
  );
}
