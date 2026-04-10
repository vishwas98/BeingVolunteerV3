import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ActivityCalendar from './components/ActivityCalendar';
import Terms from './components/Terms';
import Contact from './components/Contact';
import { motion, AnimatePresence } from 'motion/react';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <section id="about" className="py-24 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                About Being Volunteer USA
              </h2>
              <div className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400 space-y-4">
                <p>
                  Being Volunteer USA was conceptualized in 2017 by professionals who were already working in the field of voluntary engagement in Health and Wellness and Youth Leadership Training.
                </p>
                <p>
                  We believe that “Every human being has an innate desire to do something for another being.” This is the core of Being Volunteer's philosophy.
                </p>
                <p>
                  Our goal is to create a platform where three stakeholders – Volunteers, NPOs, and Corporates – come together to bring unique value to the social services sector and collaborate for various social causes.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Vision</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">To develop a culture of volunteering where individual volunteers become positive change catalysts.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">Our Mission</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">To build a nation where both the extremes of our society work together to make a beautiful world to live in.</p>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/impact/800/800"
                  alt="Our impact"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Our Projects
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore the diverse range of initiatives we support across the country.
          </p>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                title: 'Feed The Needy', 
                desc: 'BVUSA provides hot meals every Sunday for upto 100 people at Lowell Transitional Living Center and once every month at House Of Mercy.',
                img: 'https://picsum.photos/seed/food/400/300'
              },
              { 
                title: 'Quarterly Donation Drive', 
                desc: 'Conducting drives every quarter to collect and donate gently used clothing to help families in need and homeless shelters.',
                img: 'https://picsum.photos/seed/clothes/400/300'
              },
              { 
                title: 'Yoga for Humanity', 
                desc: 'Conducting yoga classes to bring Health and Wellness in the community.',
                img: 'https://picsum.photos/seed/yoga/400/300'
              }
            ].map((project) => (
              <div key={project.title} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 text-left">
                <div className="h-40 w-full bg-slate-100 dark:bg-slate-700 rounded-xl mb-6 overflow-hidden">
                   <img src={project.img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-4 text-slate-600 dark:text-slate-400">
                  {project.desc}
                </p>
                <button className="mt-6 text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </motion.div>
  );
}

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-slate-950">
        <Navbar />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calendar" element={<ActivityCalendar />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </AnimatePresence>
        </main>
        <footer className="bg-slate-900 text-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                     <Heart className="h-5 w-5 fill-current" />
                  </div>
                  <span className="text-xl font-bold">BVUSA</span>
                </div>
                <p className="text-slate-400 max-w-sm">
                  Being Volunteer Foundation USA Inc. is a registered 501(c)(3) non-profit organization.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-6">Quick Links</h4>
                <ul className="space-y-4 text-slate-400">
                  <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/#projects" className="hover:text-white transition-colors">Projects</a></li>
                  <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                  <li><a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GMVXR9RS2FD84" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Donate</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-6">Contact</h4>
                <ul className="space-y-4 text-slate-400">
                  <li>info@beingvolunteerusa.org</li>
                  <li>+1 (555) 123-4567</li>
                  <li>New York, NY</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
              © {new Date().getFullYear()} Being Volunteer Foundation USA Inc. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);
