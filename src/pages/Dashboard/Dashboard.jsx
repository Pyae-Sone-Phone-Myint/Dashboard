import React from 'react'
import Monitor from '../../components/monitor/Monitor'
import LatestActivity from '../../components/latestActivity/LatestActivity'
import Sales from '../../components/Sales/Sales'
import Chart from '../../components/Charts/Chart'
import ChartCard from '../../components/Charts/ChartCard'

const Dashboard = () => {
  return (
    <>
      <Monitor/>
      <div className="flex md:flex-nowrap flex-wrap mb-5 gap-y-3">
        <div className="w-full px-3 md:w-3/4 ">
            <Chart/>
        </div>
        <LatestActivity/>
      </div>
      <Sales/>
      <ChartCard/>
    </>
  )
}

export default Dashboard
