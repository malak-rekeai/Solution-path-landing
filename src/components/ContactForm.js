import React from "react";
import "../styles/contactForm.css";
import { MDBIcon } from "mdb-react-ui-kit";
export const ContactForm = () => {
  return (
    <>
      <div className="join"></div>
      <div className="container contact" id="contact">
        <div className="row">
          <div className="col-md-4 col-12 contact-form">
            <h1> Contact Us</h1>
            <div className="contact-details">
              <MDBIcon icon="phone" className="contact-icons" />
              <div className="contact-info">
                <h4>Phone</h4>
                <p>098765432</p>
              </div>
            </div>
            <div className="contact-details">
              <MDBIcon icon="envelope" className="contact-icons" />
              <div className="contact-info">
                <h4>Email</h4>
                <p>kdkkd@gmail.com</p>
              </div>
            </div>
            <div className="contact-details">
              <MDBIcon fab icon="whatsapp" className="contact-icons" />
              <div className="contact-info">
                <h4>WhatsApp</h4>
                <p>+97888888</p>
              </div>
            </div>
            <div className="contact-social">
              <a href="/fff">
                <MDBIcon fab icon="facebook-f" size="2x" className="contact-icons mb-3" />
              </a>
              <a href="/fff">
                <MDBIcon fab icon="twitter" size="2x" className="contact-icons mb-3" />
              </a>
              <a href="/fff">
                <MDBIcon fab icon="instagram" size="2x" className="contact-icons mb-3" />
              </a>
              <a href="/fff">
                <MDBIcon fab icon="linkedin-in" size="2x" className="contact-icons mb-3" />
              </a>
            </div>
          </div>
          <div className="col-md-8 col-12 careers-content">
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder=" "
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="experience">Message</label>
                <textarea
                  className="form-control"
                  id="experience"
                  rows="3"
                  placeholder=""
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                إرسال
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
