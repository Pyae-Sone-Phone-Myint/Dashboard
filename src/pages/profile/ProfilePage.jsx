import React from "react";
import {
	AiFillFacebook,
	AiFillPhone,
	AiFillSkype,
	AiOutlineTwitter,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const ProfilePage = () => {
	return (
		<>
			{/* breadcrumb */}
			<nav class="container">
				<ol class="list-reset py-4 pl-4 rounded flex bg-grey-light text-grey">
					<li class="px-2">
						<a href="#" class="no-underline hover:underline  text-[#4750dd]">
							Home
						</a>
					</li>
					<li>/</li>
					<li class="px-2">
						<a href="#" class="no-underline text-[#6e767e]">
							Profile
						</a>
					</li>
				</ol>
			</nav>

			<h2 className=" text-3xl tracking-wider text-[#343a40] capitalize ">
				Profile
			</h2>

			<div className=" flex flex-col lg:flex-row container mx-auto gap-3">
				{/* 1st one */}
				<div className="w-full lg:w-1/4">
					{/* 1st card */}
					<div className="shadow-lg rounded-[1rem]">
						<div className=" ">
							<img
								src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/photos/paul-morris-116514-unsplash.jpg"
								className=" rounded-t-[1rem] w-[800px] h-[180px] lg:w-[400px] lg:h-[100px] "
								alt=""
							/>
						</div>
						<div className="">
							<div className="text-center flex items-center">
								<img
									src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-7.jpg"
									alt=""
									className=" w-[90px] h-[90px] rounded-full border border-2 mx-auto mt-[-35px]"
								/>
							</div>
							<div className=" text-center p-5 ">
								<h2 className=" text-lg font-bold tracking-wide mb-2">
									Nathan Andrews
								</h2>
								<p className="mb-2 text-sm">
									One morning, when Gregor Samsa woke from troubled
								</p>
								<button className="px-3 py-1 hover:bg-black hover:text-white duration-300 outline outline-black">
									Follow
								</button>
							</div>
						</div>
					</div>
					{/* 2nd card */}
					<div className=" shadow-lg flex items-center p-5 rounded-[1rem] justify-evenly mt-5">
						<div className=" shrink-0">
							<img
								src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-7.jpg"
								alt=""
								className=" w-[80px] h-[80px] rounded-full border border-2 "
							/>
						</div>
						<div className="">
							<div className="">
								<h3 className="text-[1.35rem] font-bold">
									Nathan
									<br />
									Andrews
								</h3>
								<p className="text-[#6c757d]">Coder</p>
							</div>
							<div className=" flex md:hidden items-center gap-3 mt-2">
								<AiFillFacebook className=" text-base text-blue-700 hover:text-blue-400 duration-300 " />
								<AiOutlineTwitter className=" text-base text-blue-700 hover:text-blue-400 duration-300" />
								<AiFillPhone className=" text-base text-blue-700 hover:text-blue-400 duration-300" />
								<AiFillSkype className=" text-base text-blue-700 hover:text-blue-400 duration-300" />
							</div>
						</div>
					</div>
					{/* 3rd card */}
					<div className="shadow-lg rounded-[1rem] my-5">
						<div className="flex items-center justify-between p-5">
							<h2 className=" text-lg font-normal tracking-wider">
								My Profile
							</h2>
						</div>
						<hr className=" shadow-md" />
						<div className="">
							{/* component 1st one */}
							<div className="flex items-center gap-3 p-5">
								<div className=" shrink-0">
									<img
										src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-7.jpg"
										alt=""
										className=" w-[80px] h-[80px] rounded-full border border-2 "
									/>
								</div>
								<div className="flex flex-col gap-3 ">
									<label className="text-base">Name</label>
									<input
										type="text"
										className=" px-4 py-2  w-2/3 rounded outline outline-gray-400 focus-within:outline-blue-400"
										placeholder="Your Name"
									/>
								</div>
							</div>
							{/* component 2nd one */}
							<div className="flex flex-col gap-2 p-5 ">
								<label>Bio</label>
								<textarea
									name=""
									className="outline rounded outline-gray-400 p-2 focus-within:outline-blue-400"
									id=""
									cols="30"
									rows="9"
								>
									The bedding was hardly able to cover it and seemed ready to
									slide off any moment. His many legs, pitifully thin compared
									with the size of the rest of him, waved about helplessly as he
									looked. "What's happened to me?" he thought. It wasn't a
									dream.
								</textarea>
							</div>
							{/* component 3 rd one */}
							<div className="p-5">
								<div className="flex flex-col gap-2">
									<label className="text-base">Email</label>

									<input
										type="text"
										className="rounded px-4 py-2 outline outline-gray-400 focus-within:outline-blue-400"
										placeholder="you@domain.com"
									/>
								</div>
								<div className="flex flex-col gap-2 mt-2">
									<label className="text-base">Password</label>

									<input
										type="password"
										className=" rounded px-4 py-2 outline outline-gray-400 focus-within:outline-blue-400"
										value="asdffdsa"
									/>
								</div>
							</div>
							{/* 4th buutton */}
							<hr className=" shadow-lg" />
							<div className="  text-right bg-[#f7f7f7] p-5">
								<button className=" px-4 py-2 rounded text-white bg-blue-800 hover:bg-blue-700 ">
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
				{/* 2nd one */}
				<div className="w-full lg:w-3/4">
					<div className=" p-5 shadow-lg rounded-[1rem]">
						<div className="flex p-5">
							<input
								placeholder="Message"
								type="text"
								className="block w-full px-4 py-2 outline outline-gray-400 focus-within:outline-purple-400"
							/>
							<button className=" px-3 py-1 border">
								<FaTelegramPlane />
							</button>
						</div>
						<hr className=" shadow-lg" />

						<div className=" flex my-4 gap-5 justify-center p-5">
							<div className=" shrink-0">
								<img
									src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-7.jpg"
									alt=""
									className=" w-[80px] h-[80px] rounded-full border border-2 "
								/>
							</div>
							{/* 2 nd part */}
							<div className=" ">
								<div className="">
									<p className=" text-sm">10mins ago</p>
									<h3 className="font-bold text-lg mt-2">Nathan Andrews</h3>
									<p className=" text-sm mt-2">
										One morning, when Gregor Samsa woke from troubled dreams, he
										found himself transformed in his bed into a horrible vermin.
										He lay on his armour-like back, and if he lifted his head a
										little he could see his brown belly, slightly domed and
										divided by arches into stiff sections
									</p>
								</div>
								{/* small one */}
								<div className=" flex mt-5 gap-3">
									<div className=" shrink-0">
										<img
											src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-3.jpg"
											className="w-16 shadow-md  h-16  rounded-full border border-4 border-white"
										/>
									</div>
									<p className=" text-sm font-light">
										<span className=" text-sm font-bold tracking-wide">
											Serenity Mitchelle:
										</span>
										The bedding was hardly able to cover it and seemed ready to
										slide off any moment. His many legs, pitifully thin compared
										with the size of the rest of him, waved about helplessly as
										he looked. "What's happened to me?" he thought. It wasn't a
										dream.
									</p>
								</div>
								<div className=" flex mt-5 gap-3">
									<div className=" shrink-0">
										<img
											src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-1.jpg"
											className="w-16 shadow-md  h-16  rounded-full border border-4 border-white"
										/>
									</div>
									<p className=" text-sm font-light tracking-wide">
										<span className=" text-sm font-bold">Tony O'Brian:</span>
										The bedding was hardly able to cover it and seemed ready to
										slide off any moment. His many legs, pitifully thin compared
										with the size of the rest of him, waved about helplessly as
										he looked. "What's happened to me?" he thought. It wasn't a
										dream.
									</p>
								</div>
							</div>
						</div>
						<hr />
						<div className=" flex gap-5 p-5 items-center justify-center ">
							<div className=" shrink-0">
								<img
									src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-7.jpg"
									alt=""
									className=" w-[80px] h-[80px] rounded-full border border-2 "
								/>
							</div>
							<div className="">
								<p className=" text-sm">12 mins ago</p>
								<h3 className="font-bold text-lg mt-2">Nathan Andrews</h3>
								<p className=" text-sm mt-2">
									Samsa was a travelling salesman - and above it there hung a
									picture that he had recently cut out of an illustrated
									magazine and housed in a nice, gilded frame.
								</p>
							</div>
						</div>
						<hr />
						{/* 3rd card */}
						<div className="flex my-4 gap-5 justify-center p-5">
							<div className=" shrink-0">
								<img
									src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-7.jpg"
									alt=""
									className=" w-[80px] h-[80px] rounded-full border border-2 "
								/>
							</div>
							<div className=" ">
								<div className="">
									<p className=" text-sm">34 mins ago</p>
									<h3 className="font-bold text-lg mt-2">Nathan Andrews</h3>
									<p className=" text-sm mt-2">
										He must have tried it a hundred times, shut his eyes so that
										he wouldn't have to look at the floundering legs, and only
										stopped when he began to feel a mild, dull pain there that
										he had never felt before.
									</p>
								</div>
								{/* small one */}
								<div className=" flex mt-5 gap-3">
									<div className=" shrink-0">
										<img
											src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-6.jpg"
											className="w-16 shadow-md  h-16  rounded-full border border-4 border-white"
										/>
									</div>
									<p className=" text-sm font-light">
										<span className=" text-sm font-bold tracking-wide">
											Serenity Mitchelle:
										</span>
										The bedding was hardly able to cover it and seemed ready to
										slide off any moment. His many legs, pitifully thin compared
										with the size of the rest of him, waved about helplessly as
										he looked. "What's happened to me?" he thought. It wasn't a
										dream.
									</p>
								</div>
							</div>
						</div>
					</div>
					{/* form */}
					<div className=" shadow-lg mt-3">
						<div className=" p-5 my-5 items-center">
							<h2 className=" text-base font-normal tracking-wider">
								EDIT PROFILE
							</h2>
						</div>
						<hr className=" shadow-md" />
						{/* 1st line */}
						<div className="flex flex-col md:flex-row items-center justify-evenly p-5">
							{/* company */}
							<div className="flex flex-col gap-2 w-full md:w-4/12">
								<label>Company</label>
								<input
									type="text"
									className=" px-4 py-2 outline outline-gray-400 focus-within:outline-blue-700 rounded"
									value="Nathan & Nathan"
								/>
							</div>
							<div className="flex flex-col gap-2 w-full md:w-2/12">
								<label>Username</label>
								<input
									type="text"
									className=" px-4 py-2 outline outline-gray-400 focus-within:outline-blue-700 rounded"
									value="nathan "
								/>
							</div>
							<div className="flex flex-col gap-2 w-full md:w-3/12">
								<label>Email address</label>
								<input
									type="text"
									className=" px-4 py-2 outline outline-gray-400 focus-within:outline-blue-700 rounded"
									placeholder="Email "
								/>
							</div>
						</div>
						{/* 2nd line */}
						<div className="flex flex-col md:flex-row items-center justify-evenly p-5">
							
							<div className="flex flex-col gap-2 w-full md:w-5/12">
								<label>First Name</label>
								<input
									type="text"
									className=" px-4 py-2 outline outline-gray-400 focus-within:outline-blue-700 rounded"
									placeholder="First name"
								/>
							</div>
							<div className="flex flex-col gap-2 w-full md:w-5/12">
								<label>Last Name</label>
								<input
									type="text"
									className=" px-4 py-2 outline outline-gray-400 focus-within:outline-blue-700 rounded"
									placeholder="Last Name "
								/>
							</div>
						</div>
						{/* 3rd line */}
						<div className="ml-0 md:ml-14 p-5">
							<div className="flex flex-col gap-2 ">
								<label>Address</label>
								<input
									type="text"
									className=" px-4 w-full md:w-11/12 py-2 outline outline-gray-400 focus-within:outline-blue-700 rounded"
									placeholder="Home Address"
								/>
							</div>
						</div>
						{/* 4th line */}
						<div className="flex flex-col md:flex-row items-center justify-evenly p-5">
							<div className="flex flex-col gap-2 w-full md:w-3/12">
								<label>City</label>
								<input
									type="text"
									className=" px-4 py-2 outline outline-gray-400 focus-within:outline-blue-700 rounded"
									placeholder="City"
								/>
							</div>
							<div className="flex flex-col gap-2 w-full md:w-2/12">
								<label>Zip</label>
								<input
									type="number"
									className=" px-4 py-2 outline outline-gray-400 focus-within:outline-blue-700 rounded"
									placeholder="Zip"
								/>
							</div>
							<div className="flex flex-col gap-2 w-full md:w-4/12">
								<label>Email address</label>
								<select className=" appearance-none px-4 py-2 outline outline-gray-400 focus-within:outline-blue-700 rounded">
									<option value="0">UK</option>
									<option value="1">US</option>
								</select>
							</div>
						</div>
						{/* 5th line */}
						<div className="flex flex-col gap-2 p-5 ml-0 md:ml-14 ">
							<label>About Me</label>
							<textarea
								name=""
								className="outline rounded outline-gray-400 w-full md:w-11/12  p-2 focus-within:outline-blue-400"
								id=""
								cols="10"
								rows="5"
							>
								The bedding was hardly able to cover it and seemed ready to
								slide off any moment. His many legs, pitifully thin compared
								with the size of the rest of him, waved about helplessly as he
								looked. "What's happened to me?" he thought. It wasn't a dream.
							</textarea>
						</div>
						<hr className=" shadow-lg" />
						<div className="  text-right bg-[#f7f7f7] p-5">
							<button className=" px-6 py-2 rounded text-white bg-blue-800 hover:bg-blue-700 ">
								Update Profile
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfilePage;
