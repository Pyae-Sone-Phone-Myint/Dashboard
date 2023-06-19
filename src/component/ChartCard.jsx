import React from "react";
import "./Chart.css";
import DoughnutChart from "./DoughnutChart";
import { BiUpArrowAlt } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import PieChart from "./PieChart";

const ChartCard = () => {
	return (
		<>
			<div className=" container mx-auto flex flex-col lg:flex-row gap-4 mb-10">
				<div className=" w-full lg:w-1/3 p-5 shadow-lg">
					<div className=" p-5">
						<h2 className=" text-base font-normal tracking-wider">
							Latest Activity
						</h2>
					</div>
					<hr className=" shadow-md" />
					{/* card  */}
					<div className="duration-300">
						{/* 1st one */}
						<div className=" px-2 py-1">
							<div className=" flex items-center gap-8">
								<p className=" text-base font-bold">Publish New Theme</p>
								<p className=" text-[#adb5bd] text-sm">10 mins ago</p>
							</div>
							<div className="flex items-center  mt-2">
								<img
									src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-0.jpg"
									className="w-12 shadow-md  h-12 profile-img rounded-full border border-4 border-white"
								/>
								<img
									src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-1.jpg"
									className="w-12 shadow-md h-12 profile-img rounded-full border border-4 border-white "
								/>
							</div>
						</div>
						{/* 2nd one */}
						<div className=" px-2 py-1">
							<div className=" flex items-center gap-8 ">
								<p className=" text-base font-bold">Internal Linkbuilding</p>
								<p className=" text-[#adb5bd] text-sm">2 hours ago</p>
							</div>
							<div className="flex items-center  mt-2">
								<img
									src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-1.jpg"
									className="w-12 shadow-md profile-img h-12 rounded-full border border-4 border-white"
								/>
								<img
									src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-2.jpg"
									className="w-12 shadow-md h-12 profile-img rounded-full border border-4 border-white "
								/>
								<img
									src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-3.jpg"
									className="w-12 shadow-md h-12 profile-img rounded-full border border-4 border-white"
								/>
								<img
									src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-4.jpg"
									className="w-12 shadow-md h-12 profile-img rounded-full border border-4 border-white"
								/>
							</div>
						</div>
						{/* 3rd one */}
						<div className=" px-2 py-1">
							<div className=" flex items-center gap-8 ">
								<p className=" text-base font-bold">New Writer Onboarding</p>
								<p className=" text-[#adb5bd] text-sm">10 mins ago</p>
							</div>
							<div className="flex items-center mt-2">
								<img
									src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-0.jpg"
									className="w-12 shadow-md profile-img h-12 rounded-full border border-4 border-white"
								/>
								<img
									src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-1.jpg"
									className="w-12 shadow-md h-12 profile-img rounded-full border border-4 border-white "
								/>
							</div>
						</div>
						{/* 4th one */}
						<div className=" px-2 py-1">
							<div className=" flex items-center gap-8">
								<p className=" text-base font-bold">Blog Post Drafts</p>
								<p className=" text-[#adb5bd] text-sm">5 days ago</p>
							</div>
							<div className="flex items-center mt-2">
								<img
									src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-0.jpg"
									className="w-12  profile-img h-12 shadow-md rounded-full border border-4 border-white"
								/>
								<img
									src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-1.jpg"
									className="w-12 h-12 profile-img shadow-md rounded-full border border-4 border-white "
								/>
							</div>
						</div>
					</div>
				</div>
				{/* dognut */}
				<div className=" w-full lg:w-1/3 p-5 shadow-lg">
					<div className=" p-5">
						<h2 className=" text-base font-normal tracking-wider">
							Latest Activity
						</h2>
					</div>
					<hr className=" shadow-md" />
					{/* card  */}
					<div className=" container mx-auto mt-8 flex flex-col ">
						<div className="w-full h-full md:w-[70%] md:h-[70%] lg:w-[50%] px-4 py-2 lg:h-[50%]  mx-auto">
							<DoughnutChart />
						</div>
						<div className="flex flex-col gap-3 w-full text-center mt-5">
							<h3 className=" text-[#adb5bd] capitalize text-base tracking-widest font-normal">
								TOTAL CLOSED PROJECTS
							</h3>
							<div className="flex gap-3 items-center justify-center">
								<p className="text-[#6c757d] font-bold">2,235</p>
								<div className="flex items-center gap-2">
									<p className="text-[#6c757d]">+128</p>
									<span className="flex items-center px-2 py-1 text-xs rounded text-[#03cfb7] bg-[#cdf5f1]">
										21.3%
									</span>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center ">
							<div className="flex flex-col items-center">
								<div className="flex items-center">
									<BsDot className=" text-4xl text-[#0e6dfd]" />
									<p className="text-[#adb5bd]  text-sm ">Sandra</p>
								</div>
								<p className=" text-base font-bold">250</p>
							</div>
							<div className="flex flex-col items-center">
								<div className="flex items-center">
									<BsDot className=" text-4xl text-[#9ec5fe]" />
									<p className="text-[#adb5bd]  text-sm "> Becky</p>
								</div>
								<p className=" text-base font-bold">50</p>
							</div>
							<div className="flex flex-col items-center">
								<div className="flex items-center">
									<BsDot className=" text-4xl text-[#6ea8fe]" />
									<p className="text-[#adb5bd]  text-sm ">Julie</p>
								</div>
								<p className=" text-base font-bold">100</p>
							</div>
							<div className="lg:hidden flex flex-col items-center">
								<div className="flex items-center">
									<BsDot className=" text-4xl text-[#3d8bfc]" />
									<p className="text-[#adb5bd]  text-sm ">Romero</p>
								</div>
								<p className=" text-base font-bold">40</p>
							</div>
						</div>
						<div className="hidden lg:flex flex-col items-center">
							<div className="flex items-center">
								<BsDot className=" text-4xl text-[#3d8bfc]" />
								<p className="text-[#adb5bd]  text-sm ">Romero</p>
							</div>
							<p className=" text-base font-bold">40</p>
						</div>
					</div>
				</div>
				{/* pie  */}
				<div className=" w-full lg:w-1/3 p-5 shadow-lg">
					<div className=" p-5">
						<h2 className=" text-base font-normal tracking-wider">
							Latest Activity
						</h2>
					</div>
					<hr className=" shadow-md" />
					{/* card  */}
					<div className=" container mx-auto mt-8 flex flex-col ">
						<div className="w-full h-full md:w-[70%] md:h-[70%] lg:w-[50%] px-4 py-2 lg:h-[50%]  mx-auto">
							<PieChart />
						</div>
						<div className="flex flex-col gap-3 w-full text-center mt-5">
							<h3 className=" text-[#adb5bd] capitalize text-base tracking-widest font-normal">
								TICKETS SOLVED
							</h3>
							<div className="flex gap-3 items-center justify-center">
								<p className="text-[#6c757d] font-bold">530</p>
								<div className="flex items-center gap-2">
									<p className="text-[#6c757d]">-85</p>
									<span className="flex items-center px-2 py-1 text-xs rounded text-red-400 bg-red-100">
										-15.6%
									</span>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center ">
							<div className="flex flex-col items-center">
								<div className="flex items-center">
									<BsDot className=" text-4xl text-[#0e6dfd]" />
									<p className="text-[#adb5bd]  text-sm ">John</p>
								</div>
								<p className=" text-base font-bold">300</p>
							</div>
							<div className="flex flex-col items-center">
								<div className="flex items-center">
									<BsDot className=" text-4xl text-[#9ec5fe]" />
									<p className="text-[#adb5bd]  text-sm "> Mark</p>
								</div>
								<p className=" text-base font-bold">50</p>
							</div>
							<div className="flex flex-col items-center">
								<div className="flex items-center">
									<BsDot className=" text-4xl text-[#6ea8fe]" />
									<p className="text-[#adb5bd]  text-sm ">Frank</p>
								</div>
								<p className=" text-base font-bold">100</p>
							</div>
							<div className="flex flex-col items-center  lg:hidden">
								<div className="flex items-center">
									<BsDot className=" text-4xl text-[#6ea8fe]" />
									<p className="text-[#adb5bd]  text-sm ">Danny</p>
								</div>
								<p className=" text-base font-bold">80</p>
							</div>
						</div>
						<div className="hidden flex-col items-center mx-auto text-center  lg:flex">
							<div className="flex items-center">
								<BsDot className=" text-4xl text-[#6ea8fe]" />
								<p className="text-[#adb5bd]  text-sm ">Danny</p>
							</div>
							<p className=" text-base font-bold">80</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ChartCard;
