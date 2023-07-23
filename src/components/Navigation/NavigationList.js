import React, { useState } from "react";
import { navigationList } from "../../utility/constants";
import SubMenu from "./SubMenu";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

function NavigationList({
  showDevelopersDropDown,
  showServicesDropDown,
  hideSubMenu,
  toggleSubMenuOnHover,
  usedBy = "desktop",
}) {
  return (
    <>
      <ul className="navigation-list">
        {navigationList.map((item, i) => (
          <li
            key={i}
            {...(!!item.showSubMenu && {
              onMouseEnter: () => toggleSubMenuOnHover(item.name),
            })}
          >
            <span>{item.name}</span>
            {!!showServicesDropDown && item.name == "Services" && (
              <SubMenu
                data={item.data}
                hideDropDown={() => hideSubMenu("Services")}
              />
            )}
            {!!showDevelopersDropDown && item.name == "Hire Developers" && (
              <SubMenu
                data={item.data}
                hideDropDown={() => hideSubMenu("Hire Developers")}
              />
            )}
            {usedBy == "mobile" &&
              (item.name == "Services" || item.name == "Hire Developers") && (
                <div>
                  <UpOutlined className="up-arrow" />
                  <DownOutlined className="down-arrow" />
                </div>
              )}
          </li>
        ))}
      </ul>
      <button>Get in Touch</button>
    </>
  );
}

export default NavigationList;
