import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { AiOutlineMenu } from "react-icons/ai";

import "./index.css";

function Home() {
  return (
    <>
      <div className=" h-screen flex w-screen justify-between relative">
        <div className="absolute text-white flex justify-between z-20 w-full py-5 pr-5 md:pr-20 bg-[#000007] md:bg-transparent">
          <div className="text-lg md:text-2xl font-bold py-2 pl-5  md:pl-20 ">
            James Juma
          </div>
          <div className=" hidden md:flex justify-between w-1/2 right-0  list-none  text-lg">
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
          <div className="flex text-2xl font-bold py-2 ">
            {" "}
            <AiOutlineMenu />{" "}
          </div>
        </div>
        <div
          className=" hidden md:flex absolute right-0 h-screen bg-no-repeat bg-contain w-screen
         "
        >
          <div className=" hidden md:flex w-full h-full bg-[#000006]"> </div>
          <img src="jumah3.png" alt="" className="flex h-full right-0" />
        </div>
        <div className="flex md:hidden bg-[url('jumah3.png')] bg-center bg-[#000006] bg-no-repeat w-full h-full"></div>
      </div>
      <div className="absolute bottom-4 pl-5 md:pl-20 text-white text-2xl md:text-5xl bg-[#181822] font-bold w-full  ">
        Hello <div className="py-2"> I'm James Juma Sindani.</div>
        <h1 className="font-bold text-white">
          <div className="text-2xl md:text-5xl  text-bold ">
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={["SYSTEM ADMINISTRATOR", "NETWORK ENGINEER"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>{" "}
        </h1>
      </div>
    </>
  );
}

export default Home;
