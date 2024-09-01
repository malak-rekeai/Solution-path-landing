import React from "react";
import '../styles/Why.css'; 

const WhyUs = () => {
  return (
    <div className="whyus">

   
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-12   head-mob">
          <div className="d-flex align-items-center justify-content-center">
          <h3>
            <span>3</span> 
          </h3>
          <h3>Reasons to Choose Us</h3>
          </div>
          <div>
          <img src={require('../assets/images/choose.png')} alt="Why Us" width={300} className="img-why justify-content-center"/>
          </div>

        </div>
        <div className="col-md-6 col-12">
          <div className="why d-flex">
            <div>
              <img src={require('../assets/images/success.png')} alt="Success Icon" width={55} />
            </div>
            <div>
              <h4>Your Success - Our Commitment</h4>
              <p>
                We provide services that can drive your business towards success. Each of our services is designed keeping in mind your entrepreneurial journey.
              </p>
            </div>
          </div>
          <div className="why d-flex">
            <div>
              <img src={require('../assets/images/quality-icon-award-to-winner-medal-for-professional-line-symbol-assurance-sign-premium-level-product-warranty-rosette-ribbon-with-tick-outline-illustration-vector.jpg')} alt="Quality Icon" width={70} />
            </div>
            <div>
              <h4>Time and Quality</h4>
              <p>
                We believe in creating solutions that not only meet deadlines but also exceed expectations in craftsmanship and excellence.
              </p>
            </div>
          </div>
          <div className="why d-flex">
            <div>
              <img src={require('../assets/images/hand-lamp-icon-propose-brilliant-600nw-1563121459.webp')} alt="Tailored Solutions Icon" width={70} />
            </div>
            <div>
              <h4>Tailored Solutions</h4>
              <p>
                We craft personalized strategies to meet your unique business needs and goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
 
    </div>
  );
};

export default WhyUs;
