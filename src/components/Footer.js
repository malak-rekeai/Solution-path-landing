import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGem, faHome, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/footer.css";

export default function App() {
  return (
    <MDBFooter className="footer-container  text-center text-lg-start text-muted">
      <MDBContainer className="">
        <MDBRow>
          <MDBCol md="3" className="mb-4">
            <h3 className="footer-title">Solution Path</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/" className="me-4 foot-icon">
                <FontAwesomeIcon icon={faFacebook}  />
              </a>
              <a href="https://twitter.com/" className="me-4 foot-icon">
                <FontAwesomeIcon icon={faTwitter}  />
              </a>
              <a href="https://www.google.com/" className="me-4 foot-icon">
                <FontAwesomeIcon icon={faGoogle}  />
              </a>
              <a href="https://www.instagram.com/" className="me-4 foot-icon">
                <FontAwesomeIcon icon={faInstagram}  />
              </a>
              <a href="https://www.linkedin.com/" className="me-4 foot-icon">
                <FontAwesomeIcon icon={faLinkedin}  />
              </a>
            </div>
          </MDBCol>

          <MDBCol md="3" className="contact-footer mb-4">
            <h3 className="footer-contact-title">Contact Us</h3>
            <p>
            <a href="https://www.linkedin.com/" className="me-2 foot-icon">
                <FontAwesomeIcon icon={faEnvelope} size="x" />
              </a>
              <span className="fw-bold">Email</span>: name@gmail.com
            </p>
            <p>
              <a href="https://www.linkedin.com/" className="me-2 foot-icon">
                <FontAwesomeIcon icon={faHome} size="x" />
              </a>
              <span className="fw-bold">Phone</span>: +970 123456789
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="footer-bottom text-center p-3">
        © 2021 Copyright: 
        <a className="text-reset fw-bold ms-1" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}
