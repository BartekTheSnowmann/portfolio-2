import React, { useState, useEffect, useRef } from "react";
import { contactImg } from "../../assets";
import { useForm } from "react-hook-form";
import { useInView, motion } from "framer-motion";

function Contact({ setSelectedPage }) {
  const { register, control, handleSubmit, formState, trigger } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { errors } = formState;

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const myref = useRef();
  const isInView = useInView(myref, { once: false, amount: 0.5 });

  useEffect(() => {
    function sele() {
      if (isInView) {
        setSelectedPage("Contact");
      }
    }
    sele();
  }, [isInView]);

  const headingVariant = {
    hidden: {
      opacity: 0,
      x: 50,
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
    <section ref={myref} className="py-16 md:py-32 border-b-2" id="Contact">
      <div className="w-5/6 mx-auto">
        <motion.div
          className="ml-auto text-right md:w-1/4 uppercase text-3xl md:text-5xl font-bold"
          variants={headingVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="">Contact me</h1>
          <p className="mt-2">To get started</p>
          <div className="rounded-md bg-gradient-rainblue h-1 mt-4"></div>
        </motion.div>
        <div className="md:flex justify-between">
          {/* IMAGE */}
          <div className="mt-16">
            <img src={contactImg} alt="" />
          </div>
          {/* CONTACT */}
          <div className="mt-16 md:w-1/2">
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/0b7d9adb9598769ddea7824a888cc905"
              method="POST"
            >
              <div className="form-control">
                <input
                  type="text"
                  placeholder="NAME"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
                <p>{errors.name?.message}</p>
              </div>
              <div className="form-control my-4">
                <input
                  type="text"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                />
                <p>{errors.email?.message}</p>
              </div>
              <div className="form-control my-4">
                <textarea
                  type="text"
                  placeholder="MESSAGE"
                  cols={10}
                  rows={10}
                  {...register("message")}
                />
              </div>
              <button className="button__submit">Send a Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
