import React from "react";
import ServicesWrapper from "./styles";
import { servicesData } from "../../utility/constants";

export default function Services() {
  return (
    <ServicesWrapper>
      <div className="services-container">
        <div className="services-heading-container">
          <span className="service-title">Services</span>
          <span className="service-sub-title">The Unique Unico Approach</span>
        </div>
        <div className="services-list">
          {servicesData.map((service, i) => (
            <div
              className="service-list-item"
              key={i}
              style={{ background: service.bgColor }}
            >
              <div className="img-container">
                <img src={service.img} alt={service.title} />
              </div>

              <div className="title-description">
                <div>{service.title}</div>
                <p>{service.description}</p>
              </div>
              <button>Know more</button>
            </div>
          ))}
        </div>

        <div className="ai-solutions-container">
          <span>Embrace the Future with Our Cutting-Edge AI Solutions!</span>
          <p>
            At Unico, we have a team of skilled AI professionals who design and
            implement custom AI solutions that cater to your specific business
            needs. Get in touch with us today to take advantage of our expertise
            in AI solutions!
          </p>
          <button>Know More</button>
        </div>
      </div>
    </ServicesWrapper>
  );
}
