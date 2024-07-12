import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { IoArrowForward } from "react-icons/io5";
import imgShopSquire from "../assets/images/shopsquire.png";
import imgBrightSide from "../assets/images/brightside.png";
import imgTrackEx from "../assets/images/trackex.png";
import AllProjects from "../components/AllProjects";
const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const items = [
    {
      id: 1,
      title: "ShopSquire - an E-commerce workspace",
      desc: "ShopSquire is a React-powered e-commerce platform featuring user authentication, Firestore data persistence, detailed product pages, and responsive design. It offers seamless product sharing, GSAP animations, and user profiles. The project demonstrates proficiency in building complex, feature-rich web applications with modern technologies.",
      imgURL: imgShopSquire,
      liveLink: "https://shop-squire.vercel.app/",
      githubLink: "https://github.com/himanshusharma2007/ShopSquire",
      techstack: "React.js, Tailwind CSS, Firebase, GSAP",
    },
    {
      id: 2,
      title: "TrackEx - a Expense tracking app",
      desc: "TrackEx is a user-friendly expense tracking app that simplifies personal and group finance management. It allows users to easily log expenses, split costs with friends, set budgets, and get a clear overview of their spending habits, all without requiring a login . It is here to solve the age-old question: 'Who owes what to whom?'",
      imgURL: imgTrackEx,
      liveLink: "https://trackex-sigma.vercel.app/",
      githubLink:
        "https://github.com/himanshusharma2007/Expense-Tracking-App.gitt",
      techstack: "React, JavaScript, Tailwind CSS, Firebase",
    },

    {
      id: 3,
      title: "BrightSide - a primary school website",
      desc: "BrightSide is a full-stack primary school website built with React and Firebase. It features user registration and authentication, dynamic pages with scrolling animations, responsive design, and real-time data handling using Firestore. The project showcases the ability to create engaging, interactive web experiences for educational institutions.",
      imgURL: imgBrightSide,
      liveLink: "https://brightside-rho.vercel.app/",
      githubLink: "https://github.com/himanshusharma2007/Brightside.git",
      techstack: "React, JavaScript, CSS3, Tailwind CSS, Firebase",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const toggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <>
      <div className="relative md:min-h-[88vh] h-auto bg-zinc-800 px-2 md:px-6 rounded-lg flex flex-col  text-white items-center  ">
        <div className="wraper w-full h-[8vh] md:h-[12vh] mt-2 flex justify-center items-center ">
          <h2 className="text-4xl sm:text-5xl w-fit flex flex-col justify-center items-start font-bold text-center patrick ">
            Projects
            <span className="h-[4px] w-[50px] bg-green-500 mt-1 rounded-md"></span>
          </h2>
        </div>
        <div className=" w-full md:h-[76vh] h-auto  flex items-center justify-center ">
          <div className="wraper relative min-h-[48rem] md:min-h-[76vh] w-full ">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`main w-full  h-full flex justify-center items-center flex-col-reverse md:flex-row  absolute inset-0 
            transition-opacity duration-500 ${
              index === currentSlide
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
              >
                <div className="left-container flex  w-full md:w-[40%] justify-center  ">
                  <div className="wraper w-fit h-fit  flex flex-col ">
                    <div className="stylied-number text-[60px]">0{item.id}</div>
                    <div className="project-title text-3xl ">{item.title}</div>
                    <div className=" description-container  h-32 overflow-y-auto relative custom-scrollbar2">
                      <div
                        className={`description text-md mt-3 transition-all duration-300 ease-in-out ${
                          expandedDescriptions[item.id] ? "" : "line-clamp-3"
                        }`}
                      >
                        {item.desc}
                      </div>
                      {!expandedDescriptions[item.id] && (
                        <div className="fade-overlay absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-zinc-800 to-transparent"></div>
                      )}
                      <button
                        onClick={() => toggleDescription(item.id)}
                        className="text-green-500 hover:text-green-400 mt-2 text-sm font-medium z-10"
                      >
                        {expandedDescriptions[item.id]
                          ? "Read less"
                          : "Read more"}
                      </button>
                    </div>
                    <div className="techstack text-xl mt-3">
                      {item.techstack}
                    </div>
                    <div className="navigation flex mt-5 space-x-4">
                      <a href={item.liveLink} target="_blank">
                        <button className="bg-zinc-700 hover:bg-zinc-600  text-white rounded-full p-4">
                          <BsArrowUpRight />
                        </button>
                      </a>
                      <a href={item.githubLink} target="_blank">
                        <button className="bg-zinc-700 hover:bg-zinc-600 text-white rounded-full p-4">
                          <FaGithub />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="right-container relative  flex flex-col w-full md:w-[60%]  h-auto justify-center  items-center pt-4 md:px-2">
                  <div className="relative h-[250px] sm:h-[320px] w-full  ">
                    <div
                      className={`absolute inset-0 flex items-center justify-center rounded-lg  bg-gray-100 transition-opacity duration-500 ${
                        index === currentSlide
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <img
                        src={item.imgURL}
                        alt=""
                        className="w-full h-full object-fill rounded-lg"
                      />
                    </div>
                  </div>
                  <div className=" absolute md:relative  w-full h-[50px] mt-3 p-4 ">
                    <div className="absolute top-1/2 left-1/2 transform md:space-x-3 -translate-x-1/2 -translate-y-1/2  flex  w-full md:w-fit h-fit justify-between ">
                      <button
                        onClick={handlePrev}
                        className=" bg-zinc-700 hover:bg-zinc-600 p-3 rounded-full"
                      >
                        <BiArrowBack className="text-white  text-2xl   " />
                      </button>
                      <button
                        onClick={handleNext}
                        className=" bg-zinc-700 hover:bg-zinc-600 p-3 rounded-full"
                      >
                        <IoArrowForward className=" text-white  text-2xl " />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AllProjects />
    </>
  );
};

export default Projects;
