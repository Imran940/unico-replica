import React, { useState } from "react";
import NavigationWrapper from "./style";
import MenuOutlined from "@ant-design/icons/MenuOutlined";
import DropdownMenu from "./DropdownMenu";
import { developersList, servicesList } from "../../utility/constants";

function Navigation() {
  const [showServicesDropDown, setShowServicesDropDown] = useState(false);
  const [showDevelopersDropDown, setShowDevelopersDropDown] = useState(false);
  return (
    <NavigationWrapper showDevelopersDropDown={showDevelopersDropDown}>
      <div className="navigation-container">
        <div className="navigation-left-part">
          <img src="/images/unico-logo.svg" />
        </div>
        <div className="navigation-right-part">
          <div className="navigation-list-container">
            <ul className="navigation-list">
              <li
                onMouseEnter={() => {
                  showDevelopersDropDown && setShowDevelopersDropDown(false);
                  setShowServicesDropDown(true);
                }}
              >
                Services
                {!!showServicesDropDown && (
                  <DropdownMenu
                    data={servicesList}
                    hideDropDown={setShowServicesDropDown}
                  />
                )}
              </li>
              <li
                onMouseEnter={() => {
                  showServicesDropDown && setShowServicesDropDown(false);
                  setShowDevelopersDropDown(true);
                }}
              >
                Hire Developers
                {!!showDevelopersDropDown && (
                  <DropdownMenu
                    data={developersList}
                    hideDropDown={setShowDevelopersDropDown}
                  />
                )}
              </li>
              <li>Case Study</li>
              <li>Pricing Plan</li>
              <li>No Code Tools</li>
              <li>About Us</li>
            </ul>
            <button>Get in Touch</button>
          </div>

          <MenuOutlined className="menu-logo" />
        </div>
      </div>
    </NavigationWrapper>
  );
}

export default Navigation;
