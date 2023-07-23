import { styled } from "styled-components";

const NavigationWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  background: #fff;

  .navigation-container {
    margin: 0 auto;
    max-width: 1150px;
    height: 100%;
    display: flex;
    align-items: center;
    .navigation-left-part {
      width: 20%;
    }
    .navigation-right-part {
      width: 80%;
      display: flex;
      align-items: center;
      gap: 10px;

      .navigation-list-container {
        display: flex;
        align-items: center;
        width: 95%;
        gap: 10px;

        .navigation-list {
          width: 100%;
          display: flex;
          list-style: none;
          justify-content: space-around;

          .dropdown-container {
            position: absolute;
            z-index: 10;
            top: 70px;
            .dropdown-list {
              width: ${(props) =>
                props.showDevelopersDropDown ? "fit-content" : "240px"};
              display: grid;
              grid-template-columns: ${(props) =>
                props.showDevelopersDropDown ? "250px 250px 250px" : "auto"};

              list-style: none;
              background: rgba(0, 0, 0, 0.9);
              color: white;
              border: 1px solid #4f4f4f;

              .dropdown-list-item {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 15px;

                .arrow-right {
                  display: none;
                  font-size: 12px;
                }
              }
              .dropdown-list-item:hover {
                background: rgba(43, 43, 43, 0.7);

                .arrow-right {
                  display: block;
                }
              }
            }
          }
          li {
            cursor: pointer;
            font-size: 15px;
          }
          li:hover {
            color: gray;
          }
        }
      }

      .menu-logo,
      .close-logo {
        font-size: 20px;
        cursor: pointer;
        display: none;
      }
    }

    .mobile-menu-container {
      position: absolute;
      top: 80px;
      z-index: 10;
      width: 80%;
      min-height: 400px;
      background: #fff;
      display: none;
      left: 10%;
      animation-name: mobile-slider;
      animation-duration: 1s;

      .navigation-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        list-style: none;
        justify-content: space-around;
        height: 80%;

        .dropdown-container {
          position: relative;
          width: 100%;
          top: 20px;
          margin: 15px 0;
          .dropdown-list {
            width: 100%;
            display: grid;
            grid-template-columns: ${(props) =>
              props.showDevelopersDropDown ? "auto auto auto" : "auto"};
            list-style: none;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            border: 1px solid #4f4f4f;

            .dropdown-list-item {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 15px;

              .arrow-right {
                display: none;
                font-size: 12px;
              }
            }
            .dropdown-list-item:hover {
              background: rgba(43, 43, 43, 0.7);

              .arrow-right {
                display: block;
              }
            }
          }
        }
        li {
          width: 80%;
          padding: 17px 0;
          cursor: pointer;
          font-size: 15px;
          display: flex;
          justify-content: space-between;

          .down-arrow,
          .up-arrow {
            font-size: 12px;
          }
          .up-arrow {
            display: none;
          }
        }
        li:hover {
          color: gray;
        }
        li:hover .up-arrow {
          display: block;
        }
        li:hover .down-arrow {
          display: none;
        }
      }

      button {
        margin-left: 70px;
      }
    }
  }

  @keyframes mobile-slider {
    from {
      top: -20px;
    }
    to {
      top: 80px;
    }
  }

  @media screen and (max-width: 1100px) {
    .navigation-container {
      max-width: 90%;
      justify-content: space-between;
      .navigation-right-part {
        width: fit-content !important;
        .navigation-list-container {
          display: none !important;
        }
        .menu-logo,
        .close-logo {
          display: block !important;
        }

        .close-logo {
          padding: 10px;
          background: #303a96;
          color: white;
        }
      }

      .mobile-menu-container {
        display: block;
      }
    }
  }
`;

export default NavigationWrapper;
