import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import p1 from "../assets/portfolio.png";
import p2 from "../assets/arjunCircle.jpeg";

//   import { RiReactjsLine } from "react-icons/ri";
//   import { TbBrandNextjs } from "react-icons/tb";
//   import { SiMongodb } from "react-icons/si";
//   import { DiRedis } from "react-icons/di";
//   import { FaNodeJs } from "react-icons/fa";
//   import { BiLogoPostgresql } from "react-icons/bi";

export const LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  first: "ARJUN",
  last: "SHARMA",
  greet: "Hello there!",
  location: "Toronto",
  school: "3rd Year @ Toronto Metropolitan University",
  degree: "Computer Science Co-op Program (BSc)",
};

// Toronto Metropolitan University (formerly Ryerson), Toronto, ON Sep 2022 - April 2027 (Exp) Bachelor of Science (BSc): Computer Science Co-op Program.

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website to showcase my skills, projects, and contact information.",
    image: p1,
    tech: [
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "ThreeJS",
      "EmailJS",
      "ReactHotToast",
    ],
    git: "https://github.com/arj5/portfolio",
  },
];

// export const BIO = [

// ];

export const SKILLS = [
  // {
  //   icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
  //   name: "React",
  //   experience: "2+ years",
  // },
  // {
  //   icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
  //   name: "Next.js",
  //   experience: "1+ year",
  // },
  // {
  //   icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
  //   name: "MongoDB",
  //   experience: "1.5+ years",
  // },
  // {
  //   icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
  //   name: "Redis",
  //   experience: "1+ year",
  // },
  // {
  //   icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
  //   name: "Node.js",
  //   experience: "2+ years",
  // },
  // {
  //   icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
  //   name: "PostgreSQL",
  //   experience: "1+ year",
  // },
];

export const SOCIAL = [
  {
    href: "https://github.com/arj5",
    icon: (
      <FaGithub
        fontSize={35}
        className="transition-transform duration-300 hover:scale-150"
      />
    ),
  },
  {
    href: "http://www.linkedin.com/in/arjunsharma0510",
    icon: (
      <FaLinkedin
        fontSize={35}
        className="transition-transform duration-300 hover:scale-150"
      />
    ),
  },
  {
    href: "mailto:arjunsharma0510@gmail.com",
    icon: (
      <MdEmail
        fontSize={35}
        className="transition-transform duration-300 hover:scale-150"
      />
    ),
  },
];
