import { BsArrowUpRight, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import imgShopSquire from "../assets/images/shopsquire.png";
import imgBrightSide from "../assets/images/brightside.png";
import imgFoodyZone from "../assets/images/foodyzone.jpeg";
import imgCrypto from "../assets/images/cryptodashboard.png";
import imgFundGrowth from "../assets/images/fundgrowth.png";
import imgZomato from "../assets/images/zomato.jpg";
import imgTodo from "../assets/images/todolist.png";
import imgTicTec from "../assets/images/tictectoe.png";
import imgMicrosoft from "../assets/images/microsoft-homepage.jpg";
import { useState } from "react";

const AllProjects = () => {
  const items = [
    {
      id: 1,
      title: "ShopSquire - an E-commerce workspace",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hsdhs ABHCdi uiuasdv sdvuoasdw assdviugawe asdiugwqe usgdfqiwe asdasd asdvasdv adsasdfas asdvasdz.",
      imgURL: imgShopSquire,
      liveLink: "https://shop-squire.vercel.app/",
      githubLink: "https://github.com/himanshusharma2007/ShopSquire",
      techstack: "HTML, CSS, JS, React, Tailwind",
    },
    {
      id: 2,
      title: "BrightSide - a primary school website",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hsdhs ABHCdi uiuasdv sdvuoasdw assdviugawe asdiugwqe usgdfqiwe asdasd asdvasdv adsasdfas asdvasdz.",
      imgURL: imgBrightSide,
      liveLink: "https://brightside-rho.vercel.app/",
      githubLink: "https://github.com/himanshusharma2007/Brightside.git",
      techstack: "HTML, CSS, JS, React, Tailwind",
    },
    {
      id: 3,
      title: "FoodyZone - an online food delivery platform",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hsdhs ABHCdi uiuasdv sdvuoasdw assdviugawe asdiugwqe usgdfqiwe asdasd asdvasdv adsasdfas asdvasdz.",
      imgURL: imgFoodyZone,
      liveLink: "#",
      githubLink: "https://github.com/himanshusharma2007/FoodyZone.git",
      techstack: "HTML, CSS, JS, React, Tailwind",
    },
    {
      id: 4,
      title: "Crypto Dashboard - an Cryptocurrency dashboard",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hsdhs ABHCdi uiuasdv sdvuoasdw assdviugawe asdiugwqe usgdfqiwe asdasd asdvasdv adsasdfas asdvasdz.",
      imgURL: imgCrypto,
      liveLink:
        "https://crypto-dashboard-git-main-himanshusharma2007s-projects.vercel.app/",
      githubLink: "https://github.com/himanshusharma2007/Crypto-Dashboard",
      techstack: "HTML, CSS, JS, React, Tailwind",
    },
    {
      id: 5,
      title: "FundGrowth - an Mutual fund growth calculator",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hsdhs ABHCdi uiuasdv sdvuoasdw assdviugawe asdiugwqe usgdfqiwe asdasd asdvasdv adsasdfas asdvasdz.",
      imgURL: imgFundGrowth,
      liveLink: "https://fund-growth.vercel.app/",
      githubLink: "https://github.com/himanshusharma2007/FundGrowth",
      techstack: "HTML, CSS, JS, React, Tailwind",
    },
    {
      id: 6,
      title: "Zomato clone",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hsdhs ABHCdi uiuasdv sdvuoasdw assdviugawe asdiugwqe usgdfqiwe asdasd asdvasdv adsasdfas asdvasdz.",
      imgURL: imgZomato,
      liveLink: "https://my-zomato-clone-six.vercel.app/",
      githubLink: "https://github.com/himanshusharma2007/My-Zomato-Clone",
      techstack: "HTML, CSS, JS, React, Tailwind",
    },
    {
      id: 7,
      title: "Task Managing App",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hsdhs ABHCdi uiuasdv sdvuoasdw assdviugawe asdiugwqe usgdfqiwe asdasd asdvasdv adsasdfas asdvasdz.",
      imgURL: imgTodo,
      liveLink: "https://himanshusharma2007.github.io/My-Todo-s/",
      githubLink: "https://github.com/himanshusharma2007/My-Todo-s",
      techstack: "HTML, CSS, JS, React, Tailwind",
    },
    {
      id: 8,
      title: "Microsoft Clone",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hsdhs ABHCdi uiuasdv sdvuoasdw assdviugawe asdiugwqe usgdfqiwe asdasd asdvasdv adsasdfas asdvasdz.",
      imgURL: imgMicrosoft,
      liveLink:
        "https://microsoft-clone-git-main-himanshusharma2007s-projects.vercel.app/",
      githubLink: "https://github.com/himanshusharma2007/Microsoft-Clone",
      techstack: "HTML, CSS, JS, React, Tailwind",
    },
    {
      id: 9,
      title: "Tic Tec Toe Game",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hsdhs ABHCdi uiuasdv sdvuoasdw assdviugawe asdiugwqe usgdfqiwe asdasd asdvasdv adsasdfas asdvasdz.",
      imgURL: imgTicTec,
      liveLink: "https://himanshusharma2007.github.io/TicTecToe-Game/",
      githubLink: "#",
      techstack: "HTML, CSS, JS, React, Tailwind",
    },
  ];

  const ProductCard = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <div className="project-card bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm ubuntu-text">
        <img
          src={item.imgURL}
          alt={item.title}
          className="project-image w-full h-48 object-cover"
        />
        <div className="project-details p-6">
          <h3 className="project-title text-lg font-bold mb-2 roboto">
            {item.title}
          </h3>
          <div className="project-description mb-2">
            <p
              className={`text-sm text-gray-300 ${
                isExpanded ? "" : "line-clamp-3"
              }`}
            >
              {item.desc}
            </p>
            {item.desc.length > 100 && (
              <button
                onClick={toggleDescription}
                className="text-green-500 hover:text-green-400 transition-colors duration-300 text-sm mt-2 flex items-center"
              >
                {isExpanded ? "See Less" : "See More"}
                {isExpanded ? (
                  <BsChevronUp className="ml-1" />
                ) : (
                  <BsChevronDown className="ml-1" />
                )}
              </button>
            )}
          </div>
          <div className="project-tech-stack mb-4">
            <h4 className="text-md font-semibold mb-1">Tech Stack:</h4>
            <p className="text-sm text-gray-400">{item.techstack}</p>
          </div>
          <div className="project-links flex justify-between">
            <a
              href={item.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-live-link flex items-center text-green-500 hover:text-green-400 transition-colors duration-300"
            >
              <span className="mr-1">Live Demo</span>
              <BsArrowUpRight size={14} />
            </a>
            <a
              href={item.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-link flex items-center text-gray-400 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={18} className="mr-1" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="projects-container md:min-h-[88vh] bg-zinc-900 text-white pb-3 flex justify-center items-center">
      <div className="projects-main container mx-auto px-1 md:px-0 py-8">
        <div className="wrapper w-full flex justify-center items-center">
          <h2 className="projects-heading text-5xl w-fit flex flex-col justify-center items-start font-bold text-center mb-8 patrick">
            All Projects
            <span className="projects-heading-underline h-[4px] w-[50px] bg-green-500 mt-1 rounded-md"></span>
          </h2>
        </div>
        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
