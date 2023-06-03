import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  AiOutlineMenu,
  AiOutlineArrowUp,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

import "./index.css";

function Home() {
  return (
    <>
      <div class="fixed  z-40 scroll-up h-12 w-12  font-bold text-xl shadow-md rounded-full bg-[#3e2cca] text-white bottom-4 right-0 hover:scale-[1.3] duration-300 mr-5 md:mr-20 flex justify-center items-center">
        <AiOutlineArrowUp className="bg-[#3e2cca]" />
      </div>
      <div className="flex flex-col bg-[#000006] ">
        <div className="max-w-screen bg-[#000007] h-full relative">
          <div className=" h-screen flex  justify-between ">
            <div className="absolute text-white flex justify-between z-20 w-full py-5 pr-5 md:pr-20 bg-[#000007] md:bg-transparent">
              <div className="text-lg md:text-3xl font-bold py-2 pl-5  md:pl-20 ">
                James Juma
              </div>
              <div className="hidden md:flex justify-between w-1/2 right-0  list-none  text-lg">
                <li className="hover:text-lg  nav-title hover:scale-[1.2] ease-in duration-200 hover:cursor-pointer  py-2">
                  Home
                </li>
                <li className="hover:text-lg  nav-title hover:scale-[1.2] ease-in duration-200 hover:cursor-pointer py-2">
                  About
                </li>
                <li className="hover:text-lg  nav-title hover:scale-[1.2] ease-in duration-200 hover:cursor-pointer py-2">
                  Blog
                </li>
                <li className="hover:text-lg  nav-title hover:scale-[1.2] ease-in duration-200 hover:cursor-pointer py-2">
                  Mentorship
                </li>
                <li className="hover:text-lg hover:scale-[1.1] ease-in duration-200 hover:cursor-pointer flex items-center rounded-full bg-[#3e2cca] px-6 my-1 ">
                  Contact
                </li>
              </div>
              <div className="flex  md:hidden text-2xl font-bold py-2 ">
                {" "}
                <AiOutlineMenu />{" "}
              </div>
            </div>
            <div
              className=" hidden md:flex absolute right-0 h-screen bg-no-repeat bg-contain w-screen
         "
            >
              <div className=" hidden md:flex w-full h-full bg-[#000006] ">
                {" "}
              </div>
              <img
                src="jumah3.png"
                alt=""
                className="flex h-full right-0 pt-0 md:pt-10 bg-[#000006]"
              />
            </div>
            <div className="flex md:hidden bg-[url('jumah3.png')] bg-center bg-[#000006] bg-no-repeat w-full h-full"></div>
          </div>
          <div className=" hidden md:block w-1/2 absolute  md:top-44 md:bg-transparent pl-5 md:pl-20 text-white text-2xl md:text-[44px] leading-4 md:leading-10 bg-[#181822] font-bold p-10 ">
            Hello{" "}
            <div className="py-2 leading-10 "> I'm James Juma Sindani.</div>
            <h1 className="font-bold py-0 md:py-2 text-white">
              <div className="text-2xl md:text-[44px] py-0 md:py-2 text-bold text-gray-300 leading-10">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["AWS SYSTEM ADMINISTRATOR", "NETWORK ENGINEER"]}
                  loop={5555}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>{" "}
              <div className="py-2 text-lg">
                {" "}
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </div>
            </h1>
            <div className=" socials w-1/2 py-5 ">
              {" "}
              <span className=" flex space-x-6">
                {" "}
                <p className="hover:scale-[1.2] hover:text-[#b5b0d8] ease-in duration-200 ">
                  <AiFillLinkedin />{" "}
                </p>
                <p className="hover:scale-[1.2] hover:text-[#b5b0d8] ease-in duration-200 ">
                  <AiOutlineTwitter />{" "}
                </p>
                <p className="hover:scale-[1.2] hover:text-[#b5b0d8] ease-in duration-200 ">
                  <AiFillFacebook />{" "}
                </p>
              </span>{" "}
            </div>
          </div>
          <div className=" absolute z-30 md:hidden text-xl font-bold bg-[#000006] w-full text-white pl-5 -translate-y-20 md:translate-y-0">
            {" "}
            Hello{" "}
            <div className="py-2 leading-10"> I'm James Juma Sindani.</div>
            <h1 className="font-bold py-0 md:py-2 w-1/2 text-white">
              <div className="text-2xl md:text-[40px] py-0 md:py-2 text-bold text-gray-300 leading-10">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["AWS SYSTEM ADMINISTRATOR", "NETWORK ENGINEER"]}
                  loop={15}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>{" "}
              <div className="py-2 text-lg">
                {" "}
                lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </div>
            </h1>
            <div className=" socials w-1/2 py-5 ">
              {" "}
              <span className=" flex space-x-6">
                {" "}
                <p className="hover:scale-[1.2] hover:text-[#b5b0d8] ease-in duration-200  sm:scale-150 sm:hover:scale-[1.7]">
                  <AiFillLinkedin />{" "}
                </p>
                <p className="hover:scale-[1.2] hover:text-[#b5b0d8] ease-in duration-200 sm:scale-150 sm:hover:scale-[1.7]">
                  <AiOutlineTwitter />{" "}
                </p>
                <p className="hover:scale-[1.2] hover:text-[#b5b0d8] ease-in duration-200 sm:scale-150 sm:hover:scale-[1.7]">
                  <AiFillFacebook />{" "}
                </p>
              </span>{" "}
            </div>
          </div>
        </div>
        <div className=" pl-5 md:pl-20 bg-[#000006] pt-20 h-screen translate-y-60 md:translate-y-0 max-w-screen">
          <p className="text-white text-3xl  py-5 font-bold nav-title w-36 pb-10">
            {" "}
            About Me{" "}
          </p>
          <div className="flex flex-col md:flex-row ">
            <div className="w-full md:w-1/2 text-white pr-10 text-lg">
              I am a highly motivated and self-driven individual with Solution
              Architect experience in AWS Cloud. I’m good at designing and
              deploying scalable, reliable, and fault-tolerant workloads in AWS
              Cloud, currently working at Silicon Overdrive. I am well
              organized, detail-oriented, and a team player with prolific
              leadership and soft skills. I possess strong analytical, research,
              and time management skills with a high degree of commitment to my
              work. I am a Co-founder of Resource Cloud Academy, a community
              made up of young cloud enthusiasts. I lead the cloud community
              members in executing real-world projects through hands-on lab
              activities in AWS.
              <button className="rounded-full py-2 px-6 text-white bg-[#3e2cca] mt-20 hover:scale-[1.1] duration-300">
                Download CV
              </button>
            </div>
            <div className="w-full md:w-1/2 -translate-y-20 p-10 pr-20">
              <img
                src="awshackathon2.jpg"
                className="w-full h-96 object-cover    "
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
