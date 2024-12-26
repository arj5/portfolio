import { HERO } from "../info";
import arj from "../assets/arjunCircle.jpeg";
import { FaLocationDot, FaSchoolFlag } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <section className="flex md:min-h-screen flex-wrap items-center md:mt-1 mt-14">
        <div className="w-full md:w-1/2 md:border-l-8 border-b-4 md:border-b-0 border-white md:pl-5 text-center md:text-left">
          <h2 className=" text-7xl px-2 pt-20 md:pt-0 font-bold md:text-5xl lg:text-[7rem]">
            {HERO.first}
          </h2>
          <h2 className=" text-6xl px-2 font-thin md:text-5xl lg:text-[7rem]">
            {HERO.last}
          </h2>
          <p className="pl-2 py-7 text-3xl tracking-tighter md:text-4xl">
            {HERO.greet}
          </p>
          <div className="flex flex-row items-center gap-2 pl-2 text-xl md:text-xl">
            <FaLocationDot />
            {HERO.location}
          </div>
          <p className="flex flex-row items-center  gap-2 pl-2 md:pl-2 text-xl tracking-tighter md:text-xl">
            <MdSchool />
            {HERO.degree}
          </p>
          <p className="flex flex-row pb-5 md:pb-0 items-center  gap-2 pl-2 md:pl-2 text-xl tracking-tighter md:text-xl">
            <FaSchoolFlag />
            {HERO.school}
          </p>
        </div>
        <div className="max-w-full md:w-1/2 lg:p-8 ">
          <div className="flex justify-center">
            <img
              src={arj}
              width={450}
              className="imgBorder rounded-full z-30"
              alt="arjun"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
