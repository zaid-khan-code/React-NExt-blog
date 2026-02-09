'use client';

import { useState } from 'react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-2xl mx-auto">
        {/* Content */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Subscribe to our newsletter to get the latest articles delivered directly to your inbox.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        {/* Success Message */}
        {isSubmitted && (
          <div className="mt-4 p-3 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg text-center animate-pulse">
            ✓ Thanks for subscribing! Check your email for confirmation.
          </div>
        )}

        {/* Privacy Note */}
        <p className="text-xs text-slate-500 dark:text-slate-400 text-center mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
