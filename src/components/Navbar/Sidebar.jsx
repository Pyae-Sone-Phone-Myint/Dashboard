import React, { useState } from "react";
import "./sidebar.css";
import { AiOutlineHome } from "react-icons/ai";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { BsFillLayersFill } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Card, Accordion, AccordionBody } from "@material-tailwind/react";

const Sidebar = ({ sidebar, mOpen }) => {
  const [open, setOpen] = useState(0);
  const nav = useNavigate()

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <div
        className={` sidebar h-auto ${sidebar && "shrink"} shadow-lg ${
          mOpen && "open"
        }`}
      >
        <div className={``}>
          <h1
            className={`text-[#adb5bd] tracking-[.2em] text-sm font-bold px-[1rem] pt-[1.5rem] pb-[1rem] uppercase ${
              !sidebar && "text-center"
            }`}
          >
            Main
          </h1>
          <NavLink to={"/"} className="sidebar-link">
            <div className={`flex items-center ${!sidebar && "flex-col"}`}>
              <AiOutlineHome size={"1.3rem"} />
              <h4
                className={` sidebar-title ${
                  !sidebar ? "ms-0 text-[0.75rem]" : "ms-3"
                }`}
              >
                Dashboard
              </h4>
            </div>
          </NavLink>
          <Accordion open={open === 1}>
            <div
              className="sidebar-link cursor-pointer select-none"
              onClick={() => handleOpen(1)}
            >
              <div className={` flex items-center ${!sidebar && "flex-col"}`}>
                <BsFillLayersFill size={"1.3rem"} />
                <h4
                  className={` sidebar-title ${
                    !sidebar ? "ms-0 text-[0.75rem]" : "ms-3"
                  }`}
                >
                  Pages
                </h4>
                <MdKeyboardArrowLeft
                  className={` ${!sidebar ? "ms-0 -rotate-90" : "ms-auto"} ${
                    open === 1 ? "-rotate-90" : ""
                  } ${!sidebar && open === 1 ? "rotate-90" : ""}`}
                  size={"1.3rem"}
                />
              </div>
            </div>
            <AccordionBody className="py-0 mx-0">
              <div className={` ${!sidebar && "text-center"} sidebar-list`}>
                <NavLink to={"/pages"} className="sidebar-link text-[.75rem]">
                  Profile
                </NavLink>
                <NavLink
                  to={"/pricing-table"}
                  className="sidebar-link text-[.75rem]"
                >
                  Pricing table
                </NavLink>
                <NavLink
                  to={"/contacts"}
                  className="sidebar-link text-[.75rem]"
                >
                  Contacts
                </NavLink>
                <NavLink to={"/invoice"} className="sidebar-link text-[.75rem]">
                  Invoice
                </NavLink>
                <NavLink
                  to={"/knowledge-base"}
                  className="sidebar-link text-[.75rem]"
                >
                  Knowledge base
                </NavLink>
              </div>
            </AccordionBody>
          </Accordion>
          <div
            className=" cursor-pointer sidebar-link"
            onClick={() => {
              localStorage.removeItem("token");
              nav('/login')
            }}
          >
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
