import IconCloud from "@/components/ui/icon-cloud";
import python from "../assets/python.png";
import java from "../assets/java.png";
import js from "../assets/js.png";
import figma from "../assets/figma.png";
import react from "../assets/react.png";
import tw from "../assets/tw.png";
import git from "../assets/git.png";
import github from "../assets/githubW.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import vs from "../assets/vs.png";
import ubuntu from "../assets/ubuntu.png";
import sql from "../assets/sql.png";
import jira from "../assets/jira.png";

const texts = [
  "Python",
  "React",
  "JavaScript",
  "TypeScript",
  "Django",
  "Tailwind",
  "Node.js",
  "GitHub",
];

const images = [
  python,
  java,
  js,
  figma,
  react,
  tw,
  git,
  github,
  html,
  css,
  vs,
  ubuntu,
  sql,
  jira,
];
const Skills = () => {
  return (
    <section className=" pt-20" id="skills">
      <h2 className="mb-24 text-center text-3xl lg:text-4xl">SKILLS</h2>
      <div className="flex flex-row">
        <div className=" flex flex-col justify-between items-center h-[300px]">
          <img
            src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
            alt="Python"
            className="mb-4"
          />
          <img
            src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"
            alt="JavaScript"
            className="mb-4"
          />
          <img
            src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"
            alt="React"
            className="mb-4"
          />
          <img
            src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white"
            alt="Django"
            className="mb-4"
          />
        </div>
        <div className=" flex size-full max-w-lg items-center bg-black bg-opacity-75 justify-center overflow-hidden rounded-full  p-20 border-8 shadow-[0_0_15px_4px_rgba(255,255,255,0.8)] ">
          <IconCloud imageArray={images} />
        </div>
      </div>

      {/* <div className="flex items-center gap-3 my-3 md:mt-4 ml-2">
        {SKILLS.map((skill, index) => (
          <img
            key={index}
            src={skill.icon}
            alt={skill.name}
            className=" p-4 rounded-full bg-white "
          />
        ))}
      </div> */}
    </section>
  );
};

export default Skills;
