import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import CurrentlyBuilding from '@/components/CurrentlyBuilding';
import Engineering from '@/components/Engineering';
import Experience from '@/components/Experience';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Honour a deep link like /#work once sections have rendered
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const timer = window.setTimeout(() => document.getElementById(id)?.scrollIntoView(), 100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Work />
        <CurrentlyBuilding />
        <Engineering />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
