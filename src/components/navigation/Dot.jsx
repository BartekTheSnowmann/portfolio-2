import React from "react";
import { motion } from "framer-motion";

function Dot({ page, selectedPage }) {
  console.log(selectedPage);
  return (
    <div
      className={`${
        page === selectedPage ? "border-yellow" : "border-white"
      } relative rounded-full border-2 w-5 h-5`}
    >
      {page === selectedPage && (
        <div className="absolute w-1/2 h-1/2 bg-yellow rounded-full left-1 top-1"></div>
      )}
    </div>
  );
}

export default Dot;
