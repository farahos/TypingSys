import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import UsersBanner from './UsersBanner';
import FeaturesGrid from './FeaturesGrid';
import Testimonials from './Testimonials';
import StatsSection from './StatsSection';
import Footer from './Footer';
import BuiltForTeachers from './BuiltForTeachers ';
import TypingCarousel from './TypingCarousel ';
// This is the main Home component that brings together all the sections of the homepage

function Home() {
  return (
    <>
      <Nav/>
      <Hero/>
      <UsersBanner/>
      
      <FeaturesGrid/>
      <Testimonials/>
      <BuiltForTeachers/>
      <StatsSection/>
      <Footer/>

      
    </>
  );
}

export default Home;
