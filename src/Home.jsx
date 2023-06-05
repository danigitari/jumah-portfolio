import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  AiOutlineMenu,
  AiOutlineArrowUp,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";
import { Link } from "react-scroll";
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
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-lg  nav-title hover:scale-[1.2] ease-in duration-200 hover:cursor-pointer w-16 flex flex-col items-center justify-center py-2"
                >
                  Home
                </Link>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-lg  nav-title hover:scale-[1.2] ease-in duration-200 hover:cursor-pointer  w-16 flex flex-col items-center justify-center py-2"
                >
                  About
                </Link>
                <Link
                  to=""
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-lg  nav-title hover:scale-[1.2] ease-in duration-200 hover:cursor-pointer  w-16 flex flex-col items-center justify-center py-2"
                >
                  Blog
                </Link>
                <Link
                  to="rca"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-lg  nav-title hover:scale-[1.2] ease-in duration-200 hover:cursor-pointer  w-32 flex flex-col items-center justify-center py-2"
                >
                  Mentorship
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="hover:text-lg hover:scale-[1.1] ease-in duration-200 hover:cursor-pointer flex items-center rounded-full bg-[#3e2cca] px-6 my-1 "
                >
                  Contact
                </Link>
              </div>
              <div className="flex  md:hidden text-2xl font-bold py-2 ">
                {" "}
                <AiOutlineMenu />{" "}
              </div>
            </div>
            <div
              className=" hidden md:flex absolute right-0 h-screen bg-no-repeat bg-contain w-screen
         "
              id="home"
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
              <div className="text-2xl md:text-[38px] py-0 md:py-2 text-bold text-gray-500 leading-10">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "AWS SYSTEM ADMINISTRATOR",
                    "NETWORK ENGINEER",
                    "CO-FOUNDER @RCA",
                  ]}
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
              <div className="text-2xl md:text-[38px] py-0 md:py-2 text-bold text-gray-500 leading-10">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "AWS SYSTEM ADMINISTRATOR",
                    "NETWORK ENGINEER",
                    "Co-Founder of @RCA",
                  ]}
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
        <div className=" pl-5 md:pl-20 bg-[#000006] pt-20 h-full translate-y-60 md:translate-y-0 max-w-screen " id="about">
          <p className="text-white text-3xl text-center  py-5 font-bold heading w-36 pb-10">
            {" "}
            About Me{" "}
          </p>
          <div className="flex flex-col md:flex-row ">
            <div className="w-full md:w-1/2 text-white pr-10 text-md font-light">
              <p>
                I am a highly motivated and self-driven individual with Solution
                Architect experience in AWS Cloud. I’m good at designing and
                deploying scalable, reliable, and fault-tolerant workloads in
                AWS Cloud, currently working at Silicon Overdrive. I am well
                organized, detail-oriented, and a team player with prolific
                leadership and soft skills. I possess strong analytical,
                research, and time management skills with a high degree of
                commitment to my work. I am a Co-founder of Resource Cloud
                Academy, a community made up of young cloud enthusiasts. I lead
                the cloud community members in executing real-world projects
                through hands-on lab activities in AWS.
              </p>
              <button className="rounded-full shadow-lg py-2 px-6 fixed text-white bg-[#3e2cca] mt-20 hover:scale-[1.1] hover:bg-blue-500 ease-in duration-300 ">
                Download CV
              </button>
            </div>
            <div className="w-full md:w-1/2 -translate-y-20 z-60 p-10 pr-20 ">
              <img
                src="awshackathon2.jpg"
                className="w-full h-96 object-cover  "
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="  bg-[#000006] pt-20 h-full flex flex-col items-center max-w-screen translate-y-[200px] md:translate-y-0">
          <p className="text-white text-3xl  py-5 font-bold heading pb-10">
            {" "}
            Work Experience{" "}
          </p>
          <div className="w-3/4 h-[1px]  mt-10 bg-[#3e2cca]  "> .</div>
          <div className="flex flex-col md:flex-row w-full gap-4 md:gap-16 items-center justify-center mt-10">
            <div className=" text-[#c7c3e7] w-full md:w-2/3 text-md text-center md:text-right">
              {" "}
              June 2022 <p className="inline px-5 text-2xl font-bold  ">
                {" "}
                -{" "}
              </p>{" "}
              Present
            </div>
            <div className=" text-white w-full text-lg font-semibold px-20">
              {" "}
              Cloud Solutions Architect -{" "}
              <p className="text-lg"> Silicon Overdrive</p>
              <p className="text-sm font-light pt-10 text-gray-500 md:pr-20">
                I participate in architectural discussions to ensure solutions
                are designed for successful deployment in the cloud. I create
                AWS Proposals in line with client requirements.
                <br />
                I capture and Architect secure, scalable, and highly available
                environments on AWS for clients following the principles of the
                AWS Well-Architected Framework.
                <br /> Assisting the Sales and Engineering Teams to technically
                engage with clients by offering pre-sales assistance or advice
                where needed.
              </p>{" "}
            </div>
          </div>
          <div className="w-3/4 h-[1px]  mt-10 bg-[#3e2cca] "> .</div>
          <div className="flex flex-col md:flex-row w-full gap-4 md:gap-16 items-center justify-center">
            <div className=" text-[#c7c3e7] w-full md:w-2/3 pt-5 text-md text-center md:text-right">
              {" "}
              January 2022{" "}
              <p className="inline px-5 text-2xl font-bold  "> - </p> May 2022
            </div>
            <div className=" pt-5 md:pt-10 text-white w-full  text-lg font-semibold px-20">
              {" "}
              Cloud Engineer -{" "}
              <p className="text-lg">
                {" "}
                Spartec Consortium-Africa (SCA) Limited
              </p>
              <p className="text-sm font-light pt-4 md:pt-10 md:pr-20 text-gray-500">
                • Offered clients and stakeholders advice on how to successfully
                implement their cloud adoption strategies across a variety of
                cloud platforms.
                <br />• Guided new hires in the cloud department in acquiring
                skills in Cloud Security procedures. • Took part in setting up
                of office 365 to clients
              </p>{" "}
            </div>
          </div>
          <div className="w-3/4 h-[1px]  mt-10 bg-[#3e2cca] "> .</div>
          <div className="flex flex-col md:flex-row w-full gap-4 md:gap-16 items-center justify-center">
            <div className=" text-[#c7c3e7] w-full md:w-2/3 pt-5 text-md text-center md:text-right">
              {" "}
              January 2022{" "}
              <p className="inline px-5 text-2xl font-bold  "> - </p> May 2022
            </div>
            <div className=" pt-5 md:pt-10 text-white w-full text-lg font-semibold px-20">
              {" "}
              AWS Architect -{" "}
              <p className="text-lg"> Azubi Africa · Apprenticeship</p>
              <p className="text-sm font-light pt-4 md:pt-10 text-gray-500 md:pr-20">
                Trainee in AWS Cloud Practitioner and AWS Solutions Architect
                Associate. Skills Acquired; - Familiarity with using the AWS
                Management console and AWS Command Line Interface -Understanding
                of AWS Well-Architected Framework and the AWS global
                infrastructure
              </p>{" "}
            </div>
          </div>
          <div className="w-3/4 h-[1px]  mt-10 bg-[#3e2cca] "> .</div>
        </div>
        <div className=" grid md:grid-cols-3 grid-rows-3 gap-0 text-whiten translate-y-60 md:translate-y-0  py-20 px-10">
          <div className="row-span-1 md:col-span-1 text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
            recusandae id amet rem distinctio consequuntur voluptas veniam
            corporis sint praesentium eligendi mollitia illum quas ipsa, itaque
            dolorum assumenda consequatur totam nesciunt vitae magni labore
            voluptates aliquid vel. Temporibus vitae odit quo esse dolores
            facere dolorem delectus voluptatum quod modi suscipit tempora in
            quibusdam consectetur aspernatur amet nesciunt voluptates deserunt
            corporis, tempore nihil maiores? Dolores eum assumenda nihil
            repellat nobis eligendi non odit, labore excepturi ratione. Quam
            magni possimus consectetur fugiat deserunt nobis eaque, ea inventore
            tempora voluptatem vitae laborum incidunt molestias autem
            laboriosam, animi reiciendis impedit quisquam enim veritatis minima?
            heh
          </div>
          <div className="row-span-1 md:col-span-1 text-white"> heh</div>
          <div className="row-span-1 md:col-span-1 text-white "> ifha</div>
        </div>
      </div>
    </>
  );
}

export default Home;
