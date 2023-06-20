import React from 'react'
import Monitor from '../../components/monitor/Monitor'
import LatestActivity from '../../components/latestActivity/LatestActivity'
import Sales from '../../components/Sales/Sales'

const Dashboard = () => {
  return (
    <>
      <Monitor/>
      <div className="flex">
        <div className=" w-3/4 h-[100vh]">Chart</div>
        <LatestActivity/>
      </div>
      <Sales/>
    </>
  )
}

export default Dashboard
