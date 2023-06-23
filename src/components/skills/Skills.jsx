import React from "react";
import { skillsImage } from "../../assets";
import { motion } from "framer-motion";

function Skills({ setSelectedPage }) {
  const headingVariant = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skillsArray = [
    {
      id: 1,
      heading: "Experience",
      color: "blue",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non" +
        "rerum voluptate officiis esse exercitationem dicta dignissimos nobis reiciendis magnam repudiandae!",
    },
    {
      id: 2,
      heading: "Innovative",
      color: "red",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non rerum voluptate officiis esse exercitationem dicta dignissimos nobis reiciendis magnam repudiandae!",
    },
    {
      id: 3,
      heading: "Imaginative",
      color: "yellow",
      description:
        "  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non rerum voluptate officiis esse exercitationem dicta dignissimos nobis reiciendis magnam repudiandae!",
    },
  ];

  return (
    <section
      className="min-h-[100vh] flex items-center py-16 md:py-32 border-b-2"
      id="Skills"
    >
      <motion.div onViewportEnter={() => setSelectedPage("Skills")}>
        <div className="w-5/6 mx-auto flex flex-col">
          <div>
            {/*  */}
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <motion.div
                className="flex flex-col gap-4"
                variants={headingVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                <h1 className="text-3xl md:text-5xl font-bold">MY SKILLS</h1>
                <div className="w-full h-1 bg-gradient-rainblue"></div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                  est?
                </p>
              </motion.div>
              {/* IMG */}
              <div className="z-10">
                <div className="relative md:before:absolute md:before:w-full before:h-full md:before:border-2 before:z-[-1] before:-top-10 before:-left-10">
                  <img src={skillsImage} alt="" />
                </div>
              </div>
            </div>
            {/* Skills */}
            <div className="flex flex-col md:flex-row justify-between gap-8 pt-24">
              {skillsArray.map((item, index) => (
                <motion.div
                  className="md:w-1/3"
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    delay: 0.3 * index,
                    type: "tween",
                  }}
                >
                  <div className="z-10 relative h-32 md:h-40">
                    <div className="font-playfair font-bold">
                      <h4>0{item.id}</h4>
                      <h4>{item.heading}</h4>
                    </div>
                    <div
                      className={`${`bg-${item.color}`} w-3/4 h-32 md:h-40 right-0 absolute top-0 z-[-1]`}
                    ></div>
                  </div>
                  <p className="my-4">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
