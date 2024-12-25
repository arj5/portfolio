import { HERO } from "../info";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center">
      <div className="w-full md:w-1/2">
        <h2 className="my-8 text-4xl p-2 font-bold md:text-5xl lg:text-[7rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter md:text-4xl">
          {HERO.greet}
        </p>
      </div>
    </section>
  );
};

export default Hero;
