import React from "react";
import "./monitor.css";
import { BsSpeedometer2, BsBook, BsJournalBookmark, BsCaretDown } from "react-icons/bs";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";
import { MdAddLocationAlt } from "react-icons/md";
import monitorData from "./monitor-data.json";
import Reveal from "../animations/Reveal";
const Monitor = () => {
  return (
    <div>
      <div className="page-header">
        <h1 className=" header ">Default Dashboard</h1>
      </div>
      <Reveal value={100}>
      <div className="monitor-card-row flex flex-wrap">
        {monitorData.map((data) => {
          return (
            <div className="monitor-card-item " key={data.id}>
              <div className="monitor-card h-full bg-white">
                <div className="monitor-card-body">
                  <div className="flex justify-between items-center">
                    <div className="">
                    <h4 className={`text-number mb-2 ${data.id === 1 ? 'text-[#dc3545]' : data.id === 2 ? 'text-[#0d6efd]' : data.id === 3 ? 'text-[#4650dd]' : data.id === 4 ? 'text-[#35b653]' : ''}`}>{data.number}</h4>

                      <p className="subtitle">{data.title}</p>
                    </div>
                    <div className="">
                      <span className={` ${data.id === 1 ? 'text-[#dc3545]' : data.id === 2 ? 'text-[#0d6efd]' : data.id === 3 ? 'text-[#4650dd]' : data.id === 4 ? 'text-[#35b653]' : ''} text-4xl`}>
                    {data.id == 1 ? <BsSpeedometer2/> :data.id == 2 ? <BsBook/> : data.id == 3 ? <BsJournalBookmark/> : data.id == 4 ? <MdAddLocationAlt/> :''}
            
                      </span>
                    </div>
                  </div>
                </div>
                <div className={`monitor-card-footer py-4 px-8   ${data.id === 1 ? 'bg-[#f8d7da]' : data.id === 2 ? 'bg-[#cfe2ff]' : data.id === 3 ? 'bg-[#dadcf8]' : data.id === 4 ? 'bg-[#d7f0dd]' : ''} `}>
                  <div className="flex items-center justify-between ">
                    <p className={`text-sm  font-[600]  ${data.id === 1 ? 'text-[#dc3545]' : data.id === 2 ? 'text-[#0d6efd]' : data.id === 3 ? 'text-[#4650dd]' : data.id === 4 ? 'text-[#35b653]' : ''}`}>
                      {data.footer} 
                    </p>
                    <span className={`${data.id === 1 ? 'text-[#dc3545]' : data.id === 2 ? 'text-[#0d6efd]' : data.id === 3 ? 'text-[#4650dd]' : data.id === 4 ? 'text-[#35b653]' : ''}`}>
                      {data.status == "increase" ? <BiCaretUp />: <BiCaretDown/>}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      </Reveal>
    </div>
  );
};

export default Monitor;
