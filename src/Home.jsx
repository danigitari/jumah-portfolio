import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  AiOutlineMenu,
  AiOutlineArrowUp,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineMail,
  AiOutlineClose,
} from "react-icons/ai";
import { Link } from "react-scroll";
import "./index.css";
import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFlip, Pagination, Navigation } from "swiper";

import { useInView } from "react-intersection-observer";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Home() {
  const [open, setOpen] = useState(false);
  const { ref, inView } = useInView();
  const [currentlyIntersecting, setCurrentlyIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("intersecting", entry.isIntersecting);
        });
      },
      {
        threshold: 1,
      }
    );
    const workDateObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(
          "work_date_intersecting",
          entry.isIntersecting
        );
      });
    });

    const workDescriptionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle(
          "work_description_intersecting",
          entry.isIntersecting
        );
      });
    });

    const workDates = document.querySelectorAll(".workdate");
    workDates.forEach((el) => workDateObserver.observe(el));

    const workDescription = document.querySelectorAll(".work_description");
    workDescription.forEach((el) => workDescriptionObserver.observe(el));

    const Elements = document.querySelectorAll(".heading");
    Elements.forEach((el) => observer.observe(el));
  }, []);
  return (
    <>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={0}
        className="fixed z-40 scroll-up h-12 w-12  font-bold text-xl shadow-lg rounded-full bg-[#3e2cca] text-white bottom-4 right-0 hover:scale-[1.3] duration-300 mr-5 md:mr-20 flex justify-center items-center"
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
              <div className="hidden llg:flex justify-between w-1/2 right-0  list-none  text-lg">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
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
                  to="blog"
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
                  Get in Touch
                </Link>
              </div>
              <div
                className="flex  llg:hidden text-2xl font-bold py-2  "
                onClick={() => setOpen(!open)}
              >
                <AiOutlineMenu />
              </div>
              <div
                className={` ${
                  open ? " translate-x-0" : " translate-x-[-250px]"
                } absolute  llg:hidden transition duration-300 ease-in w-[250px] h-screen bg-[#000007] `}
              >
                <div className="flex flex-col text-white ">
                  <div
                    className="flex justify-end md:hidden text-2xl font-bold py-5 px-5 "
                    onClick={() => setOpen(!open)}
                  >
                    <AiOutlineClose />
                  </div>
                  <a
                    href="#home"
                    className=" border-b-2 border-white p-10"
                    onClick={() => setOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className=" border-b-2 border-white p-10"
                    onClick={() => setOpen(false)}
                  >
                    About
                  </a>
                  <a
                    href=""
                    className=" border-b-2 border-white p-10"
                    onClick={() => setOpen(false)}
                  >
                    Blog
                  </a>
                  <a
                    href="#rca"
                    className=" border-b-2 border-white p-10"
                    onClick={() => setOpen(false)}
                  >
                    Mentorship
                  </a>
                  <a
                    href="#contact"
                    className=" border-b-2 border-white p-10"
                    onClick={() => setOpen(false)}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div
              className=" hidden md:flex absolute right-0 h-screen bg-no-repeat bg-contain w-screen "
              id="home"
            >
              <div className=" hidden md:flex w-full h-full bg-[#000007] "></div>
              <img
                src="jumah3.png"
                alt=""
                className="flex h-full right-0  pt-0 md:pt-10 bg-[#000006] "
              />
            </div>
            <div className="flex md:hidden bg-[url('../public/jumah3.png')] bg-center bg-[#000006] bg-no-repeat w-full h-full"></div>
          </div>
          <div className=" hidden md:block w-1/2 absolute  md:top-44 md:bg-transparent pl-5 md:pl-20 text-white text-2xl md:text-[44px] leading-4 md:leading-10 bg-[#181822] font-bold p-10 ">
            Hello
            <div className="py-2 leading-10 "> I'm James Juma Sindani.</div>
            <h1 className="font-bold py-0 md:py-2 text-white">
              <div className="text-2xl md:text-[38px] py-0 md:py-2 text-bold text-gray-400 leading-10 h-10">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "AWS SOLUTIONS ARCHITECT",
                    "CO-FOUNDER  @RCA",
                    "PARTNERSHIPS MANAGER @RCA",
                  ]}
                  loop={5555}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
              <div className="py-2 text-lg"> </div>
            </h1>
            <div className=" socials w-1/2 py-10 ">
              <span className=" flex space-x-6">
                <a href="https://www.linkedin.com/in/james-juma-sindani/">
                  <p className="hover:scale-[1.2] hover:text-[#b5b0d8] ease-in duration-200 ">
                    <AiFillLinkedin />
                  </p>
                </a>
                <p className="hover:scale-[1.2] hover:text-[#b5b0d8] ease-in duration-200 ">
                  <AiOutlineTwitter />
                </p>
                <p className="hover:scale-[1.2] hover:text-[#b5b0d8] ease-in duration-200 ">
                  <AiOutlineMail />
                </p>
              </span>
            </div>
          </div>
          <div className=" absolute z-30 md:hidden text-3xl font-bold bg-[#000006] w-full text-white pl-5 -translate-y-20 md:translate-y-0">
            Hello
            <h1 className="py-2 leading-10 "> I'm James Juma Sindani.</h1>
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
              </div>
            </h1>
            <div className=" socials w-1/2 py-5 text-3xl font-bold">
              <span className=" flex space-x-6">
                <a href="mailto:">
                  <p className=" ease-in duration-200   ">
                    <AiOutlineMail />
                  </p>
                </a>
                <a href="https://www.linkedin.com/in/james-juma-sindani/">
                  <p className=" ease-in duration-200  ">
                    <AiFillLinkedin />
                  </p>
                </a>
                <a href="https://twitter.com/Juma_14910">
                  <p className=" ease-in duration-200 sm:scale-150  ">
                    <AiOutlineTwitter />
                  </p>
                </a>
              </span>
            </div>
          </div>
        </div>

        <div
          className="grid pl-5 md:pl-20 bg-[#000006] pt-20 translate-y-[200px] md:translate-y-0 h-full"
          id="about"
        >
          <div className="text-white text-3xl text-center justify-self-start sm:justify-self-center  py-5 font-bold heading w-36 mb-0 lg:mb-20">
            About Me
          </div>
          <div className="flex flex-col gap-x-10 lg:flex-row  h-full">
            <div className="w-full lg:w-1/2 text-white pr-10 text-md font-light workdate h-full">
              <p className="p-5">
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
              <button className="rounded-full shadow-lg py-2 px-6 mx-5 text-white bg-[#3e2cca] mt-10 mb-10 hover:scale-[1.1] hover:bg-blue-500 ease-in duration-300 ">
                Download CV
              </button>
            </div>
            <div className="w-full lg:w-1/2 z-60  pr-5 md:pr-20 ">
              <img
                src="awshackathon5.jpg"
                className="w-full h-[450px] object-contain "
                alt=""
                type="image/webp"
              />
            </div>
          </div>
        </div>
        <div className="overflow-hidden  bg-[#000006] pt-20 h-full flex flex-col items-center max-w-screen translate-y-[200px] md:translate-y-0">
          <p
            className={` ${
              currentlyIntersecting ? " intersecting " : " "
            } text-white text-3xl heading py-5 font-bold pb-10 `}
          >
            Work Experience
          </p>
          <div className="w-3/4 h-[1px]  mt-10 bg-[#3e2cca]  "> .</div>
          <div className="flex flex-col md:flex-row w-full gap-4 md:gap-16 items-center justify-center mt-10">
            <div className=" text-[#c7c3e7] w-full md:w-2/3 text-md text-center md:text-right workdate">
              June 2022 <p className="inline px-5 text-2xl font-bold  ">-</p>
              Present
            </div>
            <div className=" text-white w-full text-lg font-semibold px-20 work_description ">
              Cloud Solutions Architect -
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
                  aws
                </button>
              </p>
            </div>
          </div>
          <div className="w-3/4 h-[1px]  mt-10 bg-[#3e2cca] "> .</div>
          <div className="flex flex-col md:flex-row w-full gap-4 md:gap-16 items-center justify-center mt-10">
            <div className=" text-[#c7c3e7] w-full md:w-2/3 text-md text-center workdate md:text-right">
              January 2022
              <p className="inline px-5 text-2xl font-bold  "> - </p> Present
            </div>
            <div className=" text-white w-full text-lg font-semibold work_description px-20">
              Co-Founder & Partnership Manager -
              <p className="text-md font-light">
                Resource Cloud Academy · Full-time
              </p>
              <p className="text-sm font-light pt-10 text-gray-500 md:pr-20">
                I offer free cloud resources to help the community members skill
                up. I also lead the community in doing cloud related projects on
                AWS and Azure Clouds.
                <br />
                <br />
                <span className="font-bold text-white mt-4">Skills </span>
                <br />
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72]  mt-2 mr-2">
                  aws
                </button>
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72] mr-2 mt-2">
                  linux
                </button>
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72] mr-2 mt-2">
                  Microsoft Azure
                </button>
              </p>
            </div>
          </div>
          <div className="w-3/4 h-[1px]  mt-10 bg-[#3e2cca] "> .</div>
          <div className="flex flex-col md:flex-row w-full gap-4 md:gap-16 items-center justify-center">
            <div className=" text-[#c7c3e7] w-full md:w-2/3 pt-5 text-md text-center workdate md:text-right">
              January 2022
              <p className="inline px-5 text-2xl font-bold  "> - </p> May 2022
            </div>
            <div className=" pt-5 md:pt-10 text-white w-full work_description text-lg font-semibold px-20">
              Cloud Engineer -
              <p className="text-md font-light">
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
                <br />
                <span className="font-bold text-white mt-4">Skills </span>
                <br />
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72]  mt-2 mr-2">
                  Office 365
                </button>
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72]  mt-2 mr-2">
                  VMware
                </button>
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72]  mt-2 mr-2">
                  Palo alto
                </button>
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72]  mt-2 mr-2">
                  Microsft Teams
                </button>
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72]  mt-2 mr-2">
                  Microsoft Azure
                </button>
              </p>
            </div>
          </div>
          <div className="w-3/4 h-[1px]  mt-10 bg-[#3e2cca] "> .</div>
          <div className="flex flex-col md:flex-row w-full gap-4 md:gap-16 items-center justify-center">
            <div className=" text-[#c7c3e7] w-full md:w-2/3 pt-5 text-md workdate  text-center md:text-right">
              January 2022
              <p className="inline px-5 text-2xl font-bold  "> - </p> May 2022
            </div>
            <div className=" pt-5 md:pt-10 text-white w-full work_description text-lg font-semibold px-20">
              AWS Architect -
              <p className="text-md font-light">
                Azubi Africa · Apprenticeship
              </p>
              <p className="text-sm font-light pt-4 md:pt-10 text-gray-500 md:pr-20">
                Trainee in AWS Cloud Practitioner and AWS Solutions Architect
                Associate. Skills Acquired; - Familiarity with using the AWS
                Management console and AWS Command Line Interface -Understanding
                of AWS Well-Architected Framework and the AWS global
                infrastructure
                <br />
                <br />
                <span className="font-bold text-white mt-4">Skills </span>
                <br />
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72]  mt-2 mr-2">
                  aws
                </button>
                <button className="px-6 py-1  rounded-full text-gray-300 bg-[#403a72]  mt-2 mr-2">
                  linux
                </button>
              </p>
            </div>
          </div>
          <div className="w-3/4 h-[1px]  mt-10 bg-[#3e2cca] "> .</div>
        </div>

        <div
          className=" grid place-items-center  bg-[#000006] pt-20 w-full translate-y-[200px] md:translate-y-0"
          id="cerifications"
        >
          <div className="text-white text-3xl text-center justify-self-center row-span-1 py-5 font-bold heading w-56 mb-20">
            Certifications
          </div>
          {/* <div className="flex flex-wrap justify-center  gap-y-4 w-3/4">
            <img
              src="ccp.jpeg"
              className="object-contain h-48 md:h-56 w-full lg:w-1/3"
              alt=""
              type="image/webp"
            />

            <img
              src=" ssa.jpeg"
              className="object-contain h-48 md:h-56 w-full lg:w-1/3"
              alt=""
              type="image/webp"
            />

            <img
              src="ssa.jpeg"
              className="object-contain h-48 md:h-56 w-full lg:w-1/3"
              alt=""
              type="image/webp"
            />

            <img
              src="sysops.jpg"
              className="object-contain h-48 md:h-56 w-full lg:w-1/3"
              alt=""
              type="image/webp"
            />

            <img
              src="azure-admin.png"
              className="object-contain h-48 md:h-56 w-full lg:w-1/3 "
              alt=""
              type="image/webp"
            />

            <img
              src="cka.jpg"
              className="object-contain h-48 md:h-56 w-full lg:w-1/3"
              alt=""
              type="image/webp"
            />
          </div> */}
        </div>
        <div
          className=" grid  bg-[#000006] pt-20 w-full translate-y-[200px] md:translate-y-0"
          id="cerifications"
        >
          <div className="text-white text-3xl text-center justify-self-center row-span-1 py-5 font-bold heading w-56 mb-20">
            Talks I've Done
          </div>
          <div className="hidden lg:flex md:flex-wrap w-full">
            <Swiper
              slidesPerView={3}
              pagination={{ clickable: true }}
              className="mySwiper"
            >
              <SwiperSlide>
                <iframe
                  className="w-[300px] h-[300px]  m-10"
                  src="https://www.youtube.com/embed/FyYHRPCrpMo"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </SwiperSlide>
              <SwiperSlide>
                <iframe
                  className="w-[300px] h-[300px]  m-10"
                  src="https://www.youtube.com/embed/btA7H5m6sIQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </SwiperSlide>
              <SwiperSlide>
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
            ></iframe>
            <iframe
              className="w-[300px] h-[300px]  m-10"
              src="https://www.youtube.com/embed/tyFfmFSAQwQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <iframe
              className="w-[300px] h-[300px]  m-10"
              src="https://www.youtube.com/embed/FyYHRPCrpMo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>

          <div className=" mt-10 space-x-6 mx-20"></div>
        </div>
        <div
          className=" grid  bg-[#000006] pt-20 translate-y-[200px] px-10 md:translate-y-0"
          id="blog"
        >
          <div className="text-white text-xl md:text-3xl text-center justify-self-center row-span-1 py-5 font-bold heading w-24 md:w-32 mb-5">
            Blog
          </div>
          <div className="container text-white my-24 mx-auto md:px-6  ">
            <section className="mb-32 text-center ">
              <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                <div className="mb-12 md:mb-0 shadow-md shadow-gray-700 rounded-lg overflow-hidden">
                  <img src="b1.jpg" className="w-full h-48" alt="" />

                  <p className="text-lg text-start py-3 px-3">
                    The Azubi Africa Cloud Wave
                  </p>
                  <p className="text-start px-3 text-sm">
                    {" "}
                    The cloud is a powerful tool that can help you accomplish
                    your goals and missions. But it's not just about the
                    technology—you need to understand how the cloud can fit into
                    your business and what types of benefits are available. The
                    cloud has different roles. These roles include Cloud
                    Architect, AWS Solutions Architect, Cloud Engineer, and AWS
                    Developer.
                  </p>
                  <div className="flex items-center">
                    <img
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                      src="jumah.png"
                    />

                    <div className="text-sm flex gap-x-6 text-white">
                      <p className=" ">James Juma</p>
                      <p className="text-gray-400">April 7, 2022</p>
                    </div>
                  </div>

                  <span
                    href="#"
                    className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
                  >
                    <a href="" className="rounded-full shadow-lg py-2 px-6 text-white bg-[#3e2cca] mt-10 mb-10 hover:scale-[1.1] hover:bg-blue-500 ease-in duration-300 mx-5 "> Read More  </a>

                    <span className="ml-1 p-5 text-white">7 min read</span>
                  </span>
                </div>
                <div className="mb-12 md:mb-0 shadow-md shadow-gray-700 rounded-lg overflow-hidden">
                  <img src="b3.jpg" className="w-full h-48" alt="" />

                  <p className="text-lg text-start py-3 px-3">
                    Aws Cloud Roles
                  </p>
                  <p className="text-start px-3 text-sm">
                    The cloud has changed how we work. It's no longer just a
                    place where you can store your files. It's a tool that
                    allows you to create and grow your business, from anywhere
                    in the world. There are many different roles in AWS, and
                    each of them plays a vital role in making sure that your
                    organization is successful. But what does it mean to be a
                    cloud architect?
                  </p>
                  <div className="flex items-center">
                    <img
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                      src="jumah.png"
                    />

                    <div className="text-sm flex gap-x-6 text-white">
                      <p className=" ">James Juma</p>
                      <p className="text-gray-400">Sep 25 2022</p>
                    </div>
                  </div>

                  <span
                    href="#"
                    className="py-1 text-sm font-regular text-white mr-1 flex flex-row justify-between items-center"
                  >
              <a href="" className="rounded-full shadow-lg py-2 px-6 text-white bg-[#3e2cca] mt-10 mb-10 hover:scale-[1.1] hover:bg-blue-500 ease-in duration-300 mx-5 "> Read More  </a>
                    <span className="ml-1 p-5 text-white">4 mins read</span>
                  </span>
                </div>
                <div className="mb-12 md:mb-0 shadow-md shadow-gray-700 rounded-lg overflow-hidden">
                  <img src="b2.jpg" className="w-full h-48" alt="" />

                  <p className="text-lg text-start py-3 px-3">
                    Traditional Monolithic vs 3-Tier Architectures
                  </p>
                  <p className="text-start px-3 text-sm">
                    {" "}
                    When it comes to building and deploying software, there are
                    a variety of architectural patterns to choose from. One
                    popular option is the 3-tier architecture, which is a
                    variation of the traditional monolithic architecture. In
                    this post, we'll discuss the two architectures, highlighting
                    their pros and cons.
                  </p>
                  <div className="flex items-center">
                    <img
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                      src="jumah.png"
                    />

                    <div className="text-sm flex gap-x-6 text-white">
                      <p className=" ">James Juma</p>
                      <p className="text-gray-400">Jan 23 2023 </p>
                    </div>
                  </div>

                  <span
                    href="#"
                    className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
                  >
                        <a href="" className="rounded-full shadow-lg py-2 px-6 text-white bg-[#3e2cca] mt-10 mb-10 hover:scale-[1.1] hover:bg-blue-500 ease-in duration-300 mx-5 "> Read More  </a>

                    <span className="ml-1 p-5 text-white">7 mins read</span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div
          className=" grid  bg-[#000006] pt-20 w-full translate-y-[200px] md:translate-y-0"
          id="testimonials"
        >
          <p className="text-white text-3xl text-center justify-self-center row-span-1 py-5 font-bold heading px-10 mb-20">
            What People Say About Me
          </p>

          <article className="">
            <div className="container text-white my-24 mx-auto md:px-6">
              <section className="mb-32 text-center">
                <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
                  <div className="mb-12 md:mb-0">
                    <div className="mb-6 flex justify-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
                        className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                      />
                    </div>
                    <h5 className="mb-2 text-lg font-bold">Maria Smantha</h5>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Web Developer
                    </h6>
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab
                      hic.
                    </p>
                  </div>
                  <div className="mb-12 md:mb-0">
                    <div className="mb-6 flex justify-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
                        className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                      />
                    </div>
                    <h5 className="mb-2 text-lg font-bold">Lisa Cudrow</h5>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Graphic Designer
                    </h6>
                    <p className="mb-4">
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid
                      commodi.
                    </p>
                  </div>
                  <div className="mb-0">
                    <div className="mb-6 flex justify-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
                        className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                      />
                    </div>
                    <h5 className="mb-2 text-lg font-bold">John Smith</h5>
                    <h6 className="mb-4 font-medium text-primary dark:text-primary-400">
                      Marketing Specialist
                    </h6>
                    <p className="mb-4">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
        <div
          className=" grid  bg-[#000006] pt-20 translate-y-[200px] md:translate-y-0"
          id="rca"
        >
          <div className="text-white text-xl md:text-3xl text-center justify-self-center row-span-1 py-5 font-bold heading w-64 md:w-96 mb-5">
            Resource Cloud Academy
          </div>
          <div className="grid place-items-center">
            <p className=" w-3/5 text- text-white mb-10 "></p>
            {/* <div className="p-10 text-lg">
              <Video autoPlay muted="muted" loop>
                <source src="Juma.mp4" type="video/webm" />
              </Video>
            </div> */}
          </div>
          <div className="flex flex-col gap-x-10  lg:flex-row  h-full">
            <div className="w-full lg:w-1/2 text-white pl-5 sm:pl-10 text-md font-light h-full grid place-items-center">
              <p className="text-left sm:text-center lg:text-left w-full md:w-4/5 px-10 ">
                Resource Cloud Academy is an elite community of tech enthusiasts
                that focuses on equipping individuals with the necessary skills
                and experience needed to start or develop their careers in cloud
                computing. Our vision is to bridge the gap between the industry
                and the relevant skills needed by the future generation of
                global technology leaders through early career interventions.
                Our main audience is students who are still in university, and
                we empower them to use their time wisely.
              </p>
              <a href="https://www.linkedin.com/company/resource-cloud-academy/">
                <button className="rounded-full shadow-lg py-2 px-6 text-white bg-[#3e2cca] mt-10 mb-10 hover:scale-[1.1] hover:bg-blue-500 ease-in duration-300 ">
                  Learn More
                </button>
              </a>
            </div>
            <div className=" grid place-items-center w-full lg:w-1/2  z-60  lg:pr-20 ">
              <img
                src="resource.JPG "
                className="w-full h-96 object-contain p-5"
                alt=""
                type="image/webp"
              />
            </div>
          </div>
          {/* <div className="flex flex-col md:flex-row w-full ">
            <div className="w-full md:w-1/2  z-60 pl-20 pr-10 pb-10 "></div>
              <div className="w-full md:w-1/2  z-60 pl-20 pb-10 pr-10 ">
                <img
                  src="resource2.jpg"
                  className="w-full h-96 object-contain "
                  alt=""
                  type="image/webp"
                />
              </div>
            </div> */}
        </div>
        <div
          className="justify-center w-full grid place-items-center h-screen
           bg-[#000006] pt-10  mt-20 translate-y-[200px] md:translate-y-0"
          id="contact"
        >
          <div className="w-full md:w-1/2 grid  place-items-center px-5">
            <div className="text-white text-3xl text-center justify-self-center mb-10 font-bold heading ">
              GET IN TOUCH
            </div>
            <p className="text-lg text-center mt-10 text-white">
              If you have any inquiries, collaborations, or simply want to
              connect, I would be delighted to hear from you. Whether you have a
              project in mind, a question about my work, or just want to say
              hello, please feel free to reach out to me via email.
            </p>
            <button className="rounded-full w-full sm:w-1/3 shadow-lg py-2 px-6 text-white bg-[#3e2cca] mt-10 mb-10 hover:scale-[1.1] hover:bg-blue-500 ease-in duration-300 ">
              <a href="mailto:"> Talk to me </a>
            </button>

            <div className="pt-20 lg:mt-20 bottom-0 ">
              <div className="w-full md-w-1/4 grid place-items-center">
                <div className="flex text-white text-3xl gap-x-6">
                  <a href="https://www.linkedin.com/in/james-juma-sindani/">
                    <p className="hover:scale-[1.2] hover:text-[#b5b0d8] ease-in duration-200 ">
                      <AiFillLinkedin />
                    </p>
                  </a>
                  <a href="https://twitter.com/Juma_14910">
                    <p className="hover:scale-[1.2] hover:text-[#b5b0d8] ease-in duration-200 ">
                      <AiOutlineTwitter />
                    </p>
                  </a>
                  <a href="mailto:">
                    <p className="hover:scale-[1.2] hover:text-[#b5b0d8] ease-in duration-200 ">
                      <AiOutlineMail />
                    </p>
                  </a>
                </div>
                <p className="text-white pt-5 ">James Juma Sindani • © 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
