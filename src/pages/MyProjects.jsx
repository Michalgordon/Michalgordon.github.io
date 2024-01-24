import { PROJECTS } from "../constants";
import { ProjectCard } from "../components";
import { motion } from "framer-motion";
import React, {useEffect, useState, useRef} from "react";
const MyProjects = () => {
  
  const projectsElement = useRef(null);

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const observerOptions = {
    rootMargin: '0px',
    threshold: 1
}
  useEffect(()=>{
    let projectsClass = '.project';
    
     const observer = new IntersectionObserver(
      (projects) => {
        for (let project of projects) {
          if (project.isIntersecting) {
            setCurrentProjectIndex(project.target.id.replace(/\D/g, ""))
          }
        }
      },
      observerOptions
    );
    document.querySelectorAll(projectsClass).forEach((project) => {
      if (project) {
          observer.observe(project);
      }
  });

    // cleanup function
    return () => {
      document.querySelectorAll(projectsClass).forEach((project) => {
        if (project) {
            observer.unobserve(project);
        }
    });
    };
  
  });

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
        className="flex scroll-smooth self-center w-full px-10 flex-row snap-x snap-mandatory justify-start laptop:justify-center overflow-auto gap-6 laptop:px-8"
        initial={{ x: "-200%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        ref={projectsElement}
      >
        
        {PROJECTS.map((project, index) => (
          <div key={index}  className="project snap-center snap-always" id={`project-${index}`}>
          <ProjectCard {...project} ></ProjectCard>
          </div>
        ))}
  
      </motion.div>
      <nav className="flex gap-4 self-center mt-4 laptop:hidden">
        {[...PROJECTS.keys()].map((index) => (
          <span  className={`w-4 h-4 rounded-full border-2 border-pewter-blue ${currentProjectIndex == index? 'bg-pewter-blue' : ''}`} key={index}></span>
        ))}
        </nav>
    </div>
  );
};


export default MyProjects;
