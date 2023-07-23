import React, { useState } from "react";
import NavigationWrapper from "./style";
import MenuOutlined from "@ant-design/icons/MenuOutlined";
import SubMenu from "./SubMenu";
import { navigationList } from "../../utility/constants";
import NavigationList from "./NavigationList";
import { CloseOutlined } from "@ant-design/icons";

function Navigation() {
  const [showServicesDropDown, setShowServicesDropDown] = useState(false);
  const [showDevelopersDropDown, setShowDevelopersDropDown] = useState(false);
  const [showMenuForMobile, setShowMenuForMobile] = useState(false);
  const toggleSubMenuOnHover = (listItemName) => {
    if (listItemName.toLowerCase() == "services") {
      showDevelopersDropDown && setShowDevelopersDropDown(false);
      setShowServicesDropDown(true);
    }
    if (listItemName.toLowerCase() == "hire developers") {
      showServicesDropDown && setShowServicesDropDown(false);
      setShowDevelopersDropDown(true);
    }
  };

  const hideSubMenu = (subMenuName) =>
    subMenuName == "Services"
      ? setShowServicesDropDown(false)
      : setShowDevelopersDropDown(false);

  return (
    <NavigationWrapper showDevelopersDropDown={showDevelopersDropDown}>
      <div className="navigation-container">
        <div className="navigation-left-part">
          <img src="/images/unico-logo.svg" />
        </div>
        <div className="navigation-right-part">
          <div className="navigation-list-container">
            <NavigationList
              showServicesDropDown={showServicesDropDown}
              showDevelopersDropDown={showDevelopersDropDown}
              hideSubMenu={hideSubMenu}
              toggleSubMenuOnHover={toggleSubMenuOnHover}
            />
          </div>
          <div
            className=""
            onClick={() => setShowMenuForMobile((prevValue) => !prevValue)}
          >
            {showMenuForMobile ? (
              <CloseOutlined className="close-logo" />
            ) : (
              <MenuOutlined className="menu-logo" />
            )}
          </div>
        </div>
        {!!showMenuForMobile && (
          <div className="mobile-menu-container">
            <NavigationList
              showServicesDropDown={showServicesDropDown}
              showDevelopersDropDown={showDevelopersDropDown}
              hideSubMenu={hideSubMenu}
              toggleSubMenuOnHover={toggleSubMenuOnHover}
              usedBy="mobile"
            />
          </div>
        )}
      </div>
    </NavigationWrapper>
  );
}

export default Navigation;
