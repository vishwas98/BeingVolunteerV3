import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Users, Calendar, Globe, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16 pb-32 dark:bg-slate-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 -right-4 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/20">
                Being Volunteer USA
              </span>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white">
                Empowering <span className="text-primary">Volunteers</span>, Enriching Communities.
              </h1>
              <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
                Join Being Volunteer USA and make a difference. Find meaningful volunteer opportunities and connect with organizations in need.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <button className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-primary/90 hover:shadow-primary/20 active:scale-95">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-900 transition-all hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900">
                  Learn More
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-100 pt-8 dark:border-slate-800"
            >
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">500+ 🤝</span>
                <span className="text-sm text-slate-500">Volunteers Engaged</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">9+ 🗓️</span>
                <span className="text-sm text-slate-500">Years of Service</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-slate-900 dark:text-white">Thousands ❤️</span>
                <span className="text-sm text-slate-500">Lives Touched</span>
              </div>
            </motion.div>
          </div>

          <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto w-full rounded-3xl bg-slate-100 p-2 dark:bg-slate-900"
            >
              <img
                src="https://picsum.photos/seed/volunteer/800/600"
                alt="Volunteers working together"
                className="w-full rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 items-center justify-center rounded-2xl bg-accent p-4 text-white shadow-2xl sm:flex">
                <Heart className="h-16 w-16 fill-current" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
