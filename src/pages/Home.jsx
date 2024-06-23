import { Download, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import avtarImg from "../assets/images/file (2).png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef } from "react";
import PhotoBorder from "../components/PhotoBorder";
import About from "./About";
import Skill from "./Skill";
import Projects from "./Projects";
import Contact from "./Contact";
import cv from "../assets/Himanshu_Sharma_CV.pdf";
gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Home = () => {
  const textRef = useRef(null);
  const countRefs = useRef([]);

  useEffect(() => {
    const strings = [
      "Himanshu Sharma",
      "a Full Stack Dev",
      "a React Developer",
      "a UI/UX Designer",
    ];

    const durationPerLetter = 0.12;
    const delayBetweenStrings = 1.3;

    const tl = gsap.timeline({ repeat: -1 });

    strings.forEach((string) => {
      for (let i = 1; i <= string.length; i++) {
        tl.to(textRef.current, {
          duration: durationPerLetter,
          text: string.slice(0, i),
          ease: "none",
        });
      }
      tl.to({}, { duration: delayBetweenStrings });
      for (let i = string.length; i >= 0; i--) {
        tl.to(textRef.current, {
          duration: durationPerLetter,
          text: string.slice(0, i),
          ease: "none",
        });
      }
      tl.to({}, { duration: delayBetweenStrings });
    });
  }, []);
  useEffect(() => {
    const animateValue = (obj, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        obj.innerHTML = current + "+";
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    countRefs.current.forEach((ref) => {
      const endValue = parseInt(ref.innerText, 10);
      if (!isNaN(endValue)) {
        // Adjust duration calculation to make it slower for smaller numbers
        const duration = Math.max(2000, endValue * 20); // Minimum 2 seconds, then 100ms per unit
        animateValue(ref, 0, endValue, duration);
      }
    });
  }, []);

  return (
    <div className="flex flex-col space-y-16">
      <div className="text-white w-full md:h-[88vh] flex flex-col items-center justify-around ubuntu-text px-4 ">
        <main className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl">
          <div className="text-center md:text-left md:w-1/2 space-y-3">
            <h2 className="text-xl">Full Stack Developer</h2>
            <h1 className="text-[28px] sm:text-[37px] font-bold ubuntu">
              Hello I'm <br />
              <div
                ref={textRef}
                className="text-green-500 
        flex min-h-[52px] justify-center md:justify-start items-center  md:min-h-[70px] h-auto w-full"
              ></div>
            </h1>
            <p className="text-zinc-400 text-wrap">
              I Blend creativity with technical prowers to solve complex
              challenges and build captivating digital experiences that make a
              lasting impact.
            </p>
            <div className="flex flex-col space-y-8 justify-center md:justify-start">
              <div className="wrapper w-full flex justify-center md:justify-start items-center">
                <a
                  href={cv}
                  download="Himanshu_Sharma_CV.pdf"
                  className="bg-transparent border border-green-500 w-fit text-green-500 hover:border-green-300 hover:text-green-300 px-4 py-2 rounded-full flex items-center space-x-2 mt-2"
                >
                  <span>Download My CV</span>
                  <span>
                    <Download />
                  </span>
                </a>
              </div>
              <div className="social-media flex items-center justify-center md:justify-start">
                <a href="https://github.com/himanshusharma2007" target="_blank">
                  <button className="text-green-500 hover:text-green-300 mr-10">
                    <Github />
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/in/himanshu-sharma-572a152b7/"
                  target="_blank"
                >
                  <button className="text-green-500 hover:text-green-300 mr-10">
                    <Linkedin />
                  </button>
                </a>
                <a href="https://x.com/Himanshush56261" target="_blank">
                  <button className="text-green-500 hover:text-green-300 mr-10">
                    <Twitter />
                  </button>
                </a>
                <a
                  href="https://www.instagram.com/_himanshu_sharma007_/?igsh=MXAxd2VpbGt1Z3Vybg%3D%3D"
                  target="_blank"
                >
                  <button className="text-green-500 hover:text-green-300 ">
                    <Instagram />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-10 mb-10 md:mt-12 md:w-1/2 h-full flex justify-center">
            <div className="relative image-wraper flex justify-center items-center w-full ">
              <img
                src={avtarImg}
                alt="Profile"
                className="avater-image rounded-full z-40 h-[180px] w-[180px] sm:w-[250px]  sm:h-[250px] object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent">
                <PhotoBorder />
              </div>
            </div>
          </div>
        </main>
        <footer className="w-full mt-8 flex justify-center items-center">
          <div className="wrap w-full grid grid-cols-2 gap-10 sm:grid-cols-4 text-center md:text-left md:space-y-0 lg:space-x-4 ">
            <div className="flex flex-col items-center  md:flex-row md:items-center space-x-2">
              <h3
                className="count-number text-[32px] sm:text-[40px] font-bold"
                ref={(el) => (countRefs.current[0] = el)}
              >
                2
              </h3>
              <p className="text-center text-zinc-400 text-wrap max-w-[60%] md:justify-start">
                Years of experience
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-center space-x-2">
              <h3
                className="count-number text-[32px] sm:text-[40px] font-bold"
                ref={(el) => (countRefs.current[1] = el)}
              >
                15
              </h3>
              <p className="text-center text-zinc-400 text-wrap w-[60%]">
                Projects completed
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-center space-x-2 ">
              <h3
                className="count-number text-[32px] sm:text-[40px] font-bold"
                ref={(el) => (countRefs.current[2] = el)}
              >
                8
              </h3>
              <p className="text-center text-zinc-400 text-wrap w-[60%]">
                Technologies mastered
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-center space-x-2 ">
              <h3
                className="count-number text-[32px] sm:text-[40px] font-bold"
                ref={(el) => (countRefs.current[3] = el)}
              >
                200
              </h3>
              <p className="text-center text-zinc-400 text-wrap w-[40%]">
                Code commits
              </p>
            </div>
          </div>
        </footer>
      </div>
      <About />
      <Skill />
      <Projects />
      <Contact text="Let's work together" />
    </div>
  );
};

export default Home;
