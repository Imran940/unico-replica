import { styled } from "styled-components";

const HomeWrapper = styled.div`
  width: 100%;
  height: 670px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  .home-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8%;

    .home-top-side {
      width: 100%;
      height: 45%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 10%;

      .heading-text {
        max-width: 60%;
        font-size: 50px;
        text-align: center;
        font-weight: bolder;

        .heading-one-part-text {
          color: rgba(255, 255, 255, 0.5);
        }
      }
      .sub-heading-text {
        width: 23%;
        text-align: center;
        font-size: 18px;
        line-height: 25px;
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
    .home-bottom-side {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2%;

      .home-bottom-side-item {
        width: 33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        img {
          width: 20%;
        }

        div {
          width: 90%;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      }
    }
  }

  @media screen and (max-width: 475px) {
    height: 380px !important;

    .home-container {
      .home-top-side {
        height: 100% !important;
        justify-content: center !important;
        gap: 5%;
        .heading-text {
          max-width: 80% !important;
          font-size: 25px !important;
        }
        .sub-heading-text {
          width: 65% !important;
          font-size: 16px;
        }

        button {
          margin-top: 15px;
          width: 85%;
        }
      }
      .home-bottom-side {
        display: none !important;
      }
    }
  }

  @media screen and (min-width: 475px) and (max-width: 770px) {
    height: 600px !important;

    .home-top-side {
      .heading-text {
        max-width: 80% !important;
        font-size: 32px !important;
      }
      .sub-heading-text {
        width: 65% !important;
        font-size: 16px;
      }

      button {
        width: 22% !important;
      }
    }
  }

  @media screen and (min-width: 771px) and (max-width: 1300px) {
    .home-top-side {
      .heading-text {
        max-width: 80% !important;
        font-size: 42px !important;
      }
      .sub-heading-text {
        width: 65% !important;
        font-size: 16px;
      }

      button {
        width: 15% !important;
        height: 50px !important;
      }
    }
  }
`;

export default HomeWrapper;
