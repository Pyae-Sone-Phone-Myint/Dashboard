import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chart from '../component/Chart'


const Path = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Chart/>}/>
      
      </Routes>
    </>
  )
}

export default Path
