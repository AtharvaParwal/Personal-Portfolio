import React from "react";
import TypewriterText from "../components/TypewriterText";
import { UserData } from "../data/UserData";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from 'react-icons/si';

import programmer from "../Assets/images/programmer.png";
// import imagedeveloper from "../Assets/images/imagedeveloper.png";

function Home() {
  const socialMedia = UserData.socialMedia;

  const socialMediaIcons = {
    AiFillGithub: AiFillGithub,
    FaLinkedinIn: FaLinkedinIn,
    SiLeetcode:SiLeetcode, 
    SiCodechef: SiCodechef,
  };

  return (
    <div className="mb-28 h-auto w-full sm:mb-0 md:h-screen">
      <div className="mx-auto mt-40 flex w-[90%] flex-col items-center sm:flex-row lg:mt-32 lg:w-[80%] lg:justify-between">
        <div className="w-full transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-semibold leading-tight text-gray-900 lg:text-3xl transition-colors duration-300 hover:text-purple-700">
            Hello <span className="wave inline-block transition-transform duration-300 hover:scale-125">👋</span>
          </h2>
          <h2 className="pt-2 text-2xl font-semibold leading-tight text-gray-900 transition-colors duration-300 hover:text-blue-700">
            I am {UserData.name}
          </h2>
          <TypewriterText />

          <div className="mt-4 flex gap-8 lg:gap-0">
            {socialMedia.map((data, index) => {
              const IconComponent = socialMediaIcons[data.icon];
              return (
                <button
                  className="flex items-center justify-center rounded-lg border-none bg-transparent transition-all duration-300 hover:bg-white hover:bg-opacity-20 hover:opacity-80 hover:shadow-lg hover:scale-110 lg:h-12 lg:w-24"
                  key={index}
                  onClick={() => window.open(data.url)}
                >
                  <IconComponent className="icon transition-transform duration-300 hover:scale-125" />
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-20 lg:mt-12 transition-transform duration-500 hover:scale-105">
          <img
            className="max-w[500px] mt-4 bg-cover bg-center bg-no-repeat md:w-[350px] lg:mt-0 lg:h-[350px] lg:w-[550px] rounded-lg transition-all duration-300 hover:shadow-2xl"
            src={programmer}
            alt="Developer illustration"
            style={{ backgroundColor: '#c850c0 46%' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

// import React from "react";
// import TypewriterText from "../components/TypewriterText";
// import { UserData } from "../data/UserData";
// import {
//   AiFillGithub,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import { SiLeetcode, SiCodechef } from 'react-icons/si';

// import programmer from "../Assets/images/programmer.png";
// // import imagedeveloper from "../Assets/images/imagedeveloper.png";

// function Home() {
//   const socialMedia = UserData.socialMedia;

//   const socialMediaIcons = {
//     AiFillGithub: AiFillGithub,
//     FaLinkedinIn: FaLinkedinIn,
//     SiLeetcode:SiLeetcode, 
//     SiCodechef: SiCodechef,
//   };

//   return (
//     <div className="mb-28 h-auto w-full sm:mb-0 md:h-screen">
//       <div className="mx-auto mt-40 flex w-[90%] flex-col items-center sm:flex-row lg:mt-32 lg:w-[80%] lg:justify-between  ">
//         <div className="w-full">
//           <h2 className="text-2xl font-semibold leading-tight text-gray-900 lg:text-3xl">
//             Hello <span className="wave">👋</span>
//           </h2>
//           <h2 className="pt-2 text-2xl font-semibold leading-tight text-gray-900">
//             I am {UserData.name}
//           </h2>
//           <TypewriterText />

//           <div className="mt-4 flex gap-8 lg:gap-0">
//             {socialMedia.map((data, index) => {
//               const IconComponent = socialMediaIcons[data.icon];
//               return (
//                 <button
//                   className="flex items-center justify-center rounded-lg border-none bg-transparent hover:bg-white hover:bg-opacity-20 hover:opacity-80 hover:shadow-lg lg:h-12 lg:w-24"
//                   key={index}
//                   onClick={() => window.open(data.url)}
//                 >
//                   <IconComponent className="icon" />
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         <div className="mt-20 lg:mt-12">
//           <img
//             className="max-w[500px] mt-4 bg-cover bg-center bg-no-repeat md:w-[350px] lg:mt-0 lg:h-[350px] lg:w-[550px]"
//             src={programmer}
//             alt=""
//             style={{ backgroundColor: '#c850c0 46%' }}
//           />

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
