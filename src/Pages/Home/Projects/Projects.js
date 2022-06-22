import React, { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {
  const [projects, setPojects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setPojects(data));
  }, []);
  return (
    <div>
      <h1
        className="text-2xl font-semibold text-white text-center 
       pb-5 pt-6 font-sans"
      >
        My Last 3 Projects
      </h1>
      <div className="grid grid-cols-1 md:p-10 gap-5 mx-10">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
