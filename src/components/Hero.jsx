import { HERO } from "../info";
import arj from "../assets/arjunCircle.jpeg";

const Hero = () => {
  return (
    <>
      <section className="flex min-h-screen flex-wrap items-center">
        <div className="w-full md:w-1/2">
          <h2 className=" text-4xl px-2 font-bold md:text-5xl lg:text-[7rem]">
            {HERO.first}
          </h2>
          <h2 className=" text-4xl px-2 font-bold md:text-5xl lg:text-[7rem]">
            {HERO.last}
          </h2>
          <p className="p-2 text-3xl tracking-tighter md:text-4xl">
            {HERO.greet}
          </p>
          <p className="p-2 text-3xl tracking-tighter md:text-xl">
            {HERO.description}
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={arj} width={450} className="imgBorder rounded-full z-30" alt="arjun" />
           


          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
