import React from "react";
import Cards from "../components/Cards";
import { FaLocationArrow } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ProjectsList } from "../data/ProjectsList"; // Importing ProjectsList

function Project() {
  const navigate = useNavigate();

  return (
    <div className="mb-24 h-auto w-full sm:mb-0 md:h-screen">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold tracking-wider text-gray-900 lg:text-4xl transition-colors duration-300 hover:text-purple-700">
          Featured Projects
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
      </div>
      <div className="mx-auto mb-8 grid w-[90%] grid-cols-1 gap-6 sm:mb-8 md:grid-cols-2">
        <Cards projects={ProjectsList.projects} />
      </div>
      <div className="mx-auto w-[90%] text-center">
        <div className="inline-flex items-center justify-center">
          <button
            className="group flex items-center gap-2 text-gray-700 font-medium transition-all duration-300 hover:text-purple-600 focus:outline-none"
            onClick={() => {
              navigate("/projectlist");
            }}
          >
            <span className="text-base tracking-wide border-b border-transparent group-hover:border-purple-600 transition-all duration-300">View All Projects</span>
            <FaLocationArrow className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;

