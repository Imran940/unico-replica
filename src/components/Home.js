import React from "react";
import HomeWrapper from "./Home.style";

function Home() {
  return (
    <HomeWrapper>
      <div className="home-container">
        <div className="home-top-side">
          <span className="heading-text">
            <span className="heading-one-part-text">Transform your Ideas</span>{" "}
            into Stunning Products with Unico's Expert Team
          </span>
          <span className="sub-heading-text">
            Build, Launch, and Scale your Products with Unmatched Efficiency
          </span>
          <button>Get Started</button>
        </div>

        <div className="home-bottom-side">
          <div className="home-bottom-side-item">
            <img src="/images/mobile-logo.svg" />
            <div>Top Mobile App Developers</div>
          </div>
          <div className="home-bottom-side-item">
            <img src="/images/code-logo.svg" />
            <div>Top Mobile App Developers</div>
          </div>
          <div className="home-bottom-side-item">
            <img src="/images/star-logo.svg" />
            <div>Top Mobile App Developers</div>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
}

export default Home;
