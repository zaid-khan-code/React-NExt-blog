'use client';

import { useState } from 'react';
import { categories } from '@/data/mockPosts';

export default function SearchFilter({ onSearch, onCategoryChange }) {
  const [searchInput, setSearchInput] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    onSearch(value);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchInput}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 dark:focus:ring-white"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">Categories</p>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-5 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
