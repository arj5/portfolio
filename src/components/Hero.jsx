import { HERO } from "../info";
import arj from "../assets/arjunCircle.jpeg";
import { FaLocationDot } from "react-icons/fa6";
import { MdSchool } from "react-icons/md";

const Hero = () => {
  return (
    <>
      <section className="flex min-h-screen flex-wrap items-center">
        <div className="w-full md:w-1/2 border-l-8 border-white pl-5">
          <h2 className=" text-4xl px-2 font-bold md:text-5xl lg:text-[7rem]">
            {HERO.first}
          </h2>
          <h2 className=" text-4xl px-2 font-thin md:text-5xl lg:text-[7rem]">
            {HERO.last}
          </h2>
          <p className="pl-2 py-7 text-3xl tracking-tighter md:text-4xl">
            {HERO.greet}
          </p>
          <p className="flex flex-row items-center gap-2 pl-2 text-3xl tracking-tighter md:text-xl">
            <FaLocationDot />
            {HERO.location}
          </p>
          <p className="flex flex-row items-center gap-2 pl-2 text-sm tracking-tighter md:text-xl">
            <MdSchool />
            {HERO.school}
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:p-8">
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
