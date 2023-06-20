import React, { useState } from "react";
import "./activity.css";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaExpandArrowsAlt, FaWindowMinimize } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { BsTrash } from "react-icons/bs";
import activitiesData from "./activity.json";
const LatestActivity = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="activity-section">
      <div className=" activity-card-adjust-height-xl ">
        <div className="activity-card">
          <div className="activity-card-header flex justify-between items-center">
            <div className="activity-heading">Latest Activity</div>
            <div className=" relative">
              <button
                onClick={dropdownToggle}
                className=" rounded-full hover:text-[#4650dd] focus:text-[#4650dd] duration-200 hover:bg-[#dadcf8] focus:bg-[#dadcf8]  w-8 h-8 font-[900]"
              >
                <BiDotsVerticalRounded className=" left-1/2 translate-x-1/2 text-[#495057] " />
              </button>
              <div
                className={`dropdown-menu block py-2 w-[150px] duration-200 ease-in-out ${
                  isDropdownOpen ? "opacity-1" : "opacity-0  invisible"
                }`}
              >
                <a href="" className=" dropdown-item flex items-center gap-3 ">
                  <FaExpandArrowsAlt /> <span>Expand</span>
                </a>
                <a href="" className=" dropdown-item flex items-center gap-3 ">
                  <FaWindowMinimize /> <span>Minimize</span>
                </a>
                <a href="" className=" dropdown-item flex items-center gap-3 ">
                  <TbReload className=" font-bold" /> <span>Reload</span>
                </a>
                <a href="" className=" dropdown-item flex items-center gap-3 ">
                  <BsTrash /> <span>Remove</span>
                </a>
              </div>
            </div>
          </div>
          <div className="activity-card-body">
            <div className="list-group">
              {activitiesData.map((data) => (
                <div className="list-group-item">
                  <div className="flex gap-2 items-start">
                  <div className=" p-1 rounded-full overflow-hidden shadow-lg w-16">
                  <img
                    src={data.img}
                    alt=""
                    className=" rounded-full"
                  />
                </div>
                    <div className=" w-full  text-sm pl-2 ">
                      <p className="">
                        {" "}
                        <strong>{data.name}</strong> <br />
                        <span className="">
                        {data.text}
                            </span> 
                      </p>
                      <small className=" text-gray-500 ">
                        {data.time}m ago
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestActivity;
