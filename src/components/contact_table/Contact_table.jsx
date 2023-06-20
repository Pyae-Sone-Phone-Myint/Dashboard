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
      <div className="w-full my-20 mx-auto  rounded-xl table_shadow bg-[#F8F9FA]">
        {/* contact_title */}
        <div className=" w-[100%] py-[32px] flex tracking-[0.3rem] relative rounded-t-xl bg-white shadow items-center justify-between ps-10 pe-5">
          <h1 className=" text-xl">LATEST CONTRACTS</h1>
          <button className="  hover:bg-[#4752ea61] dropdown_icon rounded-full p-2 text-gray-400 hover:text-[#4650dd] ">
            <BiDotsVerticalRounded className="" size={"2rem"} />
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
        <div className="flex px-10 py-8 items-center lg:items-start flex-col lg:flex-row justify-between gap-4 lg:justify-start">
          <div className="w-full lg:w-[50%] flex gap-3 lg:gap-5 lg:justify-start justify-between">
            <select
              id=""
              className=" border px-4 text-[18px] py-[5px] border-gray-300 rounded"
            >
              <option value="Bulk Action" className="">
                Bulk Action
              </option>
              <option value="Delete" className="">
                Delete
              </option>
            </select>
            <button className="px-3 rounded border text-[18px] apply_btn border-[#4650dd]">
              Apply
            </button>
            <select
              onClick={(e) => dispatch(increaseLimit(e.target.value))}
              id=""
              className=" border px-4 text-[18px] py-[5px] border-gray-300 rounded"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={25}>25</option>
            </select>
            <span className=" my-auto text-xl">entries per page</span>
          </div>
          <div className=" w-full flex justify-end ms-auto lg:w-[40%]">
            <input
              onChange={(e) => dispatch(find(e.target.value))}
              type="text"
              className=" border border-gray-300 rounded-lg  py-[5px] text-xl w-full lg:w-[40%] outline-none ps-3"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="overflow-x-scroll lg:overflow-auto">
          <div className="w-[100%] px-10 ">{/* contact_table */}</div>
          <table className=" w-full border">
            <thead className="bg-[#343A40]">
              <tr className=" w-full justify-between">
                <th className=" relative tracking-widest  ps-10 py-8 text-white text-xl text-start">
                  NAME
                  <div className=" absolute right-0 top-[20%] text-gray-300 flex flex-col">
                    <button>
                      <MdKeyboardArrowUp size={"1.5rem"} />
                    </button>
                    <button>
                      <MdKeyboardArrowDown size={"1.5rem"} />
                    </button>
                  </div>
                </th>
                <th className="relative tracking-widest ps-10 py-8 text-white text-xl text-start">
                  COMPANY
                  <div className=" absolute right-0 top-[20%] text-gray-300 flex flex-col">
                    <button>
                      <MdKeyboardArrowUp size={"1.5rem"} />
                    </button>
                    <button>
                      <MdKeyboardArrowDown size={"1.5rem"} />
                    </button>
                  </div>
                </th>
                <th className="relative tracking-widest ps-10 py-8 text-white text-xl text-start">
                  STATUS
                  <div className=" absolute right-0 top-[20%] text-gray-300 flex flex-col">
                    <button>
                      <MdKeyboardArrowUp size={"1.5rem"} />
                    </button>
                    <button>
                      <MdKeyboardArrowDown size={"1.5rem"} />
                    </button>
                  </div>
                </th>
                <th className="relative tracking-widest ps-10 py-8 text-white text-xl text-start">
                  CONTRACT
                  <div className=" absolute right-0 top-[20%] text-gray-300 flex flex-col">
                    <button>
                      <MdKeyboardArrowUp size={"1.5rem"} />
                    </button>
                    <button>
                      <MdKeyboardArrowDown size={"1.5rem"} />
                    </button>
                  </div>
                </th>
                <th className="relative tracking-widest ps-10 py-8 text-white text-xl text-start">
                  DATE
                  <div className=" absolute right-5 top-[20%] text-gray-300 flex flex-col">
                    <button>
                      <MdKeyboardArrowUp size={"1.5rem"} />
                    </button>
                    <button>
                      <MdKeyboardArrowDown size={"1.5rem"} />
                    </button>
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
