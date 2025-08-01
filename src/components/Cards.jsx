import React, { useState } from "react";
import PropTypes from "prop-types";

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
          className="mb-8 h-auto rounded-xl bg-white/10 backdrop-blur-sm p-5 border border-white/20 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-white/20"
        >
          <h2 className="mb-3 cursor-pointer text-lg lg:text-xl font-bold text-gray-900 transition-colors duration-300 hover:text-purple-700">
            {project.name}
          </h2>
          <ul className="text-sm lg:text-base text-gray-800 list-none space-y-1 mb-4">
            {project.description.map((point, idx) => (
              <li key={idx} className={`relative pl-4 ${expandedState[index] ? "" : "truncate"}`}>
                <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                {point}
              </li>
            ))}
          </ul>
          {project.description.length > 1 && (
            <button
              className="mb-4 text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors duration-300"
              onClick={() => toggleDescription(index)}
            >
              {expandedState[index] ? "Show Less" : "Show More"}
            </button>
          )}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="inline-block rounded-full bg-white/30 backdrop-blur-sm px-3 py-1.5 text-sm font-medium text-gray-800 border border-white/40 transition-all duration-300 hover:scale-105 hover:bg-white/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
Cards.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.arrayOf(PropTypes.string).isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default Cards;

// import React, { useState } from "react";

// function Cards({ projects }) {
//   const [expandedState, setExpandedState] = useState(new Array(projects.length).fill(false));

//   const toggleDescription = (index) => {
//     const newExpandedState = [...expandedState];
//     newExpandedState[index] = !newExpandedState[index];
//     setExpandedState(newExpandedState);
//   };

//   return (
//     <>
//       {projects.map((project, index) => (
//         <div
//           key={index}
//           className="mb-8 h-auto rounded-lg bg-transparent p-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
//         >
//           <h2 className="font-poppins mb-2 cursor-pointer text-base lg:text-lg font-semibold text-gray-900">
//             {project.name}
//           </h2>
//           <ul className="font-poppins text-sm lg:text-base text-gray-900 list-disc pl-4">
//             {project.description.map((point, idx) => (
//               <li key={idx} className={expandedState[index] ? "" : "truncate"}>
//                 {point}
//               </li>
//             ))}
//           </ul>
//           {project.description.length > 1 && (
//             <span
//               className="ml-1 cursor-pointer text-blue-800 text-sm font-bold"
//               onClick={() => toggleDescription(index)}
//             >
//               {expandedState[index] ? "Less" : "More"}
//             </span>
//           )}
//           <div className="mt-3 flex flex-wrap lg:mt-6">
//             {project.technologies.map((tech, index) => (
//               <p
//                 key={index}
//                 className="mb-2 mr-2 inline-block rounded-full bg-transparent px-3 py-1 text-sm lg:text-base font-semibold text-gray-900 shadow-md"
//               >
//                 {tech}
//               </p>
//             ))}
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default Cards;
