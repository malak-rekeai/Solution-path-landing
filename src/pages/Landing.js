import React from 'react'
import { faReact, faNodeJs, faLaravel, faVuejs, faAngular, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import Header from '../components/Header';
import Ticker from '../components/Ticker';
import WhyUs from './WhyUs';
import Services from './Services';
import HowWeStart from '../components/HowWeStart';
import ContactUs from './Contact';
import HeroSection from '../components/HeroSection';

const Landing = () => {
    
    const companies = [
        { name: "React JS", icon: faReact },
        { name: "Node", icon: faNodeJs },
        { name: "Laravel", icon: faLaravel },
        { name: "Vue", icon: faVuejs },
        { name: "Angular", icon: faAngular },
        { name: "Bootstrap", icon: faBootstrap },
      ];
  return (
    <div>
          <Header />
          <HeroSection />
          <WhyUs />
      <Services />
      <HowWeStart />

      <Ticker companies={companies} />

      <ContactUs />
      
    </div>
  )
}
export default Landing;