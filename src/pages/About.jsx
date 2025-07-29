import React from "react";
import { UserData } from "../data/UserData";
import Marquee from "react-fast-marquee";
import { skillsData } from "../data/SkillsData";
import { skillsImage } from "../utils/SkillsImage";
import AboutImage from "../Assets/images/AboutImage.png";

function About() {
  const { about } = UserData;
  return (
    <div className="mb-24 h-auto w-full sm:mb-0 md:h-screen">
      <div className="mx-auto flex w-[90%] flex-col justify-between rounded-xl bg-white/10 backdrop-blur-sm p-6 shadow-xl border border-white/20 md:flex-row md:items-center transition-all duration-300 hover:shadow-2xl">
        <div className="flex w-full flex-col md:w-[55%] space-y-4">
          <div className="border-b border-purple-300/30 pb-3">
            <h2 className="text-3xl font-bold tracking-wide text-gray-900 transition-colors duration-300 hover:text-purple-700">
              About Me
            </h2>
          </div>
          <p className="text-base lg:text-lg leading-relaxed text-gray-800 transition-colors duration-300 hover:text-gray-900">{about}</p>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills</h3>
            <Marquee
              gradient={false}
              speed={150}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="right"
            >
              {skillsData.map((skill, id) => (
                <div
                  className="ml-4 flex h-26 w-26 flex-col items-center justify-center gap-2 rounded-lg bg-white/20 backdrop-blur-sm p-2 transition-all duration-300 hover:scale-110 hover:bg-white/30"
                  key={id}
                >
                  <img
                    className="h-[50px] w-[60px] bg-contain bg-no-repeat transition-transform duration-300 hover:scale-125"
                    src={skillsImage(skill)}
                    alt={skill}
                  />
                  <p className="text-sm font-medium text-gray-800">{skill}</p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <div className="mt-8 md:mt-0 md:w-[40%] flex justify-center">
          <img
            className="max-w[500px] mt-4 bg-cover bg-center bg-no-repeat md:w-[350px] lg:mt-0 lg:h-[350px] lg:w-[450px] rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            src={AboutImage}
            alt="About illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
