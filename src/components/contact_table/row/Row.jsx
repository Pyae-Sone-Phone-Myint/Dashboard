import { useDispatch, useSelector } from "react-redux";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { increasePgn, pagination } from "../../../redux/services/ContactSlice";
import { useMenu } from "@material-tailwind/react";
import "./row.css"
import { BiDotsVerticalRounded } from "react-icons/bi";
import { LuExpand, LuMinimize } from "react-icons/lu";
import { AiFillEdit, AiOutlineReload } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";

const Row = () => {
  const {
    contact_data,
    show_data,
    contact_qty,
    pagination_qty,
    limit,
    search,
  } = useSelector((state) => state.contact);

  const pagination_handler = (pagi) => {
    setPaginate(pagi);
    dispatch(increasePgn(pagi));
  };

  const contact_start = show_data[0]?.offset;
  const contact_end = show_data[show_data.length - 1]?.offset;
  const dispatch = useDispatch();
  const [paginate, setPaginate] = useState(1);
  useEffect(() => {
    dispatch(pagination());
  }, [paginate, limit, search]);
  return (
    <>
      {show_data?.map((data) => {
        return (
          <tr
            className=" border-b parents hover:bg-[#ECECEC] bg-white relative"
            key={data.id}
          >
            <td className="ps-10 py-2 text-sm ">
              <div className=" flex gap- gap-4 items-center">
                {data?.image !== "" ? (
                  <div className=" bg-white p-1  rounded-full shadow-xl">
                    <img
                      src={`${data.image}`}
                      className=" w-10 rounded-full"
                      alt=""
                    />
                  </div>
                ) : (
                  <div className=" bg-white p-1  rounded-full shadow-xl">
                    <div className=" w-10 h-10 text-center rounded-full bg-gray-300 flex items-center justify-center">
                      {data.image_name}
                    </div>
                  </div>
                )}
                <div>
                  <div className=" font-bold">{data.name}</div>
                  <div className=" text-gray-400">{data.email}</div>
                </div>
              </div>
            </td>
            <td className="ps-5 py-2">
              <div className=" text-sm font-bold">{data.company_name}</div>
              <div className=" text-sm text-gray-400">{data.company_type}</div>
            </td>
            <td className="ps-5 py-2">
              <span
                className={` px-2 py-[2px] rounded text-[11px]`}
                style={{
                  color: data.status_color,
                  backgroundColor: data.status_bg_color,
                }}
              >
                <div
                  style={{ backgroundColor: data.status_color }}
                  className={`w-2 h-2  inline-block rounded-full`}
                ></div>
                <span className=" ps-2 "> {data.status}</span>
              </span>
            </td>
            <td className="ps-5 flex child py-2 my-[20px] justify-center items-center gap-3">
              <div className=" text-sm">{data.contract}%</div>
              <div className="flex-start progress flex h-1 w-full overflow-hidden bg-gray-100 rounded-sm font-sans text-xs font-medium">
                <div
                  className="flex h-full items-baseline justify-center overflow-hidden break-all bg-[#4650dd] text-white"
                  style={{ width: data.contract + "%" }}
                ></div>
              </div>
            </td>
            <td className=" ps-10 py-2">
              <div className=" relative flex items-center justify-between pe-5">
                {" "}
                <div className=" text-[14px]">{data.date}</div>
                <button className="row_btn hover:bg-[#4752ea61] focus:bg-[#4752ea61] rounded-full p-1 text-gray-400 hover:text-[#4650dd] focus:text-[#4650dd] ">
                  <BiDotsVerticalRounded className="" size={"1.5rem"} />
                </button>
                <div
                  className=" absolute rounded-lg z-20 right-5 row_dropdown tracking-normal bottom-[-140px] bg-white"
                  style={{
                    boxShadow: "0.1px 0.1px 20px rgba(149, 149, 149, 0.496)",
                  }}
                >
                  <ul className=" py-1">
                    <li className=" hover:bg-gray-100 w-40 ps-3 flex items-center gap-4 cursor-pointer py-2">
                      <LuExpand className=" text-gray-400" />
                      Expand
                    </li>
                    <li className=" hover:bg-gray-100 w-40 ps-3 flex items-center gap-4 cursor-pointer py-2">
                      <AiFillEdit className=" text-gray-400" />
                      Edit
                    </li>
                    <li className=" hover:bg-gray-100 w-40 ps-3 flex items-center gap-4 cursor-pointer py-2">
                      <HiOutlineTrash className=" text-gray-400" />
                      Remove
                    </li>
                  </ul>
                </div>
              </div>
            </td>
          </tr>
        );
      })}
      <tr>
        <td className=" px-8 py-8 border" colSpan={5}>
          <div className=" w-full flex items-center justify-between">
            <div className=" text-sm">
              Showing {contact_start} to {contact_end} of {contact_qty} entries
            </div>
            <div>
              <ul className=" flex gap-3">
                {paginate !== 1 && (
                  <li
                    onClick={() => {
                      if (paginate > 1) {
                        setPaginate(paginate - 1);
                        pagination_handler(paginate - 1);
                      }
                    }}
                    className={`  shadow-md rounded-lg bg-white select-none cursor-pointer px-3 hover:bg-gray-300 py-1`}
                  >
                    {"<"}
                  </li>
                )}
                {pagination_qty?.map((num) => {
                  return (
                    <li
                      key={num}
                      onClick={(e) =>
                        pagination_handler(Number(e.target.innerText))
                      }
                      className={`  rounded-lg select-none shadow-md cursor-pointer px-3 py-1 ${
                        num === paginate - 1 ? "bg-gray-300" : "bg-white"
                      }`}
                    >
                      {num + 1}
                    </li>
                  );
                })}
                {paginate !== pagination_qty.length && (
                  <li
                    onClick={() => {
                      if (paginate < pagination_qty.length) {
                        setPaginate(paginate + 1);
                        pagination_handler(paginate + 1);
                      }
                    }}
                    className={`  rounded-lg bg-white shadow-md select-none cursor-pointer px-3 hover:bg-gray-300 py-1`}
                  >
                    {">"}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default Row;
