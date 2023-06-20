import React from "react";
import Monitor from "../../components/monitor/Monitor";
import LatestActivity from "../../components/latestActivity/LatestActivity";
import Sales from "../../components/Sales/Sales";
import Contact_table from "../../components/contact_table/Contact_table";
import Reveal from "../../components/animations/Reveal";
import Chart from '../../component/Chart'

const Dashboard = () => {
  return (
    <>
      <Monitor />
      <div className="flex xl:flex-nowrap flex-wrap">
        <div className=" w-full xl:w-3/4 h-[100vh]">
          <Chart/>
        </div>
        <LatestActivity />
      </div>
      <Reveal>
        <Contact_table />
      </Reveal>
      <Sales />
    </>
  );
};

export default Dashboard;
