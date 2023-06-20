import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import {
  FaChartLine,
  FaSearch,
  FaTelegramPlane,
  FaServer,
  FaEnvelope,
} from "react-icons/fa";
import { BsFillFileEarmarkPostFill, BsTwitter } from "react-icons/bs";
import "./navbar.css";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import Monitor from "../monitor/Monitor";
import Dashboard from "../../pages/Dashboard/Dashboard";
import Pricing from "../../pages/pricing/Pricing";
import Contact from "../../pages/contact/Contact";
import Invoice from "../../pages/invoice/Invoice";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      {/* Navbar */}
      <div className=" select-none shadow-lg sticky top-0 z-50 bg-white">
        <div className=" w-full  flex justify-between p-4  items-center">
          <div
            className=" md:me-20 me-5 cursor-pointer"
            onClick={() => setSidebar((s) => !s)}
          >
            <BiMenuAltLeft
              size={"1.8rem"}
              className=" text-[rgb(173,181,189)]"
            />
          </div>
          <div className="text-primary text-[.9rem] font-bold tracking-widest me-auto md:me-0 uppercase">
            <h1>
              Bubbly <span className=" md:inline-block hidden">Dashboard</span>
            </h1>
          </div>
          <div className="flex items-center  gap-5">
            {/* Search Box */}
            <div className=" relative search-box md:inline-block hidden">
              <form className="relative input-group">
                <input
                  type="search"
                  className=" search dropdown"
                  placeholder="Search"
                />
                {/* Recent posts */}
                <div className={`dropdown-menu`}>
                  <a href="#" className="dropdown-item ">
                    <h5 className=" search-title">recent pages</h5>
                    <div className="flex items-center dropdown-list">
                      <div className="">
                        <BsFillFileEarmarkPostFill
                          className=""
                          size={".8rem"}
                        />
                      </div>
                      <div className=" ms-2 ">
                        <p className=" text-xs text-[rgb(73,80,87)] font-normal leading-4">
                          Posts
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center dropdown-list">
                      <div className="">
                        <BsFillFileEarmarkPostFill
                          className=""
                          size={".8rem"}
                        />
                      </div>
                      <div className=" ms-2 ">
                        <p className=" text-xs text-[rgb(73,80,87)] font-normal leading-4">
                          Widgets
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center dropdown-list mb-2">
                      <div className="">
                        <BsFillFileEarmarkPostFill
                          className=""
                          size={".8rem"}
                        />
                      </div>
                      <div className=" ms-2 ">
                        <p className=" text-xs text-[rgb(73,80,87)] font-normal leading-4">
                          Profile
                        </p>
                      </div>
                    </div>
                  </a>
                  <hr />
                  {/* Users */}
                  <a href="#" className="dropdown-item ">
                    <h5 className=" search-title">users</h5>
                    <div className="flex items-center dropdown-list">
                      <div className=" w-6 p-1 rounded-full bg-white shadow-md">
                        <img
                          src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-0.jpg"
                          alt="jason-doe"
                          className=" rounded-full"
                        />
                      </div>
                      <div className=" ms-2 ">
                        <p className=" text-xs text-[rgb(73,80,87)] font-normal leading-4">
                          Jason Doe
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center dropdown-list">
                      <div className=" w-6 p-1 rounded-full bg-white shadow-md">
                        <img
                          src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-1.jpg"
                          alt="jason-doe"
                          className=" rounded-full"
                        />
                      </div>
                      <div className=" ms-2 ">
                        <p className=" text-xs text-[rgb(73,80,87)] font-normal leading-4">
                          Frank Williams
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center dropdown-list mb-2">
                      <div className=" w-6 p-1 rounded-full bg-white shadow-md">
                        <img
                          src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-2.jpg"
                          alt="jason-doe"
                          className=" rounded-full"
                        />
                      </div>
                      <div className=" ms-2 ">
                        <p className=" text-xs text-[rgb(73,80,87)] font-normal leading-4">
                          Ashley Wood
                        </p>
                      </div>
                    </div>
                  </a>
                  <hr />
                  {/* Filters */}
                  <a href="#" className="dropdown-item ">
                    <h5 className=" search-title">filters</h5>
                    <div className="flex items-center dropdown-list">
                      <div className="">
                        <span className=" text-[0.75em] px-[.65em] py-[.35em] rounded  bg-[#cdf5f1] text-[#03cfb7]">
                          Posts
                        </span>
                      </div>
                      <div className=" ms-2 ">
                        <p className=" text-[.63rem] text-[rgb(73,80,87)] font-normal leading-4">
                          Search all posts
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center dropdown-list">
                      <div className="">
                        <span className=" text-[0.75em] px-[.65em] py-[.35em] rounded  bg-[#f8d7da] text-[#dc3545]">
                          Users
                        </span>
                      </div>
                      <div className=" ms-2 ">
                        <p className=" text-[.63rem] text-[rgb(73,80,87)] font-normal leading-4">
                          Only in users
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center dropdown-list">
                      <div className="">
                        <span className=" text-[0.75em] px-[.65em] py-[.35em] rounded  bg-[#fff3cd] text-[#ffc107]">
                          Campaigns
                        </span>
                      </div>
                      <div className=" ms-2 ">
                        <p className=" text-[.63rem] text-[rgb(73,80,87)] font-normal leading-4">
                          Only in campaigns
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className=" inline-block px-2">
                  <FaSearch className=" inline-block" size={"0.8rem"} />
                </div>
              </form>
            </div>
            {/* Chart */}
            <div className=" relative   cursor-pointer">
              <a href="#" className="dropdown chart">
                <FaChartLine
                  size={"1.5rem"}
                  className=" text-[rgb(173,181,189)] chart-icon"
                />
              </a>
              <div className={`dropdown-menu`}>
                <a href="#" className="dropdown-item">
                  <div className="flex items-center dropdown-list">
                    <div className=" p-2 rounded-full bg-[#6610f2]">
                      <BsTwitter className="text-white" size={".8rem"} />
                    </div>
                    <div className=" ms-2 ">
                      <p className=" text-xs text-[rgb(73,80,87)] font-normal leading-4">
                        You have 2 followers
                      </p>
                    </div>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <div className="flex items-center dropdown-list">
                    <div className=" p-2 rounded-full bg-[#35b653]">
                      <FaEnvelope className="text-white" size={".8rem"} />
                    </div>
                    <div className=" ms-2 ">
                      <p className=" text-xs text-[rgb(73,80,87)] font-normal leading-4">
                        You have 6 new messages
                      </p>
                    </div>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <div className="flex items-center dropdown-list">
                    <div className=" p-2 rounded-full bg-[#0d6efd]">
                      <FaServer className="text-white" size={".8rem"} />
                    </div>
                    <div className=" ms-2 ">
                      <p className=" text-xs text-[rgb(73,80,87)] font-normal leading-4">
                        Server rebooted
                      </p>
                    </div>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <div className="flex items-center dropdown-list">
                    <div className=" p-2 rounded-full bg-[#6610f2]">
                      <BsTwitter className="text-white" size={".8rem"} />
                    </div>
                    <div className=" ms-2 ">
                      <p className=" text-xs text-[rgb(73,80,87)] font-normal leading-4">
                        You have 2 followers
                      </p>
                    </div>
                  </div>
                </a>
                <hr />
                <div className="dropdown-list mt-2">
                  <h1 className=" uppercase font-bold tracking-[.2em] text-[.7rem] text-[#495057]">
                    view all notifications
                  </h1>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="relative   cursor-pointer">
              <a href="#" className="dropdown message">
                <FaTelegramPlane
                  size={"1.5rem"}
                  className=" text-[rgb(173,181,189)]"
                />
              </a>
              <div className={`dropdown-menu`}>
                <a href="#" className="message-item">
                  <div className="flex items-center dropdown-list">
                    <div className=" w-10 p-1 rounded-full bg-white shadow-md">
                      <img
                        src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-0.jpg"
                        alt="jason-doe"
                        className=" rounded-full"
                      />
                    </div>
                    <div className=" ms-2 ">
                      <h4 className=" font-bold text-[rgb(73,80,87)]">
                        Jason Doe
                      </h4>
                      <p className=" text-xs text-[rgb(73,80,87)] font-normal leading-4">
                        Sent you a message
                      </p>
                    </div>
                  </div>
                </a>
                <a href="#" className="message-item">
                  <div className="flex items-center dropdown-list">
                    <div className=" w-10 p-1 rounded-full bg-white shadow-md">
                      <img
                        src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-1.jpg"
                        alt="frank-williams"
                        className=" rounded-full"
                      />
                    </div>
                    <div className=" ms-2 ">
                      <h4 className=" font-bold text-[rgb(73,80,87)]">
                        Frank Williams
                      </h4>
                      <p className=" text-xs text-[rgb(73,80,87)] font-normal leading-4">
                        Sent you a message
                      </p>
                    </div>
                  </div>
                </a>
                <a href="#" className="message-item">
                  <div className="flex items-center dropdown-list">
                    <div className=" w-10 p-1 rounded-full bg-white shadow-md">
                      <img
                        src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-2.jpg"
                        alt="ashley-wood"
                        className=" rounded-full"
                      />
                    </div>
                    <div className=" ms-2 ">
                      <h4 className=" font-bold text-[rgb(73,80,87)]">
                        Ashley Wood
                      </h4>
                      <p className=" text-xs text-[rgb(73,80,87)] font-normal leading-4">
                        Sent you a message
                      </p>
                    </div>
                  </div>
                </a>
                <hr />
                <div className="dropdown-list mt-2">
                  <h1 className=" uppercase font-bold tracking-[.2em] text-[.7rem] text-[#495057]">
                    view all messages
                  </h1>
                </div>
              </div>
            </div>

            {/* Profile */}
            <div className=" relative cursor-pointer">
              <a href="#" className="dropdown">
                <div className=" p-1 rounded-full overflow-hidden shadow-lg w-12">
                  <img
                    src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-6.jpg"
                    alt=""
                    className=" rounded-full"
                  />
                </div>
              </a>
              <div className={`dropdown-menu`}>
                <div className="profile-name">
                  <h1 className=" uppercase tracking-[0.18rem] font-bold text-[rgb(73,80,87)] text-[14.4px] whitespace-nowrap mb-1">
                    mark stephen
                  </h1>
                  <p className=" text-[11px] font-normal text-[rgb(73,80,87)] mb-1">
                    Web Developer
                  </p>
                </div>
                <hr />
                <a href="#" className="">
                  <div className=" dropdown-list mt-2">
                    <div className=" ">
                      <h1 className="  font-normal text-[rgb(73,80,87)]">
                        Setting
                      </h1>
                    </div>
                  </div>
                </a>
                <a href="#" className="">
                  <div className=" dropdown-list mb-2">
                    <div className=" ">
                      <h1 className="  font-normal text-[rgb(73,80,87)]">
                        Activity Log
                      </h1>
                    </div>
                  </div>
                </a>
                <hr />
                <div className="dropdown-list mt-2">
                  <h1 className="  font-normal text-[rgb(73,80,87)]">Logout</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="flex">
        <Sidebar sidebar={sidebar} mOpen={!sidebar} />
        <div className=" w-full">
          <div className=" w-full md:p-10 bg-[#f8f9fa]">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pricing-table" element={<Pricing/>} />
              <Route path='/contacts' element={<Contact/>}/>
              <Route path="/invoice" element={<Invoice/>} />
            </Routes>
          </div>
          <footer className=" bg-white py-7 px-10">
            <h4 className=" text-[#343a40] text-sm font-bold leading-5 ">
              Your company © 2023
            </h4>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Navbar;
