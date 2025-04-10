import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { softwareProjects, writingSamples } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  icon,
  source_code_link,
}) => {
  return (
    <div onClick={() => window.open(source_code_link, "_blank")}
      
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-4 rounded-2xl sm:w-[300px] w-full flex flex-wrap cursor-pointer"
      >
        <div className="relative w-full h-[180px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div className="violet-gradient w-14 h-14 rounded-full flex justify-center items-center cursor-pointer">
              <img
                src={icon}
                alt={icon}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>A Few Samples Of</p>
        <h2 className={styles.sectionHeadText}>My Work:</h2>
      </div>
      <div className="w-full flex">
        <p
          className="mt-5 text-secondary text-[17px] max-w-6xl leading-[30px]"
        >
          Along with the site you're currently on — built using <span className="blue-text-gradient">React,</span> <span className="green-text-gradient">Tailwind CSS,</span> and <span className="pink-text-gradient">JavaScript</span> — the following projects showcase my
          experience as a professional writer and a developer. Here, you'll find
          links to some of my writing and links to my GitHub that I hope give a
          sneak peek at my skills and my curiosity.
        </p>
      </div>
      <h2 className="mt-20 mb-7 pl-1 text-[22px]">Software Development Projects:</h2>
      <div className="mt-5 flex flex-wrap gap-7 w-full justify-center">
        {softwareProjects.map((softwareProjects, index) => (
          <ProjectCard key={`softwareProjects-${index}`} index={index} {...softwareProjects} />
        ))}
      </div>
      <h2 className="mt-20 mb-7 pl-1 text-[22px]">Writing Samples:</h2>
      <div className="mt-5 flex flex-wrap gap-7 w-full justify-center">
        {writingSamples.map((writingSamples, index) => (
          <ProjectCard key={`writingSamples-${index}`} index={index} {...writingSamples} />
        ))}
      </div>
      <h2 className="mt-20 mb-7 pl-1 text-[18px] w-full flex justify-center">Hungry For More? Please Reach Out!</h2>
    </>
  );
};

export default SectionWrapper(Works, "work");
