import React from "react";
import "./pricing.css";
import { BiCheck } from "react-icons/bi";
import { FaTimes, FaCheck } from "react-icons/fa";
import PricingData from "./pricing.json";
import Reveal from "../../components/animations/Reveal";
const Pricing = () => {
  return (
    <div className=" bg-[#f8f9fa]">
      <div className=" pt-12">
        <div className="page-breadcrumb mb-8 px-3">
          <p>
            {" "}
            <span className=" text-[#4650dd] hover:underline duration-150">
              Home
            </span>{" "}
            <span className="muted"> / Pricing Tables</span>{" "}
          </p>
        </div>
        <div className=" mb-12">
          <h1 className=" header">PRICING TABLES</h1>
        </div>
        <div className="mb-5 flex flex-wrap  pb-7">
          {PricingData.map((data) => (
            <div className="px-[12px] plan" key={data.id}>
              <Reveal>
                <div className="card">
                  {data.id == 2 ? <div className="card-status"></div> : ""}
                  <div className="card-body p-8">
                    <h2 className="card-heading">{data.plan}</h2>
                    <p className=" text-center mb-4">
                      <span className="price">${data.price}</span>
                      <span className=" muted ml-2"> / month</span>
                    </p>
                    <hr className=" muted my-[1rem]" />
                    <ul className=" my-4  ml-2 ">
                      {data.features.map((data) => (
                        <li
                          className=" flex items-center mb-4  gap-3"
                          key={data.id}
                        >
                          <span className="  text-center font-bold ">
                            {data.status ? (
                              <FaCheck className="  text-[#4650dd]   " />
                            ) : (
                              <FaTimes className="   muted  " />
                            )}
                          </span>
                          <span
                            className={` text-sm ${
                              data.status ? "text-[#343a40]" : "muted"
                            } `}
                          >
                            {data.feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className=" text-center">
                      <button className=" btn-select">Select</button>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
