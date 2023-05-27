import React from "react";
import "./index.css";
  
function Home() {
  return (
    <>
      <div className=" h-screen flex w-screen justify-between relative">
        <div className="absolute text-white flex justify-between z-20 w-full py-5 pr-20">
          <div className="text-2xl font-bold py-2 pl-20">James Juma</div>
          <div className=" flex justify-between w-1/2 right-0  list-none  text-lg">
            <li className="hover:text-lg hover:scale-[1.2] ease-in duration-200 hover:cursor-pointer py-2">
              Home
            </li>
            <li className="hover:text-lg hover:scale-[1.2] ease-in duration-200 hover:cursor-pointer py-2">
              About
            </li>
            <li className="hover:text-lg hover:scale-[1.2] ease-in duration-200 hover:cursor-pointer py-2">
              Blog
            </li>
            <li className="hover:text-lg hover:scale-[1.2] ease-in duration-200 hover:cursor-pointer py-2">
              Mentorship
            </li>
            <li className="hover:text-lg hover:scale-[1.1] ease-in duration-200 hover:cursor-pointer flex items-center rounded-full bg-blue-500 px-6 py-1">
              Contact
            </li>
          </div>
        </div>
        <div className="absolute right-0 w-full h-full flex ">
          <div className=" hidden md:flex bg-[#000006] w-full h-full"> </div>
          <img src="jumah3.png" alt="" className="flex  h-full " />
        </div>
      </div>
      <div className="absolute top-60 pl-20 text-white text-4xl ">Hello</div>
    </>
  );
}

export default Home;
