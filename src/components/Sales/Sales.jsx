import React from "react";
import "./sales.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
const Sales = () => {
  return (
    <div className=" md:flex gap-2">
      <div className=" sales-card-container">
        <div className="sales-card">
          <div className="sales-card-body sm:flex">
            <div className="sm:w-5/12 mb-6 sm:mb-0">
              <h2 className=" font-bold text-3xl mb-[8px]">625</h2>
              <p className=" sales-subtitle ">New Customers</p>
              <div className="progress">
                <div
                  className="progress-bar w-[60%] bg-[#03cfb7]"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
            <div className="sm:w-7/12 flex">
              <div className="w-1/2 text-center px-[12px]">
                <h3 className=" font-bold text-2xl mb-[8px]">254</h3>
                <p className=" text-[#6c757d]">Affiliates</p>
                <hr className=" my-[1rem]" />
                <p className=" text-[#6c757d]">+125</p>
              </div>
              <div className="w-1/2 text-center px-[12px]">
                <h3 className=" font-bold text-2xl mb-[8px]">328</h3>
                <p className=" text-[#6c757d]">SEM</p>
                <hr className=" my-[1rem]" />
                <p className=" text-[#6c757d]">+144</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" sales-card-container">
        <div className="sales-card">
          <div className="sales-card-body sm:flex gap-5">
            <div className="sm:w-1/2 py-[12px] sm:flex gap-8 ">
              <div className=" text-[#dc3545] text-lg mt-2 sm:mb-0 mb-1">
                <FaArrowDown />
              </div>
              <div className="w-full ">
                <h2 className=" font-bold text-3xl mb-[8px]">1,112</h2>
                <p className=" text-[#6c757d] mb-[8px]">Affiliate Sales</p>
                <div className="progress w-full">
                  <div
                    className="progress-bar w-[75%] bg-[#dc3545]"
                    role="progressbar"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>
            <div className="sm:w-1/2 py-[12px] sm:flex gap-8 ">
              <div className=" text-[#03cfb7] text-lg mt-2 sm:mb-0 mb-1">
                <FaArrowUp />
              </div>
              <div className="w-full">
                <h2 className=" font-bold text-3xl mb-[8px]">258</h2>
                <p className=" text-[#6c757d] mb-[8px]">Ads Sales</p>
                <div className="progress w-full">
                  <div
                    className="progress-bar w-[75%] bg-[#03cfb7]"
                    role="progressbar"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
      <div className=" "></div>
    </div>
  );
};

export default Sales;
