import ChartCard from '../../components/Charts/ChartCard'
import React from "react";
import Monitor from "../../components/monitor/Monitor";
import LatestActivity from "../../components/latestActivity/LatestActivity";
import Sales from "../../components/Sales/Sales";
import Contact_table from "../../components/contact_table/Contact_table";
import Reveal from "../../components/animations/Reveal";
import Chart from '../../components/Charts/Chart'

const Dashboard = () => {
  return (
    <>
      <Monitor />
      <div className="flex flex-col md:flex-row gap-y-3">
        <div className=" md:w-3/4 w-full px-3">
          <Chart/>
        </div>
        <LatestActivity />
      </div>
      <Reveal>
        <Contact_table />
      </Reveal>
      <Sales />
      <ChartCard/>
    </>
  );
};

export default Dashboard;
