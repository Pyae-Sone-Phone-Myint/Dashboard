import React from "react";
import "./contact.css";
import contactData from "./../../components/latestActivity/activity.json";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className=" px-4 xl:px-5 pt-12">
      <div className="page-breadcrumb mb-8 px-3">
        <p>
          {" "}
          <span className=" text-[#4650dd] hover:underline duration-150">
            Home
          </span>{" "}
          <span className=" page"> / Contact</span>{" "}
        </p>
      </div>
      <div className=" mb-12">
        <h1 className=" header">CONTACTS</h1>
      </div>
      <div className="row flex flex-wrap gap-4">
        {contactData.map((data) => (
          <div className="item " key={data.id}>
            <div className="card mb-4 px-2 cursor-pointer">
              <div className="card-body p-6">
                <div className="flex  gap-8 items-center">
                  <img src={data.img} className="avatar " alt="" />
                  <div className="text-[#343a40] ">
                    <h5 className=" font-bold text-lg ">{data.name}</h5>
                    <p className=" text-sm uppercase text-[#6c757d] tracking-[.2em] mb-4">
                      {data.company}
                    </p>
                    <p>{data.email}</p>
                    <p>
                      <span
                        className=" "
                        style={{ textDecoration: "underline dotted" }}
                      >
                        P:
                      </span>{" "}
                      {data.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
