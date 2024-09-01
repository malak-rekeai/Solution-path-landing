import React from 'react';
import { FaClipboardList, FaDraftingCompass, FaCode, FaCheckCircle } from 'react-icons/fa';
import '../styles/HowWeStart.css';

const steps = [
  { title: "Consultation", icon: <FaClipboardList /> },
  { title: "Planning", icon: <FaDraftingCompass /> },
  { title: "Development", icon: <FaCode /> },
  { title: "Review", icon: <FaCheckCircle /> },
];

const HowWeStart = () => {
  return (
    <div className='howWe'>
      <h1 className="text-center pt-5">How We <span>Start</span></h1>
      <div className="how-we-start-container container">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="circle">
              {step.icon}
            </div>
            <h5 className="step-title">{step.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeStart;
