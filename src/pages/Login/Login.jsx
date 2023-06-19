import React from "react";
import "./login.css"

const Login = () => {
  return (
    <>
      <div className=" flex min-h-screen items-center">
        <div className="flex w-full md:flex-row flex-col py-8 px-3">
          <div className=" flex-[50%] flex items-center justify-center">
            <div className=" shadow-2xl rounded-2xl overflow-hidden">
              <h2 className=" px-12 py-7 uppercase text-[.9rem] font-normal tracking-[.2em] text-primary  shadow">bubbly dashboard</h2>
              <div className=" p-12">
                <h1 className=" text-[1.575rem] font-bold mb-6">Hi, welcome back!</h1>
                <p className=" text-[.7875rem] text-[#6c757d] leading-4 mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor <br /> incididunt ut labore.
                </p>
                <form action="">
                  <div className="relative mb-3">
                    <input type="email" id="emailInput" required className="form-control w-full outline-none " placeholder="name@gmail.com"/>
                    <label htmlFor="emailInput" className="label">Email address</label>
                  </div>
                  <div className="relative mb-3">
                    <input type="password" id="passwordInput" required className="form-control w-full outline-none " placeholder="name@gmail.com"/>
                    <label htmlFor="passwordInput" className="label">Password</label>
                  </div>
        
                  <div className=" mb-4 flex gap-3 justify-start items-center">
                    <input type="checkbox" className=" form-check-input" id="check"/>
                    <label htmlFor="check">Remember me</label>
                  </div>
                  <button className=" bg-primary hover:bg-[#4249b4] transition duration-150 text-white px-6 py-3 rounded-md font-medium text-lg leading-7">Submit</button>
                </form>
              </div>
              <div className=" px-12 py-5 bg-[rgba(0,0,0,0.03)] text-[.7875rem]">
                Don't have an account? <a href="/register" className=" text-primary hover:underline">Register</a>
              </div>
            </div>
          </div>
          <div className="flex-[50%]  text-center flex flex-col items-center justify-center">
            <div className="w-80 mx-auto rotate-12">
                <img src="https://d19m59y37dris4.cloudfront.net/bubbly/1-3-2/img/drawkit-illustration.svg" alt="pig" />
            </div>
            <h1 className=" text-primary text-[2.25rem] font-bold leading-10 mb-4">Start saving <br /> your time & money</h1>
            <p className=" text-[1.125rem] font-light text-[#6c757d] mb-4">One morning, when Gregor Samsa woke from troubled <br /> dreams, he found himself transformed in his bed in</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
