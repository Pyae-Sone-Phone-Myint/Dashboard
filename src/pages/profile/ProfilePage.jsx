import React from "react";
import {
  AiFillFacebook,
  AiFillPhone,
  AiFillSkype,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import "./Profile.css";
import { BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <>
      {/* breadcrumb */}
      <nav class="container">
      <div className="page-breadcrumb mb-8  px-3 pt-12">
          <p>
            {" "}
            <span className=" text-[#64AB45] hover:underline duration-150">
            <Link to={'/'}>Home</Link>
            </span>{" "}
            <span className="muted"> / Profile</span>{" "}
          </p>
        </div>
        <div className=" mb-12 px-3">
          <h1 className=" invoice-header">Profile</h1>
        </div>
      </nav>

      {/* <h2 className="  text-[#343a40] text-[36px] font-light tracking-[7.2px] leading-[43.2px] uppercase mb-14">
        Profile
      </h2> */}

      <div className=" flex flex-col lg:flex-row  mx-auto gap-5">
        {/* 1st one */}
        <div className="w-full lg:w-1/4">
          {/* 1st card */}
          <div className="shadow-lg rounded-[1rem] bg-white">
            <div className="  w-full">
              <img
                src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/photos/paul-morris-116514-unsplash.jpg"
                className=" rounded-t-[1rem] w-[800px] h-[180px] lg:w-[420px] lg:h-[100px]  "
                alt=""
              />
            </div>
            <div className="">
              <div className="text-center flex items-center">
                <img
                  src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-7.jpg"
                  alt=""
                  className="p-1 bg-white shadow-lg w-[90px] h-[90px] rounded-full border  mx-auto mt-[-35px]"
                />
              </div>
              <div className=" text-center p-5 ">
                <h2 className=" text-lg font-bold tracking-wide mb-2">
                  Nathan Andrews
                </h2>
                <p className="mb-2 text-sm">
                  One morning, when Gregor Samsa woke from troubled
                </p>
                <div className="px-3 py-1 hover:bg-black hover:text-white duration-300 border rounded text-xs  border-black w-fit flex items-center gap-2 cursor-pointer mx-auto">
                  <BsTwitter />
                  <span>Follow</span>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd card */}
          <div className=" shadow-lg flex items-center p-5 rounded-[1rem] justify-start gap-4 mt-5 bg-white">
            <div className=" shrink-0">
              <img
                src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-7.jpg"
                alt=""
                className="p-1 bg-white shadow-lg w-[80px] h-[80px] rounded-full border  "
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
              <div className=" flex items-center gap-3 mt-2">
                <AiFillFacebook className=" text-base text-blue-700 hover:text-blue-400 duration-300 " />
                <AiOutlineTwitter className=" text-base text-blue-700 hover:text-blue-400 duration-300" />
                <AiFillPhone className=" text-base text-blue-700 hover:text-blue-400 duration-300" />
                <AiFillSkype className=" text-base text-blue-700 hover:text-blue-400 duration-300" />
              </div>
            </div>
          </div>
          {/* 3rd card */}
          <div className="shadow-lg rounded-[1rem] my-5 overflow-hidden bg-white">
            <div className="flex items-center justify-between p-8 text-[#343a40] ">
              <h2 className=" text-sm uppercase font-normal tracking-[.2em]">
                My Profile
              </h2>
            </div>
            <hr className=" shadow-md" />
            <div className="">
              {/* component 1st one */}
              <div className="flex items-center gap-3 py-5 px-8">
                <div className=" shrink-0">
                  <img
                    src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-7.jpg"
                    alt=""
                    className="p-1 bg-white shadow-lg w-[80px] h-[80px] rounded-full border  "
                  />
                </div>
                <div className="relative mb-3 ">
                  <label className="text-sm mb-2">Name</label>
                  <input
                    type="text"
                    id=""
                    required
                    className="form-control-input w-full outline-none "
                    placeholder="Your Name"
                  />
                </div>
              </div>
              {/* component 2nd one */}
              <div className="relative mb-3 w-full md:w-12/12 px-8 py-2">
              <label>About Me</label>
              <textarea
                name=""
                className=" w-full outline-none form-control-input h-auto pt-2"
                id=""
                cols="30"
                rows="11"
              >
                The bedding was hardly able to cover it and seemed ready to
                slide off any moment. His many legs, pitifully thin compared
                with the size of the rest of him, waved about helplessly as he
                looked. "What's happened to me?" he thought. It wasn't a dream.
              </textarea>
            </div>
              {/* component 3 rd one */}
              <div className="p-5">
                <div className="relative mb-3 ">
                  <label className="text-sm mb-2">Email</label>
                  <input
                    type="email"
                    id=""
                    required
                    className="form-control-input w-full outline-none "
                    placeholder="Email"
                  />
                </div>
                <div className="relative mb-3 ">
                  <label className="text-sm mb-2">Password</label>
                  <input
                    type="password"
                    id=""
                    required
                    className="form-control-input w-full outline-none "
                    placeholder="Password"
                    value={"asdffdsa"}
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
          <div className=" px-8 shadow-lg rounded-[1rem] bg-white">
            <div className="relative mb-3 flex items-center py-8">
              <input
                type="text"
                id=""
                required
                className="form-control-profile w-full outline-none "
                placeholder="Message"
              />
              <div className="T-icon ">
                <FaTelegramPlane className=" text-[#343a40]" size={"1.2rem"} />
              </div>
            </div>
            <hr className=" shadow-lg" />

            <div className=" flex my-4 gap-5 justify-center p-5">
              <div className=" shrink-0">
                <img
                  src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/avatar-7.jpg"
                  alt=""
                  className="p-1 bg-white shadow-lg w-[80px] h-[80px] rounded-full border "
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
                      className="w-16 shadow-md  h-16   rounded-full  border-4 border-white"
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
                      className="w-16 shadow-md  h-16  rounded-full  border-4 border-white   "
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
                  className="p-1 bg-white shadow-lg w-[80px] h-[80px] rounded-full  border-2 "
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
                  className="p-1 bg-white shadow-lg w-[80px] h-[80px] rounded-full border-2 "
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
                      className="w-16 shadow-md  h-16   bg-white  rounded-full border-4 border-white"
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
          <div className=" shadow-lg mt-3 rounded-[1rem] overflow-hidden bg-white">
            <div className=" p-8  items-center">
            <h2 className=" text-sm uppercase font-normal tracking-[.2em]">
                EDIT PROFILE
              </h2>
            </div>
            <hr className=" shadow-md" />
            {/* 1st line */}
            <div className="flex flex-col md:flex-row items-center gap-5 justify-between px-8 py-2">
              {/* company */}
              <div className="relative mb-3 w-full md:w-5/12">
                <label className="text-sm mb-2">Company</label>
                <input
                  type="text"
                  id=""
                  required
                  className="form-control-input w-full outline-none "
                  placeholder="Your company"
                  value={"Nathan & Nathan"}
                />
              </div>
              <div className="relative mb-3 w-full md:w-3/12">
                <label className="text-sm mb-2">Username</label>
                <input
                  type="text"
                  id=""
                  required
                  className="form-control-input w-full outline-none "
                  placeholder="Username"
                  value={"nathan"}
                />
              </div>
              <div className="relative mb-3 w-full md:w-4/12">
                <label className="text-sm mb-2">Email Address</label>
                <input
                  type="text"
                  id=""
                  required
                  className="form-control-input w-full outline-none "
                  placeholder="Email"
                />
              </div>
            </div>
            {/* 2nd line */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 px-8 py-2">
              <div className="relative mb-3 w-full md:w-6/12">
                <label className="text-sm mb-2">First Name</label>
                <input
                  type="text"
                  id=""
                  required
                  className="form-control-input w-full outline-none "
                  placeholder="First Name"
                />
              </div>
              <div className="relative mb-3 w-full md:w-6/12">
                <label className="text-sm mb-2">Last Name</label>
                <input
                  type="text"
                  id=""
                  required
                  className="form-control-input w-full outline-none "
                  placeholder="Last Name"
                />
              </div>
            </div>
            {/* 3rd line */}
            <div className=" px-8 py-2">
              <div className="relative mb-3 w-full md:w-12/12">
                <label className="text-sm mb-2">Address</label>
                <input
                  type="text"
                  id=""
                  required
                  className="form-control-input w-full outline-none "
                  placeholder="Address"
                />
              </div>
            </div>
            {/* 4th line */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-5 px-8 py-2">
              <div className="relative mb-3 w-full md:w-4/12">
                <label className="text-sm mb-2">City</label>
                <input
                  type="text"
                  id=""
                  required
                  className="form-control-input w-full outline-none "
                  placeholder="City"
                />
              </div>
              <div className="relative mb-3 w-full md:w-3/12">
                <label className="text-sm mb-2">Zip</label>
                <input
                  type="number"
                  id=""
                  required
                  className="form-control-input w-full outline-none "
                  placeholder="Last Name"
                />
              </div>
              <div className="relative mb-3 w-full md:w-5/12">
                <label>Country</label>
                <select className=" appearance-none form-control-input w-full outline-none">
                  <option value="0">UK</option>
                  <option value="1">US</option>
                </select>
              </div>
            </div>
            {/* 5th line */}
            <div className="relative mb-3 w-full md:w-12/12 px-8 py-2">
              <label>About Me</label>
              <textarea
                name=""
                className=" w-full outline-none form-control-input h-auto pt-2"
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
