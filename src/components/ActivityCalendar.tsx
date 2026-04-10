import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, MapPin, Clock, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: 'Environment' | 'Education' | 'Community' | 'Health';
}

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Park Cleanup Drive',
    date: '2026-04-15',
    time: '09:00 AM - 12:00 PM',
    location: 'Central Park, NY',
    description: 'Join us for our monthly park cleanup drive. All tools provided.',
    category: 'Environment',
  },
  {
    id: '2',
    title: 'Tech Literacy Workshop',
    date: '2026-04-18',
    time: '02:00 PM - 04:00 PM',
    location: 'Public Library, Brooklyn',
    description: 'Teaching seniors how to use modern technology and stay safe online.',
    category: 'Education',
  },
  {
    id: '3',
    title: 'Community Food Bank',
    date: '2026-04-22',
    time: '10:00 AM - 02:00 PM',
    location: 'Community Center, Queens',
    description: 'Sorting and distributing food packages to families in need.',
    category: 'Community',
  },
];

export default function ActivityCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState<'month' | 'list'>('list');

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Activity Calendar
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Find upcoming volunteer opportunities and join our mission.
            </p>
          </div>
          <div className="flex rounded-lg bg-white p-1 shadow-sm dark:bg-slate-800">
            <button
              onClick={() => setView('list')}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition-all",
                view === 'list' ? "bg-primary text-white shadow-sm" : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-700"
              )}
            >
              List View
            </button>
            <button
              onClick={() => setView('month')}
              className={cn(
                "rounded-md px-4 py-2 text-sm font-medium transition-all",
                view === 'month' ? "bg-primary text-white shadow-sm" : "text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-700"
              )}
            >
              Month View
            </button>
          </div>
        </div>

        {view === 'list' ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mockEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-slate-800"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${event.id}/600/400`}
                    alt={event.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary backdrop-blur-sm dark:bg-slate-900/90">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {event.title}
                  </h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <CalendarIcon className="h-4 w-4" />
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {event.description}
                  </p>
                  <div className="mt-auto pt-6">
                    <button className="w-full rounded-xl bg-slate-100 py-3 text-sm font-bold text-slate-900 transition-all hover:bg-primary hover:text-white dark:bg-slate-700 dark:text-white dark:hover:bg-primary">
                      Register Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex h-96 items-center justify-center rounded-2xl bg-white p-12 text-center shadow-sm dark:bg-slate-800">
            <div className="flex flex-col items-center gap-4">
              <div className="rounded-full bg-slate-100 p-4 dark:bg-slate-700">
                <Info className="h-8 w-8 text-slate-400" />
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Month view is coming soon. Please use the list view for now.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
