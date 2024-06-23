import React, { useEffect, useRef } from "react";
import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { TfiHtml5 } from "react-icons/tfi";
import { gsap } from "gsap";

const Skill = () => {
  const experienceRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e, experienceText) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const cardWidth = rect.width;
      const cardHeight = rect.height;
      const centerX = rect.left + cardWidth / 2;
      const centerY = rect.top + cardHeight / 2;
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      const rotateX = mouseY / (cardHeight / 2);
      const rotateY = -mouseX / (cardWidth / 2);

      gsap.to(card, {
        duration: 0.2,
        rotateX: rotateX * 20,
        rotateY: rotateY * 20,
        boxShadow: `${rotateY * 2}px ${rotateX * 2}px 20px rgba(0, 0, 0, 0.2)`,
      });

      if (experienceRefs.current[experienceText]) {
        gsap.to(experienceRefs.current[experienceText], {
          opacity: 1,
          y: 0,
          delay: 0.2,
          duration: 1,
        });
      }
    };

    const handleMouseLeave = (e, experienceText) => {
      const card = e.currentTarget;
      gsap.to(card, {
        duration: 0.5,
        rotateX: 0,
        rotateY: 0,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      });

      if (experienceRefs.current[experienceText]) {
        gsap.to(experienceRefs.current[experienceText], {
          opacity: 0,
          y: 20,
          delay: 0.2,
          duration: 1,
        });
      }
    };

    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      const cardNameElement = card.querySelector(".card-name");
      if (cardNameElement) {
        const experienceText = cardNameElement.textContent.trim();
        experienceRefs.current[experienceText] =
          card.querySelector(".experience");

        card.addEventListener("mousemove", (e) =>
          handleMouseMove(e, experienceText)
        );
        card.addEventListener("mouseleave", (e) =>
          handleMouseLeave(e, experienceText)
        );
      }
    });

    return () => {
      cards.forEach((card) => {
        const cardNameElement = card.querySelector(".card-name");
        if (cardNameElement) {
          const experienceText = cardNameElement.textContent.trim();
          card.removeEventListener("mousemove", (e) =>
            handleMouseMove(e, experienceText)
          );
          card.removeEventListener("mouseleave", (e) =>
            handleMouseLeave(e, experienceText)
          );
        }
      });
    };
  }, []);

  return (
    <div className="md:min-h-[88vh] bg-zinc-900 text-white pb-3">
      <div className="main flex justify-center items-center flex-col ">
        <h2 className="text-5xl w-fit flex flex-col justify-center items-start font-bold text-center mb-4 patrick">
          Skills
          <span className="h-[4px] w-[50px] bg-green-500 mt-1 rounded-md"></span>
        </h2>
        <div className="skill-cards flex flex-wrap gap-x-4 md:gap-x-10 gap-y-7 justify-center items-center px-1">
          <div className="card cursor-pointer hover:text-green-500 flex flex-col rounded-lg bg-zinc-700 w-[160px] h-[200px] justify-center items-center">
            <div>
              <TfiHtml5 className="text-[70px] mt-2" />
            </div>
            <div className="card-name mt-3 text-lg">HTML 5</div>
            <div className="experience w-[60%] text-center opacity-0 -translate-y-4 mt-1">
              2+ years Experience
            </div>
          </div>
          <div className="card cursor-pointer hover:text-green-500 flex flex-col rounded-lg bg-zinc-700 w-[160px] h-[200px] justify-center items-center">
            <div>
              <FaCss3Alt className="text-[70px] mt-2" />
            </div>
            <div className="card-name mt-3 text-lg">CSS 3</div>
            <div className="experience w-[60%] text-center opacity-0 -translate-y-4">
              2+ year Experience
            </div>
          </div>
          <div className="card cursor-pointer hover:text-green-500 flex flex-col rounded-lg bg-zinc-700 w-[160px] h-[200px] justify-center items-center">
            <div>
              <SiJavascript className="text-[70px] mt-2" />
            </div>
            <div className="card-name mt-3 text-lg">Javascript</div>
            <div className="experience w-[60%] text-center opacity-0 -translate-y-4">
              1.5+ year Experience
            </div>
          </div>
          <div className="card cursor-pointer hover:text-green-500 flex flex-col rounded-lg bg-zinc-700 w-[160px] h-[200px] justify-center items-center">
            <div>
              <FaReact className="text-[70px] mt-2" />
            </div>
            <div className="card-name mt-3 text-lg">React</div>
            <div className="experience w-[60%] text-center opacity-0 -translate-y-4">
              1+ year Experience
            </div>
          </div>
          <div className="card cursor-pointer hover:text-green-500 flex flex-col rounded-lg bg-zinc-700 w-[160px] h-[200px] justify-center items-center">
            <div>
              <RiTailwindCssFill className="text-[70px] mt-2" />
            </div>
            <div className="card-name mt-3 text-lg">Tailwind CSS</div>
            <div className="experience w-[60%] text-center opacity-0 -translate-y-4">
              1+ year Experience
            </div>
          </div>
          <div className="card cursor-pointer hover:text-green-500 flex flex-col rounded-lg bg-zinc-700 w-[160px] h-[200px] justify-center items-center">
            <div>
              <FaBootstrap className="text-[70px] mt-2" />
            </div>
            <div className="card-name mt-3 text-lg">BootStrap 5</div>
            <div className="experience w-[60%] text-center opacity-0 -translate-y-4">
              2+ year Experience
            </div>
          </div>
          <div className="card cursor-pointer hover:text-green-500 flex flex-col rounded-lg bg-zinc-700 w-[160px] h-[200px] justify-center items-center">
            <div>
              <IoLogoFirebase className="text-[70px] mt-2" />
            </div>
            <div className="card-name mt-3 text-lg">Firebase</div>
            <div className="experience w-[60%] text-center opacity-0 -translate-y-4">
              1+ years Experience
            </div>
          </div>

          <div className="card cursor-pointer hover:text-green-500 flex flex-col rounded-lg bg-zinc-700 w-[160px] h-[200px] justify-center items-center">
            <div>
              <GrMysql className="text-[70px] mt-2" />
            </div>
            <div className="card-name mt-3 text-lg">My SQL</div>
            <div className="experience w-[60%] text-center opacity-0 -translate-y-4">
              1+ year Experience
            </div>
          </div>
          <div className="card cursor-pointer hover:text-green-500 flex flex-col rounded-lg bg-zinc-700 w-[160px] h-[200px] justify-center items-center">
            <div>
              <FaPhp className="text-[70px] mt-2" />
            </div>
            <div className="card-name mt-3 text-lg">Php</div>
            <div className="experience w-[60%] text-center opacity-0 -translate-y-4">
              6+ months Experience
            </div>
          </div>
          <div className="card cursor-pointer hover:text-green-500 flex flex-col rounded-lg bg-zinc-700 w-[160px] h-[200px] justify-center items-center">
            <div>
              <FaGithub className="text-[70px] mt-2" />
            </div>
            <div className="card-name mt-3 text-lg">Github</div>
            <div className="experience w-[60%] text-center opacity-0 -translate-y-4">
              1.5+ years Experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
