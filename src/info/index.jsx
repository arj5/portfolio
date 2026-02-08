import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import p1 from "../assets/p.png";
import p2 from "../assets/tasks.png";
import p3 from "../assets/q.png";
import p4 from "../assets/w.png";
import p5 from "../assets/rebrand.png";
import p6 from "../assets/music.png";
import p7 from "../assets/tic.png";
import p8 from "../assets/skill.png";

import python from "../assets/python.png";

//   import { RiReactjsLine } from "react-icons/ri";
//   import { TbBrandNextjs } from "react-icons/tb";
//   import { SiMongodb } from "react-icons/si";
//   import { DiRedis } from "react-icons/di";
//   import { FaNodeJs } from "react-icons/fa";
//   import { BiLogoPostgresql } from "react-icons/bi";

export const LINKS = [
  { label: "Home", href: "#home" },
  // { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  first: "ARJUN",
  last: "SHARMA",
  greet: "Hello there!",
  location: "Toronto",
  school: "4th Year @ Toronto Metropolitan University",
  degree: "Computer Science Co-op Program (BSc)",
};

// Toronto Metropolitan University (formerly Ryerson), Toronto, ON Sep 2022 - April 2027 (Exp) Bachelor of Science (BSc): Computer Science Co-op Program.

export const EXP = [
  {
    role: "Software Developer",
    company: "Enviornment Climate Change Canada (ECCC)",
    period: "May 2025 - Present",
    description:
      "Developed and created digital permitting and regulatory services supporting 150,000+ annual wildlife-related transactions. Contributed throughout the full software development lifecycle across multiple Agile sprints, collaborating with cross-functional teams to deliver government services.",
    tech: ["Drupal", "PHP", "C#", "Azure DevOps", "ADLS", "DataVerse"],
    current: true,
  },
  {
    role: "Tech Director",
    company: "Google Developer Groups (GDG)",
    period: "October 2023 - August 2025",
    description:
      "Founding member and technical lead of Canada's largest GDG chapter, scaling from 5 to 40 organizers and engaging 6,000+ students. Led hackathons and technical events with MLH and Google Developer Experts, delivering hands-on workshops and panels.",
    tech: ["Google Tech", "Communication", "Leadership", "Event Planning"],
    current: false,
  },
  {
    role: "Software Developer",
    company: "Aisha Comfortable Co-living",
    period: "June 2024 - August 2024",
    description:
      "Worked across multiple production websites, building responsive features, refactoring existing code, and improving performance. Collaborated within a fast-paced startup team to deliver new functionality and ensure designs were accurately implemented across the platform.",
    tech: [
      "React",
      "JavaScript",
      "TypeScript",
      "Django",
      "Python",
      "Tailwind",
      "Material UI",
      "Figma",
      "Jira",
    ],
    current: false,
  },
  {
    role: "Project Designer",
    company: "Stratagem Arts Program",
    period: "May 2025 - Present",
    description:
      "Developed and pitched strategic business concepts to peers and industry professionals. Led research, ideation, and presentation development while collaborating in small, rotating teams to execute projects in a fast-paced, remote environment.",
    tech: ["Teamwork", "Design Thinking", "Presentation Skills", "Research"],
    current: false,
  },
];

export const PROJECTS = [
  {
    id: 8,
    name: "Skill Match",
    description:
      "An AI-powered platform that matches high school students with tailored volunteer opportunities based on their skills and interests.",
    image: p8,
    tech: [
      "SDLC",
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Python",
      "Supabase",
      "AI",
      "Cohere API",
      "JMeter",
      "BCrypt",
    ],
    github: "https://github.com/tahayarkhan/Skill-Match",
    docs: "https://publuu.com/flip-book/800255/1765983",
  },
  {
    id: 7,
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
      "Vercel",
    ],
    github: "https://github.com/arj5/portfolio",
  },
  {
    id: 6,
    name: "myTasks",
    description:
      "A full-stack powerful Task Manager with CRUD functionality for tasks, task sorting and filtering and success/fail pop-up messages.",
    image: p2,
    tech: ["Python", "Django", "SQL", "MySQL", "Bootstrap CSS", "HTML"],
    github: "https://github.com/arj5/myTasks",
  },
  {
    id: 5,
    name: "Quick Sum",
    description:
      "A Chrome extension, condenses lengthy content into easily digestible snippets, preserving key insights without overwhelming details, solving time/reading constraints.",
    image: p3,
    tech: ["JavaScript", "HTML", "CSS", "RapidAPI", "Chrome"],
    github: "https://github.com/arj5/quick-sum",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "Dynamic and responsive weather application offering real-time weather updates, geolocation-based data, unit conversion, a robust location search functionality and more.",
    image: p4,
    tech: ["JavaScript", "React", "Tailwind CSS", "OpenWeather API", "Netlify"],
    github: "https://github.com/arj5/weather-application",
    view: "https://smplweather.netlify.app/",
  },
  {
    id: 3,
    name: "Logo Rebrand",
    description:
      "High School logo rebrand prototype using Figma, featuring intuitive navigation, interactive UI components, a cohesive brand package with logo typography, color palettes, and merchandise designs for consistent and professional visual identity.",
    image: p5,
    tech: ["Figma", "Protoyping", "UI/UX"],
    view: "https://www.figma.com/proto/k5Esbfvhyx4kkITFVbUYBp/Arjun---rebrand-presentation?page-id=0%3A1&node-id=40-3&starting-point-node-id=40%3A3&scaling=scale-down&content-scaling=fixed&t=0IJflgCDwQic9Fx8-1",
  },
  {
    id: 2,
    name: "Music Store Player",
    description:
      "Terminal based Java music application with store management, playable song lyrics/audiobook text, content download/search/sorting, and playlist creation.",
    image: p6,
    tech: [
      "Java",
      "Inheritence",
      "Polymorphism",
      "Encapsulation",
      "Abstration",
    ],
    github: "https://github.com/arj5/MusicStorePlayer",
  },
  {
    id: 1,
    name: "Tic Tac Toe",
    description: "Simple UI/UX game of Tic-Tac-Toe",
    image: p7,
    tech: ["JavaScript", "HTML", "CSS", "Netlify"],
    github: "https://github.com/arj5/tic-tac-toe",
    view: "https://smpl-tictactoe.netlify.app/",
  },
];

// export const BIO = [

// ];

export const SKILLS = [
  {
    icon: python,
    name: "Python",
    xp: "5+ years",
  },
];
// {
//   icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
//   name: "React",
//   experience: "2+ years",
// },

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
    href: "http://www.linkedin.com/in/arj-shar",
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
