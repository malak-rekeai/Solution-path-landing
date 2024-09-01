import React from 'react';
import '../styles/ContactUs.css';
import contactUs from '../assets/images/contactUs.jpg'; 

const ContactUs = () => {
  return (
    <div className='bg-contact'>
 <div className=" contact-us-section container  ">
      <div className="contact-image col-md-4 col-12">
        <img src={contactUs} alt="contact" width={450}/>
        </div>
      <div className="contact-content col-md-6 col-12">
        <h2>Get in Touch</h2>
        <p>
          We would love to hear from you! If you have any questions or inquiries, please feel free to reach out.
        </p>
        <div className=' pt-3'>
        <a href="/contact" className="contact-button  ">Contact Us</a>
        </div>
        
      </div>
    </div>
    </div>
   
  );
};

export default ContactUs;
