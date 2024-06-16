import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-zinc-900 text-white w-full flex justify-between items-center  px-12 ubuntu-text h-[15vh]">
      <Link to="/">
        <div className="text-3xl satisfy font-bold">
          Himanshu<span className="text-green-500">.</span>
        </div>
      </Link>
      <nav className="space-x-6">
        <Link to="/">
          <button className="active:text-green-500">Home</button>
        </Link>
        <Link to="about">
          <button className="active:text-green-500">About me</button>
        </Link>
        <Link to="skill">
          <button>Skills</button>
        </Link>
        <Link to="contact">
          <button>Contact</button>
        </Link>
        <Link to="projects">
          <button>Projects</button>
        </Link>

        <button className="bg-green-500 text-black px-4 py-2 rounded-full">
          Hire me
        </button>
      </nav>
    </header>
  );
};

export default Header;
