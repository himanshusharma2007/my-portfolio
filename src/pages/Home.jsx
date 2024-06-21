import {
  Download,
  Github,
  Instagram,
  Linkedin,
  Twitch,
  Twitter,
} from "lucide-react";
import avtarImg from "../assets/images/download.png";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { TextPlugin } from "gsap/all";
import PhotoBorder from "../components/PhotoBorder";
import About from "./About";
import Skill from "./Skill";


const Home = () => {
  const textRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    const strings = [
      "Himanshu Sharma",
      "a Full Stack Developer",
      "a React Developer",
      "a UI/UX Designer",
    ];

    const durationPerLetter = 0.12; // Adjust this value for speed
    const delayBetweenStrings = 1.3; // Adjust this value for delay between animations

    const tl = gsap.timeline({ repeat: -1 });

    strings.forEach((string, index) => {
      // Type each letter of the string
      for (let i = 1; i <= string.length; i++) {
        tl.to(textRef.current, {
          duration: durationPerLetter,
          text: string.slice(0, i),
          ease: "none",
        });
      }

      // Add a delay after typing the full string
      tl.to({}, { duration: delayBetweenStrings });

      // Delete each letter of the string
      for (let i = string.length; i >= 0; i--) {
        tl.to(textRef.current, {
          duration: durationPerLetter,
          text: string.slice(0, i),
          ease: "none",
        });
      }

      // Add a delay after deleting the string
      tl.to({}, { duration: delayBetweenStrings });
    });
  }, []);

  return (
    <>
      <div className="text-white w-full md:h-[88vh]   flex flex-col items-center justify-around ubuntu-text px-4 mb-10">
        <main className="flex flex-col-reverse  md:flex-row items-center justify-between w-full max-w-6xl">
          <div className="text-center md:text-left md:w-1/2 space-y-3">
            <h2 className="text-xl ">Full Stack Developer</h2>
            <h1 className="text-[28px] sm:text-[37px] font-bold ubuntu">
              Hello I'm <br></br>
              <div
                ref={textRef}
                className="text-green-500 md:min-h-[70px] h-auto  w-full"
              >
                {" "}
              </div>
            </h1>
            <p className="text-zinc-400 text-wrap">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col space-y-8 justify-center md:justify-start">
              <div className="wrapper w-full flex justify-center md:justify-start items-center">
                <button className="bg-transparent border border-green-500 w-fit text-green-500 hover:border-green-300 hover:text-green-300 px-4 py-2 rounded-full flex items-center space-x-2 mt-2">
                  <span>Download My CV</span>
                  <span>
                    {" "}
                    <Download />
                  </span>
                </button>
              </div>
              <div className="social-media flex items-center justify-center md:justify-start ">
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
          <div className="mt-10 mb-10 md:mt-12 md:w-1/2 h-ful flex justify-center ">
            <div className="relative image-wraper flex justify-center items-center  w-full ">
              <img
                src={avtarImg}
                alt="Profile"
                className="avater-image rounded-full z-40 w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent">
                <PhotoBorder />
              </div>
            </div>
          </div>
        </main>
        <footer className="w-full mt-8 flex justify-center items-center">
          <div className="wrap w-full grid grid-cols-2 gap-10 sm:grid-cols-4 text-center md:text-left  md:space-y-0 lg:space-x-4 ">
            <div className="flex flex-col items-center md:flex-row md:items-center space-x-2">
              <h3 className="text-[32px] sm:text-[40px] font-bold">2+</h3>
              <p className="text-center text-zinc-400 text-wrap max-w-[60%] md:justify-start ">
                Years of experience
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-center space-x-2">
              <h3 className="text-[32px] sm:text-[40px] font-bold">15+</h3>
              <p className="text-center text-zinc-400 text-wrap w-[60%] ">
                Projects completed
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-center space-x-2">
              <h3 className="text-[32px] sm:text-[40px] font-bold">8+</h3>
              <p className="text-center text-zinc-400 text-wrap w-[60%] ">
                Technologies mastered
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-center  space-x-2">
              <h3 className="text-[32px] sm:text-[40px] font-bold">200+</h3>
              <p className="text-center text-zinc-400  text-wrap w-[40%] ">
                Code commits
              </p>
            </div>
          </div>
        </footer>
      </div>
      <About />
      <Skill />
    </>
  );
};

export default Home;
