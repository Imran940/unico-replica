import { styled } from "styled-components";

const NavigationWrapper = styled.div`
  margin: 0 auto;
  max-width: 1150px;
  height: 80px;
  .navigation-container {
    width: 100%;
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

        button {
          width: 150px;
          height: 45px;
          background: #000;
          color: white;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          border: none;
          outline: none;
        }
        button:hover {
          background: #3898ec;
        }
      }

      .menu-logo {
        font-size: 20px;
        cursor: pointer;
        display: none;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    max-width: 80%;
    .navigation-container {
      justify-content: space-between;
      .navigation-right-part {
        width: fit-content !important;
        .navigation-list-container {
          display: none !important;
        }
        .menu-logo {
          display: block !important;
        }
      }
    }
  }
`;

export default NavigationWrapper;
