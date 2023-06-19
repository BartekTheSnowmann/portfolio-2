import React, { useEffect, useRef, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

function Navbar({ setSelectedPage, selectedPage }) {
  const navRef = useRef(null);

  const [isAtTheTop, setIsAtTheTop] = useState(false);

  useEffect(() => {
    function calculateYOffset() {
      if (window.pageYOffset > 100) {
        setIsAtTheTop(true);
      } else {
        setSelectedPage("Home");
        setIsAtTheTop(false);
      }
    }
    window.addEventListener("scroll", calculateYOffset);
    return () => window.removeEventListener("scroll", calculateYOffset);
  });

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="pt-20">
      <div
        className={`${
          isAtTheTop ? "bg-red" : ""
        } fixed z-40 w-full h-20 top-0 flex items-center py-4 transition-all duration-200 shadow-deep-blue`}
        ref={navRef}
      >
        <div className="w-5/6 mx-auto flex justify-between items-center">
          <div>
            <h4 className="font-playfair text-3xl font-bold">JE</h4>
          </div>
          <div>
            <ul className="hidden md:flex gap-x-4">
              {["Home", "Skills", "Projects", "Testimonials", "Contact"].map(
                (item) => (
                  <li
                    key={`link-${item}`}
                    className={selectedPage === item ? "text-yellow" : ""}
                  >
                    <a href={`#${item}`}>{item}</a>
                  </li>
                )
              )}
            </ul>
            <div
              className={`${
                openMenu ? "bg-none" : "bg-red"
              } md:hidden p-4 rounded-md relative transition-all duration-300`}
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              {openMenu ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* MOBILE MENU */}
      <div className="w-3/5 justify-end">
        <AnimatePresence>
          {openMenu && (
            <motion.div
              className="transition-all duration-300 w-1/3 md:hidden fixed right-0 z-40 bg-red shadow-md rounded-b-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ul className="flex flex-col items-center gap-y-4">
                {["Home", "Skills", "Projects", "Testimonials", " Contact"].map(
                  (item) => (
                    <li key={`link-${item}`} className="p-4">
                      <a href={`#${item}`}>{item}</a>
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
