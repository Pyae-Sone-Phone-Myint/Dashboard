import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Monitor from '../components/monitor/Monitor'

const Path = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Monitor/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Path
