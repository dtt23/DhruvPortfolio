import React from 'react';
import AboutSection from '../components/AboutSection';
import Skills from '../components/Skills';
import ProjectsSection from '../components/ProjectsSection';
import Certifications from '../components/Certifications';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Skills />
      <ProjectsSection />
      <Certifications />
      <ContactBanner />
    </div>
  );
}
