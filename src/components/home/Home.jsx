import React from "react";
import {
  profileImg,
  facebook,
  twitter,
  instagram,
  linkedin,
} from "../../assets";
import { motion } from "framer-motion";

function Home() {
  const headingVariant = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const ImgVariant = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="min-h-[100vh] flex items-center border-b-2" id="Home">
      <div className="py-12 w-5/6 mx-auto flex flex-col gap-16 items-center md:flex-row">
        {/* IMG */}
        <div className="md:order-2 flex justify-center basis-3/5 z-30">
          <motion.div
            className="relative sm:before:absolute sm:before:w-full sm:before:h-full sm:before:border-2 sm:before:rounded-t-full before:border-blue before:z-[-1] before:-top-10 before:-left-10"
            variants={ImgVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img src={profileImg} alt="" className="" />
          </motion.div>
        </div>
        {/* HEADINGS */}
        <motion.div
          className="z-30 flex flex-col gap-8 text-white basis-2/5"
          variants={headingVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.5, once: true }}
        >
          <p className="text-white text-3xl md:text-5xl font-bold">
            Jane {""}
            <span className="relative before:content-brush before:absolute before:-top-24 before:-left-8 before:z-[-1] text-black">
              Esper
            </span>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic placeat
            nostrum sapiente maiores fugit reprehenderit dolorum quaerat
            delectus debitis ut?
          </p>
          <div className="flex">
            <button className="bg-gradient-rainblue px-7 py-3">
              Contact Me
            </button>
            <button className="px-3 buttonGradient pointer-events-none">
              Let's Talk
            </button>
          </div>
          <div className="flex gap-x-4">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
