import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { IoArrowForward } from "react-icons/io5";
import imgShopSquire from "../assets/images/shopsquire.png";
import imgBrightSide from "../assets/images/brightside.png";
import imgFoodyZone from "../assets/images/foodyzone.jpeg";
import AllProjects from "../components/AllProjects";
const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const items = [
    {
      id: 1,
      title: "ShopSquire-a Ecommarce workspace",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit .hsdhs ABHCdi uiuasdv sdvuoasdw assdviugawe asdiugwqe usgdfqiwe asdasd asdvasdv adsasdfas asdvasdz ",
      imgURL: imgShopSquire,
      liveLink: "https://shop-squire.vercel.app/",
      githubLink: "https://github.com/himanshusharma2007/ShopSquire",
      techstack: "HTML, CSS, JS, React, Tailwind",
    },
    {
      id: 2,
      title: "BrightSide-a primary school website",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit .hsdhs ABHCdi uiuasdv sdvuoasdw assdviugawe asdiugwqe usgdfqiwe asdasd asdvasdv adsasdfas asdvasdz ",
      imgURL: imgBrightSide,
      liveLink: "https://brightside-rho.vercel.app/",
      githubLink: "https://github.com/himanshusharma2007/Brightside.git",
      techstack: "HTML, CSS, JS, React, Tailwind",
    },
    {
      id: 3,
      title: "FoodyZone-a online food delivary plateform",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit .hsdhs ABHCdi uiuasdv sdvuoasdw assdviugawe asdiugwqe usgdfqiwe asdasd asdvasdv adsasdfas asdvasdz ",
      imgURL: imgFoodyZone,
      liveLink: "#",
      githubLink: "https://github.com/himanshusharma2007/FoodyZone.git",
      techstack: "HTML, CSS, JS, React, Tailwind",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };
  return (
    <>
      <div className="relative md:min-h-[88vh] h-auto bg-zinc-800 px-6 rounded-lg flex flex-col  text-white items-center  ">
        <div className="wraper w-full h-[8vh] md:h-[12vh] mt-2 flex justify-center items-center ">
          <h2 className="text-4xl sm:text-5xl w-fit flex flex-col justify-center items-start font-bold text-center patrick ">
            Projects
            <span className="h-[4px] w-[50px] bg-green-500 mt-1 rounded-md"></span>
          </h2>
        </div>
        <div className=" w-full md:h-[76vh] h-auto  flex items-center justify-center ">
          <div className="wraper relative min-h-[45rem] md:min-h-[76vh] w-full ">
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
                    <div className="disc text-md mt-3">{item.desc}</div>
                    <div className="techstack text-xl mt-3">
                      {item.techstack}
                    </div>
                    <div className="navigation flex mt-5 space-x-4">
                      <button className="bg-zinc-700  text-white rounded-full p-4">
                        <BsArrowUpRight />
                      </button>
                      <button className="bg-zinc-700 text-white rounded-full p-4">
                        <FaGithub />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="right-container relative  flex flex-col w-full md:w-[60%]  h-auto justify-center  items-center pt-4 md:px-2">
                  <div className="relative h-[250px] sm:h-[320px] w-full  ">
                    <div
                      className={`absolute inset-0 flex items-center justify-center  bg-gray-100 transition-opacity duration-500 ${
                        index === currentSlide
                          ? "opacity-100"
                          : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <img
                        src={item.imgURL}
                        alt=""
                        className="w-full h-full object-fill"
                      />
                    </div>
                  </div>
                  <div className=" absolute md:relative  w-full h-[50px] mt-3 p-4 ">
                    <div className="absolute top-1/2 left-1/2 transform md:space-x-3 -translate-x-1/2 -translate-y-1/2  flex  w-full md:w-fit h-fit justify-between ">
                      <button
                        onClick={handlePrev}
                        className=" bg-zinc-700  p-3 rounded-full"
                      >
                        <BiArrowBack className="text-white  text-2xl   " />
                      </button>
                      <button
                        onClick={handleNext}
                        className=" bg-zinc-700  p-3 rounded-full"
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
