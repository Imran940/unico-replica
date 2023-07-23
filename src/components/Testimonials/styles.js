import { styled } from "styled-components";

const TestimonialsWrapper = styled.div`
  width: 100%;
  margin: 30px 0;
  .testimonials-container {
    margin: 0 auto;
    max-width: 1150px;

    .testimonials-head-container {
      display: flex;
      flex-direction: column;
      gap: 25px;
      .testimonials-title {
        text-transform: uppercase;
        font-size: 19px;
        letter-spacing: 1px;
      }
      .testimonials-sub-title {
        font-size: 35px;
        font-weight: 500;
      }
    }

    .testimonial-list {
      margin-top: 35px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .testimonial-list-item {
        padding: 20px 35px;
        display: flex;
        height: 320px;

        .testimonial-list-item-left {
          width: 35%;
          h2 {
            font-size: 40px;
            width: 80%;
          }
          img {
            width: 100px;
          }
        }

        .main-img {
          width: 30%;
          height: 100%;
          object-fit: cover;
        }

        .testimonial-list-item-right {
          width: 35%;
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding-left: 20px;
          gap: 10px;
          .review-description {
            font-style: italic;
            font-size: 25px;
          }
          span {
            font-size: 17px;
          }
        }
      }
      .testimonial-list-item:hover {
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.35);
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .testimonials-container {
      max-width: 80% !important;

      .testimonial-list {
        .testimonial-list-item {
          width: 90%;
          flex-direction: column;
          height: fit-content;
          align-items: center !important;
          justify-content: center !important;
          gap: 15px;
          .testimonial-list-item-left {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .main-img {
            width: 100%;
            height: 200px;
            object-fit: cover;
          }
          .testimonial-list-item-right {
            width: 100%;
            padding-left: 0 !important;
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    .testimonials-container {
      max-width: 90% !important;
      .testimonials-sub-title {
        font-size: 26px !important;
      }
      .testimonial-list {
        .testimonial-list-item {
          width: 85%;
        }
      }
    }
  }
`;

export default TestimonialsWrapper;
