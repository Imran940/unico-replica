import React from "react";
import TestimonialsWrapper from "./styles";
import { testimonialsData } from "../../utility/constants";

function Testimonials() {
  return (
    <TestimonialsWrapper>
      <div className="testimonials-container">
        <div className="testimonials-head-container">
          <span className="testimonials-title">Testimonials</span>
          <span className="testimonials-sub-title">
            Why Our Clients Love Unico Connect!
          </span>
        </div>
        <div className="testimonial-list">
          {testimonialsData.map((testimonial, i) => (
            <div
              className="testimonial-list-item"
              key={i}
              style={{ background: testimonial.bgColor }}
            >
              <div
                className="testimonial-list-item-left"
                style={{ color: testimonial.color }}
              >
                <img
                  src={testimonial.leftSideData.img}
                  alt={testimonial.leftSideData.title}
                />
                <h2>{testimonial.leftSideData.title}</h2>
                <p>{testimonial.leftSideData.description}</p>
                {testimonial.leftSideData.link && (
                  <a style={{ color: testimonial.color }} href="#">
                    {testimonial.leftSideData.link}
                  </a>
                )}
              </div>

              <img
                className="main-img"
                src={testimonial.mainImg}
                alt={testimonial.rightSideData.name}
              />

              <div
                className="testimonial-list-item-right"
                style={{ color: testimonial.color }}
              >
                <span className="review-description">
                  {testimonial.rightSideData.description}
                </span>
                <b>{testimonial.rightSideData.name}</b>
                <span>{testimonial.rightSideData.workAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TestimonialsWrapper>
  );
}

export default Testimonials;
