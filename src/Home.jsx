import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  AiOutlineMenu,
  AiOutlineArrowUp,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineMail,
} from "react-icons/ai";
import { Link } from "react-scroll";
import "./index.css";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";


function Home() {
  return (
    <>
   
      <Link
        to="home"
        className="fixed  z-40 scroll-up h-12 w-12  font-bold text-xl shadow-lg rounded-full bg-[#3e2cca] text-white bottom-4 right-0 hover:scale-[1.3] duration-300 mr-5 md:mr-20 flex justify-center items-center"
      >
        <AiOutlineArrowUp className="bg-[#3e2cca]" />
      </Link>
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
                  className="hover:text-lg  nav-title hover:scale-[1.2] ease-in duration-200 hover:cursor-pointer w-16 flex flex-col items-center justify-center py-2"
                >
                  Home
                </Link>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  className="hover:text-lg  nav-title hover:scale-[1.2] ease-in duration-200 hover:cursor-pointer  w-16 flex flex-col items-center justify-center py-2"
                >
                  About
                </Link>
                <Link
                  to=""
                  spy={true}
                  smooth={true}
                  offset={50}
                  className="hover:text-lg  nav-title hover:scale-[1.2] ease-in duration-200 hover:cursor-pointer  w-16 flex flex-col items-center justify-center py-2"
                >
                  Blog
                </Link>
                <Link
                  to="rca"
                  spy={true}
                  smooth={true}
                  offset={50}
                  className="hover:text-lg  nav-title hover:scale-[1.2] ease-in duration-200 hover:cursor-pointer  w-32 flex flex-col items-center justify-center py-2"
                >
                  Mentorship
                </Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
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
              <div className=" hidden md:flex w-full h-full bg-[#000007] ">
                {" "}
              </div>
              <img
                src="jumah3.png"
                alt=""
                className="flex h-full right-0  pt-0 md:pt-10 bg-[#000006]"
              />
            </div>
            <div className="flex md:hidden bg-[url('jumah3.png')] bg-center bg-[#000006] bg-no-repeat w-full h-full"></div>
          </div>
          <div className=" hidden md:block w-1/2 absolute  md:top-44 md:bg-transparent pl-5 md:pl-20 text-white text-2xl md:text-[44px] leading-4 md:leading-10 bg-[#181822] font-bold p-10 ">
            Hello{" "}
            <div className="py-2 leading-10 "> I'm James Juma Sindani.</div>
            <h1 className="font-bold py-0 md:py-2 text-white">
              <div className="text-2xl md:text-[38px] py-0 md:py-2 text-bold text-gray-400 leading-10">
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
                <p className="hover:scale-[1.2] hover:text-[#b5b0d8] ease-in duration-200 ">
                  <AiOutlineMail />{" "}
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

        <div
          className="grid grid-rows-4 pl-5 md:pl-20 bg-[#000006] pt-20 h-full"
          id="about"
        >
          <div className="text-white text-3xl text-center justify-self-center row-span-1 py-5 font-bold heading w-36 mb-20">
            {" "}
            About Me{" "}
          </div>
          <div className="flex flex-col gap-x-10 row-span-4 md:flex-row  h-full">
            <div className="w-full md:w-1/2 text-white pr-10 text-md font-light h-full">
              <p>
                I am a passionate cloud enthusiast and AWS Solutions Architect
                with a drive to shape the future through technology. Currently
                working at Silicon Overdrive, I bring a wealth of experience in
                designing and deploying scalable, reliable, and fault-tolerant
                workloads in the AWS Cloud. As a highly motivated and
                self-driven individual, I thrive in dynamic environments and
                excel in delivering innovative solutions. My strong analytical
                and research skills, coupled with meticulous attention to
                detail, enable me to tackle complex challenges with confidence.
                I am a dedicated team player with exceptional leadership and
                soft skills, fostering collaboration and driving success. With a
                deep commitment to my work, I constantly seek opportunities to
                enhance my expertise and stay at the forefront of cloud
                technology.
              </p>
              <button className="rounded-full shadow-lg py-2 px-6 text-white bg-[#3e2cca] mt-10 mb-10 hover:scale-[1.1] hover:bg-blue-500 ease-in duration-300 ">
                Download CV
              </button>
            </div>
            <div className="w-full md:w-1/2  z-60  pr-20 ">
              <img
                src="awshackathon5.jpg"
                className="w-full h-96 object-cover  "
                alt=""
                type="image/webp"
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
              <p className="text-md font-light"> Silicon Overdrive</p>
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
                <br />
                <br /> <span className="font-bold text-white ">Skills </span>
                <br />
                <br />
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72]  ">
                  {" "}
                  aws{" "}
                </button>
              </p>{" "}
            </div>
          </div>
          <div className="w-3/4 h-[1px]  mt-10 bg-[#3e2cca] "> .</div>
          <div className="flex flex-col md:flex-row w-full gap-4 md:gap-16 items-center justify-center mt-10">
            <div className=" text-[#c7c3e7] w-full md:w-2/3 text-md text-center md:text-right">
              {" "}
              January 2022{" "}
              <p className="inline px-5 text-2xl font-bold  "> - </p> Present
            </div>
            <div className=" text-white w-full text-lg font-semibold px-20">
              {" "}
              Co-Founder & Partnership Manager -{" "}
              <p className="text-md font-light">
                {" "}
                Resource Cloud Academy · Full-time
              </p>
              <p className="text-sm font-light pt-10 text-gray-500 md:pr-20">
                I offer free cloud resources to help the community members skill
                up. I also lead the community in doing cloud related projects on
                AWS and Azure Clouds.
                <br />
                <br />{" "}
                <span className="font-bold text-white mt-4">Skills </span>
                <br />
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72]  mt-2 mr-2">
                  {" "}
                  aws{" "}
                </button>
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72] mr-2 mt-2">
                  {" "}
                  linux{" "}
                </button>
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72] mr-2 mt-2">
                  {" "}
                  Microsoft Azure{" "}
                </button>
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
              <p className="text-md font-light">
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
                <br />
                <br />{" "}
                <span className="font-bold text-white mt-4">Skills </span>
                <br />
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72]  mt-2 mr-2">
                  {" "}
                  Office 365{" "}
                </button>
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72]  mt-2 mr-2">
                  {" "}
                  VMware{" "}
                </button>
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72]  mt-2 mr-2">
                  {" "}
                  Palo alto{" "}
                </button>
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72]  mt-2 mr-2">
                  {" "}
                  Microsft Teams{" "}
                </button>
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72]  mt-2 mr-2">
                  {" "}
                  Microsoft Azure
                </button>
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
              <p className="text-md font-light">
                {" "}
                Azubi Africa · Apprenticeship
              </p>
              <p className="text-sm font-light pt-4 md:pt-10 text-gray-500 md:pr-20">
                Trainee in AWS Cloud Practitioner and AWS Solutions Architect
                Associate. Skills Acquired; - Familiarity with using the AWS
                Management console and AWS Command Line Interface -Understanding
                of AWS Well-Architected Framework and the AWS global
                infrastructure
                <br />
                <br />{" "}
                <span className="font-bold text-white mt-4">Skills </span>
                <br />
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72]  mt-2 mr-2">
                  {" "}
                  aws{" "}
                </button>
              </p>{" "}
            </div>
          </div>
          <div className="w-3/4 h-[1px]  mt-10 bg-[#3e2cca] "> .</div>
        </div>

        <div className=" grid  bg-[#000006] pt-20 " id="cerifications">
          <div className="text-white text-3xl text-center justify-self-center row-span-1 py-5 font-bold heading w-56 mb-20">
            Certifications
          </div>
        </div>
        <div className=" grid  bg-[#000006] pt-20 w-full " id="cerifications">
          <div className="text-white text-3xl text-center  justify-self-center row-span-1 py-5 font-bold heading w-56 mb-20">
            Talks I've Done
          </div>
          <div className="hidden lg:flex md:flex-wrap w-full">
            <Swiper
              slidesPerView={3}
              pagination={{ clickable: true }}
              className="mySwiper"
            >
              <SwiperSlide>
                {" "}
                <iframe
                  className="w-[300px] h-[300px]  m-10"
                  src="https://www.youtube.com/embed/9st7RVY7kdA"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <iframe
                  className="w-[300px] h-[300px]  m-10"
                  src="https://www.youtube.com/embed/btA7H5m6sIQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <iframe
                  className="w-[300px] h-[300px]  m-10"
                  src="https://www.youtube.com/embed/tyFfmFSAQwQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className=" grid place-items-center lg:hidden">
            <iframe
              className="w-[300px] h-[300px]  m-10"
              src="https://www.youtube.com/embed/9st7RVY7kdA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <iframe
              className="w-[300px] h-[300px]  m-10"
              src="https://www.youtube.com/embed/btA7H5m6sIQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>{" "}
            <iframe
              className="w-[300px] h-[300px]  m-10"
              src="https://www.youtube.com/embed/tyFfmFSAQwQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <div className=" mt-10 space-x-6 mx-20"></div>
        </div>
        <div className=" grid  bg-[#000006] pt-20 " id="rca">
          <div className="text-white text-xl md:text-3xl text-center justify-self-center row-span-1 py-5 font-bold heading w-64 md:w-96 mb-20">
            Resource Cloud Academy
          </div>
          <div className="flex flex-col md:flex-row w-full ">
            <p className="text-white p-10">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, sit
              ipsa. Hic velit quibusdam beatae eius quis culpa animi iste,
              fugiat et. Vel voluptatibus pariatur repellat veniam alias
              accusantium deleniti. Natus veritatis officia porro nulla at sed
              nostrum eius facere adipisci? Animi excepturi nostrum aliquam
              nesciunt corporis modi voluptas iusto!{" "}
            </p>
            <div className="p-10 text-lg">
              <Video autoPlay muted="muted" loop>
                <source src="Juma.mp4" type="video/webm" />
              </Video>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full ">
            <div className="w-full md:w-1/2  z-60 pl-20 pr-10 pb-10 ">
              <img
                src="resource.JPG "
                className="w-full h-96 object-contain"
                alt=""
                type="image/webp"
              />
            </div>
            <div className="w-full md:w-1/2  z-60 pl-20 pb-10 pr-10 ">
              <img
                src="resource2.jpg"
                className="w-full h-96 object-contain "
                alt=""
                type="image/webp"
              />
            </div>
          </div>
        </div>
        <div className=" grid  bg-[#000006] pt-10 " id="contact">
          <div className="text-white text-3xl text-center justify-self-center py-5 font-bold heading w-32 ">
            Contact
          </div>
          <div className="grid grid-rows-3 md:grid-cols-3 text-xl text-white pl-10">
            <div className="row-span-1 md:col-span-1">
              {" "}
              <div className=" pt-5">
                <p className="text-white py-5 text-xl xs:px-10">GET IN TOUCH</p>
                <div className="py-2 text-gray-200 xs:px-10">
                  <span className="font-bold pr-5"> Email : </span>{" "}
                  jamesjumah@gmail.com
                </div>
                <div className="py-2 text-gray-200 xs:px-10">
                  <span className="font-bold pr-5"> Phone : </span> +254 7111
                  111
                </div>
              </div>
            </div>{" "}
            <div className="row-span-2 md:col-span-2 pt-10  pl-5 md:ml-10 max-w-screen">
              <input
                className="border-slate-200 md:mr-5 block md:inline mb-5 text-gray-700 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 p-2"
                type="text"
                name=""
                id=""
                placeholder="Name"
              />
              <input
                className="border-slate-200 ml-0  block md:inline mb-5 md:ml-10 text-gray-700 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 p-2"
                type="text"
                name=""
                id=""
                placeholder="Email"
              />
              <div className="">
                {" "}
                <textarea
                  className="border-slate-200 mt-10 text-gray-700 placeholder-slate-400 h-48 w-64 md:w-[580px] contrast-more:border-slate-400 contrast-more:placeholder-slate-500 p-2"
                  name=""
                  id=""
                  placeholder="Message"
                ></textarea>
                <button className="rounded-full shadow-lg py-2 px-6 text-white bg-[#3e2cca] mt-10 mb-10 hover:scale-[1.1] block hover:bg-blue-500 ease-in duration-300 ">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer bottom-0 bg-gray-500  pl-20 py-20 text-white">
        <div className="grid  grid-row-3 md:grid-cols-3">
          <div className="row-span-1 md:col-span-1">
            <p className="text-3xl text-white py-10">James Jumah</p>
            <div className=" socials w-1/2 py-5 text-[30px]">
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
        </div>
      </div>
    </>
  );
}

export default Home;
