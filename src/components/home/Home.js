import React from 'react';
import Contact from '../contact/Contact';
import Faq from '../faq/Faq';
import Hero from '../hero/Hero';
import Navbar from '../navbar/Navbar';
import Pricing from '../pricing/Pricing';
import Testimonials from '../testimonias/Testimonials';
import './home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
    </div>
  )
}

export default Home;