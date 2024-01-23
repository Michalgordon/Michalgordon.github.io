import { PROJECTS } from "../constants";
import { ProjectCard } from "../components";
import { motion } from "framer-motion";

const MyProjects = () => {

  return (
    <div className="flex flex-col justify-center flex-grow laptop:px-4 py-10 laptop:px-20">
      <motion.h2
        className="hidden laptop:flex section-header laptop:relative laptop:-top-20"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, type: "spring", bounce: 0.5 }}
      >
        My Projects.
      </motion.h2>
      <motion.div
        className="flex scroll-smooth self-center w-full px-10 flex-row snap-x justify-start laptop:justify-center overflow-auto gap-6 laptop:px-8"
        initial={{ x: "-200%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        
        {PROJECTS.map((project, index) => (
          <div className="slide snap-center" id={`slide-${index}`}>
          <ProjectCard key={index} {...project} ></ProjectCard>
          </div>
        ))}
  
      </motion.div>
      <nav className="flex gap-4 self-center mt-4 laptop:hidden">
     {PROJECTS.map((key, index) => (
          <a className="w-4 h-4 rounded-full border-2 border-pewter-blue active:bg-pewter-blue"  href={`#slide-${index}`}></a>
        ))}
        </nav>
    </div>
  );
};


export default MyProjects;
