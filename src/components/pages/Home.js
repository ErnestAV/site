import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import JobsCards from '../JobsCards';
import ProjectsCards from '../ProjectsCards';
import Youtube from '../Youtube';

function Home() {
  return (
    <>
      <HeroSection />
      <JobsCards />
      <ProjectsCards />
      <Youtube />
      <Footer />
    </>
  );
}

export default Home;
