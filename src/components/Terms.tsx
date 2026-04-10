import React from 'react';
import { motion } from 'motion/react';

export default function Terms() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">Terms & Conditions</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Accuracy of Information</h2>
          <p>You certify that all information provided in this form, including but not limited to your name, phone number, and email address, is true, complete, and accurate to the best of your knowledge. You agree to update us promptly if any information changes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Collection and Use of Personal Data</h2>
          <p>You understand and consent to the collection, storage, and use of your personal information for purposes related to volunteer coordination, record keeping, communication, scheduling, safety, and compliance with organizational policies.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Communication Consent</h2>
          <p>By submitting this form, you authorize the organization to contact you using the phone number and email address provided. Communications may include confirmations, reminders, updates, instructions, or schedule changes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Data Privacy and Disclosure</h2>
          <p>Your personal information will be handled in accordance with applicable privacy laws and internal data protection policies. Your information will not be sold or shared with unauthorized third parties.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Volunteer Responsibilities</h2>
          <p>By submitting this form, you acknowledge your intention to participate in the selected volunteer activity and agree to follow all instructions, guidelines, and safety protocols provided by the organization.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Assumption of Risk</h2>
          <p>You understand that volunteer activities may involve certain inherent risks. By participating, you voluntarily assume all risks associated with the activity to the extent permitted by law.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Liability Limitation</h2>
          <p>To the fullest extent permitted by applicable law, the organization and its volunteers shall not be liable for any injury, loss, or damages arising from your participation in volunteer activities.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Policy Updates</h2>
          <p>The organization reserves the right to update or modify these Terms and Conditions at any time. Continued participation in volunteer activities constitutes acceptance of any revised terms.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Consent and Agreement</h2>
          <p>By clicking “Submit,” you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
        </section>
      </div>
    </motion.div>
  );
}
