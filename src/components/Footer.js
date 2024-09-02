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

const currentYear = new Date().getFullYear();

export default function App() {
  return (
    <>
      <footer className="footer-container">
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
             
              <div className="col-md-4 col-lg-4 col-xl-4  mt-3">
                <h3 className="text-uppercase mb-4 font-weight-bold">
                  Solution Path
                </h3>
                <p>
                  We provide cutting-edge technology solutions to enhance your
                  business efficiency. Let us help you navigate the path to
                  success with innovative products and services.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home mr-3"></i> Al Ghubrah South, Muscat,
                  Oman
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> info@solutionpath.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 968 7118 5327
                </p>
              </div>
              <div className="col-md-4 col-lg-4 col-xl-4  mt-3">
                <div className="w-100">
                  <iframe
                    width="100%"
                    height="200"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=200&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(Solution%20path)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  >
                    <a href="https://www.gps.ie/">gps devices</a>
                  </iframe>
                </div>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="py-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="py-3">© {currentYear} Copyright:</div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#"
                  role="button"
                >
                  <i className="fab fa-twitter"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#"
                  role="button"
                >
                  <i className="fab fa-google"></i>
                </a>

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
