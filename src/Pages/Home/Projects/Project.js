import React from "react";
import { useNavigate } from "react-router-dom";

const Project = ({ project }) => {
  const { _id, name, img, description } = project;
  const navigate = useNavigate();
  const handleDetails = (_id) => {
    navigate(`/projectDetails/${_id}`);
  };

  return (
    <div class="flex justify-center">
      <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img
          class=" w-full h-96 p-4 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={img}
          alt=""
        />
        <div class="p-6 flex flex-col justify-start">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{name}</h5>
          <p class="text-gray-700 text-base mb-4">{description}</p>
          <button
            onClick={() => handleDetails(_id)}
            type="button"
            class="inline-block font-semibold px-6 py-2.5 bg-blue-400 text-white text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
