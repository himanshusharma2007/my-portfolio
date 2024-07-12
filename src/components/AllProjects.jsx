import React from "react";
import { useState } from "react";

import { BsArrowUpRight, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import imgShopSquire from "../assets/images/shopsquire.png";
import imgTrackEx from "../assets/images/trackex.png";
import imgBrightSide from "../assets/images/brightside.png";
import imgFoodyZone from "../assets/images/foodyzone.jpeg";
import imgCrypto from "../assets/images/cryptodashboard.png";
import imgFundGrowth from "../assets/images/fundgrowth.png";
import imgZomato from "../assets/images/zomato.jpg";
import imgTodo from "../assets/images/todolist.png";
import imgTicTec from "../assets/images/tictectoe.png";
import imgMicrosoft from "../assets/images/microsoft-homepage.jpg";


const AllProjects = () => {
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
    {
      id: 4,
      title: "FoodyZone - an online food discovery  platform",
      desc: "FoodyZone is a React-based web application for food discovery and exploration. It features a fully responsive design, meal type filtering options, visually appealing food item cards, and efficient data fetching from a backend API. The project demonstrates skills in creating user-centric designs and integrating front-end with back-end services.",
      imgURL: imgFoodyZone,
      liveLink: "#",
      githubLink: "https://github.com/himanshusharma2007/FoodyZone.git",
      techstack: "React.js, Tailwind CSS, Node.js",
    },
    {
      id: 5,
      title: "Crypto Dashboard - an Cryptocurrency dashboard",
      desc: "This Crypto Dashboard, built with React and Tailwind CSS, offers a responsive design with three main pages: Dashboard, Transactions, and Support. It provides a user-friendly interface for cryptocurrency tracking and management. While currently using static data, the project showcases skills in creating complex, data-driven web applications.",
      imgURL: imgCrypto,
      liveLink:
        "https://crypto-dashboard-git-main-himanshusharma2007s-projects.vercel.app/",
      githubLink: "https://github.com/himanshusharma2007/Crypto-Dashboard",
      techstack: "React, Tailwind CSS, JavaScript",
    },
    {
      id: 6,
      title: "FundGrowth - an Mutual fund growth calculator",
      desc: "FundGrowth is a web-based investment growth calculator that helps users estimate their financial growth. It allows input of initial investment, monthly contributions, interest rates, and time horizon to calculate potential returns. The project demonstrates ability to create practical, user-friendly financial tools using web technologies.",
      imgURL: imgFundGrowth,
      liveLink: "https://fund-growth.vercel.app/",
      githubLink: "https://github.com/himanshusharma2007/FundGrowth",
      techstack: "HTML, CSS, JavaScript, Bootstrap",
    },
    {
      id: 7,
      title: "Zomato clone",
      desc: "This Zomato clone, built with React and Tailwind CSS, replicates the popular restaurant discovery platform. It offers an intuitive interface for exploring restaurants and cuisines. The project showcases skills in recreating complex user interfaces and implementing responsive design for optimal viewing on larger screens.",
      imgURL: imgZomato,
      liveLink: "https://my-zomato-clone-six.vercel.app/",
      githubLink: "https://github.com/himanshusharma2007/My-Zomato-Clone",
      techstack: "React, Tailwind CSS, JavaScript",
    },
    {
      id: 8,
      title: "Task Managing App",
      desc: "This Todo List project is a task management application designed to help users organize their tasks efficiently and boost productivity. It provides a user-friendly interface for adding, editing, and completing tasks. The project demonstrates skills in creating practical, interactive web applications for everyday use.",
      imgURL: imgTodo,
      liveLink: "https://himanshusharma2007.github.io/My-Todo-s/",
      githubLink: "https://github.com/himanshusharma2007/My-Todo-s",
      techstack: "HTML, CSS, JavaScript",
    },
    {
      id: 9,
      title: "Microsoft Clone",
      desc: "This project is a responsive recreation of the Microsoft website using Tailwind CSS and JavaScript. It faithfully replicates the design and layout of Microsoft's official site, demonstrating skills in modern CSS frameworks and responsive web design. The clone showcases the ability to recreate complex, professional-grade websites.",
      imgURL: imgMicrosoft,
      liveLink:
        "https://microsoft-clone-git-main-himanshusharma2007s-projects.vercel.app/",
      githubLink: "https://github.com/himanshusharma2007/Microsoft-Clone",
      techstack: "HTML, Tailwind CSS, JavaScript",
    },
    {
      id: 10,
      title: "Tic Tec Toe Game",
      desc: "This classic Tic Tac Toe game is built using HTML, CSS, and JavaScript. It offers a simple yet engaging gaming experience, allowing users to play the timeless strategy game in their web browsers. The project demonstrates skills in creating interactive web-based games and implementing game logic using JavaScript.",
      imgURL: imgTicTec,
      liveLink: "https://himanshusharma2007.github.io/TicTecToe-Game/",
      githubLink: "#",
      techstack: "HTML, CSS, JavaScript",
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
