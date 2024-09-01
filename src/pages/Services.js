import React from "react";
import "../styles/services.css";

const servicesData = [
  {
    title: "Frontend Development",
    description:
      "Design stunning interfaces for websites and apps, ensuring seamless user experiences.",
    image: require("../assets/images/frontend.png"),
  },
  {
    title: "Backend Development",
    description:
      "Build efficient server-side applications and APIs for high performance and scalability.",
    image: require("../assets/images/backend.jpg"),
  },
  {
    title: "Learn Coding",
    description:
      "Gain essential coding skills with interactive programs designed for beginners.",
    image: require("../assets/images/prog.jpeg"),
  },
  {
    title: "UI/UX Design",
    description:
      "Craft intuitive interfaces with a focus on enhancing usability and aesthetic appeal.",
    image: require("../assets/images/uiux.png"),
  },
  {
    title: "CV Maker",
    description:
      "Create professional resumes that help you stand out and secure your dream job.",
    image: require("../assets/images/cv.jpeg"),
  },
  {
    title: "CV Maker",
    description:
      "Create professional resumes that help you stand out and secure your dream job.",
    image: require("../assets/images/cv.jpeg"),
  },
];

const Services = () => {
  return (
    <div className="serv " id="services">
      <div className="container services">
        <header className="mb-5"> 
          <h1 className="text-center text-white">
            Our <span className="text-white">Services</span>
          </h1>
          <p className="text-center text-white">
            We offer a range of services to help you succeed in your tech
            journey.
          </p>
        </header>

        <div className="row justify-content-center">
          {servicesData.map((service, index) => (
            <div className="col-md-3 col-sm-6 mb-4 " key={index}>
              <div className="card service-card">
                <img
                  src={service.image}
                  className="card-img-top"
                  alt={service.title}
                />
                <div className="card-body">
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
