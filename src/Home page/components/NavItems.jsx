import React, { useState, useContext } from "react";
import { navItems } from "../content/navItems";
import rightarrow from "../../assets/icons/rightarrow.svg";
import { propsContext } from "../MainApp";

const NavItems = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [activeIcon, setActiveIcon] = useState(0);
  const { indexhandle, setNavIndex } = useContext(propsContext);

  return (
    <>
      <div className="flex flex-col gap-2.5 basis-[45%]">
        {navItems.map((el, index) => (
          <div
            className={`${
              index === activeItemIndex
                ? " bg-lightgreen text-primary"
                : "hover:bg-gray-200 text-gray-500"
            } relative  flex gap-3 items-center cursor-pointer w-[85%] rounded-2xl flex-shrink-0 p-2`}
            onClick={() => {
              setNavIndex(index),
                setActiveItemIndex(index),
                setActiveIcon(index);
            }}
          >
            <img src={index === activeIcon ? el[2] : el[1]} alt="" />
            <p
              className={`${
                index === activeItemIndex ? "  text-primary" : " text-gray-500"
              } text-sm font-semibold `}
            >
              {el[0]}
            </p>
            {index === activeItemIndex && (
              <img
                src={rightarrow}
                alt="Arrow"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
              />
            )}
          </div>
        ))}
      </div>

      <div className="w-[60%] h-px bg-gray-300 my-4 mx-auto"></div>
    </>
  );
};

export default NavItems;
