import React, { useEffect, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import "./Contact_table.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Row1 from "./row/Row";
import { useDispatch } from "react-redux";
import { find, increaseLimit } from "../../redux/services/ContactSlice";
import { LuExpand, LuMinimize } from "react-icons/lu";
import { AiOutlineReload } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";

const Contact_table = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full my-20 mx-auto  rounded-xl   table_shadow bg-[#F8F9FA]">
        {/* contact_title */}
        <div className="  py-[20px]  flex tracking-[0.3rem] relative ps-5 pe-0 lg:ps-10 lg:pe-2 rounded-t-xl bg-white shadow items-center justify-between ">
          <h1 className=" text-lg">BOOKING CONTRACTS</h1>
          <button className=" hover:bg-[#81c05746] dropdown_icon rounded-full p-2 text-gray-400 hover:text-[#81c057] ">
            <BiDotsVerticalRounded className="" size={"1.7rem"} />
          </button>
          <div
            className=" absolute rounded-lg z-20 right-9 dropdown tracking-normal bottom-[-140px] bg-white"
            style={{ boxShadow: "0.1px 0.1px 20px rgba(149, 149, 149, 0.496)" }}
          >
            <ul className=" py-1">
              <li className=" hover:bg-gray-100 w-40 ps-3 flex items-center gap-4 cursor-pointer py-2">
                <LuExpand className=" text-gray-400" />
                Expand
              </li>
              <li className=" hover:bg-gray-100 w-40 ps-3 flex items-center gap-4 cursor-pointer py-2">
                <LuMinimize className=" text-gray-400" />
                Minimize
              </li>
              <li className=" hover:bg-gray-100 w-40 ps-3 flex items-center gap-4 cursor-pointer py-2">
                <AiOutlineReload className=" text-gray-400" />
                Reload
              </li>
              <li className=" hover:bg-gray-100 w-40 ps-3 flex items-center gap-4 cursor-pointer py-2">
                <HiOutlineTrash className=" text-gray-400" />
                Remove
              </li>
            </ul>
          </div>
        </div>
        {/* contact_nav */}
        <div className="flex ps-5 lg:ps-10 pe-5 lg:pe-6 w-full py-8 items-center lg:items-start flex-col lg:flex-row  gap-4 justify-start lg:justify-between">
          <div className="w-full  flex gap-3 lg:gap-5 lg:justify-start justify-between">
            <select
              id=""
              className=" border px-4 text-[13px] py-[4px]  border-gray-300 rounded"
            >
              <option value="Bulk Action" className="">
                Bulk Action
              </option>
              <option value="Delete" className="">
                Delete
              </option>
            </select>
            <button className="px-3 rounded border text-[13px] apply_btn border-[#81c057e3]">
              Apply
            </button>
            <select
              onClick={(e) => dispatch(increaseLimit(e.target.value))}
              id=""
              className=" border px-4 text-[15px] py-[4px] border-gray-300 rounded"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
            </select>
            <span className=" my-auto text-sm">entries per page</span>
          </div>
          <div className=" w-full flex justify-end ms-auto lg:w-[40%]">
            <input
              onChange={(e) => dispatch(find(e.target.value))}
              type="text"
              className=" border focus:shadow focus:shadow-[#81c057e3] border-gray-300 w-full rounded-lg  py-[3px] text-md outline-none ps-3"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="overflow-x-scroll lg:overflow-auto">
          <div className="w-[100%] px-10 ">{/* contact_table */}</div>
          <table className=" w-full border">
            <thead className="bg-[#81c057e3]">
              <tr className=" w-full justify-between">
                <th className=" ps-10 py-6 ">
                  <div className="  tracking-widest text-white text-sm text-start flex items-center justify-between">
                    NO
                  </div>
                </th>
                <th className=" ps-10 py-6 ">
                  <div className="  tracking-widest text-white text-sm text-start flex items-center justify-between">
                    NAME
                  </div>
                </th>
                <th className="  ps-5 py-6 ">
                  <div className=" tracking-widest flex items-center justify-between text-white text-sm text-start">
                    TOUR
                  </div>
                </th>
                <th className=" ps-5 py-6 ">
                  <div className="flex items-center justify-between  tracking-widest text-white text-sm text-start">
                    PRICE
                  </div>
                </th>
                <th className="  ps-5 py-6 text-white ">
                  <div className="tracking-widest text-sm flex items-center justify-between">
                    GUESTS
                  </div>
                </th>
                <th className="  ps-10 pe-5 py-6 text-white ">
                  <div className=" tracking-widest text-sm text-start flex items-center justify-between">
                    BOOKING DATE
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <Row1 />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contact_table;
