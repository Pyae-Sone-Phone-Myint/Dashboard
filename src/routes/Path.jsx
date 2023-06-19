




import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Navbar from "../components/Navbar/Navbar";
import Chart from '../component/Chart'


const Path = () => {
  return (
    <>

       
      
    <Navbar/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        

      </Routes>
    </>
  );
};

export default Path;
