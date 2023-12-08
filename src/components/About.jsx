import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { jeff, lilogo } from "../assets";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
          <div 
      onClick={() => window.open('https://www.linkedin.com/in/jeff-erbert/', "_blank")}
      className="flex flex-wrap space-evenly items-center cursor-pointer mb-14 w-max">
            <img src={jeff} className="w-[15%] h-[15%] rounded-full mt-5 shadow-card green-pink-gradient p-[1px]" />
            <img src={lilogo} className="w-[35px] h-[30px] mt-5 ml-5" />
            <p className="mt-5 ml-1">Let's Connect.</p>
          </div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>A Quick</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 text-secondary text=[-17px] max-w-6xl leading-[30px]"
      >
        Equipped with a keyboard and the unwavering belief that "normal" is just
        a setting on a washing machine, I'm here to harness the power of the
        written word, web development, and my professional experience to help
        your organization thrive.
        <p className="mt-5">
          {" "}
          For the past 7+ years, I have piloted content strategy in both the
          agency setting — servicing clients with $1M+ ad spends — and for 
          award-winning corporate content marketing machines.
        </p>
        <p className="mt-5">
          In all cases, I've witnessed first-hand how great content and a
          supportive work culture created fertile grounds for brand recognition,
          revenue, and growth.{" "}
        </p>
        <p className="mt-5">
          Today, I'm focused mostly on coding to combine technical dev-know-how
          with my creative side to truly push the boundaries of what's possible,
          and to deliver a user experience that intrigues, inspires, and improves lives.
        </p>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
