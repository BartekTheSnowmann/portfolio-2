import React from "react";
import Dot from "./Dot";

function Navigation({ selectedPage, setSelectedPage }) {
  const navLinks = [
    {
      name: "Home",
    },
    {
      name: "Skills",
    },
    {
      name: "Projects",
    },
    {
      name: "Testimonials",
    },
    {
      name: "Contact",
    },
  ];

  return (
    <div className="hidden md:block">
      <div className="fixed top-1/2 right-10 flex flex-col gap-4">
        {navLinks.map((item) => (
          <Dot
            key={`dot-${item.name}`}
            page={item.name}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        ))}
      </div>
    </div>
  );
}

export default Navigation;
