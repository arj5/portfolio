import { HERO, SOCIAL } from "../info";
import arj from "../assets/arjunCircle.jpeg";
import { FaLocationDot, FaSchoolFlag } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";
import signW from "../assets/signW.png";
import Typed from "typed.js";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: [
        "Software Developer",
        "UI/UX Developer",
        "Full-Stack Developer",
        "Software Engineer",
        "Spider-Man",
      ],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section
        className="flex md:min-h-screen flex-wrap items-center md:mt-1 mt-14"
        id="home"
      >
        <div className="w-full md:w-1/2 md:border-l-8 border-b-4 md:border-b-0 border-white md:pl-5 text-center md:text-left">
          <h2 className=" text-7xl px-2 pt-20 md:pt-0 font-bold md:text-5xl lg:text-[7rem]">
            {HERO.first}
          </h2>
          <h2 className=" text-6xl px-2 font-thin md:text-5xl lg:text-[7rem]">
            {HERO.last}
          </h2>
          <p className="pl-2 py-7 text-3xl tracking-tighter md:text-4xl">
            <span className="auto-type"></span>
          </p>
          <div className="flex flex-row items-center gap-2 pl-2 text-xl md:text-xl">
            <FaLocationDot />
            {HERO.location}
          </div>
          <p className="flex flex-row items-center  gap-2 pl-2 md:pl-2 text-xl tracking-tighter md:text-xl">
            <MdSchool />
            {HERO.degree}
          </p>
          <p className="flex flex-row  items-center  gap-2 pl-2 md:pl-2 text-xl tracking-tighter md:text-xl">
            <FaSchoolFlag />
            {HERO.school}
          </p>

          <div className="flex items-center gap-3 my-3 md:mt-4 ml-2">
            <a href="#contact">
              <button className="bg-sky-950 text-sky-400 border border-sky-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span className="bg-sky-400 shadow-sky-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Contact Me
              </button>
            </a>
            {SOCIAL.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className=" max-w-full md:w-1/2 lg:p-8 ">
          <div className="flex relative justify-center items-center flex-col">
            <img
              src={arj}
              width={450}
              className="imgBorder rounded-full z-30"
              alt="arjun"
            />
            <div className="md:absolute md:w-full md:z-50 md:top-[320px] md:left-[280px]">
              <img src={signW} width={160} alt="signW" className="mx-3" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
