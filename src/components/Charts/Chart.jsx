import React, { useState } from "react";
import {
	BiDotsVerticalRounded,
	BiDownArrowAlt,
	BiUpArrowAlt,
} from "react-icons/bi";
import { RiHandCoinLine } from "react-icons/ri";
import { GiExpand } from "react-icons/gi";
import { HiOutlineMinus, HiOutlineTrash } from "react-icons/hi";
import { AiOutlineReload } from "react-icons/ai";
import BarChart from "./BarChart";

import { BsDot, BsTrash } from "react-icons/bs";
import { FaExpandArrowsAlt, FaWindowMinimize } from "react-icons/fa";
import { TbReload } from "react-icons/tb";


const Chart = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>


			<div className=" shadow-sm flex flex-col lg:flex-row gap-10 bg-white rounded-[1rem]">
				<div className="w-full shadow-lg rounded-[1rem] overflow-hidden">
					{/* header */}
					<div className="flex items-center justify-between px-[2rem] pt-[2rem] pb-[1.5rem] shadow">
						<h2 className=" text-base font-normal tracking-[.2em] text-[#343a40]   uppercase">

							Sales By Channel
						</h2>
						<div className="relative">
							<button
								onClick={() => setIsOpen(!isOpen)}

								className="text-gray-400  hover:bg-[#dadcf8] hover:text-[#4650dd] duration-300 w-8 h-8 flex items-center justify-center rounded-full "

							>
								<BiDotsVerticalRounded className=" text-2xl" />
							</button>
							{/* dropdowns */}

							
							<div
										className={`dropdown-menu block py-2 text-[12.6px] w-[150px] duration-200 ease-in-out ${
										  isOpen ? "opacity-1" : "opacity-0  invisible"
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

					{/* 3 cards */}
					<div className=" flex flex-wrap md:flex-nowrap container items-center justify-around p-5">
						<div className="flex flex-col gap-3 px-2 w-full md:w-auto py-4  border-gray-200">
							<h2 className=" text-[#adb5bd] capitalize text-base tracking-wider">
								TOTAL REVENUE
							</h2>
							<h1 className=" text-[#4650dd] text-4xl font-bold">$19,200</h1>
							<div className="flex gap-3">
								<p className="text-[#6c757d]">+$2,032</p>
								<span className="flex items-center px-2 py-1 text-xs rounded text-[#03cfb7] bg-[#cdf5f1]">
									<BiUpArrowAlt />
									19.5%
								</span>
							</div>
						</div>
						<div className="flex flex-col gap-3 px-2 py-4 w-min md:w-auto border-l  border-gray-200">
							<h2 className=" text-[#adb5bd] capitalize text-base tracking-wider font-normal">
								ORGANIC SEARCH
							</h2>
							<h1 className=" text-black text-xl font-normal">$19,200</h1>
							<div className="flex gap-3">
								<p className="text-[#6c757d]">+$2,123</p>
								<span className="flex items-center px-2 py-1 text-xs rounded text-[#03cfb7] bg-[#cdf5f1]">
									<BiUpArrowAlt />
									21.3%
								</span>
							</div>
						</div>

						<div className="flex flex-col gap-3 px-2 py-4 w-min md:w-auto border-l  border-gray-200">
							<h2 className=" text-[#adb5bd] capitalize text-base tracking-wider font-normal">
								FACEBOOK ADS
							</h2>
							<h1 className=" text-black text-xl font-normal">$19,200</h1>
							<div className="flex gap-3">
								<p className="text-[#6c757d]">-$233 </p>
								<span className="flex items-center px-2 py-1 text-xs rounded text-[#dc3545] bg-[#f8d7da]">
									<BiDownArrowAlt />
									19.5%
								</span>
							</div>
						</div>

						<div className="  lg:hidden w-[5rem] h-[5rem] flex justify-center items-center bg-[#dadcf8] rounded-full">

							<RiHandCoinLine className=" text-4xl text-[#4650dd]" />
						</div>
					</div>
					{/* chart js */}
					<div className=" container mx-auto p-5">
						<BarChart />
						<div className="flex items-center justify-center">
							<div className="flex items-center">
								<BsDot className=" text-5xl text-[#4550dd]" />
								<p className="text-[#adb5bd]  text-base tracking-wider">
									Organic Search
								</p>
							</div>
							<div className=" flex items-center justify-center">
								<BsDot className=" text-5xl text-[#d0d2f3]" />
								<p className="text-[#adb5bd] capitalize text-base tracking-wider">
									Facebook Ads
								</p>
							</div>
						</div>
					</div>
				</div>


			</div>


		</>
	);
};

export default Chart;
