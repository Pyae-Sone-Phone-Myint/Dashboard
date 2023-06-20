import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
// import Link from "@mui/material/Link";
import "./Knowledge.css";
import { BiSearch } from "react-icons/bi";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import { LuLaptop2 } from "react-icons/lu";
import { AiOutlineFile, AiOutlineMessage } from "react-icons/ai";
import { TbTargetArrow } from "react-icons/tb";
import { Link } from "react-router-dom";
import { RiBallPenLine } from "react-icons/ri";

const Knowledge = () => {
  return (
    <>
      <div className="">
        {/* Knowledge_base */}
        <div className="bg-[#F8F9FA]  px-3 lg:px-10 py-5 mb-20">
          <div role="presentation" className=" mb-8">
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                // color="inherit"
                to={"/"}
                className="text-[#4752eafe]"
              >
                Home
              </Link>
              <Typography className=" text-gray-400">Knowledge Base</Typography>
            </Breadcrumbs>
          </div>
          <div
            className="text-[35px] lg:text-[40px] tracking-[0.4rem] text-gray-700 mb-10"
            style={{ fontWeight: 350 }}
          >
            KNOWLEDGE BASE
          </div>
          <p className="w-full lg:w-1/2 mb-10">
            One morning, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like back, and if he lifted his head a little he could see
            his brown belly, slightly domed and divided by arches into stiff
            sections
          </p>
          <div className=" w-full md:w-full lg:w-[40%]  mb-10 flex">
            <input
              type="text"
              name=""
              className="w-full border outline-none rounded-s-lg ps-4 py-1 text-lg"
              id=""
              placeholder="Search Something..."
            />
            <button className=" border border-[#4650dd] hover:text-white rounded-e-lg px-3 hover:bg-[#4752ea]">
              <BiSearch size={"1.3rem"} />
            </button>
          </div>
          {/* cards */}
          <div className="w-full flex justify-between  gap-10 lg:gap-0 md:gap-8 flex-wrap">
            <Link
              to={"/notFound"}
              className="w-[100%] md:w-[48%] select-none py-14 bg-white rounded-xl gap-3 lg:w-[24%] shadow cursor-pointer hover:-translate-y-2 ease-linear duration-100 flex flex-col items-center justify-center"
            >
              <div className=" w-[90px] h-[90px] rounded-full flex items-center justify-center bg-[#dadcf8]">
                <HiOutlineDocumentSearch
                  size={"2.4rem"}
                  className=" text-[#4650dd]"
                />
              </div>
              <h1 className=" font-bold text-gray-700">Help & Documentation</h1>
              <p className=" text-center text-sm px-10 text-gray-500">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed in
              </p>
            </Link>
            <Link
              to={"/notFound"}
              className="w-[100%] md:w-[48%] select-none py-14 bg-white rounded-xl gap-3 lg:w-[24%] shadow cursor-pointer hover:-translate-y-2 ease-linear duration-100 flex flex-col items-center justify-center"
            >
              <div className=" w-[90px] h-[90px] rounded-full flex items-center justify-center bg-[#f7d6e6]">
                <LuLaptop2 size={"2.4rem"} className=" text-[#d63384]" />
              </div>
              <h1 className=" font-bold text-gray-700">Developer Resources</h1>
              <p className=" text-center text-sm px-10 text-gray-500">
                The bedding was hardly able to cover it and seemed ready to
                slide off any moment. His many legs, pit
              </p>
            </Link>
            <Link
              to={"/notFound"}
              className="w-[100%] md:w-[48%] select-none py-14 bg-white rounded-xl gap-3 lg:w-[24%] shadow cursor-pointer hover:-translate-y-2 ease-linear duration-100 flex flex-col items-center justify-center"
            >
              <div className=" w-[90px] h-[90px] rounded-full flex items-center justify-center bg-[#e0cffc]">
                <AiOutlineMessage size={"2.4rem"} className=" text-[#6410f2]" />
              </div>
              <h1 className=" font-bold text-gray-700">Chat With Us</h1>
              <p className=" text-center text-sm px-10 text-gray-500">
                His room, a proper human room although a little too small, lay
                peacefully between its four familiar
              </p>
            </Link>
            <Link
              to={"/notFound"}
              className="w-[100%] md:w-[48%] select-none py-14 bg-white rounded-xl gap-3 lg:w-[24%] shadow cursor-pointer hover:-translate-y-2 ease-linear duration-100 flex flex-col items-center justify-center"
            >
              <div className=" w-[90px] h-[90px] rounded-full flex items-center justify-center bg-[#cfe2ff]">
                <TbTargetArrow size={"2.4rem"} className=" text-[#0d6efd]" />
              </div>
              <h1 className=" font-bold text-gray-700">FAQ</h1>
              <p className=" text-center text-sm px-10 text-gray-500">
                Samsa was a travelling salesman - and above it there hung a
                picture that he had recently cut out of
              </p>
            </Link>
          </div>
        </div>
        {/* choose Topic */}
        <div className=" px-3 lg:px-20 mb-20">
          <div className=" flex lg:items-center gap-5 lg:gap-0 flex-col lg:flex-row lg:justify-between mb-14">
            <div className="">
              <div className=" tracking-widest mb-3 text-[#4650dd]">
                WHAT DO YOU NEED TO KNOW?
              </div>
              <h1 className=" text-[26px] lg:text-[35px] text-gray-700 font-bold">
                Choose Your Topic
              </h1>
            </div>
            <div className="">
              <a
                href="#"
                className=" hover:underline text-gray-500 font-semibold"
              >
                See all topics {">>"}
              </a>
            </div>
          </div>
          <div className=" flex flex-wrap gap-10">
            <div>
              <div className=" flex items-center gap-2">
                <span className="border bg-[#dadcf8] text-[#4650dd] px-2 py-1 rounded-md">
                  12
                </span>
                <a to={"/notFound"} className=" text-2xl font-bold">
                  Introduction
                </a>
              </div>
              <div className=" flex flex-col mt-5 gap-1">
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  Sint consequat aliquip?
                </a>
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  Adipisicing voluptate magna quis <br/> sunt dolor velit.
                </a>
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  Ad pariatur anim magna?
                </a>
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  officia aliqua fugiat ex?
                </a>
              </div>
            </div>
            <div>
              <div className=" flex items-center gap-2">
                <span className="border bg-[#dadcf8] text-[#4650dd] px-2 py-1 rounded-md">
                  12
                </span>
                <a to={"/notFound"} className=" text-2xl font-bold">
                  Introduction
                </a>
              </div>
              <div className=" flex flex-col mt-5 gap-1">
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  Sint consequat aliquip?
                </a>
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  Adipisicing voluptate magna quis <br/> sunt dolor velit.
                </a>
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  Ad pariatur anim magna?
                </a>
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  officia aliqua fugiat ex?
                </a>
              </div>
            </div>
            <div>
              <div className=" flex items-center gap-2">
                <span className="border bg-[#dadcf8] text-[#4650dd] px-2 py-1 rounded-md">
                  12
                </span>
                <a to={"/notFound"} className=" text-2xl font-bold">
                  Introduction
                </a>
              </div>
              <div className=" flex flex-col mt-5 gap-1">
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  Sint consequat aliquip?
                </a>
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  Adipisicing voluptate magna quis <br/> sunt dolor velit.
                </a>
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  Ad pariatur anim magna?
                </a>
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  officia aliqua fugiat ex?
                </a>
              </div>
            </div>
            <div>
              <div className=" flex items-center gap-2">
                <span className="border bg-[#dadcf8] text-[#4650dd] px-2 py-1 rounded-md">
                  12
                </span>
                <a to={"/notFound"} className=" text-2xl font-bold">
                  Introduction
                </a>
              </div>
              <div className=" flex flex-col mt-5 gap-1">
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  Sint consequat aliquip?
                </a>
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  Adipisicing voluptate magna quis <br/> sunt dolor velit.
                </a>
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  Ad pariatur anim magna?
                </a>
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  officia aliqua fugiat ex?
                </a>
              </div>
            </div>
            <div>
              <div className=" flex items-center gap-2">
                <span className="border bg-[#dadcf8] text-[#4650dd] px-2 py-1 rounded-md">
                  12
                </span>
                <a to={"/notFound"} className=" text-2xl font-bold">
                  Introduction
                </a>
              </div>
              <div className=" flex flex-col mt-5 gap-1">
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  Sint consequat aliquip?
                </a>
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  Adipisicing voluptate magna quis <br/> sunt dolor velit.
                </a>
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  Ad pariatur anim magna?
                </a>
                <a
                  href="/notFound"
                  className=" flex items-center gap-2 ps-5 hover:underline text-gray-500"
                >
                  <AiOutlineFile />
                  officia aliqua fugiat ex?
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* GET SUPPORT FROM REAL PEOPLE */}
        <div className=" ">
          <div className="bg-[#E9ECEF] py-20 flex flex-col items-center px-3 lg:px-0 justify-center gap-8">
            <h1 className=" text-[20px] tracking-widest font-bold text-[#4650dd]">
              GET SUPPORT FROM REAL PEOPLE
            </h1>
            <p className="w-full lg:w-1/2 text-center text-[17px] text-gray-500">
              Samsa was a travelling salesman - and above it there hung a
              picture that he had recently cut out of an illustrated magazine
              and housed in a nice, gilded frame.
            </p>
            <div className=" flex gap-5">
              <div className=" rounded-full bg-white p-2 shadow-lg hover:-translate-y-2 ease-linear duration-100">
                <img
                  className="w-20 rounded-full"
                  src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-1.jpg"
                  alt=""
                />
              </div>
              <div className=" rounded-full bg-white p-2 shadow-lg hover:-translate-y-2 ease-linear duration-100">
                <img
                  className="w-20 rounded-full"
                  src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-2.jpg"
                  alt=""
                />
              </div>
              <div className=" rounded-full bg-white p-2 shadow-lg hover:-translate-y-2 ease-linear duration-100">
                <img
                  className="w-20 rounded-full"
                  src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-3.jpg"
                  alt=""
                />
              </div>
              <div className=" rounded-full bg-white p-2 shadow-lg hover:-translate-y-2 ease-linear duration-100">
                <img
                  className="w-20 rounded-full"
                  src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-4.jpg"
                  alt=""
                />
              </div>
              <div className=" rounded-full bg-white p-2 shadow-lg hover:-translate-y-2 ease-linear duration-100">
                <img
                  className="w-20 rounded-full"
                  src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className=" relative pb-[230px]  py-20 flex items-center justify-center  bg-[#c8c8c830]">
            <div
              className=" absolute -top-10 flex flex-col shadow-2xl bg-white overflow-hidden w-[95%] gap-8 rounded-2xl lg:w-[33%]"
              style={{ boxShadow: "1px 1px 15px #e0e0e0" }}
            >
              <div className="flex  items-center px-8 border-b justify-between py-4">
                <div className="flex flex-col">
                  <div className=" tracking-widest text-[#4650dd]">
                    DROP US A LINE
                  </div>
                  <h1 className=" text-gray-700 text-3xl font-bold">Contact</h1>
                </div>
                <div>
                  <RiBallPenLine size={"4rem"} />
                </div>
              </div>
              <div className=" px-8 text-gray-500">
                He must have tried it a hundred times, shut his eyes so that he
                wouldn't have to look at the floundering legs, and only stopped
                when he began to feel a mild, dull pain there that he had never
                felt before.
              </div>
              <div className=" px-8 bg-[#F8F9FA] py-5">
                <button className=" border px-2 py-1 rounded border-[#4650dd] hover:bg-[#4650dd] hover:text-white">
                  Let us know
                </button>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Knowledge;
