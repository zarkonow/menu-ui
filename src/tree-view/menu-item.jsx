import React, { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurentChildren, setDisplayCurrentChildren] = useState([]);

  const handleToggleChildren = (getCurrentLable) => {
    setDisplayCurrentChildren({
      ...displayCurentChildren,
      [getCurrentLable]: !displayCurentChildren[getCurrentLable],
    });
  };

  console.log(displayCurentChildren);

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurentChildren[item.label] ? (
              <FaMinus color="red" />
            ) : (
              <FaPlus color="red" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children > 0 &&
      displayCurentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
