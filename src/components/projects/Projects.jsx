import React, { useRef, useEffect } from "react";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "../../assets";
import { motion, useInView } from "framer-motion";
import { GlobeAltIcon, CodeBracketIcon } from "@heroicons/react/24/solid";

function Projects({ setSelectedPage }) {
  const projects = [
    {
      name: "project1",
      img: project1,
    },
    {
      name: "project2",
      img: project2,
    },
    {
      name: "project3",
      img: project3,
    },
    {
      name: "project4",
      img: project4,
    },
    {
      name: "project5",
      img: project5,
    },
    {
      name: "project6",
      img: project6,
    },
  ];

  const myref = useRef();
  const isInView = useInView(myref, { once: false, amount: 0.5 });

  useEffect(() => {
    function sele() {
      if (isInView) {
        setSelectedPage("Projects");
      }
    }
    sele();
  }, [isInView]);

  const headingVariant = {
    hidden: {
      y: -20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imagesVariant = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      className="min-h-[100vh] py-16 md:py-32 border-b-2"
      id="Projects"
      ref={myref}
    >
      <motion.div>
        <div className="w-4/6 mx-auto">
          <motion.div
            className="pb-16"
            variants={headingVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 1 }}
          >
            <div className="text-red text-3xl md:text-5xl uppercase font-bold text-left md:text-center">
              Pro<span className="text-white">Jects</span>
            </div>
            <p className="mt-6 md:text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              omnis cumque ad quos est quae corrupti quo eligendi labore. Eius?
            </p>
          </motion.div>
          {/* PROJECTS ITSELVES */}
          <div className="flex flex-wrap gap-8 md:gap-4">
            {projects.map((item) => (
              <motion.div
                key={item.name}
                className="relative group overflow-hidden"
                variants={imagesVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
              >
                <img
                  src={item.img}
                  alt=""
                  className="group-hover:scale-105 duration-300"
                />
                <div className="hidden group-hover:grid opacity-80 bg-black absolute inset-0  place-items-center">
                  <div className="flex items-center border-2">
                    <button className="flex items-center gap-x-2 hover:bg-white hover:text-black duration-300 px-2 py-1 border-r-2">
                      Live <GlobeAltIcon className="h-6 w-6" />
                    </button>
                    <button className="flex item-center gap-x-2 hover:bg-white hover:text-black duration-300 px-2 py-1">
                      Code <CodeBracketIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
