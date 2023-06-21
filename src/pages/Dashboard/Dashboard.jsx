import ChartCard from "../../components/Charts/ChartCard";
import React from "react";
import Monitor from "../../components/monitor/Monitor";
import LatestActivity from "../../components/latestActivity/LatestActivity";
import Sales from "../../components/Sales/Sales";
import Contact_table from "../../components/contact_table/Contact_table";
import Reveal from "../../components/animations/Reveal";
import Chart from "../../components/Charts/Chart";

const Dashboard = () => {
  return (
    <>
      <Monitor />
      <Reveal>
        {" "}
        <div className="flex flex-col md:flex-row gap-y-3 py-4">
          <div className=" md:w-3/4 w-full px-3">
            <Chart />
          </div>
          <LatestActivity />
        </div>
      </Reveal>

      <Reveal>
        <div className=" px-3 rounded-xl">
          <Contact_table />
        </div>
      </Reveal>
      <Sales />
    <div className=" ">
      <Reveal>
      <ChartCard />
      </Reveal>
        
    </div>
    </>
  );
};

export default Dashboard;
