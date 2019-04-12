import React, { Component } from 'react';

import Nav from './Nav';
import Hero from './Hero';
import AboutMatt from './AboutMatt';
import Testimonial from './Testimonial';
import PlanSection from './PlanSection';
import ContactForm from './ContactForm';
import Footer from './Footer';
import PlanModal from './PlanModal';

import '../style/App.css';

import { PLAN } from '../PlanInfo';

class App extends Component {
  render() {
    return (
      <main role="main" className="App">
        <Nav />
        <Hero />
        <AboutMatt />
        <PlanSection />
        <Testimonial />
        <ContactForm />
        <Footer />
      </main>
    );
  }
}

export default App;
