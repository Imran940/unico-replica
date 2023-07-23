import { styled } from "styled-components";

const ServicesWrapper = styled.div`
  width: 100%;

  padding: 50px 0;
  .services-container {
    max-width: 1150px;
    margin: 0 auto;

    .services-heading-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
      .service-title {
        font-size: 18px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .service-sub-title {
        font-size: 30px;
        font-weight: bold;
        color: #1a8ef7;
      }
    }

    .services-list {
      width: 100%;
      margin-top: 30px;
      display: grid;
      grid-template-columns: 24% 24% 24% 24%;
      gap: 15px;

      .service-list-item {
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 18px 18px 50px 18px;

        .img-container {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
        }

        .title-description {
          width: 80%;
          div {
            width: 90%;
            font-size: 25px;
          }
        }

        button {
          text-transform: uppercase;
        }

        transition: all 0.5s ease;
      }

      .service-list-item:hover {
        background: rgba(0, 0, 0, 0.8) !important;
        color: #fff;
      }
    }

    .ai-solutions-container {
      margin-top: 50px;
      width: 100%;
      height: 330px;
      background: #000;
      color: #fff;
      padding-bottom: 35px;
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: center;
      text-align: center;
      gap: 15px;
      span {
        font-size: 30px;
        font-weight: bold;
      }
      p {
        width: 69%;
        font-size: 17px;
        line-height: 22px;
      }

      button {
        background: #fff;
        color: #000;
        text-transform: uppercase;
      }
      button:hover {
        background: #3898ec;
        color: #fff;
      }
    }
  }

  @media screen and (min-width: 470px) and (max-width: 1000px) {
    width: 100% !important;
    .services-container {
      max-width: 90% !important;
      .services-list {
        grid-template-columns: 49% 49% !important;

        .service-list-item {
          gap: 20px !important;
        }
      }

      .ai-solutions-container {
        p {
          font-size: 16px !important;
        }
        span {
          font-size: 22px !important;
        }

        button {
          width: 80% !important;
        }
      }
    }
  }

  @media screen and (max-width: 470px) {
    .services-container {
      max-width: 95% !important;

      .services-list {
        grid-template-columns: auto !important;

        .service-list-item {
          gap: 20px !important;
          padding: 20px !important;
          justify-content: center;
          align-items: center;
          text-align: center;

          .title-description {
            width: 100% !important;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          button {
            width: 100% !important;
          }
        }
      }

      .ai-solutions-container {
        height: 450px !important;

        p {
          font-size: 16px !important;
        }
        span {
          font-size: 25px !important;
        }

        button {
          width: 80% !important;
        }
      }
    }
  }
`;

export default ServicesWrapper;
