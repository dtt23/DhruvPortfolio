import React, { useEffect } from 'react';
import AboutSection from '../components/AboutSection';
import Skills from '../components/Skills';
import ProjectsSection from '../components/ProjectsSection';
import Papers from '../components/Papers';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';

export default function Home() {
  useEffect(() => {
    document.body.style.zoom = '1.15'; // Sets zoom to 125%
  }, []);
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Skills />
      <ProjectsSection />
      <Papers />
      <ContactBanner />
    </div>
  );
}
