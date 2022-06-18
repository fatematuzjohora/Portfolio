import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FeatureList from "../../../Components/ProjectsComponents/FeatureList";
import Gallery from "../../../Components/ProjectsComponents/Gallery";
import Technology from "../../../Components/ProjectsComponents/Technology";
import BackButton from "../../Share/BackButton";

const ProjectDetails = () => {
  const { _id } = useParams();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const project = projects?.find((project) => project?._id === +_id);
  // console.log(project);
  // const { FrontEnd } = usedTechnologies;
  return (
    <div className="p-14">
      <h1 className="text-xl font-serif font-semibold text-white text-center py-2 md:py-5">
        {project?.name}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 md:mx-40 gap-4">
        {project?.images.map((image) => (
          <Gallery key={image.index} image={image} />
        ))}
      </div>
      <div>
        <div className="py-2 md:py-5 md:flex md:justify-evenly">
          <div className="md:max-w-[50%]">
            <h1 className="text-lg uppercase p-2 border-t border-b border-l rounded-lg border-orange-300 max-w-sm mt-4 font-serif font-semibold text-white ">
              Website Features :
            </h1>
            {project?.features?.map((feature) => (
              <FeatureList key={feature.index} feature={feature} />
            ))}
          </div>
          <div className=" md:max-w-[50%]">
            <h1 className="text-lg uppercase p-2 border-t border-b border-l rounded-lg border-orange-300 max-w-sm mt-4 font-serif font-semibold text-white ">
              Used Technologies :
            </h1>
            {project?.usedTechnologies.map((technology) => (
              <Technology key={technology.index} technology={technology} />
            ))}

            <div className="max-w-full bg-green-500 text-white flex justify-evenly my-5 md:my-10  rounded-md ">
              <a
                className=" hover:bg-green-700 w-full p-2 rounded-l-md  text-center bg-cover"
                href={project?.liveUrl}
                target="blank"
              >
                Live Site
              </a>
              <a
                className=" hover:bg-green-700 w-full p-2 text-center bg-cover"
                href={project?.clientCode}
                target="blank"
              >
                Client Code
              </a>

              {project?.serverCode && (
                <a
                  className=" hover:bg-green-700 w-full p-2 rounded-r-md  text-center bg-cover"
                  href={project?.serverCode}
                  target="blank"
                >
                  Server Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <BackButton />
    </div>
  );
};

export default ProjectDetails;
