'use client';

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
          Insights & Stories
        </h1>

        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          Explore in-depth articles about technology, design, and professional
          growth. Written by industry experts to help you stay ahead.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
            <Link href={`/blogs`}>Explore Blogs</Link>
          </button>
          <button className="px-8 py-3 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            Subscribe
          </button>
        </div>

        <div className="mt-16 pt-16 border-t border-slate-300 dark:border-slate-700">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">
                500+
              </p>
              <p className="text-slate-600 dark:text-slate-400">Articles</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">
                50K+
              </p>
              <p className="text-slate-600 dark:text-slate-400">Readers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">
                20+
              </p>
              <p className="text-slate-600 dark:text-slate-400">Authors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
