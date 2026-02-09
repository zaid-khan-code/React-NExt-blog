'use client';

import Navbar from './Navbar';
import HeroSection from './HeroSection'; 
import BlogGridContainer from './BlogGridContainer';
import NewsletterCTA from './NewsletterCTA';
import Footer from './Footer';

export default function BlogLandingPage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
       
      <BlogGridContainer />
      <NewsletterCTA />
      <Footer />
    </main>
  );
}
