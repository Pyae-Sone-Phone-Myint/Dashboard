import React, { useState } from "react";
import "./sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { BsFillLayersFill } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Sidebar = ({ sidebar }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <>
      <div
        className={` h-[calc(100vh-80px)] sidebar ${
          sidebar && "shrink"
        } shadow-lg relative left-0 bottom-0`}
      >
        <div className={``}>
          <h1
            className={`text-[#adb5bd] tracking-[.2em] text-sm font-bold px-[1rem] py-[2rem] uppercase`}
          >
            Main
          </h1>
          <NavLink to={"/"} className="sidebar-list p-3 flex items-center">
            <AiOutlineHome size={"1.6rem"} className="fixed" />
            <h2 className={`ms-12 sidebar-title ${sidebar && "active"}`}>
              Dashboard
            </h2>
          </NavLink>
          <div className={`relative ${!sidebar && "text-center"}`}>
            <div
              className="relative sidebar-link p-3 flex items-center cursor-pointer select-none "
              onClick={() => setDropdown((d) => !d)}
            >
              <BsFillLayersFill size={"1.6rem"} className="fixed" />
              <h2 className={`ms-12 sidebar-title ${sidebar && "active"}`}>
                Pages
              </h2>
              <MdKeyboardArrowLeft
                className={` absolute right-2 top-auto ${
                  dropdown && "-rotate-90"
                }`}
                size={"1.2rem"}
              />
            </div>
            {dropdown && (
              <div className={`dropdown-menu-list`}>
                <NavLink
                  to={"/profile"}
                  className=" px-3 py-2 sidebar-list text-[12.6px] block"
                >
                  Profile
                </NavLink>
                <NavLink
                  to={"/price"}
                  className=" px-3 py-2 sidebar-list text-[12.6px] block"
                >
                  Pricing table
                </NavLink>
                <NavLink
                  to={"/contact"}
                  className=" px-3 py-2 sidebar-list text-[12.6px] block"
                >
                  Contacts
                </NavLink>
                <NavLink
                  to={"/invoice"}
                  className=" px-3 py-2 sidebar-list text-[12.6px] block"
                >
                  Invoice
                </NavLink>
                <NavLink
                  to={"/knowledge"}
                  className=" px-3 py-2 sidebar-list text-[12.6px] block"
                >
                  Knowledge base
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
