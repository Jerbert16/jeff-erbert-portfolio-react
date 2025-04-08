import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ProbeCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="flex relative w-full h-screen mx-auto justify-center">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Howdy, I'm Jeff
          </h1>
          <h2 className={`${styles.heroSubText} text-white-100`}>
            ...a <span className="text-[#915eff]">writer and developer</span>{" "}
            <br /> with a hunger to learn.
          </h2>
        </div>
      </div>
      <ProbeCanvas />
      <div className="flex absolute w-full max-w-7xl sm:bottom-10 bottom-32">
      <div className="w-1/2">
      </div>
      <div className="w-1/2 flex justify-center">
      <a href="#about">
          <div className="w-[30px] h-[55px] rounded-3xl border-4 border-secondary flex justify-center p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
