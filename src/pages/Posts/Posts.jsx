import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi";
import { LuExpand } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseLimit,
  increasePgn,
  post_pagination,
} from "../../redux/services/ContactSlice";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import Reveal from "../../components/animations/Reveal";

const Posts = () => {
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
    dispatch(post_pagination());
  }, [paginate, limit, search]);
  console.log(show_data);
  return (
    <>
      <div className=" flex justify-between items-center mb-10">
        <h1 className=" uppercase font-light text-[2.25rem] tracking-wider text-[rgb(52,58,64)]">
          posts
        </h1>
        <a
          href="/cms-new-post"
          className=" flex items-center text-white text-sm tracking-[2.88px] font-normal px-3 py-3 rounded bg-[#81c057e3] hover:bg-[#81c057]"
        >
          <BsPlus size={"1.1rem"} />
          <span className=" uppercase">add new</span>
        </a>
      </div>
      <div className=" rounded-[1rem] overflow-hidden shadow-lg">
        <div className="bg-white flex ps-5 lg:ps-10 rounded-lg pe-5 lg:pe-6 w-full py-8 items-center lg:items-start flex-col lg:flex-row  gap-4 justify-start lg:justify-between">
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
              className=" border px-4 text-[15px] py-[4px]  border-gray-300 rounded"
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
              className=" border focus:shadow focus:shadow-[#81c057e3] border-gray-300 w-full shadow rounded-lg  py-[3px] text-md outline-none ps-3"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="overflow-x-scroll lg:overflow-auto rounded-b-lg">
          <div className="w-[100%] px-10 ">{/* contact_table */}</div>
          <table className=" w-full rounded-b-lg">
            <thead className="bg-[#81c057e3]">
              <tr className=" w-full  justify-between">
                <th className="  py-6 w-[10%] text-center text-white text-sm">
                  NO
                </th>
                <th className="  w-[30%] py-6 ">
                  <div className=" tracking-widest text-white text-sm  flex items-center justify-between">
                    TITLE
                  </div>
                </th>
                <th className="w-[20%]   py-6 ">
                  <div className=" tracking-widest flex items-center justify-center text-white text-sm text-center">
                    PRICE
                  </div>
                </th>
                <th className="w-[20%]  py-6 ">
                  <div className="flex items-center justify-center  tracking-widest text-white text-sm text-center">
                    TOUR TYPE
                  </div>
                </th>
                <th className="w-[20%]  py-6 text-white ">
                  <div className=" tracking-widest text-sm text-center  flex items-center justify-center">
                    DURATION
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="w-full rounded-b-[1rem]">
              {show_data?.map((data) => {
                return (
                  <tr
                    key={data?.id}
                    className=" bg-white border-b hover:bg-[#ECECEC]"
                  >
                    <td className=" ps-10">{data?.id}</td>
                    <td>
                      <div className=" flex items-center gap-3 py-3">
                        <a href="/cms-new-post">
                          <img
                            src={data?.image}
                            width={100}
                            alt=""
                            className=" rounded"
                          />
                        </a>
                        <span className=" capitalize font-extrabold text-sm">
                          {data?.title}
                        </span>
                      </div>
                    </td>
                    <td className=" capitalize text-sm text-yellow-900 text-center">
                      {data?.price}
                    </td>
                    <td className=" capitalize text-sm text-center font-semibold text-[#619d39]">
                      {data?.tour_type}
                    </td>
                    <td className=" text-sm text-center">{data?.duration}</td>
                  </tr>
                );
              })}
              <tr>
                <td className=" px-8 py-8 rounded-b-[1rem]" colSpan={5}>
                  <div className=" w-full flex items-center justify-between">
                    <div className=" text-sm">
                      Showing {contact_start} to {contact_end} of {contact_qty}{" "}
                      entries
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
                            className={`  shadow-md rounded-lg bg-white select-none cursor-pointer px-3 hover:bg-[#81c05777] py-1`}
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
                              className={`  rounded-lg select-none hover:bg-[#81c05777] shadow-md cursor-pointer px-3 py-1 ${
                                num === paginate - 1
                                  ? "bg-[#81c057e3] text-white"
                                  : "bg-white"
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
                            className={`  rounded-lg bg-white shadow-md select-none cursor-pointer px-3 hover:bg-[#81c05777] py-1`}
                          >
                            {">"}
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Posts;
