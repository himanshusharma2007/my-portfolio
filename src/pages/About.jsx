import React from "react";
import { BiPhone } from "react-icons/bi";
import { GoArrowRight } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[88vh] bg-zinc-900 text-white flex  items-center"
    >
      <div>
        <div className="wraper w-full flex justify-center items-center ">
          <h2 className="text-4xl w-fit flex flex-col justify-center items-start font-bold text-center mb-6 ubuntu ">
            About Me
            <span className="h-[4px] w-[50px] bg-green-500 mt-1 rounded-md"></span>
          </h2>
        </div>
        <div className="main w-full flex flex-col  md:flex-row  justify-between items-stretch">
          <div className="left-container w-full md:w-[45%]  p-3 ubuntu-text flex flex-col justify-between">
            <p className="mb-4 text-lg tracking-wide">
              Hey there! I'm <span className="font-bold">Himanshu Sharma</span>,
              a Full Stack Developer in my 3rd year of BCA at CIITM College. I
              whip up fancy digital experiences and dabble in all kinds of
              coding languages and tech.
            </p>
            <p className="mb-4 text-lg  tracking-wide">
              I love cooking up creative solutions for both front-end and
              back-end. I've mastered a bunch of tech and finished some pretty
              cool projects. Let's create something awesome together!
            </p>
            <Link to="/skill">
              <button className="bg-green-700 rounded-md text-md flex items-center p-2 space-x-2 max-w-fit text-center">
                <div>My Skills</div> <GoArrowRight fontSize="20px" />
              </button>
            </Link>
          </div>
          <div className="right-contailer p-3 md:w-1/2 ">
            <div className=" w-full  bg-zinc-800  overflow-y-scroll rounded-md p-3 custom-scrollbar flex flex-col space-y-5 max-h-[70vh] shadow-md">
              <div className="Exprience">
                <h2 className="flex text-xl justify-start items-center">
                  <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
                  Experience
                </h2>
                <div className="main w-full bg-zinc-700 p-3 mt-2 flex flex-col rounded-md">
                  <div className="header w-full flex justify-between ">
                    <h3 className="w-1/2">Full Stack dev Internship</h3>
                    <h3 className="w-1/2 text-green-500 flex justify-end">
                      Summer 2024
                    </h3>
                  </div>
                  <div className="text-sm mt-3 ubuntu-text text-zinc-300">
                    I took the full stack development internship organized by my
                    college in the summer of 2024.
                  </div>
                </div>
              </div>
              <div className="Education">
                <h2 className="flex text-xl justify-start items-center">
                  <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
                  Education
                </h2>
                <div className="main w-full bg-zinc-700 p-3 mt-2 flex flex-col rounded-md">
                  <div className="header w-full flex justify-between ">
                    <h3 className="w-1/2">Bechlor of Computer Applications</h3>
                    <h3 className="w-1/2 text-green-500 flex justify-end">
                      2022-2025
                    </h3>
                  </div>
                  <div className="text-sm mt-3 ubuntu-text text-zinc-300">
                    I'm pursing BCA 3rd year from CIITM college Jaipur
                    ,Rajasthan.
                  </div>
                </div>
              </div>
              <div className="Certifications flex flex-col space-y-3">
                <h2 className="flex text-xl justify-start items-center">
                  <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
                  Certifications
                </h2>
                <div className="certificate1 w-full bg-zinc-700 p-3 mt-2 flex flex-col rounded-md">
                  <div className="header w-full flex justify-between ">
                    <h3 className="w-full">
                      Certification in Cyber Security given by Poblo Alto
                      Networks{" "}
                    </h3>
                  </div>
                  <div className="text-sm mt-3 ubuntu-text text-zinc-300">
                    In this certification, I gained knowledge about web app
                    security and protection. It equipped me with the skills to
                    safeguard applications against various threats
                  </div>
                </div>
                <div className="certificate2 w-full bg-zinc-700 p-3 mt-2 flex flex-col rounded-md">
                  <div className="header w-full flex justify-between ">
                    <h3 className="w-full">
                      Introduction of MongoDB for Students{" "}
                    </h3>
                  </div>
                  <div className="text-sm mt-3 ubuntu-text text-zinc-300">
                    In this certification, I gained knowledge about the
                    fundaments and some advance feature of MongoDB Database.
                  </div>
                </div>
              </div>
              <div className="Languges">
                <h2 className="flex text-xl justify-start items-center">
                  <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
                  Language
                </h2>
                <div className="flex flex-col space-y-3">
                  <div className="first w-full bg-zinc-700 p-3 mt-2 flex flex-col rounded-md">
                    English
                  </div>
                  <div className="second w-full bg-zinc-700 p-3 mt-2 flex flex-col rounded-md">
                    Hindi
                  </div>
                </div>
              </div>
              <div className="locality">
                <h2 className="flex text-xl justify-start items-center">
                  <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
                  Locality
                </h2>
                <div className="wraper flex justify-between w-full bg-zinc-700 p-3 mt-2   rounded-md">
                  Jaipur, Rajasthan
                  <div>India</div>
                </div>
              </div>
              <div className="freelancing">
                <h2 className="flex text-xl justify-start items-center">
                  <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
                  Freelace/Remote work/Offline
                </h2>
                <div className=" w-full bg-zinc-700 p-3 mt-2   rounded-md">
                  Available
                </div>
              </div>
              <div className="contact">
                <h2 className="flex text-xl justify-start items-center">
                  <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
                  Contact
                </h2>
                <div className="w-full bg-zinc-700 p-3 mt-2   rounded-md flex flex-col space-y-2">
                  <div className="phone flex items-center space-x-2">
                    <BiPhone className="text-[20px] " />{" "}
                    <div> +91 9216363747</div>
                  </div>
                  <div className="email ml-1 flex items-center space-x-3">
                    <TfiEmail className="text-[16px] text-center" />{" "}
                    <div> sharmahimanshu6478@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
