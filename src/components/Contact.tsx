import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              Have questions about volunteering or our projects? We'd love to hear from you.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Email</h3>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">info@beingvolunteerusa.org</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Phone</h3>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Office</h3>
                  <p className="mt-1 text-slate-600 dark:text-slate-400">New York, NY</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-slate-900 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'loading'}
                className={cn(
                  "w-full flex items-center justify-center gap-2 rounded-xl py-4 text-sm font-bold text-white transition-all active:scale-95",
                  status === 'loading' ? "bg-slate-400" : "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                )}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
                <Send className="h-4 w-4" />
              </button>

              {status === 'success' && (
                <p className="text-center text-sm font-medium text-green-600 dark:text-green-400">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
