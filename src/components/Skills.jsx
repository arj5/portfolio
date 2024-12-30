import { SKILLS } from "../info";

const Skills = () => {
  return (
    <section className="pt-20" id="skills">
      <h2 className="mb-24 text-center text-3xl lg:text-4xl">SKILLS</h2>

      <div className="flex items-center gap-3 my-3 md:mt-4 ml-2">
        {SKILLS.map((skill, index) => (
          <img
            key={index}
            src={skill.icon}
            alt={skill.name}
            className=" p-4 rounded-full bg-white "
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
