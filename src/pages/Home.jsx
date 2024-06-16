import {
  Download,
  Github,
  Instagram,
  Linkedin,
  Twitch,
  Twitter,
  
} from "lucide-react";
import avtarImg from "../assets/images/download.png";

const Home = () => {
  return (
    <div className=" text-white min-h-[85vh] flex  flex-col  items-center justify-center  ubuntu-text">
      <main className="flex flex-col-reverse sm:flex-col md:flex-row items-center justify-between w-full max-w-6xl ">
        <div className="text-center md:text-left md:w-1/2 space-y-3">
          <h2 className="text-xl ">Full Stack Developer</h2>
          <h1 className="text-[44px] font-bold ubuntu">
            Hello I'm <br></br>
            <span className="  text-green-500">Himanshu Sharma</span>
          </h1>
          <p className="text-zinc-400">
            I excel at crafting elegant digital experiences and I am proficient
            in various programming languages and technologies.
          </p>
          <div className="flex flex-col space-y-6 justify-center md:justify-start ">
            <button className="bg-transparent border border-green-500 w-fit text-green-500 px-4 py-2 rounded-full flex items-center space-x-2 mt-2">
              <span>Download My CV</span>
              <span>
                {" "}
                <Download />
              </span>
            </button>
            <div className="social-media flex items-center px-3">
              <a
                href="#github"
                className="text-green-500 hover:text-green-300 mr-10"
              >
                <Github />
              </a>
              <a
                href="#linkedin"
                className="text-green-500 hover:text-green-300 mr-10"
              >
                <Linkedin />
              </a>
              <a
                href="#twitter"
                className="text-green-500 hover:text-green-300 mr-10"
              >
                <Twitter />
              </a>
              <a
                href="#youtube"
                className="text-green-500 hover:text-green-300"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2 flex justify-end items-center">
          <div className="relative">
            <img
              src={avtarImg}
              alt="Profile"
              className="rounded-full z-40 w-[300px] h-[300px] object-cover m-3"
            />
            <div className="absolute inset-0 animate-spin-slow custom-dash "></div>
          </div>
        </div>
      </main>
      <footer className="w-full max-w-6xl  mt-8 grid grid-cols-1 smgrid-cols-2 md:grid-cols-4 place-items-center sm:justify-between text-center md:text-left px-8 ">
        <div className="flex w-[100px] justify-center items-center space-x-2">
          <h3 className="text-[50px]  font-bold">2+</h3>
          <p className="text-zinc-400 text-wrap">Years of experience</p>
        </div>
        <div className="flex w-[100px] justify-center items-center space-x-2">
          <h3 className="text-[50px] font-bold">15+</h3>
          <p className="text-zinc-400">Projects completed</p>
        </div>
        <div className="flex w-[100px] justify-center items-center space-x-2">
          <h3 className="text-[50px] font-bold">8</h3>
          <p className="text-zinc-400">Technologies mastered</p>
        </div>
        <div className="flex w-[100px] justify-center items-center space-x-2">
          <h3 className="text-[50px] font-bold">200+</h3>
          <p className="text-zinc-400">Code commits</p>
        </div>
      </footer>
    </div>
  );
};
export default Home;
