import React, { useEffect, useRef } from "react";
import { person1, person2, person3 } from "../../assets";
import { motion, useInView } from "framer-motion";

function Testimonials({ setSelectedPage }) {
  const testimonials = [
    {
      name: "testimonial1",
      img: person1,
      color: "blue",
      description:
        "a auctor pharetra hendrerit mattis a,ery etiam interdum platea.",
    },
    {
      name: "testimonial2",
      img: person2,
      color: "red",
      description:
        "a auctor pharetra hendrerit mattis a,ery etiam interdum platea.",
    },
    {
      name: "testimonial3",
      img: person3,
      color: "yellow",
      description:
        "a auctor pharetra hendrerit mattis a,ery etiam interdum platea.",
    },
  ];

  const myref = useRef();
  const isInView = useInView(myref, { once: false, amount: 0.5 });

  useEffect(() => {
    function sele() {
      if (isInView) {
        setSelectedPage("Testimonials");
      }
    }
    sele();
  }, [isInView]);

  const headingVariant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      ref={myref}
      className="py-16 md:py-32 border-b-2"
      id="Testimonials"
    >
      <div className="w-5/6 mx-auto">
        <motion.div
          variants={headingVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold">Testimonials</h1>
          <div className="w-80 h-1 bg-gradient-rainblue rounded-md mt-4 mb-8"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            reprehenderit non! Consectetur aperiam a neque ipsam in itaque vero
            facere.
          </p>
        </motion.div>
        {/* TESTIMONIALS BOXES */}
        <div className="flex flex-col md:flex-row flex-wrap gap-12 items-center justify-between my-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              className="mt-32"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6 * index, duration: 0.6 }}
            >
              <div
                className={`relative flex flex-col justify-around items-center p-4 h-60 w-80 bg-${item.color}`}
              >
                <div>
                  <img
                    src={item.img}
                    alt=""
                    className="absolute inset-x-[50px] -top-[120px]"
                  />
                </div>
                <div>
                  <p>{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
