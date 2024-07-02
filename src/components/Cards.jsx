import React, { useState } from "react";

function Cards({ projects }) {
  const [expandedState, setExpandedState] = useState(new Array(projects.length).fill(false));

  const toggleDescription = (index) => {
    const newExpandedState = [...expandedState];
    newExpandedState[index] = !newExpandedState[index];
    setExpandedState(newExpandedState);
  };

  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className="mb-8 h-auto rounded-lg bg-transparent p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          <h2 className="font-poppins mb-2 cursor-pointer text-base lg:text-lg font-semibold text-gray-900">
            {project.name}
          </h2>
          <ul className="font-poppins text-sm lg:text-base text-gray-900 list-disc pl-4">
            {project.description.map((point, idx) => (
              <li key={idx} className={expandedState[index] ? "" : "truncate"}>
                {point}
              </li>
            ))}
          </ul>
          {project.description.length > 1 && (
            <span
              className="ml-1 cursor-pointer text-blue-800 text-sm font-bold"
              onClick={() => toggleDescription(index)}
            >
              {expandedState[index] ? "Less" : "More"}
            </span>
          )}
          <div className="mt-3 flex flex-wrap lg:mt-6">
            {project.technologies.map((tech, index) => (
              <p
                key={index}
                className="mb-2 mr-2 inline-block rounded-full bg-transparent px-3 py-1 text-sm lg:text-base font-semibold text-gray-900 shadow-md"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Cards;
