'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import SearchFilter from './SearchFilter';
import BlogGridContainer from './BlogGridContainer';
import NewsletterCTA from './NewsletterCTA';
import Footer from './Footer';

export default function BlogLandingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <main>
      <Navbar />
      <HeroSection />
      <SearchFilter
        onSearch={setSearchQuery}
        onCategoryChange={setSelectedCategory}
      />
      <BlogGridContainer searchQuery={searchQuery} selectedCategory={selectedCategory} />
      <NewsletterCTA />
      <Footer />
    </main>
  );
}
