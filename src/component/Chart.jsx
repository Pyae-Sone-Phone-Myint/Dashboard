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
import { BsDot } from "react-icons/bs";
import ChartCard from "./ChartCard";

const Chart = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="container shadow-sm  gap-10">
				<div className=" shadow-lg rounded-md">
					{/* header */}
					<div className="flex items-center justify-between p-5">
						<h2 className=" text-base font-normal tracking-wider">
							Sales By Channel
						</h2>
						<div className="relative">
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="text-gray-400  hover:bg-[#dadcf8] hover:text-[#4650dd] duration-300 w-10 h-10 flex items-center justify-center rounded-full "
							>
								<BiDotsVerticalRounded className=" text-2xl" />
							</button>
							{/* dropdowns */}
							{isOpen && (
								<div className="absolute right-0 mt-2 bg-white shadow-md space-y-2">
									<ul className=" flex flex-col w-48">
										<li className=" flex px-4 py-2 text-[#495057] hover:bg-gray-200 items-center gap-2">
											<GiExpand />
											<a href="">Expand</a>
										</li>
										<li className=" flex px-4 py-2 text-[#495057] hover:bg-gray-200 items-center gap-2">
											<HiOutlineMinus />
											<a href="">Minimize</a>
										</li>
										<li className=" flex px-4 py-2 text-[#495057] hover:bg-gray-200 items-center gap-2">
											<AiOutlineReload />
											<a href="">Reload</a>
										</li>
										<li className=" flex px-4 py-2 text-[#495057] hover:bg-gray-200 items-center gap-2">
											<HiOutlineTrash />
											<a href="">Remove</a>
										</li>
									</ul>
								</div>
							)}
						</div>
					</div>
					<hr className=" shadow-md" />
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

			{/* <ChartCard/> */}
		</>
	);
};

export default Chart;
