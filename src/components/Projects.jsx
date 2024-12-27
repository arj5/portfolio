import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../info";

const Projects = () => {
  return (
    <>
      <section className="pt-20" id="projects">
        <h2 className="mb-24 text-center text-3xl lg:text-4xl">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden h-[350px] flex flex-col rounded-3xl"
            >
              <img
                src={project.image}
                alt={project.name}
                className=" h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="mb-2 text-xl">{project.name}</h3>
                <p className=" p-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex  items-center justify-center flex-wrap gap-2 mt-2 text-white">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300"
                >
                  <div className="flex items-center">
                    <span>View Project</span>
                    <MdArrowOutward />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
