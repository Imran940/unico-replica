import { RightOutlined } from "@ant-design/icons";
import React from "react";

function SubMenu({ data = [], hideDropDown }) {
  return (
    <div
      className="dropdown-container"
      onMouseLeave={() =>
        hideDropDown && typeof hideDropDown == "function" && hideDropDown(false)
      }
    >
      {!!data.length ? (
        <div className="dropdown-list">
          {data.map((d, i) => (
            <div className="dropdown-list-item" key={i}>
              <span>{d}</span>
              <RightOutlined className="arrow-right" />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default SubMenu;
